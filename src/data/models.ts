import { Model, ModelGroup } from '../types/models';

export const textTo3DModels: Model[] = [
  {
    id: 'hunyuan3d-1',
    name: 'Hunyuan3D-1',
    type: 'text-to-3d',
    provider: 'Tencent',
    downloads: 2300,
    likes: 237,
    lastUpdate: '15 days ago',
  },
  {
    id: 'llama-mesh',
    name: 'LLaMA-Mesh',
    type: 'text-to-3d',
    provider: 'Zhengyi',
    downloads: 5540,
    likes: 85,
    lastUpdate: '1 day ago',
  },
  {
    id: 'shap-e',
    name: 'Shap-E',
    type: 'text-to-3d',
    provider: 'OpenAI',
    downloads: 35000,
    likes: 200,
    lastUpdate: 'Dec 11, 2023',
  },
  // ... autres modèles text-to-3d
];

export const imageTo3DModels: Model[] = [
  {
    id: 'trellis-large',
    name: 'TRELLIS-image-large',
    type: 'image-to-3d',
    provider: 'JeffreyXiang',
    downloads: 0,
    likes: 55,
    lastUpdate: '2 days ago',
  },
  {
    id: 'stable-fast-3d',
    name: 'Stable Fast 3D',
    type: 'image-to-3d',
    provider: 'StabilityAI',
    downloads: 8300,
    likes: 492,
    lastUpdate: 'Aug 2',
  },
  {
    id: 'dimensionx',
    name: 'DimensionX',
    type: 'image-to-3d',
    provider: 'Wenqsun',
    downloads: 0,
    likes: 53,
    lastUpdate: '23 days ago',
  },
  // ... autres modèles image-to-3d
];

export const modelGroups: ModelGroup[] = [
  {
    type: 'text-to-3d',
    title: 'Texte vers 3D',
    models: textTo3DModels,
  },
  {
    type: 'image-to-3d',
    title: 'Image vers 3D',
    models: imageTo3DModels,
  },
];