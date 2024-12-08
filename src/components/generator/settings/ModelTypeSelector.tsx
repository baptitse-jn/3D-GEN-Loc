import React from 'react';
import { FileText, Image } from 'lucide-react';

interface ModelTypeSelectorProps {
  selected: 'text-to-3d' | 'image-to-3d';
  onSelect: (type: 'text-to-3d' | 'image-to-3d') => void;
}

export const ModelTypeSelector: React.FC<ModelTypeSelectorProps> = ({ selected, onSelect }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Type de Modèle</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          className={`p-4 rounded-lg border-2 transition-all ${
            selected === 'text-to-3d'
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-300'
          }`}
          onClick={() => onSelect('text-to-3d')}
        >
          <div className="flex items-center space-x-3">
            <FileText className="w-6 h-6 text-blue-500" />
            <div className="text-left">
              <p className="font-medium">Texte vers 3D</p>
              <p className="text-sm text-gray-600">Générer un modèle à partir d'une description</p>
            </div>
          </div>
        </button>

        <button
          className={`p-4 rounded-lg border-2 transition-all ${
            selected === 'image-to-3d'
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-300'
          }`}
          onClick={() => onSelect('image-to-3d')}
        >
          <div className="flex items-center space-x-3">
            <Image className="w-6 h-6 text-blue-500" />
            <div className="text-left">
              <p className="font-medium">Image vers 3D</p>
              <p className="text-sm text-gray-600">Générer un modèle à partir d'une image</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};