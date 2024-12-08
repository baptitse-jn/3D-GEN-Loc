import React from 'react';
import { ChevronDown, Bot } from 'lucide-react';
import { useModelSelection } from '../../hooks/useModelSelection';
import { availableModels } from '../../data/models';

export const ModelSelector: React.FC = () => {
  const { selectedModel, setSelectedModel } = useModelSelection();

  return (
    <div className="relative">
      <select
        value={selectedModel?.id}
        onChange={(e) => {
          const model = availableModels.find(m => m.id === e.target.value);
          if (model) setSelectedModel(model);
        }}
        className="w-full md:w-72 appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {availableModels.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </div>
      {selectedModel && (
        <div className="mt-2 text-sm text-gray-600 flex items-center gap-2">
          <Bot className="w-4 h-4" />
          <span>{selectedModel.description}</span>
        </div>
      )}
    </div>
  );
};