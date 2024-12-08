export interface ModelGenerationOptions {
  prompt: string;
  style: 'realistic' | 'stylized' | 'lowpoly' | 'abstract';
  complexity: 'simple' | 'medium' | 'complex';
  format: 'gltf' | 'obj' | 'fbx';
}