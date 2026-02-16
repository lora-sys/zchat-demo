'use client';

import { useChat } from 'ai/react';
import { forwardRef, useImperativeHandle } from 'react';

import { ChatHeader } from '@/components/chat-header';
import { Messages } from './messages';
import { MultimodalInput } from './multimodal-input';

// 使用 forwardRef 包装组件，暴露 sendMessage 方法给父组件
export const Chat = forwardRef<
  {
    sendMessage: (content: string) => void;
  },
  {
    id: string;
    selectedModelId: string;
  }
>(({ id, selectedModelId }, ref) => {
  const {
    messages,
    setMessages,
    handleSubmit,
    input,
    setInput,
    append,
    isLoading,
    stop,
    reload,
  } = useChat({
    id,
    body: { id, modelId: selectedModelId },
  });

  // 暴露 sendMessage 方法给父组件调用
  useImperativeHandle(ref, () => ({
    sendMessage: (content: string) => {
      append({
        role: 'user',
        content: content,
      });
    },
  }));

  return (
    <div className="flex flex-col h-full overflow-hidden bg-background">
      <div className="flex-shrink-0">
        <ChatHeader selectedModelId={selectedModelId} />
      </div>

      <div className="flex-1 min-h-0 overflow-hidden">
        <Messages
          chatId={id}
          isLoading={isLoading}
          messages={messages}
          setMessages={setMessages}
          reload={reload}
        />
      </div>

      <form className="flex mx-auto px-4 bg-background pb-4 md:pb-6 gap-2 w-full md:max-w-3xl">
        <MultimodalInput
          chatId={id}
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          stop={stop}
          messages={messages}
          setMessages={setMessages}
          append={append}
        />
      </form>
    </div>
  );
});

// 添加 displayName 方便调试
Chat.displayName = 'Chat';
