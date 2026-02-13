import { Message } from 'ai';
export function compressContext(messages: Message[]): Message[] {
  if (messages.length <= 14) return messages; // 少于 14 条不压缩
  
  const systemMessage = messages[0];
  
  // 保留最近 6 轮对话（12 条）
  const recentMessages = messages.slice(-12);
  
  // 提取关键工具结果
  const toolResults = messages.filter(m => 
    m.role === 'assistant' && 
    m.toolInvocations?.some(t => t.state === 'result')
  ).slice(-2); // 保留最近 2 个工具结果
  
  return [systemMessage, ...toolResults, ...recentMessages];
}