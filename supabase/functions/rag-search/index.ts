
const JINA_API_URL = 'https://api.jina.ai/v1/embeddings'
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!

interface JinaResponse {
  data: Array<{ embedding: number[] }>
}

async function getEmbedding(text: string): Promise<number[]> {
  const response = await fetch(JINA_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Deno.env.get('JINA_API_KEY')}`
    },
    body: JSON.stringify({
      model: "jina-embeddings-v3",
      input: [text],
      task: 'retrieval.query'
    })
  })

  const data: JinaResponse = await response.json()
  return data.data[0].embedding
}

Deno.serve(async (req) => {
  // 处理跨域请求
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': "POST",
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    })
  }

  try {

    const { query, topK=3} = await req.json()

    // get query vector
    const embedding = await getEmbedding(query)

    // call supabase rpc query

    const supabaseRes = await fetch(
      `${SUPABASE_URL}/rest/v1/rpc/match_knowledge`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        }
        ,
        body: JSON.stringify({
          query_embedding: embedding,
          match_count: topK
        })
      }
    )
    const results =  await supabaseRes.json()

    // return result
    return new Response(JSON.stringify(results), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })

  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    )
  }


})