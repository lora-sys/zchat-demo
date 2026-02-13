"use client";

import { useState, useEffect } from "react";
import { useChat } from "ai/react";
import LoadingScreen from "./loading-screen";
import Ticker from "./ticker";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientWrapper() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);

  const { messages, append, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
    maxSteps: 5, // 开启你刚学会的多步逻辑
  });

  // 当加载完成，且尚未打招呼时，自动发送一条指令让 AI 开场
  useEffect(() => {
    if (isLoaded && !hasGreeted && messages.length === 0) {
      append({
        role: "user",
        content: "系统已就绪，请向主权个人发送首份风险简报。",
      });
      setHasGreeted(true);
    }
  }, [isLoaded, hasGreeted]);

  return (
    <div className="min-h-screen bg-black text-zinc-300 font-mono">
      <AnimatePresence>
        {!isLoaded ? (
          <LoadingScreen onFinished={() => setIsLoaded(true)} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col h-screen"
          >
            {/* 1. 看板：点击后触发 append */}
            <Ticker onAction={(info) => append({ role: 'user', content: `深度解读该动态: ${info}` })} />

            {/* 2. 聊天区域 (这里你可以替换成你模板的 UI) */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg ${m.role === 'user' ? 'bg-green-900/20 border border-green-500/30' : 'bg-zinc-900'}`}>
                    {m.content}
                  </div>
                </div>
              ))}
            </div>

            {/* 3. 输入框 */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-zinc-900">
              <input
                value={input}
                onChange={handleInputChange}
                className="w-full bg-transparent border-none focus:ring-0 text-green-500 placeholder:text-zinc-800"
                placeholder="等待进一步指令..."
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}