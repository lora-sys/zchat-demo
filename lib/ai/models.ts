export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'kimi-k2',
    label: 'Kimi K2',
    apiIdentifier: 'kimi-k2',
    description: '长上下文，多轮对话首选',
  },
  {
    id: 'glm-4.6',
    label: 'GLM-4.6',
    apiIdentifier: 'glm-4.6',
    description: '中文优化，性价比高',
  },
  {
    id: 'qwen3-max',
    label: 'Qwen3 Max',
    apiIdentifier: 'qwen3-max',
    description: '综合能力强',
  },
  {
    id: 'deepseek-v3',
    label: 'DeepSeek V3',
    apiIdentifier: 'deepseek-v3',
    description: '速度最快，适合实时对话',
  },
] as const;

export const DEFAULT_MODEL_NAME = 'qwen3-max';
