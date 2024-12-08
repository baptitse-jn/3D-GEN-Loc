import React, { useState } from 'react';
import { HuggingFaceImport } from './HuggingFaceImport';
import { LocalModelImport } from './LocalModelImport';
import { Box, ExternalLink, Upload } from 'lucide-react';

export const ModelImport: React.FC = () => {
  const [importMethod, setImportMethod] = useState<'huggingface' | 'local'>('huggingface');

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Importation de Modèles</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          className={`p-4 rounded-lg border-2 transition-all ${
            importMethod === 'huggingface'
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-300'
          }`}
          onClick={() => setImportMethod('huggingface')}
        >
          <ExternalLink className="w-6 h-6 text-blue-500 mb-2 mx-auto" />
          <p className="font-medium">Hugging Face</p>
          <p className="text-sm text-gray-600">Importer depuis Hugging Face</p>
        </button>

        <button
          className={`p-4 rounded-lg border-2 transition-all ${
            importMethod === 'local'
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-300'
          }`}
          onClick={() => setImportMethod('local')}
        >
          <Upload className="w-6 h-6 text-blue-500 mb-2 mx-auto" />
          <p className="font-medium">Import Local</p>
          <p className="text-sm text-gray-600">Importer depuis votre ordinateur</p>
        </button>
      </div>

      <div className="mt-6">
        {importMethod === 'huggingface' ? (
          <HuggingFaceImport />
        ) : (
          <LocalModelImport />
        )}
      </div>
    </div>
  );
};