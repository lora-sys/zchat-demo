"use client";

import { motion } from "framer-motion";
import { Bot, Shield, Zap, Users } from "lucide-react";
import { MockDataBadge } from "../mock-data-badge";

interface AAgentCardProps {
  status: "loading" | "result";
  result?: {
    agentAddress: string;
    status: string;
    capabilities: string[];
    network: string;
    deploymentCost: string;
  };
}

// 设计要点：
// - 加载时：显示 "Initializing Account Abstraction Agent..." + 进度条动画
// - 完成时：显示代理地址（缩短显示 0x1234...5678）
// - 网络徽章：Base / Arbitrum 标签
// - 能力列表：gasless_tx, social_recovery 等带图标
// - 配色：深色背景 + 绿色点缀（代表"就绪"）

const capabilityIcons: Record<string, React.ReactNode> = {
  gasless_tx: <Zap className="w-4 h-4" />,
  social_recovery: <Users className="w-4 h-4" />,
  auto_hedge: <Shield className="w-4 h-4" />,
};

export function AAgentCard({ status, result }: AAgentCardProps) {
  if (status === "loading") {
    return (
      <div className="bg-slate-900 border border-green-500/30 rounded-lg p-6 max-w-md">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Bot className="w-6 h-6 text-green-400" />
          </motion.div>
          <span className="text-green-400 font-mono text-sm">
            Initializing AA Agent...
          </span>
        </div>
        <div className="space-y-2">
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-green-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </div>
          <div className="font-mono text-xs text-slate-500">
            {`> Deploying Account Abstraction contract...`}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-slate-900 border border-green-500/50 rounded-lg p-6 max-w-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-green-400 font-mono text-sm uppercase tracking-wider">
            AA Agent Ready
          </span>
        </div>
        <span className="text-xs text-slate-500 font-mono">
          {result?.network}
        </span>
      </div>

      <div className="space-y-4">
        <div className="bg-slate-800/50 rounded p-3 font-mono text-sm">
          <span className="text-slate-500">Address:</span>
          <span className="text-green-400 ml-2">
            {result?.agentAddress.slice(0, 6)}...
            {result?.agentAddress.slice(-4)}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {result?.capabilities &&
            result?.capabilities.map((cap) => (
              <div
                key={cap}
                className="flex items-center gap-1.5 bg-slate-800/50 rounded px-2 py-1.5 text-xs"
              >
                <span className="text-green-400">{capabilityIcons[cap]}</span>
                <span className="text-slate-300 capitalize">
                  {cap.replace("_", " ")}
                </span>
              </div>
            ))}
        </div>

        <div className="text-xs text-slate-500 font-mono">
          Deployment Cost: {result?.deploymentCost}
          <MockDataBadge/>
        </div>
      </div>
       
    </div>
  );
}
