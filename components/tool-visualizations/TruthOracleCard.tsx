'use client';
import { motion } from 'framer-motion';
// 类型定义
interface TruthOracleResult {
  source: string;
  content: string;
  isLive: boolean;
  note?: string;
}
interface TruthOracleCardProps {
  status: 'loading' | 'result';
  result?: Partial<TruthOracleResult> & {
    category: 'macro' | 'onchain';
    timestamp?: string;
  };
}
// 主题配置
const THEMES = {
  macro: {
    color: 'blue',
    bg: 'bg-blue-950/10',
    border: 'border-blue-500/30',
    text: 'text-blue-400',
    textMuted: 'text-blue-400/60',
    icon: '🏛️',
    label: '宏观金融',
  },
  onchain: {
    color: 'purple',
    bg: 'bg-purple-950/10',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    textMuted: 'text-purple-400/60',
    icon: '⛓️',
    label: '链上数据',
  },
};
export function TruthOracleCard({ status, result }: TruthOracleCardProps) {
  // 获取主题配置
  const category = result?.category || 'macro';
  const theme = THEMES[category];
  const isLive = result?.isLive ?? false;
  // ========== 加载状态 ==========
  if (status === 'loading') {
    return (
      <div
        className={`${theme.bg} border ${theme.border} rounded-lg p-6 max-w-lg`}
      >
        {/* 标题 */}
        <div className={`${theme.text} font-mono mb-4 flex items-center gap-2`}>
          <span className="text-xl">{theme.icon}</span>
          <span>Truth Oracle 探测中...</span>
          <span className="text-xs opacity-60">({theme.label})</span>
        </div>
        {/* 扫描动画 */}
        <div className="space-y-4">
          {/* 扫描线 */}
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-${theme.color}-500`}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'linear',
              }}
            />
          </div>
          {/* 脉冲点 + 文字 */}
          <div className="flex items-center gap-3">
            <motion.div
              className={`w-3 h-3 rounded-full bg-${theme.color}-400`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
            <span className={`${theme.textMuted} text-sm font-mono`}>
              {category === 'macro'
                ? '正在扫描 Tavily 宏观数据库...'
                : '正在连接 Alchemy 链上节点...'}
            </span>
          </div>
          {/* 模拟代码行 */}
          <div
            className={`${theme.textMuted} text-xs font-mono space-y-1 opacity-50`}
          >
            <div>{`> initializing ${category}_radar...`}</div>
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
            >
              {`> fetching ${category === 'macro' ? 'finance_data' : 'blockchain_state'}...`}
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
  // ========== 完成状态 ==========
  if (!result) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${theme.bg} border ${theme.border} rounded-lg p-6 max-w-lg`}
    >
      {/* 头部：来源 + 实时状态 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">{theme.icon}</span>
          <span className={`${theme.text} font-mono text-sm`}>
            {result.source}
          </span>
        </div>
        {/* 实时/降级标识 */}
        {isLive ? (
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs text-green-400 font-mono">LIVE</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-yellow-500" />
            <span className="text-xs text-yellow-500 font-mono">DEMO</span>
          </div>
        )}
      </div>
      {/* 内容区 */}
      <div className={`${theme.text} text-base leading-relaxed mb-4`}>
        {result.content}
      </div>
      {/* 降级提示 */}
      {!isLive && result.note && (
        <div className="bg-yellow-950/30 border border-yellow-500/30 rounded p-2 mb-4">
          <div className="text-xs text-yellow-400 font-mono">
            ⚠ {result.note}
          </div>
        </div>
      )}
      {/* 底部元数据 */}
      <div
        className={`${theme.textMuted} text-xs font-mono flex justify-between`}
      >
        <span>领域: {theme.label}</span>
        <span>{result.timestamp}</span>
      </div>
    </motion.div>
  );
}
