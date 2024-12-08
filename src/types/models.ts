export interface Model {
  id: string;
  name: string;
  type: 'text-to-3d' | 'image-to-3d';
  provider: string;
  downloads: number;
  likes: number;
  lastUpdate: string;
  description?: string;
}

export interface ModelGroup {
  type: 'text-to-3d' | 'image-to-3d';
  title: string;
  models: Model[];
}