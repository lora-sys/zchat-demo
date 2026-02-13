"use client";
import { motion } from "framer-motion";
import { AlertOctagon, TrendingDown, PiggyBank, Scale } from "lucide-react";
import { MockDataBadge } from "../mock-data-badge";
interface FiatRiskCardProps {
  status: "loading" | "result";
  result?: {
    currency: string;
    defaultProbability: number;
    inflationRate: number;
    debtToGDP: number;
    riskLevel: "critical" | "high" | "medium" | "low";
    purchasingPowerLoss: string;
    hedgeSuggestion: string;
  };
}
const riskConfig = {
  critical: { color: "red", icon: AlertOctagon, pulse: true },
  high: { color: "orange", icon: TrendingDown, pulse: false },
  medium: { color: "yellow", icon: TrendingDown, pulse: false },
  low: { color: "green", icon: PiggyBank, pulse: false },
};
export function FiatRiskCard({ status, result }: FiatRiskCardProps) {
  if (status === "loading") {
    return (
      <div className="bg-slate-900 border border-red-500/30 rounded-lg p-6 max-w-md">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Scale className="w-6 h-6 text-red-400" />
          </motion.div>
          <span className="text-red-400 font-mono text-sm">
            Calculating Sovereign Risk...
          </span>
        </div>

        <div className="space-y-3">
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-red-500"
              initial={{ width: "0%" }}
              animate={{ width: ["0%", "50%", "30%", "60%"] }}
              transition={{ duration: 3, times: [0, 0.3, 0.6, 1] }}
            />
          </div>
          <div className="font-mono text-xs text-slate-500">
            Analyzing {result?.currency || "USD"} debt-to-GDP ratios...
          </div>
        </div>
      </div>
    );
  }
  const config = riskConfig[result?.riskLevel || "medium"];
  const Icon = config.icon;
  const isCritical = result?.riskLevel === "critical";
  return (
    <motion.div
      initial={{ borderColor: "rgba(239, 68, 68, 0.3)" }}
      animate={
        isCritical
          ? {
              borderColor: [
                "rgba(239, 68, 68, 0.3)",
                "rgba(239, 68, 68, 1)",
                "rgba(239, 68, 68, 0.3)",
              ],
            }
          : {}
      }
      transition={{ duration: 2, repeat: Infinity }}
      className={`bg-slate-900 border-2 ${isCritical ? "border-red-500" : "border-orange-500/50"} rounded-lg p-6 max-w-md`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg bg-${config.color}-500/20`}>
            <Icon className={`w-6 h-6 text-${config.color}-400`} />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">
              {result?.currency}
            </div>
            <div
              className={`text-xs uppercase tracking-wider text-${config.color}-400`}
            >
              {result?.riskLevel} RISK
            </div>
          </div>
        </div>

        <div className="text-right">
          <div className={`text-3xl font-bold text-${config.color}-400`}>
            {result?.defaultProbability}%
          </div>
          <div className="text-xs text-slate-500">Default Probability</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-800/50 rounded-lg p-3">
          <div className="text-xs text-slate-500 mb-1">Inflation Rate</div>
          <div className="text-xl font-bold text-orange-400">
            {result?.inflationRate}%
          </div>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-3">
          <div className="text-xs text-slate-500 mb-1">Debt/GDP</div>
          <div className="text-xl font-bold text-red-400">
            {result?.debtToGDP}%
          </div>
        </div>
      </div>
      <div className="bg-red-950/20 border border-red-500/20 rounded-lg p-4 mb-4">
        <div className="text-xs text-red-400 mb-1">
          10-Year Purchasing Power Loss
        </div>
        <div className="text-2xl font-bold text-red-300">
          {result?.purchasingPowerLoss}
        </div>
      </div>
      <div className="flex items-start gap-2 bg-slate-800/50 rounded p-3">
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2" />
        <span className="text-sm text-slate-300">
          {result?.hedgeSuggestion}
        </span>
        <MockDataBadge />
      </div>
    </motion.div>
  );
}
