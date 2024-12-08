import { useState, useEffect } from 'react';

interface GenerationHistoryItem {
  id: string;
  modelName: string;
  prompt: string;
  type: 'text-to-3d' | 'image-to-3d';
  resolution: string;
  steps: number;
  date: string;
  modelUrl: string;
}

export const useGenerationHistory = () => {
  const [history, setHistory] = useState<GenerationHistoryItem[]>(() => {
    const savedHistory = localStorage.getItem('generationHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    localStorage.setItem('generationHistory', JSON.stringify(history));
  }, [history]);

  const addToHistory = (item: Omit<GenerationHistoryItem, 'id' | 'date'>) => {
    const newItem = {
      ...item,
      id: crypto.randomUUID(),
      date: new Date().toLocaleString('fr-FR'),
    };
    setHistory(prev => [newItem, ...prev]);
  };

  const removeFromHistory = (id: string) => {
    setHistory(prev => prev.filter(item => item.id !== id));
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return {
    history,
    addToHistory,
    removeFromHistory,
    clearHistory
  };
};