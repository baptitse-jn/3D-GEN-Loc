import React, { useState } from 'react';
import { Key, Eye, EyeOff } from 'lucide-react';
import { Button } from '../ui/Button';

interface ApiKey {
  name: string;
  key: string;
}

export const ApiKeyForm: React.FC = () => {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [showKeys, setShowKeys] = useState<{[key: string]: boolean}>({});
  const [newKey, setNewKey] = useState({ name: '', key: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newKey.name && newKey.key) {
      setApiKeys([...apiKeys, newKey]);
      setNewKey({ name: '', key: '' });
    }
  };

  const toggleKeyVisibility = (name: string) => {
    setShowKeys(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom de la clé API
          </label>
          <input
            type="text"
            value={newKey.name}
            onChange={(e) => setNewKey({ ...newKey, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="ex: Hugging Face API"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Clé API
          </label>
          <input
            type="text"
            value={newKey.key}
            onChange={(e) => setNewKey({ ...newKey, key: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Entrez votre clé API"
          />
        </div>
        <Button type="submit" className="w-full">
          <Key className="w-4 h-4 mr-2" />
          Ajouter la clé API
        </Button>
      </form>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Clés API enregistrées</h3>
        {apiKeys.length === 0 ? (
          <p className="text-gray-500">Aucune clé API enregistrée</p>
        ) : (
          apiKeys.map((apiKey, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium">{apiKey.name}</span>
                <button
                  onClick={() => toggleKeyVisibility(apiKey.name)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  {showKeys[apiKey.name] ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div className="mt-2">
                <code className="text-sm">
                  {showKeys[apiKey.name] 
                    ? apiKey.key 
                    : '••••••••••••••••'}
                </code>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};