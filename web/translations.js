// EdgeBridge Website Translations - Complete bilingual support
const translations = {
  en: {
    // Navigation
    'nav-features': 'Core Features',
    'nav-tokenomics': 'Tokenomics',
    'nav-architecture': 'Architecture',
    'nav-roadmap': 'Roadmap',
    'nav-litepaper': 'Litepaper',
    'cta-launch': 'Launch App',
    'btn-back': '← Back to Home',

    // Hero
    'hero-badge': 'Next-Generation DeFi Infrastructure',
    'hero-title-1': 'The Decentralized Bridge',
    'hero-title-2': 'to Future Finance',
    'hero-description':
      'Empowering Gen Z with AI education, autonomous agents, prediction markets, embodied robotics, and zero-knowledge encryption for true financial freedom',
    'btn-explore': 'Start Exploring',
    'btn-litepaper': 'Read Litepaper',
    'news-panel-title': '🔥 Hot News',
    'news-view-all': 'View All →',

    // Stats
    'stat-pillars': 'Core Technology Pillars',
    'stat-ai': 'AI Autonomous Trading',
    'stat-supply': '$EDGE Total Supply',
    'stat-potential': 'Decentralized Potential',

    // Features
    'features-tag': 'Core Features',
    'features-title': 'Core Modules of Financial Freedom',
    'features-desc':
      'Comprehensive ecosystem spanning education, intelligence, data, embodiment, and security',
    'feature1-title': 'ZChat - AI Financial Education',
    'feature1-desc':
      'Conversational AI tutor designed for digital natives in the AI-crypto era. Personalized learning paths from traditional finance to DeFi, RWA, and AI investment strategies.',
    'feature2-title': 'AA - Autonomous Financial Agent',
    'feature2-desc':
      'Personal AI Agent built on X402 & ERC-8004 protocols. Autonomous 24/7 market monitoring, portfolio optimization, micro-quantitative trading, and CA creation based on market trends.',
    'feature3-title': 'Prediction Market Hub',
    'feature3-desc':
      'Financial intelligence aggregation layer powered by "skin in the game" mechanisms. Aggregates Polymarket, Augur, and Gnosis for validated market insights and RWA integration.',
    'feature4-title': 'Robotic - Embodied Intelligence',
    'feature4-desc':
      'Physical AI companion with your AA projection. Voice interaction, offline signing, AR/VR integration, and DePIN rewards for data contribution.',
    'feature5-title': 'Privacy & Security',
    'feature5-desc':
      'ZK-SNARKs for private transactions, fully homomorphic encryption for secure computation, quantum-resistant algorithms, and multi-layer security protocols.',
    'feature6-title': '$EDGE Token Economy',
    'feature6-desc':
      'Governance, staking rewards, and feature unlocking in one. Deflationary model through transaction fee buybacks and prediction market burns.',
    'tag1-1': 'Personalized Paths',
    'tag1-2': 'Real-time Analysis',
    'tag1-3': 'Trading Sandbox',
    'tag2-1': 'Auto Trading',
    'tag2-2': 'Risk Management',
    'tag2-3': 'CA Creation',
    'tag3-1': 'Multi-platform Aggregation',
    'tag3-2': 'AI Training',
    'tag3-3': 'RWA Integration',
    'tag4-1': 'Voice & AR/VR',
    'tag4-2': 'Offline Security',
    'tag4-3': 'DePIN Mining',
    'tag5-1': 'ZK-SNARKs',
    'tag5-2': 'FHE Computing',
    'tag5-3': 'Quantum-Safe',
    'tag6-1': 'Governance',
    'tag6-2': 'Staking Rewards',
    'tag6-3': 'Deflationary',

    // Architecture (for homepage)
    'architecture-tag': 'Architecture',
    'architecture-home-title': 'Four-Layer Technical Architecture',
    'architecture-home-desc':
      'Modular design ensuring scalability, security, and seamless integration',

    // Tokenomics
    'tokenomics-tag': 'Tokenomics',
    'tokenomics-title': '$EDGE Token Economics',
    'tokenomics-desc':
      'Total supply of 10 billion tokens with strategic distribution and linear vesting',
    'distribution-title': 'Token Distribution',
    'dist-community': 'Community Incentives',
    'dist-community-desc':
      'Liquidity mining, early user airdrops, ecosystem contribution rewards',
    'dist-ecosystem': 'Ecosystem Development',
    'dist-ecosystem-desc':
      'Partner signing, developer grants, technology R&D investment',
    'dist-team': 'Team & Advisors',
    'dist-team-desc': '4-year linear unlock, binding team long-term interests',
    'dist-public': 'Public Sale',
    'dist-public-desc':
      'Market promotion, user growth and ecosystem implementation',
    'dist-private': 'Private & Angel',
    'dist-private-desc': 'Early strategic angel investment share',
    'vesting-title': 'Vesting Schedule (4 Years)',
    'vesting-note':
      'Team & Advisor tokens unlock linearly over 4 years to align long-term interests',

    // Roadmap
    'roadmap-tag': 'Roadmap',
    'roadmap-title': 'From Vision to Reality',
    'roadmap-desc': 'Five-phase strategic development plan for 2026 and beyond',
    'phase1-title': 'Foundation Building',
    'phase1-desc':
      'Launch core education and agent infrastructure with protocol integration',
    'milestone1-1': 'ZChat Launch',
    'milestone1-1-desc':
      'AI financial education module with personalized learning paths',
    'milestone1-2': 'Protocol Integration',
    'milestone1-2-desc':
      'Implement X402 and ERC-8004 protocols for AA functionality',
    'milestone1-3': 'Prediction Market Test',
    'milestone1-3-desc': 'Beta testing of prediction market API aggregation',
    'phase2-title': 'Ecosystem Integration',
    'phase2-desc':
      'Full prediction market deployment and multi-chain settlement support',
    'milestone2-1': 'Market Integration',
    'milestone2-1-desc':
      'Complete integration of Polymarket, Augur, Gnosis platforms',
    'milestone2-2': 'Multi-chain Support',
    'milestone2-2-desc': 'Launch settlement on Base, Arbitrum, Polygon, Solana',
    'milestone2-3': 'RWA Tokenization',
    'milestone2-3-desc': 'Introduce real-world asset tokenization capabilities',
    'phase3-title': 'Security & Embodiment',
    'phase3-desc':
      'Deploy advanced encryption and launch physical robot companions',
    'milestone3-1': 'Privacy Layer',
    'milestone3-1-desc': 'Implement ZK-SNARKs and fully homomorphic encryption',
    'milestone3-2': 'Robotic Beta',
    'milestone3-2-desc': 'Launch first batch of embodied AI robot companions',
    'milestone3-3': 'Community Testing',
    'milestone3-3-desc': 'Beta program with early adopters for optimization',
    'phase4-title': 'Global Expansion',
    'phase4-desc':
      'Mainnet launch with global fintech partnerships and token economy activation',
    'milestone4-1': 'Mainnet Launch',
    'milestone4-1-desc': 'Official mainnet deployment with full feature set',
    'milestone4-2': 'Partner Onboarding',
    'milestone4-2-desc': 'Strategic partnerships with global fintech companies',
    'milestone4-3': 'Token Launch',
    'milestone4-3-desc': '$EDGE token generation event and airdrop campaigns',
    'phase5-title': 'Continuous Innovation',
    'phase5-desc':
      'Iterative upgrades, DAO governance, and Web3-AI fusion exploration',
    'milestone5-1': 'Feature Iteration',
    'milestone5-1-desc': 'Continuous improvement based on community feedback',
    'milestone5-2': 'DAO Governance',
    'milestone5-2-desc':
      'Transition to full decentralized community governance',
    'milestone5-3': 'Web3-AI Innovation',
    'milestone5-3-desc': 'Explore cutting-edge integrations of Web3 and AI',

    // Roadmap for Litepaper (detailed items)
    'roadmap-p1-1': 'Launch ZChat AI financial education module',
    'roadmap-p1-2': 'Integrate X402 and ERC-8004 protocols',
    'roadmap-p1-3': 'Test prediction market API aggregation',
    'roadmap-p2-1':
      'Fully integrate prediction markets (Polymarket, Augur, Gnosis)',
    'roadmap-p2-2':
      'Support multi-chain settlement (Base, Arbitrum, Polygon, Solana)',
    'roadmap-p2-3': 'Introduce RWA asset tokenization',
    'roadmap-p3-1': 'Implement zk-SNARKs and fully homomorphic encryption',
    'roadmap-p3-2': 'Launch first batch of embodied AI robot companions',
    'roadmap-p3-3': 'Beta testing and community optimization',
    'roadmap-p4-1': 'Official mainnet launch with full feature set',
    'roadmap-p4-2': 'Strategic partnerships with global fintech companies',
    'roadmap-p4-3': '$EDGE token generation event and airdrop campaigns',
    'roadmap-p5-1': 'Continuous improvement based on community feedback',
    'roadmap-p5-2': 'Transition to full decentralized DAO governance',
    'roadmap-p5-3': 'Explore cutting-edge Web3-AI fusion innovation',

    // Architecture
    'arch-tag': 'Technical Architecture',
    'arch-title': 'Four-Layer Architecture',
    'arch-desc':
      'Modular, scalable, and secure design integrating traditional and blockchain finance',
    'layer1-name': 'Application Layer',
    'layer1-desc':
      'ZChat UI · AA Dashboard · Prediction Market · Robotic Console',
    'layer2-name': 'Protocol Layer',
    'layer2-desc': 'X402 Communication · ERC-8004 Standard · MCP A2A Protocol',
    'layer3-name': 'Settlement Layer',
    'layer3-desc': 'Base · Arbitrum · Polygon · Solana · Cross-chain Bridges',
    'layer4-name': 'Security Layer',
    'layer4-desc':
      'ZK-SNARKs · FHE · Distributed Key Management · Quantum-Safe',

    // CTA
    'cta-title': 'Ready to Shape Your Financial Future?',
    'cta-text':
      'Join the EdgeBridge community and explore decentralized finance with AI-powered tools. Early participants receive exclusive $EDGE token airdrops and governance rights.',
    'cta-btn1': 'Join Waitlist',
    'cta-btn2': 'Read Litepaper',

    // Footer
    'footer-desc':
      'The decentralized bridge connecting future finance, building true financial freedom for Gen Z.',
    'footer-product': 'Products',
    'footer-zchat': 'ZChat Education',
    'footer-aa': 'AI Agent',
    'footer-prediction': 'Prediction Market',
    'footer-robotic': 'Robotic',
    'footer-resources': 'Resources',
    'footer-litepaper': 'Litepaper',
    'footer-docs': 'Documentation',
    'footer-api': 'Developer API',
    'footer-brand': 'Brand Assets',
    'footer-community': 'Community',
    'footer-twitter': 'Twitter',
    'footer-discord': 'Discord',
    'footer-telegram': 'Telegram',
    'footer-github': 'GitHub',
    'footer-copyright': '© 2025 EdgeBridge. All rights reserved.',
    'footer-privacy': 'Privacy',
    'footer-terms': 'Terms',

    // Litepaper
    'lp-badge': 'Litepaper',
    'lp-title': 'EdgeBridge',
    'lp-subtitle': 'Next-Generation International Financial Infrastructure',
    'download-text':
      'Download the complete document for in-depth technical details',
    'download-btn': 'Download Full Document',
    'exec-summary-title': 'Executive Summary',
    'exec-summary-p1':
      'EdgeBridge (边桥) is a next-generation decentralized financial aggregation platform built for Gen Z, designed to address opportunities and challenges during the global financial order reconstruction period. At the historical intersection of the decline of dollar hegemony, expanding regulatory vacuum, and AI technology explosion, EdgeBridge provides full-stack Web3 financial aggregation through five core pillars: AI financial education (ZChat), personal AI agents (AA), prediction markets, embodied intelligent robots, and zero-knowledge proof encryption technology.',
    'core-value': 'Core Value Propositions:',
    'value-1':
      'Education First: Democratize financial education by lowering barriers through AI-driven ZChat',
    'value-2':
      'Intelligent Automation: 24/7 autonomous investment and asset management via X402/ERC-8004 based personal AI Agents',
    'value-3':
      'Information Advantage: Build high-fidelity data streams by aggregating prediction market APIs',
    'value-4':
      'Physical Anchoring: Extend AI capabilities to offline scenarios through embodied robots',
    'value-5':
      'Privacy First: Comprehensive protection of user assets and data security via zk-SNARKs and fully homomorphic encryption',
    'market-title': 'Macro Environment: Financial Order Paradigm Shift',
    'market-crisis-title':
      'Structural Fractures in Traditional Financial Systems',
    'market-crisis-p1':
      'The world is currently on the eve of "Bretton Woods System 3.0", with the traditional financial system facing multiple irreversible structural crises:',
    'crisis-1':
      'US debt exceeds $35 trillion with declining foreign holdings, shaking dollar credit foundations',
    'crisis-2':
      'Industrial hollowing in the US intensifies, with high financialization rates causing real economy-financial market decoupling',
    'crisis-3':
      'Traditional dollar tide harvesting model gradually fails under multipolar global landscape',
    'market-emerging-title': 'Emerging Financial Forces Breaking Through',
    'market-emerging-p1':
      'As traditional systems collapse, emerging financial forces accelerate their breakthrough:',
    'emerging-1':
      'RMB internationalization accelerates through Belt and Road Initiative and BRICS payment systems',
    'emerging-2':
      'US attempts to promote BTC reserve strategy, but Chinese crypto regulation creates East-West ecosystem split',
    'emerging-3':
      'Intensifying geopolitical conflicts and financial sanctions disrupt traditional cross-border fund flows',
    'market-tech-title': 'Technology Explosion and Regulatory Vacuum Window',
    'market-tech-p1':
      'The explosive development of AI technology combined with regulatory lag during system transition creates a rare financial innovation window. However, AI also reduces financial crime costs—major platforms like Coinbase, Binance, Bybit have suffered social engineering attacks with cumulative losses in hundreds of millions.',
    'architecture-title': 'Core Architecture: Five Pillar System',
    'pillar1-title': 'Pillar 1: ZChat - Gen Z AI Financial Education Engine',
    'pillar1-intro':
      'ZChat is EdgeBridge\'s entry-level product, an AI-driven financial education tool designed specifically for "digital natives" (born since 2000 and internet-intensive users) in the AI-crypto new era. Unlike traditional video courses, ZChat adopts a conversational learning paradigm.',
    'pillar1-feat1-title': 'Personalized Paths',
    'pillar1-feat1-desc':
      'AI-generated customized curricula covering traditional finance to DeFi, RWA, and AI strategies',
    'pillar1-feat2-title': 'Real-time Analysis',
    'pillar1-feat2-desc':
      'Translates complex TVL fluctuations and Gas fees into plain language',
    'pillar1-feat3-title': 'Trading Sandbox',
    'pillar1-feat3-desc':
      'Practice cross-chain arbitrage and liquidity mining with virtual funds',
    'pillar2-title':
      'Pillar 2: AA (Autonomous Agent) - Personal Financial AI Agent',
    'pillar2-intro':
      'If ZChat is the "teacher," AA is the "butler." Based on X402 protocol (allowing AI Agents autonomous wallet control) and ERC-8004 standard (Agent inter-communication protocol), AA is a non-custodial financial assistant dedicated to each user.',
    'pillar2-feat1-title': '24/7 Autonomous Operations',
    'pillar2-feat1-desc':
      'Monitors markets continuously, executes optimal cross-DEX trades, and micro-quantitative trading',
    'pillar2-feat2-title': 'Risk Management',
    'pillar2-feat2-desc':
      'Black swan event warnings linked to prediction market data',
    'pillar2-feat3-title': 'Cross-chain Interaction',
    'pillar2-feat3-desc':
      'Seamless asset transfers via LayerZero and Axelar protocols',
    'pillar2-feat4-title': 'CA Creation',
    'pillar2-feat4-desc':
      'Autonomously create CAs for cryptocurrency issuance based on market trends',
    'pillar3-title':
      'Pillar 3: Prediction Markets - Decentralized Information Filter',
    'pillar3-intro':
      'EdgeBridge\'s prediction market is not a simple betting platform but a financial intelligence aggregation layer. Core logic: prediction markets more accurately reflect collective wisdom than traditional polls through "skin in the game" mechanisms.',
    'pillar4-title':
      'Pillar 4: Robotic - Embodied Intelligence Physical Anchor',
    'pillar4-intro':
      'In the highly virtualized "Gen Z Finance" context, Robotic projects users\' AA into the physical world through AI companion robots, solving trust and offline scenario needs.',
    'pillar4-feat1-title': 'Voice & AR/VR',
    'pillar4-feat1-desc':
      'Natural language queries and immersive financial simulation scenarios',
    'pillar4-feat2-title': 'Offline Signing',
    'pillar4-feat2-desc':
      'Complete transactions via Bluetooth in network-free environments',
    'pillar4-feat3-title': 'DePIN Mining',
    'pillar4-feat3-desc':
      'Built-in sensors collect environmental data earning $EDGE storage rewards',
    'pillar5-title':
      'Pillar 5: Encryption Technology - Cloak in the Dark Forest',
    'pillar5-intro':
      'In the "Gen Z Finance" dark forest, EdgeBridge employs ZK-SNARKs and fully homomorphic encryption to effectively hide user identities and ensure asset security.',
    'pillar5-feat1-title': 'ZK-SNARKs',
    'pillar5-feat1-desc':
      'Privacy transactions proving "sufficient funds" without revealing amounts',
    'pillar5-feat2-title': 'Fully Homomorphic Encryption',
    'pillar5-feat2-desc':
      'AA executes strategies on encrypted data without decryption',
    'pillar5-feat3-title': 'Multi-layer Security',
    'pillar5-feat3-desc':
      'Social recovery, time locks, honeypot detection systems',
    'pillar5-feat4-title': 'Quantum Defense',
    'pillar5-feat4-desc':
      'Quantum-resistant algorithms protecting long-term keys',

    // Technical Framework
    'framework-title': 'Technical Framework Layer',
    'framework-intro':
      "EdgeBridge's technical architecture adopts layered design, ensuring system modular ity, scalability, and security, seamlessly integrating traditional finance with emerging blockchain technology:",
    'framework-layer1': 'Application Layer',
    'framework-layer1-desc':
      'ZChat education interface, AA operation panel, prediction market UI - user interaction frontend providing intuitive interface support',
    'framework-layer2': 'Protocol Layer',
    'framework-layer2-desc':
      'X402 communication protocol, ERC-8004 Agent standard, MCP A2A - core communication and standard layer ensuring interoperability',
    'framework-layer3': 'Settlement Layer',
    'framework-layer3-desc':
      'Multi-chain support (Base/Arbitrum/Polygon/Solana) - supporting cross-chain asset transfers and efficient transaction execution',
    'framework-layer4': 'Security Layer',
    'framework-layer4-desc':
      'zk-SNARKs, fully homomorphic encryption, distributed key management - underlying encryption protection ensuring user privacy and fund security',

    'token-title': 'Token Economics: $EDGE Value Loop',
    'token-utility-title': 'Token Utility',
    'token-util-1':
      'Governance Rights: Vote on protocol parameters (e.g., AA transaction fee rates)',
    'token-util-2':
      'Staking Rewards: Stake $EDGE to receive platform revenue share',
    'token-util-3':
      'Feature Unlocking: Pay $EDGE for premium features (cross-chain bridge priority, exclusive AI models)',
    'token-util-4':
      '<strong>Ecosystem Circulation:</strong> Core token for transactions, rewards, and bug bounties',
    'token-distribution-title': 'Distribution Mechanism',
    'token-supply': '$EDGE Total Supply: 10,000,000,000 (10 billion)',
    'token-dist-1':
      'Community Incentives: 45% (liquidity mining, early user airdrops)',
    'token-dist-2': 'Ecosystem Development: 25% (partners, developer grants)',
    'token-dist-3': 'Team & Advisors: 15% (4-year linear vesting)',
    'token-dist-4': 'Public Sale: 12.5%',
    'token-dist-5': 'Private & Angel: 2.5%',
    'token-deflation-title': 'Deflationary Mechanism',
    'token-deflation-1':
      '<strong>Transaction Fee Buyback:</strong> 1% of each AA transaction fee used for $EDGE buyback and burn',
    'token-deflation-2':
      '<strong>Prediction Market Burn:</strong> Portion of failed prediction funds enters burn pool',
    'token-deflation-desc':
      '1% of each AA transaction fee used for $EDGE buyback and burn. Portion of failed prediction market funds enters burn pool.',

    // Table headers
    'table-layer': 'Layer',
    'table-description': 'Description',
    'table-allocation': 'Allocation',
    'table-percentage': 'Percentage',
    'table-purpose': 'Purpose',
    'roadmap-q1q2':
      'ZChat Beta launch (supporting Chinese and English) · AA testnet deployment (Ethereum mainnet) · Community building kickoff · Protocol integration (X402, ERC-8004)',
    'roadmap-q2':
      'Prediction market aggregator MVP launch · Multi-chain settlement support · RWA tokenization introduction',
    'roadmap-q3':
      'ZK-SNARKs and FHE implementation · Robotic Beta launch · Community testing and optimization',
    'roadmap-q3q4':
      'Mainnet launch · Global fintech partnerships · $EDGE token generation event and airdrops',
    'roadmap-beyond':
      'Feature iteration based on feedback · DAO governance introduction · Web3-AI fusion exploration',
    'risks-title': 'Risks & Mitigation',
    'risks-regulatory-title': 'Regulatory Risk',
    'risks-regulatory-desc':
      'Mitigation: Progressive decentralization approach, retain emergency pause switch initially, cooperate with friendly jurisdictions (Switzerland, Singapore).',
    'risks-tech-title': 'Technical Risk',
    'risks-tech-desc':
      'Smart Contract Vulnerabilities: Multiple audit firms (CertiK, Trail of Bits), bug bounty program. AI Hallucination: All critical AA decisions require human secondary confirmation (adjustable automation level in settings).',
    'risks-market-title': 'Market Competition',
    'risks-market-desc':
      'Differentiation: Existing projects are single-function focused (e.g., Fetch.ai for AI Agents, Polymarket for predictions only), EdgeBridge is a full-stack solution forming an ecosystem loop.',
    'conclusion-title':
      'Conclusion: Standing at the Crossroads of Financial Order Reconstruction',
    'conclusion-p1':
      'EdgeBridge is not a speculation tool but financial democratization infrastructure. Just as the internet enabled free information flow, EdgeBridge is committed to making intelligent wealth management and privacy basic rights for everyone.',
    'conclusion-p2':
      'In the chaotic period between dollar hegemony collapse and new order establishment, we invite every user to become sovereign over their own wealth—arming minds through education, extending capabilities through AI, and guarding security through encryption.',
    'vision-title': "EdgeBridge's Vision:",
    'vision-text':
      'When historians look back at the financial revolution of the 2020s, they will see how ordinary people used technology to traverse the dark forest and build true financial freedom on the ruins of the old world.',
    disclaimer:
      'Disclaimer: This litepaper is for informational purposes only and does not constitute investment advice. Cryptocurrency investments carry extreme risks. Please make prudent decisions based on your own circumstances.',
  },
  zh: {
    // Navigation
    'nav-features': '核心功能',
    'nav-tokenomics': '代币经济',
    'nav-architecture': '技术架构',
    'nav-roadmap': '发展路线',
    'nav-litepaper': '轻皮书',
    'cta-launch': '启动平台',
    'btn-back': '← 返回首页',

    // Hero
    'hero-badge': '下一代去中心化金融基础设施',
    'hero-title-1': '连接未来金融的',
    'hero-title-2': '去中心化桥梁',
    'hero-description':
      '整合AI教育、智能代理、预测市场、具身机器人与零知识加密技术，打造Z世代专属的全栈金融自由平台',
    'btn-explore': '开始探索',
    'btn-litepaper': '查看轻皮书',
    'news-panel-title': '🔥 热讯',
    'news-view-all': '查看更多 →',

    // Stats
    'stat-pillars': '核心技术支柱',
    'stat-ai': 'AI 自主交易',
    'stat-supply': '$EDGE 总供应量',
    'stat-potential': '去中心化潜力',

    // Features
    'features-tag': '核心功能',
    'features-title': '构建金融自由的核心模块',
    'features-desc':
      '通过教育、智能、数据、具身与加密五大维度，提供全方位生态系统',
    'feature1-title': 'ZChat - AI 金融教育',
    'feature1-desc':
      '专为AI加密新时代数字原生代设计的对话式AI导师。个性化学习路径涵盖传统金融到DeFi、RWA和AI投资策略。',
    'feature2-title': 'AA - 智能金融代理',
    'feature2-desc':
      '基于X402与ERC-8004协议的个人AI Agent。自主24/7市场监控、投资组合优化、微额量化交易，以及基于市场趋势的CA创建。',
    'feature3-title': '预测市场聚合',
    'feature3-desc':
      '基于"真金白银投票"机制的金融情报聚合层。聚合Polymarket、Augur和Gnosis，提供经验证的市场洞察和RWA集成。',
    'feature4-title': 'Robotic - 具身智能',
    'feature4-desc':
      '将您的AA投射到物理世界的AI伴侣机器人。语音交互、离线签名、AR/VR集成，以及数据贡献的DePIN奖励。',
    'feature5-title': '隐私与安全',
    'feature5-desc':
      'ZK-SNARKs隐私交易、全同态加密安全计算、抗量子算法和多层安全协议。',
    'feature6-title': '$EDGE 代币经济',
    'feature6-desc':
      '治理、质押收益和功能解锁三合一。通过交易费回购和预测市场销毁的通缩模型。',
    'tag1-1': '个性化路径',
    'tag1-2': '实时分析',
    'tag1-3': '交易沙盒',
    'tag2-1': '自动交易',
    'tag2-2': '风险管理',
    'tag2-3': 'CA创建',
    'tag3-1': '多平台聚合',
    'tag3-2': 'AI训练',
    'tag3-3': 'RWA集成',
    'tag4-1': '语音与AR/VR',
    'tag4-2': '离线安全',
    'tag4-3': 'DePIN挖矿',
    'tag5-1': '零知识证明',
    'tag5-2': '全同态加密',
    'tag5-3': '量子安全',
    'tag6-1': '治理权',
    'tag6-2': '质押收益',
    'tag6-3': '通缩模型',

    // Architecture (for homepage)
    'architecture-tag': '技术架构',
    'architecture-home-title': '四层技术架构',
    'architecture-home-desc': '模块化设计，确保可扩展性、安全性和无缝集成',

    // Tokenomics
    'tokenomics-tag': '代币经济',
    'tokenomics-title': '$EDGE 代币经济学',
    'tokenomics-desc': '总供应量100亿代币，战略性分配和线性释放',
    'distribution-title': '代币分配',
    'dist-community': '社区激励',
    'dist-community-desc': '流动性挖矿、早期用户空投、生态贡献奖励',
    'dist-ecosystem': '生态发展',
    'dist-ecosystem-desc': '合作伙伴签约、开发者资助、技术研发投资',
    'dist-team': '团队与顾问',
    'dist-team-desc': '4年线性解锁，绑定团队长期利益',
    'dist-public': '公开销售',
    'dist-public-desc': '市场推广、用户增长和生态落地',
    'dist-private': '私募天使',
    'dist-private-desc': '早期战略天使投资份额',
    'vesting-title': '释放计划（4年）',
    'vesting-note': '团队和顾问代币4年线性解锁，以符合长期利益',

    // Roadmap
    'roadmap-tag': '发展路线',
    'roadmap-title': '从构想到现实',
    'roadmap-desc': '2026年及以后的五阶段战略发展计划',
    'phase1-title': '基础构建',
    'phase1-desc': '启动核心教育和代理基础设施，集成协议',
    'milestone1-1': 'ZChat上线',
    'milestone1-1-desc': 'AI金融教育模块，个性化学习路径',
    'milestone1-2': '协议集成',
    'milestone1-2-desc': '实施X402和ERC-8004协议以实现AA功能',
    'milestone1-3': '预测市场测试',
    'milestone1-3-desc': '预测市场API聚合的Beta测试',
    'phase2-title': '生态集成',
    'phase2-desc': '完整预测市场部署和多链结算支持',
    'milestone2-1': '市场集成',
    'milestone2-1-desc': '完成Polymarket、Augur、Gnosis平台集成',
    'milestone2-2': '多链支持',
    'milestone2-2-desc': '在Base、Arbitrum、Polygon、Solana上启动结算',
    'milestone2-3': 'RWA代币化',
    'milestone2-3-desc': '引入现实世界资产代币化能力',
    'phase3-title': '安全与具身',
    'phase3-desc': '部署高级加密并推出物理机器人伴侣',
    'milestone3-1': '隐私层',
    'milestone3-1-desc': '实施ZK-SNARKs和全同态加密',
    'milestone3-2': 'Robotic Beta',
    'milestone3-2-desc': '推出首批具身AI机器人伴侣',
    'milestone3-3': '社区测试',
    'milestone3-3-desc': '早期采用者Beta计划以优化',
    'phase4-title': '全球扩张',
    'phase4-desc': '主网启动，全球金融科技合作伙伴关系和代币经济激活',
    'milestone4-1': '主网启动',
    'milestone4-1-desc': '官方主网部署，完整功能集',
    'milestone4-2': '合作伙伴加入',
    'milestone4-2-desc': '与全球金融科技公司战略合作',
    'milestone4-3': '代币发行',
    'milestone4-3-desc': '$EDGE代币生成事件和空投活动',
    'phase5-title': '持续创新',
    'phase5-desc': '迭代升级、DAO治理和Web3-AI融合探索',
    'milestone5-1': '功能迭代',
    'milestone5-1-desc': '基于社区反馈持续改进',
    'milestone5-2': 'DAO治理',
    'milestone5-2-desc': '过渡到完全去中心化社区治理',
    'milestone5-3': 'Web3-AI创新',
    'milestone5-3-desc': '探索Web3和AI的前沿集成',

    // Roadmap for Litepaper (detailed items)
    'roadmap-p1-1': '启动ZChat AI金融教育模块',
    'roadmap-p1-2': '集成X402和ERC-8004协议',
    'roadmap-p1-3': '测试预测市场API聚合',
    'roadmap-p2-1': '完整集成预测市场（Polymarket、Augur、Gnosis）',
    'roadmap-p2-2': '支持多链结算（Base、Arbitrum、Polygon、Solana）',
    'roadmap-p2-3': '引入RWA资产代币化',
    'roadmap-p3-1': '实施zk-SNARKs和全同态加密',
    'roadmap-p3-2': '推出首批具身AI机器人伴侣',
    'roadmap-p3-3': 'Beta测试和社区优化',
    'roadmap-p4-1': '官方主网启动，完整功能集',
    'roadmap-p4-2': '与全球金融科技公司战略合作',
    'roadmap-p4-3': '$EDGE代币生成事件和空投活动',
    'roadmap-p5-1': '基于社区反馈持续改进',
    'roadmap-p5-2': '过渡到完全去中心化DAO治理',
    'roadmap-p5-3': '探索前沿Web3-AI融合创新',

    // Architecture
    'arch-tag': '技术架构',
    'arch-title': '四层架构',
    'arch-desc': '模块化、可扩展、安全的设计，整合传统和区块链金融',
    'layer1-name': '应用层',
    'layer1-desc': 'ZChat界面 · AA仪表板 · 预测市场 · Robotic控制台',
    'layer2-name': '协议层',
    'layer2-desc': 'X402通信 · ERC-8004标准 · MCP A2A协议',
    'layer3-name': '结算层',
    'layer3-desc': 'Base · Arbitrum · Polygon · Solana · 跨链桥',
    'layer4-name': '安全层',
    'layer4-desc': 'ZK-SNARKs · 全同态加密 · 分布式密钥管理 · 量子安全',

    // CTA
    'cta-title': '准备好掌控您的金融未来了吗？',
    'cta-text':
      '加入EdgeBridge社区，使用AI驱动的工具探索去中心化金融。早期参与者将获得独家$EDGE代币空投和治理权。',
    'cta-btn1': '加入候补名单',
    'cta-btn2': '查看轻皮书',

    // Footer
    'footer-desc': '连接未来金融的去中心化桥梁，为Z世代构建真正的金融自由。',
    'footer-product': '产品',
    'footer-zchat': 'ZChat教育',
    'footer-aa': 'AI Agent',
    'footer-prediction': '预测市场',
    'footer-robotic': 'Robotic',
    'footer-resources': '资源',
    'footer-litepaper': '轻皮书',
    'footer-docs': '技术文档',
    'footer-api': '开发者API',
    'footer-brand': '品牌资源',
    'footer-community': '社区',
    'footer-twitter': 'Twitter',
    'footer-discord': 'Discord',
    'footer-telegram': 'Telegram',
    'footer-github': 'GitHub',
    'footer-copyright': '© 2025 EdgeBridge（边桥）。保留所有权利。',
    'footer-privacy': '隐私政策',
    'footer-terms': '使用条款',

    // Litepaper
    'lp-badge': '轻皮书',
    'lp-title': '边桥',
    'lp-subtitle': '下一代国际金融基础设施',
    'download-text': '下载完整文档，深入了解技术细节',
    'download-btn': '下载完整文档',
    'exec-summary-title': '执行摘要',
    'exec-summary-p1':
      '边桥（EdgeBridge）是面向Z世代构建的下一代去中心化金融聚合平台，旨在应对全球金融秩序重构期的机遇与挑战。在美元霸权体系式微、监管真空期扩大、AI技术爆发的历史交汇点，边桥通过五大核心支柱——AI金融教育（ZChat）、个人AI代理（AA）、预测市场、具身智能机器人、以及零知识证明加密技术——为用户提供全栈式的Web3金融聚合平台。',
    'core-value': '核心价值主张：',
    'value-1':
      '教育先行：通过AI驱动的ZChat降低金融知识门槛，实现金融教育民主化',
    'value-2':
      '智能自动化：基于X402/ERC-8004协议的个人AI Agent，实现24/7自主投资与资产管控',
    'value-3': '信息优势：聚合预测市场API构建高保真数据流',
    'value-4': '物理锚定：具身机器人将AI能力延伸至线下场景',
    'value-5':
      '隐私至上：zk-SNARKs与全同态加密技术，全方位保护用户资产与数据安全',
    'market-title': '宏观环境分析：金融秩序的范式转移',
    'market-crisis-title': '传统金融体系的结构性裂痕',
    'market-crisis-p1':
      '当前全球正处于"布雷顿森林体系3.0"的前夜，传统金融体系面临多重不可逆的结构性危机：',
    'crisis-1':
      '美债规模突破35万亿美元，外国持有占比持续下降，美元信用根基动摇',
    'crisis-2': '美国产业空心化加剧，金融化率过高导致实体经济与金融市场脱钩',
    'crisis-3': '在全球多极化格局下，传统美元潮汐收割模式逐渐失灵',
    'market-emerging-title': '新兴力量的金融突围',
    'market-emerging-p1': '伴随传统体系崩塌，新兴金融力量加速突围：',
    'emerging-1':
      '人民币国际化进程提速，通过"一带一路"倡议与金砖国家支付体系构建',
    'emerging-2':
      '美国试图推动BTC储备战略，但中国对加密货币的监管政策造成东西方生态割裂',
    'emerging-3':
      '地缘政治冲突加剧，金融制裁频发，导致传统跨境资金流动渠道断裂',
    'market-tech-title': '技术爆炸与监管真空的红利窗口',
    'market-tech-p1':
      'AI技术的爆发式发展与新旧体系交替期的监管滞后，形成了难得的金融创新红利窗口。但AI也降低了金融犯罪成本，Coinbase、Binance、Bybit等头部平台频繁遭遇社会工程学攻击，累计损失数亿美元。',
    'architecture-title': '核心模块和功能',
    'pillar1-title': 'ZChat - Z世代AI金融教育引擎',
    'pillar1-intro':
      'ZChat是边桥平台的入口级产品，专为AI加密新时代下的"数字原生代"（2000年起互联网原生人群）设计的AI驱动金融教育工具。不同于传统视频课程，ZChat采用对话式学习范式。',
    'pillar1-feat1-title': '个性化路径',
    'pillar1-feat1-desc': 'AI生成定制化课程，覆盖传统金融到DeFi、RWA和AI策略',
    'pillar1-feat2-title': '实时解读',
    'pillar1-feat2-desc': '将复杂的TVL波动和Gas费转化为通俗语言',
    'pillar1-feat3-title': '交易沙盒',
    'pillar1-feat3-desc': '使用虚拟资金练习跨链套利和流动性挖矿',
    'pillar2-title': 'AA (Autonomous Agent) - 个人金融AI代理',
    'pillar2-intro':
      '如果说ZChat是"授人以渔"的教练，AA则是"代为捕鱼"的管家。基于X402协议（允许AI Agent自主控制钱包）和ERC-8004标准（Agent间通信协议），AA是专属于每位用户的非托管式金融助手。',
    'pillar2-feat1-title': '24/7自主操作',
    'pillar2-feat1-desc': '持续监控市场，执行最优跨DEX交易和微额量化交易',
    'pillar2-feat2-title': '风险管理',
    'pillar2-feat2-desc': '关联预测市场数据实现黑天鹅事件预警',
    'pillar2-feat3-title': '跨链互动',
    'pillar2-feat3-desc': '通过LayerZero和Axelar协议实现资产无缝转移',
    'pillar2-feat4-title': 'CA创建',
    'pillar2-feat4-desc': '基于市场趋势自主创建CA进行加密货币发行',
    'pillar3-title': '预测市场 - 去中心化信息筛选器',
    'pillar3-intro':
      '边桥的预测市场不是简单的博彩平台，而是金融情报聚合层。核心逻辑：预测市场通过"用真金白银投票"的机制，比传统民调更准确地反映集体智慧。',
    'pillar4-title': 'Robotic - 具身智能的物理锚点',
    'pillar4-intro':
      '在"Z时代金融"高度虚拟化的背景下，Robotic通过AI伴侣机器人将用户的AA投射到现实世界，解决信任与线下场景需求。',
    'pillar4-feat1-title': '语音与AR/VR',
    'pillar4-feat1-desc': '自然语言查询和沉浸式金融模拟场景',
    'pillar4-feat2-title': '离线签名',
    'pillar4-feat2-desc': '在无网环境通过蓝牙完成交易',
    'pillar4-feat3-title': 'DePIN挖矿',
    'pillar4-feat3-desc': '内置传感器收集环境数据获取$EDGE存储奖励',
    'pillar5-title': '加密技术 - 黑暗森林中的隐身衣',
    'pillar5-intro':
      '在"Z时代金融"黑暗森林中，边桥使用ZK-SNARKs和全同态加密有效隐藏用户身份和确保资产安全。',
    'pillar5-feat1-title': 'ZK-SNARKs',
    'pillar5-feat1-desc': '隐私交易证明"拥有足够资金"而无需暴露具体金额',
    'pillar5-feat2-title': '全同态加密',
    'pillar5-feat2-desc': 'AA可在不解密用户资产数据的情况下执行策略',
    'pillar5-feat3-title': '多重安全层',
    'pillar5-feat3-desc': '社交恢复、时间锁、蜜罐检测系统',
    'pillar5-feat4-title': '量子防御',
    'pillar5-feat4-desc': '抗量子算法保护长期密钥',

    // Technical Framework
    'framework-title': '技术框架层',
    'framework-intro':
      '边桥的技术架构采用分层设计，确保系统的模块化、可扩展性和安全性，无缝整合传统金融与新兴区块链技术：',
    'framework-layer1': '应用层',
    'framework-layer1-desc':
      'ZChat教育界面、AA操作面板、预测市场UI - 用户交互前端，提供直观的界面支持',
    'framework-layer2': '协议层',
    'framework-layer2-desc':
      'X402通信协议、ERC-8004 Agent标准、MCP A2A - 核心通信和标准层，确保互操作性',
    'framework-layer3': '结算层',
    'framework-layer3-desc':
      '多链支持（Base/Arbitrum/Polygon/Solana）- 支持跨链资产转移和高效交易执行',
    'framework-layer4': '安全层',
    'framework-layer4-desc':
      'zk-SNARKs、全同态加密、分布式密钥管理 - 底层加密保护，确保用户隐私和资金安全',

    'token-title': '代币经济学：$EDGE价值闭环',
    'token-utility-title': '代币用途',
    'token-util-1': '治理权：持有者投票决定协议参数（如AA交易手续费率）',
    'token-util-2': '质押收益：质押$EDGE可获得平台收入分红',
    'token-util-3':
      '功能解锁：支付$EDGE享受高级功能（跨链桥优先通道、独家AI模型）',
    'token-util-4':
      '<strong>生态流通：</strong>作为交易、奖励和漏洞赏金的核心代币',
    'token-distribution-title': '分配机制',
    'token-supply': '$EDGE总供应量：10,000,000,000（100亿）',
    'token-dist-1': '社区激励：45%（流动性挖矿、早期用户空投）',
    'token-dist-2': '生态发展：25%（合作伙伴、开发者资助）',
    'token-dist-3': '团队与顾问：15%（4年线性解锁）',
    'token-dist-4': '公开销售：12.5%',
    'token-dist-5': '私募天使：2.5%',
    'token-deflation-title': '通缩机制',
    'token-deflation-1':
      '<strong>交易手续费回购：</strong>每笔AA交易的1%手续费用于回购销毁$EDGE',
    'token-deflation-2':
      '<strong>预测市场销毁：</strong>预测市场失败预测的部分资金进入销毁池',
    'token-deflation-desc':
      '每笔AA交易的1%手续费用于回购销毁$EDGE。预测市场失败预测的部分资金进入销毁池。',

    // Table headers
    'table-layer': '层级',
    'table-description': '描述',
    'table-allocation': '分配',
    'table-percentage': '百分比',
    'table-purpose': '用途',
    'roadmap-q1q2':
      'ZChat Beta版上线（支持中英双语） · AA测试网部署（以太坊主网） · 社区建设启动 · 协议集成（X402、ERC-8004）',
    'roadmap-q2': '预测市场聚合器MVP上线 · 多链结算支持 · RWA代币化引入',
    'roadmap-q3': 'ZK-SNARKs和FHE实施 · Robotic Beta推出 · 社区测试和优化',
    'roadmap-q3q4':
      '主网启动 · 全球金融科技合作伙伴关系 · $EDGE代币生成事件和空投',
    'roadmap-beyond': '基于反馈的功能迭代 · DAO治理引入 · Web3-AI融合探索',
    'risks-title': '风险与应对',
    'risks-regulatory-title': '监管风险',
    'risks-regulatory-desc':
      '应对：采用渐进式去中心化，初期保留紧急暂停开关，与友好司法区（如瑞士、新加坡）合作。',
    'risks-tech-title': '技术风险',
    'risks-tech-desc':
      '智能合约漏洞：多家审计公司（CertiK、Trail of Bits）审计，设立漏洞赏金计划。AI幻觉问题：AA所有关键决策需人类二次确认（可在设置中调整自动化程度）。',
    'risks-market-title': '市场竞争',
    'risks-market-desc':
      '差异化：现有项目多为单一功能（如Fetch.ai专注AI Agent，Polymarket仅做预测），边桥是形成生态循环的全栈解决方案。',
    'conclusion-title': '结语：站在金融秩序重构的十字路口',
    'conclusion-p1':
      '边桥不是投机工具，而是金融民主化的基础设施。正如互联网让信息自由流动，边桥致力于让财富管理的智能与隐私成为每个人的基本权利。',
    'conclusion-p2':
      '在美元霸权崩塌与新秩序建立之间的混沌期，我们邀请每一位用户成为自己财富的主权者——通过教育武装头脑，通过AI延伸能力，通过加密守护安全。',
    'vision-title': '边桥的愿景：',
    'vision-text':
      '当历史学家回顾21世纪20年代的金融变革时，他们会看到一群普通人如何利用技术穿越黑暗森林，在旧世界的废墟上建立了真正属于个体的金融自由。',
    disclaimer:
      '免责声明：本轻皮书仅供信息参考，不构成投资建议。加密货币投资存在极高风险，请根据自身情况谨慎决策。',
  },
};

