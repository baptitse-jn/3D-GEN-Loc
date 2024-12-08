import React from 'react';
import { Model } from '../../types/models';
import { Download, Heart } from 'lucide-react';

interface ModelCardProps {
  model: Model;
  selected: boolean;
  onSelect: (model: Model) => void;
}

export const ModelCard: React.FC<ModelCardProps> = ({ model, selected, onSelect }) => {
  return (
    <div
      className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
        selected 
          ? 'border-blue-500 bg-blue-50' 
          : 'border-gray-200 hover:border-blue-300'
      }`}
      onClick={() => onSelect(model)}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-semibold text-lg">{model.name}</h3>
          <p className="text-sm text-gray-600">{model.provider}</p>
        </div>
        <span className="text-xs text-gray-500">{model.lastUpdate}</span>
      </div>
      
      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
        <div className="flex items-center">
          <Download className="w-4 h-4 mr-1" />
          <span>{model.downloads.toLocaleString()}</span>
        </div>
        <div className="flex items-center">
          <Heart className="w-4 h-4 mr-1" />
          <span>{model.likes}</span>
        </div>
      </div>
    </div>
  );
};