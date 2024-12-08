import React, { useState } from 'react';
import { Search, ExternalLink, Download } from 'lucide-react';
import { Button } from '../ui/Button';

interface HuggingFaceModel {
  id: string;
  name: string;
  description: string;
  downloads: number;
  likes: number;
  lastModified: string;
  size: string;
  license: string;
}

export const HuggingFaceImport: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [modelName, setModelName] = useState('');
  const [selectedModel, setSelectedModel] = useState<HuggingFaceModel | null>(null);

  const handleSearch = () => {
    // Simulation de recherche - À remplacer par l'API réelle
    console.log('Searching for:', searchQuery);
  };

  const handleImport = () => {
    if (selectedModel && modelName) {
      console.log('Importing model:', { selectedModel, modelName });
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rechercher un modèle
          </label>
          <div className="flex space-x-2">
            <div className="flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Rechercher un modèle sur Hugging Face..."
              />
            </div>
            <Button onClick={handleSearch}>
              <Search className="w-4 h-4 mr-2" />
              Rechercher
            </Button>
          </div>
        </div>

        {selectedModel && (
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium">{selectedModel.name}</h4>
                  <p className="text-sm text-gray-600">{selectedModel.description}</p>
                </div>
                <a
                  href={`https://huggingface.co/${selectedModel.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Téléchargements: {selectedModel.downloads}</p>
                  <p className="text-gray-600">Likes: {selectedModel.likes}</p>
                </div>
                <div>
                  <p className="text-gray-600">Taille: {selectedModel.size}</p>
                  <p className="text-gray-600">Licence: {selectedModel.license}</p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom du modèle importé
              </label>
              <input
                type="text"
                value={modelName}
                onChange={(e) => setModelName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Donnez un nom à ce modèle..."
              />
            </div>

            <Button
              className="w-full"
              onClick={handleImport}
              disabled={!modelName.trim()}
            >
              <Download className="w-4 h-4 mr-2" />
              Importer le modèle
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};