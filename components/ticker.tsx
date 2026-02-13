'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const ITEMS = [
  { id: 'debt', label: '美债违约模型', value: '85%', status: 'RISK' },
  { id: 'fiat', label: '法币贬值概率', value: 'CRITICAL', status: 'CRITICAL' },
  { id: 'aa', label: 'AA 节点状态', value: 'ACTIVE', status: 'ACTIVE' },
  { id: 'zk', label: '隐私证明生成', value: '12ms', status: 'OK' },
];

interface TickerProps {
  onAction: (val: string) => void;
}

export default function Ticker({ onAction }: TickerProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="w-full max-w-[100vw] bg-zinc-950 border-b border-zinc-800 py-6 overflow-hidden flex whitespace-nowrap relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="实时数据看板"
    >
      {/* 扫描线效果 */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,0,0.02)_50%)] bg-[length:100%_4px] pointer-events-none" />

      {/* LIVE 标识 */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center gap-2 bg-zinc-950/80 px-2 py-1 rounded border border-zinc-800">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
        </span>
        <span className="text-[10px] font-mono text-red-500">LIVE</span>
      </div>

      <motion.div
        className="flex space-x-8 px-6 pl-24"
        style={{ width: 'max-content' }}
        animate={{
          x: isPaused ? undefined : ['0%', '-50%'],
        }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'loop',
        }}
      >
        {[...ITEMS, ...ITEMS].map((item, index) => (
          <button
            key={`${item.id}-${index}`}
            type="button"
            onClick={() =>
              onAction(`${item.label}: ${item.value} ${item.status}`)
            }
            className="text-sm font-mono text-green-600 hover:text-green-400 transition-all duration-200 tracking-tighter hover:scale-105 flex items-center gap-2 group whitespace-nowrap"
          >
            <span className="text-zinc-500">{item.label}:</span>
            <span className="text-green-400 font-bold">{item.value}</span>
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded ${
                item.status === 'CRITICAL'
                  ? 'bg-red-500/20 text-red-400'
                  : item.status === 'RISK'
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : item.status === 'ACTIVE'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-zinc-500/20 text-zinc-400'
              }`}
            >
              {item.status}
            </span>
            <span className="text-[8px] text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity">
              DEMO
            </span>
          </button>
        ))}
      </motion.div>
    </div>
  );
}
