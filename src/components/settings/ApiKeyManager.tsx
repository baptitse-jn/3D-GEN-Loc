import React, { useState } from 'react';
import { Key, Eye, EyeOff, Trash2, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';
import { apiConfigs } from '../../data/apiConfigs';
import { useApiKeys } from '../../hooks/useApiKeys';

export const ApiKeyManager: React.FC = () => {
  const { apiKeys, saveApiKey, deleteApiKey } = useApiKeys();
  const [showKeys, setShowKeys] = useState<{[key: string]: boolean}>({});
  const [newKey, setNewKey] = useState('');
  const [selectedConfig, setSelectedConfig] = useState(apiConfigs[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newKey && selectedConfig) {
      saveApiKey(selectedConfig.id, newKey);
      setNewKey('');
    }
  };

  const toggleKeyVisibility = (id: string) => {
    setShowKeys(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service
          </label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedConfig.id}
            onChange={(e) => setSelectedConfig(apiConfigs.find(c => c.id === e.target.value) || apiConfigs[0])}
          >
            {apiConfigs.map(config => (
              <option key={config.id} value={config.id}>
                {config.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-sm font-medium text-gray-700">
              Clé API
            </label>
            {selectedConfig.docLink && (
              <a
                href={selectedConfig.docLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:text-blue-600 flex items-center"
              >
                Documentation
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            )}
          </div>
          <input
            type="text"
            value={newKey}
            onChange={(e) => setNewKey(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder={selectedConfig.placeholder}
          />
          <p className="mt-1 text-sm text-gray-500">{selectedConfig.helpText}</p>
        </div>

        <Button type="submit" className="w-full">
          <Key className="w-4 h-4 mr-2" />
          Enregistrer la clé API
        </Button>
      </form>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Clés API configurées</h3>
        <div className="space-y-4">
          {apiConfigs.map(config => {
            const apiKey = apiKeys[config.id];
            return (
              <div key={config.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{config.name}</h4>
                    <p className="text-sm text-gray-600">{config.description}</p>
                  </div>
                  {apiKey && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => toggleKeyVisibility(config.id)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        {showKeys[config.id] ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                      <button
                        onClick={() => deleteApiKey(config.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
                {apiKey ? (
                  <div className="mt-2">
                    <code className="text-sm">
                      {showKeys[config.id] ? apiKey : '••••••••••••••••'}
                    </code>
                  </div>
                ) : (
                  <p className="mt-2 text-sm text-orange-500">
                    Clé API non configurée
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};