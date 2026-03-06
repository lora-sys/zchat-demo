/**
 * 知识库数据导入脚本
 * 使用 Jina AI 生成向量，导入到 Supabase pgvector
 * 
 * 运行方式: npx tsx --env-file=.env.local scripts/ingest-knowledge.ts
 */

import 'dotenv/config'

const JINA_API_URL = 'https://api.jina.ai/v1/embeddings'
const JINA_API_KEY = process.env.JINA_API_KEY!
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!

// 测试知识库数据
const KNOWLEDGE_DATA = [
  {
    title: '比特币简介',
    content: '比特币（Bitcoin）是世界上第一个去中心化的加密货币，由中本聪于2008年提出，2009年正式上线。比特币基于区块链技术，采用工作量证明（PoW）共识机制，总量上限为2100万枚。比特币被许多人视为"数字黄金"，是价值储存和抗通胀的重要工具。',
    category: '基础概念'
  },
  {
    title: '以太坊是什么',
    content: '以太坊（Ethereum）是一个开源的区块链平台，支持智能合约功能。由Vitalik Buterin于2013年提出，2015年上线。以太坊的原生代币是以太币（ETH）。与比特币不同，以太坊不仅是加密货币，更是一个可编程的区块链平台，开发者可以在其上构建去中心化应用（DApp）。',
    category: '基础概念'
  },
  {
    title: 'DeFi 去中心化金融',
    content: 'DeFi（Decentralized Finance）即去中心化金融，是指基于区块链技术构建的金融服务体系。DeFi 不依赖传统金融机构，而是通过智能合约实现借贷、交易、保险等金融服务。主要应用包括：去中心化交易所（DEX）、借贷协议、稳定币、流动性挖矿等。',
    category: 'DeFi'
  },
  {
    title: '智能合约基础',
    content: '智能合约是一种运行在区块链上的自动执行程序，当满足预设条件时会自动执行合约条款。智能合约具有不可篡改、透明公开、自动执行等特点。以太坊是最流行的智能合约平台，使用Solidity语言编写合约。智能合约广泛应用于DeFi、NFT、DAO等领域。',
    category: '技术概念'
  },
  {
    title: '加密货币钱包类型',
    content: '加密货币钱包分为热钱包和冷钱包两大类。热钱包连接互联网，使用方便但安全性较低，适合日常小额交易，如MetaMask、Trust Wallet。冷钱包离线存储，安全性高，适合长期存储大额资产，如Ledger、Trezor硬件钱包。选择钱包需要平衡安全性和便利性。',
    category: '实用知识'
  },
  {
    title: '什么是Gas费',
    content: 'Gas费是在以太坊等区块链网络上执行交易或智能合约所需支付的费用。Gas费由Gas Limit（执行上限）和Gas Price（单价）决定。网络拥堵时Gas费会上涨。EIP-1559升级后，Gas费分为基础费用和小费两部分，基础费用会被销毁。',
    category: '技术概念'
  },
  {
    title: '流动性挖矿原理',
    content: '流动性挖矿（Yield Farming）是DeFi中获取收益的方式。用户将加密资产存入流动性池，为交易对提供流动性，从而获得交易手续费分成和代币奖励。主要风险包括：无常损失、智能合约漏洞、代币价格波动。常见的流动性挖矿平台有Uniswap、Aave、Compound等。',
    category: 'DeFi'
  },
  {
    title: '稳定币分类',
    content: '稳定币是一种价值相对稳定的加密货币，通常与法币（如美元）挂钩。主要分为三类：1) 法币抵押型，如USDT、USDC，由美元储备支撑；2) 加密资产抵押型，如DAI，由ETH等加密资产超额抵押；3) 算法稳定币，通过算法调节供需维持价格稳定。',
    category: 'DeFi'
  },
  {
    title: 'NFT 非同质化代币',
    content: 'NFT（Non-Fungible Token）是非同质化代币，每个NFT都是独一无二的，不可互换。NFT使用区块链技术确权，常用于数字艺术品、收藏品、游戏道具等领域。以太坊的ERC-721和ERC-1155是主要的NFT标准。NFT市场包括OpenSea、Blur、Magic Eden等。',
    category: 'Web3'
  },
  {
    title: 'DAO 去中心化自治组织',
    content: 'DAO（Decentralized Autonomous Organization）是去中心化自治组织，通过智能合约实现组织治理。DAO没有中心化的管理层，代币持有者通过投票参与决策。主要应用包括：协议治理、资金管理、社区运营。知名DAO有Uniswap DAO、Aave DAO、MakerDAO等。',
    category: 'Web3'
  }
]

interface JinaResponse {
  data: Array<{ embedding: number[] }>
  usage: { total_tokens: number }
}

async function getEmbedding(text: string): Promise<number[]> {
  const response = await fetch(JINA_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${JINA_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'jina-embeddings-v3',
      input: [text],
      task: 'retrieval.passage',
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Jina API error: ${response.status} - ${error}`)
  }

  const data: JinaResponse = await response.json()
  return data.data[0].embedding
}

async function insertToSupabase(
  title: string,
  content: string,
  embedding: number[],
  category: string
) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/knowledge_base`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
      'Content-Type': 'application/json',
      'apikey': SUPABASE_SERVICE_KEY,
      'Prefer': 'return=minimal',
    },
    body: JSON.stringify({
      content: `${title}\n\n${content}`,
      embedding,
      metadata: { title, category },
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Supabase error: ${response.status} - ${error}`)
  }
}

async function main() {
  console.log('开始导入知识库数据...\n')
  console.log(`数据源: ${KNOWLEDGE_DATA.length} 条\n`)

  // 检查环境变量
  if (!JINA_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    console.error('错误: 缺少必要的环境变量')
    console.error('需要: JINA_API_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY')
    process.exit(1)
  }

  for (let i = 0; i < KNOWLEDGE_DATA.length; i++) {
    const item = KNOWLEDGE_DATA[i]
    console.log(`[${i + 1}/${KNOWLEDGE_DATA.length}] 处理: ${item.title}`)

    try {
      // 生成向量
      const textToEmbed = `${item.title}\n${item.content}`
      const embedding = await getEmbedding(textToEmbed)
      console.log(`  ✓ 向量生成成功 (维度: ${embedding.length})`)

      // 插入数据库
      await insertToSupabase(item.title, item.content, embedding, item.category)
      console.log(`  ✓ 数据插入成功\n`)

      // 避免 API 限流
      await new Promise(resolve => setTimeout(resolve, 500))
    } catch (error) {
      console.error(`  ✗ 错误: ${error}\n`)
    }
  }

  console.log('导入完成!')
}

main()
