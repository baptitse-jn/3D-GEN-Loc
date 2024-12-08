import React, { useCallback } from 'react';
import { Upload, File, X } from 'lucide-react';
import { Button } from '../../ui/Button';

interface LocalModelImportProps {
  onFileSelect: (file: File) => void;
  selectedFile: File | null;
  onClear: () => void;
}

export const LocalModelImport: React.FC<LocalModelImportProps> = ({
  onFileSelect,
  selectedFile,
  onClear
}) => {
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const files = Array.from(e.dataTransfer.files);
    const modelFile = files.find(file => 
      file.name.endsWith('.glb') || 
      file.name.endsWith('.gltf') || 
      file.name.endsWith('.obj') ||
      file.name.endsWith('.fbx')
    );

    if (modelFile) {
      onFileSelect(modelFile);
    }
  }, [onFileSelect]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="space-y-4">
      {!selectedFile ? (
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-lg font-medium text-gray-700 mb-2">
            Glissez-déposez votre modèle 3D ici
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Formats supportés : GLB, GLTF, OBJ, FBX
          </p>
          <div className="flex justify-center">
            <label className="cursor-pointer">
              <input
                type="file"
                className="hidden"
                accept=".glb,.gltf,.obj,.fbx"
                onChange={handleFileSelect}
              />
              <Button type="button" variant="secondary">
                Parcourir les fichiers
              </Button>
            </label>
          </div>
        </div>
      ) : (
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
              onClick={onClear}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};