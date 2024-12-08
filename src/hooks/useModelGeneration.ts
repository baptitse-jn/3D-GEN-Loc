import { useState } from 'react';
import { ModelGenerationOptions } from '../types/generator';

export const useModelGeneration = () => {
  const [model, setModel] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateModel = async (options: ModelGenerationOptions) => {
    setIsGenerating(true);
    try {
      // Simulation de l'appel API (à remplacer par l'intégration réelle)
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Pour le moment, on utilise un modèle de démonstration
      setModel('/demo-model.glb');
    } catch (error) {
      console.error('Erreur lors de la génération:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    model,
    isGenerating,
    generateModel
  };
};