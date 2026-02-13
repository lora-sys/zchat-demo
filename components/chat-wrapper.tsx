"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./loading-screen";
import Ticker from "./ticker";
import { Chat } from "./chat";

interface ChatWrapperProps {
  id: string;
  selectedModelId: string;
}

export function ChatWrapper({ id, selectedModelId }: ChatWrapperProps) {
  // 创建 ref 来引用 Chat 组件
  const chatRef = useRef<{ sendMessage: (content: string) => void }>(null);
  const [hasGreeted, setHasGreeted] = useState(false);
  // 检查是否首次访问
  const [hasVisited, setHasVisited] = useState<boolean | null>(null);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // 客户端检查 localStorage
    const visited = localStorage.getItem("zchat-visited");
    setHasVisited(!!visited);

    if (visited) {
      // 已经访问过，跳过 loading
      setShowLoading(false);
    }
  }, []);

  useEffect(() => {
    // 当 LoadingScreen 完成（showLoading 变为 false）
    // 且是首次访问（!hasVisited）
    // 且还没问候过（!hasGreeted）
    if (!showLoading && !hasVisited && !hasGreeted) {
      setTimeout(() => {
        chatRef.current?.sendMessage("系统已就绪...");
        setHasGreeted(true);
      }, 500);
    }
  }, [showLoading, hasVisited, hasGreeted]);

  const handleLoadingFinished = () => {
    setShowLoading(false);
    // 标记已访问
    localStorage.setItem("zchat-visited", "true");
  };

  // 直接调用 Chat 组件的 sendMessage 方法
  const handleTickerAction = (text: string) => {
    chatRef.current?.sendMessage(`深度解读该动态: ${text}`);
  };

  // 服务端渲染时显示空状态，避免 hydration mismatch
  if (hasVisited === null) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <div className="flex flex-col h-screen bg-black">
      <AnimatePresence>
        {showLoading && !hasVisited && (
          <LoadingScreen onFinished={handleLoadingFinished} />
        )}
      </AnimatePresence>

      {/* Ticker 在 Chat 上方 */}
      {!showLoading && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Ticker onAction={handleTickerAction} />
        </motion.div>
      )}

      {/* Chat 组件 */}
      {!showLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex-1 min-h-0 h-full overflow-hidden"
        >
          <Chat
            ref={chatRef} // 传递 ref
            key={id}
            id={id}
            selectedModelId={selectedModelId}
          />
        </motion.div>
      )}
    </div>
  );
}