// Language switch function
function switchLanguage(lang) {
  currentLang = lang;

  // Save language preference to localStorage
  localStorage.setItem('preferredLanguage', lang);

  // Update HTML lang attribute
  document.getElementById('html-root').lang = lang === 'zh' ? 'zh-CN' : 'en';

  // Update active state
  document.querySelectorAll('.lang-option').forEach((option) => {
    option.classList.remove('active');
    if (
      (lang === 'en' && option.textContent === 'EN') ||
      (lang === 'zh' && option.textContent === '中文')
    ) {
      option.classList.add('active');
    }
  });

  // Update all translatable elements
  document.querySelectorAll('[data-lang]').forEach((element) => {
    const key = element.getAttribute('data-lang');
    if (translations[lang]?.[key]) {
      if (
        element.innerHTML.includes('<br') ||
        element.innerHTML.includes('<strong')
      ) {
        element.innerHTML = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  // Update page title
  if (window.location.pathname.includes('litepaper')) {
    document.title =
      lang === 'zh'
        ? '边桥轻皮书 - 下一代去中心化金融基础设施'
        : 'EdgeBridge Litepaper - Next-Generation DeFi Infrastructure';
  } else {
    document.title =
      lang === 'zh'
        ? '边桥 EdgeBridge - 连接未来金融的去中心化桥梁'
        : 'EdgeBridge - The Decentralized Bridge to Future Finance';
  }
}

// Initialize language from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang) {
    switchLanguage(savedLang);
  }
});

// Helper function to navigate while preserving language preference
function navigateWithLang(url) {
  // Language is already saved in localStorage by switchLanguage
  // Just navigate to the new page
  window.location.href = url;
}
