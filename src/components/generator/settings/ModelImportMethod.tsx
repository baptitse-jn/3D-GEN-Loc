import React from 'react';
import { Box, ExternalLink, Upload } from 'lucide-react';
import { modelGroups } from '../../../data/models';
import { LocalModelImport } from './LocalModelImport';

interface ModelImportMethodProps {
  method: 'pre-installed' | 'huggingface' | 'local';
  onMethodChange: (method: 'pre-installed' | 'huggingface' | 'local') => void;
  selectedModel: string;
  onModelSelect: (modelId: string) => void;
  modelType: 'text-to-3d' | 'image-to-3d';
}

export const ModelImportMethod: React.FC<ModelImportMethodProps> = ({
  method,
  onMethodChange,
  selectedModel,
  onModelSelect,
  modelType
}) => {
  const models = modelGroups.find(group => group.type === modelType)?.models || [];
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Méthode d'Importation</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            className={`p-4 rounded-lg border-2 transition-all ${
              method === 'pre-installed'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => onMethodChange('pre-installed')}
          >
            <Box className="w-6 h-6 text-blue-500 mb-2 mx-auto" />
            <p className="font-medium">Modèles Pré-installés</p>
            <p className="text-sm text-gray-600">Utilisez nos modèles optimisés</p>
          </button>

          <button
            className={`p-4 rounded-lg border-2 transition-all ${
              method === 'huggingface'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => onMethodChange('huggingface')}
          >
            <ExternalLink className="w-6 h-6 text-blue-500 mb-2 mx-auto" />
            <p className="font-medium">Hugging Face</p>
            <p className="text-sm text-gray-600">Importez depuis Hugging Face</p>
          </button>

          <button
            className={`p-4 rounded-lg border-2 transition-all ${
              method === 'local'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => onMethodChange('local')}
          >
            <Upload className="w-6 h-6 text-blue-500 mb-2 mx-auto" />
            <p className="font-medium">Import Local</p>
            <p className="text-sm text-gray-600">Utilisez vos propres modèles</p>
          </button>
        </div>

        {method === 'pre-installed' && (
          <div className="grid grid-cols-1 gap-4">
            {models.map((model) => (
              <button
                key={model.id}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedModel === model.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => onModelSelect(model.id)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{model.name}</p>
                    <p className="text-sm text-gray-600">{model.provider}</p>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <p>{model.downloads.toLocaleString()} téléchargements</p>
                    <p>{model.likes} likes</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {method === 'huggingface' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL du modèle Hugging Face
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://huggingface.co/..."
              />
            </div>
            <p className="text-sm text-gray-500">
              Collez l'URL d'un modèle compatible depuis Hugging Face
            </p>
          </div>
        )}

        {method === 'local' && (
          <LocalModelImport
            onFileSelect={(file) => {
              setSelectedFile(file);
              onModelSelect('local-' + file.name);
            }}
            selectedFile={selectedFile}
            onClear={() => {
              setSelectedFile(null);
              onModelSelect('');
            }}
          />
        )}
      </div>
    </div>
  );
};