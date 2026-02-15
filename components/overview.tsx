import { motion } from 'framer-motion';
import { Shield, Wallet, Lock, Activity } from 'lucide-react';

export const Overview = () => {
  const features = [
    {
      icon: Shield,
      title: '法币风险评估',
      description: '一键评估法币信用违约概率，揭示资产贬值风险',
    },
    {
      icon: Wallet,
      title: '链上资产扫描',
      description: '多链资产扫描，实时掌握链上资产分布与风险敞口',
    },
    {
      icon: Lock,
      title: '主权金库部署',
      description: '一键部署智能合约，实现资产自托管与自动化管理',
    },
    {
      icon: Activity,
      title: 'ZK 隐私证明',
      description: '零知识证明生成，保护交易隐私与身份安全',
    },
  ];

  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          EdgeBridge
        </h1>
        <p className="text-muted-foreground">主权金融基础设施</p>
      </div>

      <div className="rounded-xl p-6 flex flex-col gap-6 leading-relaxed max-w-xl mx-auto">
        <p className="text-center text-sm text-muted-foreground">
          旧桥（传统法币体系）必崩，新桥（主权个人体系）已就绪
        </p>

        <div className="grid grid-cols-2 gap-3 mt-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
            >
              <feature.icon className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div className="text-left">
                <div className="text-sm font-medium">{feature.title}</div>
                <div className="text-xs text-muted-foreground">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          输入任意问题开始体验 · ✓ 演示数据 | EdgeBridge DEMO
        </p>
      </div>
    </motion.div>
  );
};
