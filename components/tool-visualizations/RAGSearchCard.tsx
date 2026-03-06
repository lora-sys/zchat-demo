'use client';

import { motion } from 'framer-motion';

interface RAGSearchResult {
  success: boolean;
  query: string;
  total?: number;
  error?: string;
}

interface RAGSearchCardProps {
  status: 'loading' | 'result';
  result?: RAGSearchResult;
}

export function RAGSearchCard({ status, result }: RAGSearchCardProps) {
  // 加载状态
  if (status === 'loading') {
    return (
      <div className="bg-slate-900/50 border border-cyan-500/20 rounded-lg px-4 py-3 max-w-md">
        <div className="flex items-center gap-3">
          <motion.div
            className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
          />
          <span className="text-cyan-400/80 text-sm font-mono">
            正在搜索知识库...
          </span>
        </div>
      </div>
    );
  }

  // 结果状态不显示，让 LLM 直接输出
  return null;
}
