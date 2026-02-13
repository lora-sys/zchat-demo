import { openai } from '@ai-sdk/openai';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { customMiddleware } from './custom-middleware';

const iflow= createOpenAI({
apiKey : process.env.IFLOW_API_KEY,
baseURL: 'https://apis.iflow.cn/v1'
})


export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: iflow(apiIdentifier),
    middleware: customMiddleware,
  });
};

export const imageGenerationModel = openai.image('dall-e-3');
