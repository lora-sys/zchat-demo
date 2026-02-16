import {
  type Message,
  convertToCoreMessages,
  createDataStreamResponse,
  streamText,
} from 'ai';

import { customModel } from '@/lib/ai';
import { models } from '@/lib/ai/models';
import { regularPrompt } from '@/lib/ai/prompts';
import { callAAAgent } from '@/lib/ai/tools/call-aa-agent';
import { scanChainAssets } from '@/lib/ai/tools/scan-chain-assets';
import { simulateZKProof } from '@/lib/ai/tools/simulate-zk-proof';
import { estimateFiatRisk } from '@/lib/ai/tools/estimate-fiat-risk';
import { deployVaultContract } from '@/lib/ai/tools/deploy-vault-contract';
import { generateUUID, getMostRecentUserMessage } from '@/lib/utils';
import { compressContext } from '@/lib/ai/utils/context-manager';
import { truthOracle } from '@/lib/ai/tools/truth-oracle';
export const maxDuration = 60;

type AllowedTools =
  | 'callAAAgent'
  | 'scanChainAssets'
  | 'simulateZKProof'
  | 'estimateFiatRisk'
  | 'deployVaultContract'
  | 'truthOracle';

// TODO: SEARCH TOOL
const allTools: AllowedTools[] = [
  'callAAAgent',
  'scanChainAssets',
  'simulateZKProof',
  'estimateFiatRisk',
  'deployVaultContract',
  'truthOracle',
];
export async function POST(request: Request) {
  const {
    id,
    messages,
    modelId,
  }: { id: string; messages: Array<Message>; modelId: string } =
    await request.json();

  const model = models.find((model) => model.id === modelId);

  if (!model) {
    return new Response('Model not found', { status: 404 });
  }

  const coreMessages = convertToCoreMessages(compressContext(messages));
  const userMessage = getMostRecentUserMessage(coreMessages);

  if (!userMessage) {
    return new Response('No user message found', { status: 400 });
  }

  const userMessageId = generateUUID();

  return createDataStreamResponse({
    execute: (dataStream) => {
      dataStream.writeData({
        type: 'user-message-id',
        content: userMessageId,
      });

      const result = streamText({
        model: customModel(model.apiIdentifier),
        system: regularPrompt,
        messages: coreMessages,
        maxSteps: 5,
        experimental_activeTools: allTools,
        tools: {
          callAAAgent,
          scanChainAssets,
          simulateZKProof,
          estimateFiatRisk,
          deployVaultContract,
          truthOracle,
        },
        experimental_telemetry: {
          isEnabled: true,
          functionId: 'stream-text',
        },
      });

      result.mergeIntoDataStream(dataStream);
    },
  });
}
