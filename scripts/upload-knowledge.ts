/**
 * 知识库批量上传脚本
 * 支持从文件或目录导入知识到 Supabase
 * 使用递归字符分块，保持语义完整性
 * 
 * 使用方式:
 *   npx tsx --env-file=.env.local scripts/upload-knowledge.ts <文件路径或目录>
 */

import 'dotenv/config'
import * as fs from 'fs'
import * as path from 'path'

const JINA_API_URL = 'https://api.jina.ai/v1/embeddings'
const JINA_API_KEY = process.env.JINA_API_KEY!
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!

// 分块配置
const CHUNK_CONFIG = {
  chunkSize: 500,      // 目标块大小（字符）
  chunkOverlap: 50,    // 块之间重叠字符数
  minLength: 100,      // 最小块大小
  maxLength: 1000,     // 最大块大小
}

interface KnowledgeItem {
  title: string
  content: string
  category: string
}

interface JinaResponse {
  data: Array<{ embedding: number[] }>
}

// ============ 递归字符分块器 ============
class RecursiveCharacterTextSplitter {
  private separators: string[]
  private chunkSize: number
  private chunkOverlap: number
  private minLength: number
  private maxLength: number

  constructor(config = CHUNK_CONFIG) {
    // 分隔符优先级：段落 > 句子 > 短语 > 词 > 字符
    this.separators = ['\n\n', '\n', '。', '！', '？', '.', '!', '?', '；', ';', '，', ',', ' ', '']
    this.chunkSize = config.chunkSize
    this.chunkOverlap = config.chunkOverlap
    this.minLength = config.minLength
    this.maxLength = config.maxLength
  }

  splitText(text: string): string[] {
    return this._splitTextRecursive(text, this.separators)
  }

  private _splitTextRecursive(text: string, separators: string[]): string[] {
    // 如果文本足够小，直接返回
    if (text.length <= this.chunkSize) {
      return text.length >= this.minLength ? [text] : []
    }

    // 找到合适的分隔符
    let separator = separators[separators.length - 1]
    for (const sep of separators) {
      if (sep === '' || text.includes(sep)) {
        separator = sep
        break
      }
    }

    // 按分隔符分割
    const splits = this._splitBySeparator(text, separator)
    
    // 如果分割后每块都太大，用下一个分隔符
    if (splits.length === 1 && splits[0].length > this.maxLength && separators.length > 1) {
      const nextSeparators = separators.slice(separators.indexOf(separator) + 1)
      if (nextSeparators.length > 0) {
        return this._splitTextRecursive(text, nextSeparators)
      }
    }

    // 合并小块为大块
    return this._mergeSplits(splits, separator)
  }

  private _splitBySeparator(text: string, separator: string): string[] {
    if (separator === '') {
      return text.split('')
    }
    // 保留分隔符在分割后的文本中
    const splits = text.split(separator)
    return splits.map((s, i) => {
      if (i < splits.length - 1 && separator !== ' ') {
        return s + separator
      }
      return s
    }).filter(s => s.trim())
  }

  private _mergeSplits(splits: string[], separator: string): string[] {
    const chunks: string[] = []
    let currentChunk: string[] = []
    let currentLength = 0

    for (const split of splits) {
      const splitLength = split.length

      // 如果单个 split 就超过了最大长度，需要递归分割
      if (splitLength > this.maxLength) {
        // 先保存当前块
        if (currentChunk.length > 0) {
          chunks.push(currentChunk.join('').trim())
          currentChunk = []
          currentLength = 0
        }
        // 递归处理过大的 split
        const subChunks = this._splitTextRecursive(split, this.separators)
        chunks.push(...subChunks)
        continue
      }

      // 检查是否需要开始新块
      if (currentLength + splitLength > this.chunkSize && currentChunk.length > 0) {
        chunks.push(currentChunk.join('').trim())
        
        // 重叠处理：保留最后部分内容
        const overlapText = currentChunk.join('').slice(-this.chunkOverlap)
        currentChunk = overlapText ? [overlapText] : []
        currentLength = overlapText.length
      }

      currentChunk.push(split)
      currentLength += splitLength
    }

    // 保存最后一块
    if (currentChunk.length > 0) {
      const lastChunk = currentChunk.join('').trim()
      if (lastChunk.length >= this.minLength) {
        chunks.push(lastChunk)
      }
    }

    return chunks.filter(c => c.length >= this.minLength && c.length <= this.maxLength)
  }
}

// ============ 文件解析 ============
const splitter = new RecursiveCharacterTextSplitter()

function parseFile(filePath: string): KnowledgeItem[] {
  const content = fs.readFileSync(filePath, 'utf-8')
  const ext = path.extname(filePath).toLowerCase()
  const fileName = path.basename(filePath, ext)

  // JSON 文件：直接解析
  if (ext === '.json') {
    const data = JSON.parse(content)
    if (Array.isArray(data)) {
      return data.flatMap(item => createChunks(item.title || 'Untitled', item.content || item.text || '', item.category || 'general'))
    }
    return createChunks(data.title || fileName, data.content || data.text || content, data.category || 'general')
  }

  // Markdown 文件：提取标题后分块
  if (ext === '.md' || ext === '.markdown') {
    return parseMarkdownWithChunking(content, fileName)
  }

  // TXT 和其他格式：直接分块
  return createChunks(fileName, content, 'general')
}

