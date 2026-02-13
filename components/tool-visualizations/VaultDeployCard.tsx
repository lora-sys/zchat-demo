"use client";
import { motion } from "framer-motion";
import { Box, Check, Copy, ExternalLink, Shield, Sparkles } from "lucide-react";
import { useState } from "react";
import { MockDataBadge } from "../mock-data-badge";
interface VaultDeployCardProps {
  status: "loading" | "result";
  result?: {
    contractAddress: string;
    deploymentTx: string;
    vaultType: string;
    gasUsed: string;
    sovereigntyLevel: string;
    features: string[];
    securityAudit: string;
  };
}
const steps = [
  { label: "Compile", icon: Box },
  { label: "Deploy", icon: Box },
  { label: "Verify", icon: Shield },
  { label: "Ready", icon: Sparkles },
];
export function VaultDeployCard({ status, result }: VaultDeployCardProps) {
  const [copied, setCopied] = useState(false);
  const copyAddress = () => {
    if (result?.contractAddress) {
      navigator.clipboard.writeText(result.contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  if (status === "loading") {
    return (
      <div className="bg-slate-900 border border-amber-500/30 rounded-lg p-6 max-w-md">
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Box className="w-6 h-6 text-amber-400" />
          </motion.div>
          <span className="text-amber-400 font-mono text-sm">
            Deploying Sovereign Vault...
          </span>
        </div>
        <div className="flex justify-between mb-6">
          {steps.map((step, idx) => (
            <div key={step.label} className="flex flex-col items-center">
              <motion.div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  idx < 2 ? "bg-amber-500 border-amber-500" : "border-slate-700"
                }`}
                animate={
                  idx === 2
                    ? { borderColor: ["#f59e0b", "#374151", "#f59e0b"] }
                    : {}
                }
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <step.icon
                  className={`w-4 h-4 ${idx < 2 ? "text-white" : "text-slate-600"}`}
                />
              </motion.div>
              <span
                className={`text-xs mt-2 ${idx < 2 ? "text-amber-400" : "text-slate-600"}`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-slate-500">
            <span>Gas Estimate:</span>
            <span className="text-amber-400">
              {result?.gasUsed || "0.005 ETH"}
            </span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-amber-500"
              initial={{ width: "0%" }}
              animate={{ width: ["0%", "30%", "60%", "85%"] }}
              transition={{ duration: 4, times: [0, 0.3, 0.6, 0.9] }}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <motion.div
      initial={{ boxShadow: "0 0 0 rgba(245, 158, 11, 0)" }}
      animate={{
        boxShadow: [
          "0 0 20px rgba(245, 158, 11, 0.3)",
          "0 0 40px rgba(245, 158, 11, 0.1)",
          "0 0 20px rgba(245, 158, 11, 0.3)",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity }}
      className="bg-slate-900 border-2 border-amber-500/50 rounded-lg p-6 max-w-md"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          <span className="text-amber-400 font-mono text-sm uppercase">
            Vault Deployed
          </span>
        </div>
        <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded border border-amber-500/30">
          {result?.sovereigntyLevel} Sovereignty
        </span>
      </div>
      <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
        <div className="text-xs text-slate-500 mb-2 flex items-center justify-between">
          Contract Address
          <button
            onClick={copyAddress}
            className="text-amber-400 hover:text-amber-300 transition-colors"
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
        <div className="font-mono text-sm text-amber-300 break-all">
          {result?.contractAddress}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-slate-800/30 rounded p-3">
          <div className="text-xs text-slate-500 mb-1">Gas Used</div>
          <div className="text-lg font-bold text-white">{result?.gasUsed}</div>
        </div>
        <div className="bg-slate-800/30 rounded p-3">
          <div className="text-xs text-slate-500 mb-1">Network</div>
          <div className="text-lg font-bold text-white">Base</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {result?.features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-1 bg-green-950/30 border border-green-500/30 rounded px-2 py-1"
          >
            <Check className="w-3 h-3 text-green-400" />
            <span className="text-xs text-green-300 capitalize">
              {feature.replace("_", " ")}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Shield className="w-4 h-4 text-green-400" />
          {result?.securityAudit}
        </div>
        <a
          href={`https://basescan.org/tx/${result?.deploymentTx}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 transition-colors"
        >
          View Transaction
          <ExternalLink className="w-3 h-3" />
        </a>
        <MockDataBadge />
      </div>
    </motion.div>
  );
}
