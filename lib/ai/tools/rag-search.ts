import { tool } from 'ai'
import { z } from 'zod'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

interface SearchResult {
  id: number
  content: string
  metadata: {
    title: string
    category: string
  }
  similarity: number
}

export const ragSearch = tool({
  description: '搜索知识库。当用户询问加密货币、区块链、DeFi、Web3等概念性问题时调用此工具获取相关知识。',
  parameters: z.object({
    query: z.string().describe('用户问题'),
    topK: z.number().optional().default(3).describe('返回结果数量'),
  }),
  execute: async ({ query, topK = 3 }) => {
    try {
      const response = await fetch(
        `${SUPABASE_URL}/functions/v1/rag-search`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ query, topK }),
        }
      )

      if (!response.ok) {
        throw new Error(`RAG search failed: ${response.status}`)
      }

      const results: SearchResult[] = await response.json()

      // 格式化结果供 LLM 使用
      const formattedResults = results.map((r, i) => ({
        rank: i + 1,
        title: r.metadata.title,
        category: r.metadata.category,
        content: r.content,
        relevance: Math.round(r.similarity * 100),
      }))

      return {
        success: true,
        query,
        results: formattedResults,
        total: results.length,
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error'
      return {
        success: false,
        error: message,
        results: [],
      }
    }
  },
})
