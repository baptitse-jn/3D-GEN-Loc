import React, { useState } from 'react';
import { Model, ModelGroup } from '../../types/models';
import { ModelCard } from './ModelCard';
import { modelGroups } from '../../data/models';

interface ModelSelectorProps {
  onModelSelect: (model: Model) => void;
}

export const ModelSelector: React.FC<ModelSelectorProps> = ({ onModelSelect }) => {
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [activeTab, setActiveTab] = useState<'text-to-3d' | 'image-to-3d'>('text-to-3d');

  const handleModelSelect = (model: Model) => {
    setSelectedModel(model);
    onModelSelect(model);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex space-x-4 mb-6">
        {modelGroups.map((group) => (
          <button
            key={group.type}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === group.type
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab(group.type)}
          >
            {group.title}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {modelGroups
          .find(group => group.type === activeTab)
          ?.models.map((model) => (
            <ModelCard
              key={model.id}
              model={model}
              selected={selectedModel?.id === model.id}
              onSelect={handleModelSelect}
            />
          ))}
      </div>
    </div>
  );
};