import React, { useState } from 'react';
import { Box, ChevronDown, Download, Star, Clock, ExternalLink } from 'lucide-react';
import { useApiKeys } from '../../hooks/useApiKeys';
import { Model } from '../../types/models';
import { modelGroups } from '../../data/models';

interface ModelSelectorProps {
  onModelSelect?: (model: Model) => void;
}

export const ModelSelector: React.FC<ModelSelectorProps> = ({ onModelSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const { apiKeys } = useApiKeys();

  const handleModelSelect = (model: Model) => {
    setSelectedModel(model);
    setIsOpen(false);
    if (onModelSelect) {
      onModelSelect(model);
    }
  };

  return (
    <div className="relative">
      {/* Bouton de sélection */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:border-blue-500 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Box className="w-5 h-5 text-blue-500" />
          <div>
            <span className="block font-medium">
              {selectedModel ? selectedModel.name : 'Sélectionner un modèle'}
            </span>
            {selectedModel && (
              <span className="text-sm text-gray-500">{selectedModel.provider}</span>
            )}
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Liste déroulante des modèles */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
          {modelGroups.map((group) => (
            <div key={group.type} className="border-b border-gray-100 last:border-0">
              <div className="px-4 py-2 bg-gray-50">
                <h3 className="font-medium text-gray-700">{group.title}</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {group.models.map((model) => {
                  const hasApiKey = model.provider && apiKeys[model.provider.toLowerCase()];
                  
                  return (
                    <button
                      key={model.id}
                      onClick={() => handleModelSelect(model)}
                      className={`w-full px-4 py-3 flex items-start gap-3 hover:bg-blue-50 transition-colors ${
                        selectedModel?.id === model.id ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <Box className="w-5 h-5 text-blue-500" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{model.name}</span>
                          {model.provider && (
                            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                              {model.provider}
                            </span>
                          )}
                        </div>
                        {model.description && (
                          <p className="text-sm text-gray-600 mt-1">{model.description}</p>
                        )}
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            <span>{model.downloads.toLocaleString()}</span>
                          </div>
                          {model.likes && (
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4" />
                              <span>{model.likes}</span>
                            </div>
                          )}
                          {model.lastUpdate && (
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{model.lastUpdate}</span>
                            </div>
                          )}
                        </div>
                        {!hasApiKey && (
                          <div className="mt-2 flex items-center gap-2 text-sm text-orange-600">
                            <ExternalLink className="w-4 h-4" />
                            <span>Clé API requise - Configurer dans HUB</span>
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};