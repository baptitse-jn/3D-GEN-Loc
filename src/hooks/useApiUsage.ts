import { useState, useEffect } from 'react';
import { useApiKeys } from './useApiKeys';

interface ApiUsageData {
  currentUsage: number;
  limit: number;
  currentCost: number;
  estimatedCost: number;
}

interface ApiUsageStore {
  totalUsage: number;
  totalCost: number;
  remainingCredits: number;
  apiUsage: { [key: string]: ApiUsageData };
}

const defaultUsageData: ApiUsageData = {
  currentUsage: 0,
  limit: 0,
  currentCost: 0,
  estimatedCost: 0
};

export const useApiUsage = () => {
  const { apiKeys } = useApiKeys();
  const [usageData, setUsageData] = useState<ApiUsageStore>(() => {
    const saved = localStorage.getItem('apiUsage');
    return saved ? JSON.parse(saved) : {
      totalUsage: 0,
      totalCost: 0,
      remainingCredits: 0,
      apiUsage: {}
    };
  });

  useEffect(() => {
    localStorage.setItem('apiUsage', JSON.stringify(usageData));
  }, [usageData]);

  const updateUsageData = (newData: Partial<ApiUsageStore>) => {
    setUsageData(prev => ({
      ...prev,
      ...newData
    }));
  };

  const getApiUsage = (apiId: string): ApiUsageData => {
    return usageData.apiUsage[apiId] || defaultUsageData;
  };

  const resetUsageData = () => {
    setUsageData({
      totalUsage: 0,
      totalCost: 0,
      remainingCredits: 0,
      apiUsage: {}
    });
  };

  // Réinitialiser les données si aucune clé API n'est configurée
  useEffect(() => {
    if (Object.keys(apiKeys).length === 0) {
      resetUsageData();
    }
  }, [apiKeys]);

  return {
    totalUsage: usageData.totalUsage,
    totalCost: usageData.totalCost,
    remainingCredits: usageData.remainingCredits,
    getApiUsage,
    updateUsageData,
    resetUsageData
  };
};