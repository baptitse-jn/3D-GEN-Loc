import { ApiKeyConfig } from '../types/api';

export const apiConfigs: ApiKeyConfig[] = [
  {
    id: 'huggingface',
    name: 'Hugging Face API',
    provider: 'Hugging Face',
    description: 'Accès aux modèles Text-to-3D et Image-to-3D de Hugging Face',
    required: true,
    placeholder: 'hf_...',
    helpText: 'Nécessaire pour Shap-E, LLaMA-Mesh et autres modèles hébergés sur Hugging Face',
    docLink: 'https://huggingface.co/settings/tokens'
  },
  {
    id: 'tencent',
    name: 'Tencent API',
    provider: 'Tencent',
    description: 'Accès au modèle Hunyuan3D-1',
    required: true,
    placeholder: 'tcnt_...',
    helpText: 'Requis pour utiliser le modèle Hunyuan3D-1',
    docLink: 'https://cloud.tencent.com/document/product/1155/48126'
  },
  {
    id: 'stabilityai',
    name: 'Stability AI API',
    provider: 'Stability AI',
    description: 'Accès aux modèles de Stability AI',
    required: true,
    placeholder: 'sk-...',
    helpText: 'Nécessaire pour les modèles Stable Fast 3D et TripoSR',
    docLink: 'https://platform.stability.ai/docs/getting-started/authentication'
  },
  {
    id: 'openai',
    name: 'OpenAI API',
    provider: 'OpenAI',
    description: 'Accès au modèle Shap-E',
    required: true,
    placeholder: 'sk-...',
    helpText: 'Requis pour utiliser le modèle Shap-E',
    docLink: 'https://platform.openai.com/api-keys'
  }
];