import { cookies } from 'next/headers';


import { DEFAULT_MODEL_NAME, models } from '@/lib/ai/models';
import { generateId } from 'ai';
import { ChatWrapper } from '@/components/chat-wrapper';

export default async function Page() {
  const id = generateId();

  const cookieStore = await cookies();
  const modelIdFromCookie = cookieStore.get('model-id')?.value;
  const selectedModelId =
    models.find((model) => model.id === modelIdFromCookie)?.id ||
    DEFAULT_MODEL_NAME;

  return (
    <>
      <ChatWrapper id={id} selectedModelId={selectedModelId} />
    </>
  );
}
