import { useState, useEffect } from 'react';
import { ApiKeyStore } from '../types/api';

export const useApiKeys = () => {
  const [apiKeys, setApiKeys] = useState<ApiKeyStore>({});

  useEffect(() => {
    const storedKeys = localStorage.getItem('apiKeys');
    if (storedKeys) {
      setApiKeys(JSON.parse(storedKeys));
    }
  }, []);

  const saveApiKey = (id: string, key: string) => {
    const updatedKeys = { ...apiKeys, [id]: key };
    setApiKeys(updatedKeys);
    localStorage.setItem('apiKeys', JSON.stringify(updatedKeys));
  };

  const deleteApiKey = (id: string) => {
    const updatedKeys = { ...apiKeys };
    delete updatedKeys[id];
    setApiKeys(updatedKeys);
    localStorage.setItem('apiKeys', JSON.stringify(updatedKeys));
  };

  const getApiKey = (id: string) => apiKeys[id] || '';

  return {
    apiKeys,
    saveApiKey,
    deleteApiKey,
    getApiKey
  };
};