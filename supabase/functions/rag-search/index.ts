const JINA_API_URL = 'https://api.jina.ai/v1/embeddings'
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')
const JINA_API_KEY = Deno.env.get('JINA_API_KEY')

interface JinaResponse {
  data: Array<{ embedding: number[] }>
}

interface SearchResult {
  id: string
  content: string
  metadata: Record<string, unknown>
  similarity: number
}

async function getEmbedding(text: string): Promise<number[]> {
  if (!JINA_API_KEY) {
    throw new Error('JINA_API_KEY not configured')
  }

  const response = await fetch(JINA_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${JINA_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'jina-embeddings-v3',
      input: [text],
      task: 'retrieval.query',
    }),
  })

  if (!response.ok) {
    throw new Error(`Jina API error: ${response.status}`)
  }

  const data: JinaResponse = await response.json()
  return data.data[0].embedding
}

async function searchSimilarChunks(embedding: number[], limit: number): Promise<SearchResult[]> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error('Supabase not configured')
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/match_knowledge`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
      'apikey': SUPABASE_ANON_KEY,
    },
    body: JSON.stringify({
      query_embedding: embedding,
      match_threshold: 0.7,
      match_count: limit,
    }),
  })

  if (!response.ok) {
    throw new Error(`Supabase RPC error: ${response.status}`)
  }

  return await response.json()
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  }

  try {
    const { query, topK = 5 } = await req.json()

    if (!query) {
      return new Response(
        JSON.stringify({ error: 'query is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const embedding = await getEmbedding(query)
    const results = await searchSimilarChunks(embedding, topK)

    return new Response(
      JSON.stringify(results),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
})
