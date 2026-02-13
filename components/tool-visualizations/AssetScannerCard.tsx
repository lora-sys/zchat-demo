'use client';
import { motion } from 'framer-motion';
import { Radar, AlertTriangle } from 'lucide-react';
import { MockDataBadge } from '../mock-data-badge';
interface AssetScannerCardProps {
  status: 'loading' | 'result';
  result?: {
    assets: Array<{
      chain: string;
      token: string;
      balance: string;
      usdValue: number;
      risk: string;
    }>;
    totalValue: number;
    riskScore: number;
    fiatExposure: number;
    recommendation: string;
  };
}
const chainColors: Record<string, string> = {
  ethereum: 'bg-blue-500',
  arbitrum: 'bg-indigo-500',
  base: 'bg-cyan-500',
  optimism: 'bg-red-500',
  solana: 'bg-purple-500',
};
export function AssetScannerCard({ status, result }: AssetScannerCardProps) {
  if (status === 'loading') {
    return (
      <div className="bg-slate-900 border border-blue-500/30 rounded-lg p-6 max-w-lg">
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          >
            <Radar className="w-6 h-6 text-blue-400" />
          </motion.div>
          <span className="text-blue-400 font-mono text-sm">
            Scanning Chain Assets...
          </span>
        </div>

        <div className="relative h-32 bg-slate-800/50 rounded-lg overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-blue-400/50 font-mono text-xs">
              Analyzing Ethereum, Arbitrum, Base...
            </span>
          </div>
        </div>
      </div>
    );
  }
  const riskColor =
    result?.riskScore && result.riskScore > 75
      ? 'text-red-400'
      : 'text-yellow-400';
  return (
    <div className="bg-slate-900 border border-blue-500/50 rounded-lg p-6 max-w-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-blue-400 font-mono text-sm uppercase tracking-wider flex items-center gap-2">
          <Radar className="w-4 h-4" />
          Asset Scan Complete
        </h3>
        <div
          className={`flex items-center gap-1 text-2xl font-bold ${riskColor}`}
        >
          {result?.riskScore}
          <span className="text-xs text-slate-500 font-normal">/100 Risk</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-800/50 rounded-lg p-4">
          <div className="text-slate-500 text-xs mb-1">Total Value</div>
          <div className="text-2xl font-bold text-white">
            ${result?.totalValue.toLocaleString()}
          </div>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-4">
          <div className="text-slate-500 text-xs mb-1">Fiat Exposure</div>
          <div className="text-2xl font-bold text-red-400">
            ${result?.fiatExposure.toLocaleString()}
          </div>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        {result?.assets.map((asset, idx) => (
          <motion.div
            key={`${asset.chain}-${asset.token}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center justify-between bg-slate-800/30 rounded p-3"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-2 h-2 rounded-full ${chainColors[asset.chain] || 'bg-gray-500'}`}
              />
              <div>
                <div className="text-sm font-medium text-white">
                  {asset.token}
                </div>
                <div className="text-xs text-slate-500 capitalize">
                  {asset.chain}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-white">
                ${asset.usdValue.toLocaleString()}
              </div>
              <div className="text-xs text-slate-500">{asset.balance}</div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-start gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded p-3">
        <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5" />
        <span className="text-xs text-yellow-200">
          {result?.recommendation}
        </span>
        <MockDataBadge />
      </div>
    </div>
  );
}
