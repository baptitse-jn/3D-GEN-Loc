import React, { useCallback, useState } from 'react';
import { Upload, File, X, Download } from 'lucide-react';
import { Button } from '../ui/Button';

export const LocalModelImport: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [modelName, setModelName] = useState('');

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const files = Array.from(e.dataTransfer.files);
    const modelFile = files.find(file => 
      file.name.endsWith('.bin') || 
      file.name.endsWith('.onnx') || 
      file.name.endsWith('.pt') ||
      file.name.endsWith('.pth')
    );

    if (modelFile) {
      setSelectedFile(modelFile);
      setModelName(modelFile.name.split('.')[0]);
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setModelName(file.name.split('.')[0]);
    }
  };

  const handleImport = () => {
    if (selectedFile && modelName) {
      console.log('Importing model:', { file: selectedFile, name: modelName });
    }
  };

  return (
    <div className="space-y-6">
      {!selectedFile ? (
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-lg font-medium text-gray-700 mb-2">
            Glissez-déposez votre modèle ici
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Formats supportés : .bin, .onnx, .pt, .pth
          </p>
          <div className="flex justify-center">
            <label className="cursor-pointer">
              <input
                type="file"
                className="hidden"
                accept=".bin,.onnx,.pt,.pth"
                onChange={handleFileSelect}
              />
              <Button type="button" variant="secondary">
                Parcourir les fichiers
              </Button>
            </label>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <File className="w-8 h-8 text-blue-500" />
                <div>
                  <p className="font-medium">{selectedFile.name}</p>
                  <p className="text-sm text-gray-600">
                    {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedFile(null);
                  setModelName('');
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom du modèle
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
  );
};