// Markdown 解析：保留标题结构
function parseMarkdownWithChunking(content: string, defaultTitle: string): KnowledgeItem[] {
  const lines = content.split('\n')
  const items: KnowledgeItem[] = []
  let currentTitle = defaultTitle
  let currentContent: string[] = []
  let currentCategory = 'general'

  const flushContent = () => {
    if (currentContent.length > 0) {
      const text = currentContent.join('\n').trim()
      items.push(...createChunks(currentTitle, text, currentCategory))
      currentContent = []
    }
  }

  for (const line of lines) {
    // 检测标题
    if (line.startsWith('# ')) {
      flushContent()
      currentTitle = line.slice(2).trim()
    }
    else if (line.startsWith('## ')) {
      // 二级标题作为新块的开始，但保留上级标题信息
      flushContent()
      currentTitle = `${currentTitle} - ${line.slice(3).trim()}`
    }
    // 检测分类标记
    else if (line.includes('<!-- category:')) {
      const match = line.match(/<!-- category:\s*(\w+)\s*-->/)
      if (match) {
        currentCategory = match[1]
      }
    }
    else {
      currentContent.push(line)
    }
  }

  flushContent()
  return items
}

// 创建分块
function createChunks(title: string, content: string, category: string): KnowledgeItem[] {
  const chunks = splitter.splitText(content)
  
  if (chunks.length === 0) {
    return []
  }

  // 如果只有一个块，直接返回
  if (chunks.length === 1) {
    return [{ title, content: chunks[0], category }]
  }

  // 多个块时，添加编号
  return chunks.map((chunk, index) => ({
    title: chunks.length > 1 ? `${title} (第${index + 1}/${chunks.length}部分)` : title,
    content: chunk,
    category,
  }))
}

// ============ 向量和存储 ============
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

async function insertToSupabase(item: KnowledgeItem): Promise<boolean> {
  try {
    const textToEmbed = `${item.title}\n${item.content}`
    const embedding = await getEmbedding(textToEmbed)

    const response = await fetch(`${SUPABASE_URL}/rest/v1/knowledge_base`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
        'Content-Type': 'application/json',
        'apikey': SUPABASE_SERVICE_KEY,
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({
        content: `${item.title}\n\n${item.content}`,
        embedding,
        metadata: { title: item.title, category: item.category },
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error(`  ✗ Supabase error: ${error}`)
      return false
    }

    return true
  } catch (error) {
    console.error(`  ✗ Error: ${error}`)
    return false
  }
}

// ============ 目录处理 ============
function processDirectory(dirPath: string): string[] {
  const files: string[] = []
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)
    if (entry.isDirectory()) {
      files.push(...processDirectory(fullPath))
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase()
      if (['.md', '.markdown', '.txt', '.json'].includes(ext)) {
        files.push(fullPath)
      }
    }
  }

  return files
}

// ============ 主函数 ============
async function main() {
  const inputPath = process.argv[2]

  if (!inputPath) {
    console.log('用法: npx tsx --env-file=.env.local scripts/upload-knowledge.ts <文件或目录>')
    console.log('')
    console.log('支持的格式: .md, .txt, .json')
    console.log('')
    console.log('分块配置:')
    console.log(`  目标块大小: ${CHUNK_CONFIG.chunkSize} 字符`)
    console.log(`  块重叠: ${CHUNK_CONFIG.chunkOverlap} 字符`)
    console.log(`  最小块: ${CHUNK_CONFIG.minLength} 字符`)
    console.log(`  最大块: ${CHUNK_CONFIG.maxLength} 字符`)
    console.log('')
    console.log('示例:')
    console.log('  npx tsx --env-file=.env.local scripts/upload-knowledge.ts ./docs/guide.md')
    console.log('  npx tsx --env-file=.env.local scripts/upload-knowledge.ts ./knowledge/')
    process.exit(1)
  }

  // 检查环境变量
  if (!JINA_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    console.error('错误: 缺少必要的环境变量')
    process.exit(1)
  }

  // 收集文件
  let files: string[] = []
  if (fs.statSync(inputPath).isDirectory()) {
    files = processDirectory(inputPath)
    console.log(`📁 扫描目录: ${inputPath}`)
    console.log(`📄 找到 ${files.length} 个文件\n`)
  } else {
    files = [inputPath]
  }

  // 解析所有知识
  let allItems: KnowledgeItem[] = []
  for (const file of files) {
    console.log(`📖 解析: ${file}`)
    const items = parseFile(file)
    console.log(`   → 生成 ${items.length} 个知识块`)
    allItems = allItems.concat(items)
  }

  console.log(`\n📊 共计 ${allItems.length} 个知识块待导入\n`)

  // 逐条导入
  let success = 0
  let failed = 0

  for (let i = 0; i < allItems.length; i++) {
    const item = allItems[i]
    const shortTitle = item.title.length > 30 ? item.title.slice(0, 30) + '...' : item.title
    console.log(`[${i + 1}/${allItems.length}] ${shortTitle} (${item.content.length}字)`)

    const result = await insertToSupabase(item)
    if (result) {
      console.log(`  ✓ 导入成功`)
      success++
    } else {
      failed++
    }

    // 避免 API 限流
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  console.log(`\n✅ 导入完成: 成功 ${success}, 失败 ${failed}`)
}

main().catch(console.error)
