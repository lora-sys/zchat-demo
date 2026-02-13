export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}
export const models: Array<Model> = [
  {
    id: 'deepseek-v3.2',
    label: 'DeepSeek V3.2',
    apiIdentifier: 'deepseek-v3.2',  // iFlow 上的模型ID
    description: '最新版本，快速且智能',
  },
  {
    id: 'deepseek-v3',
    label: 'DeepSeek V3',
    apiIdentifier: 'deepseek-v3',
    description: '速度最快，适合实时对话',
  },
  {
    id: 'deepseek-r1',
    label: 'DeepSeek R1',
    apiIdentifier: 'deepseek-r1',
    description: '深度推理，复杂分析场景',
  },
] as const;
export const DEFAULT_MODEL_NAME: string = 'deepseek-v3.2';