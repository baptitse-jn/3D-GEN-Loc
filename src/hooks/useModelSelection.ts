import { useState, useEffect } from 'react';
import { Model } from '../types/models';
import { availableModels } from '../data/models';

export const useModelSelection = () => {
  const [selectedModel, setSelectedModel] = useState<Model>(() => {
    const savedModelId = localStorage.getItem('selectedModelId');
    return (
      availableModels.find(model => model.id === savedModelId) ||
      availableModels[0]
    );
  });

  useEffect(() => {
    localStorage.setItem('selectedModelId', selectedModel.id);
  }, [selectedModel]);

  return {
    selectedModel,
    setSelectedModel,
  };
};