"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sequences = [
  "正在连接真相预言机 (Truth Oracle)...",
  "正在同步全球 35 万亿美债风险监控节点...",
  "正在初始化隐私护盾 (zk-SNARKs)...",
  "正在唤醒您的金融教练 ZChat...",
];

export default function LoadingScreen({ onFinished }: { onFinished: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < sequences.length) {
      const timer = setTimeout(() => setIndex(prev => prev + 1), 1800);
      return () => clearTimeout(timer);
    } else {
      const hideTimer = setTimeout(onFinished, 600);
      return () => clearTimeout(hideTimer);
    }
  }, [index, onFinished]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-green-500 font-mono text-lg md:text-2xl text-center px-6"
        >
          {sequences[index] || "系统握手成功..."}
        </motion.div>
      </AnimatePresence>
      <div className="mt-8 h-1 w-48 bg-zinc-900 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-green-500"
          animate={{ x: [-192, 192] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "linear" }}
        />
      </div>
    </div>
  );
}