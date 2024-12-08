import React, { useState } from 'react';
import { ModelTypeSelector } from './settings/ModelTypeSelector';
import { ModelImportMethod } from './settings/ModelImportMethod';
import { ModelConfiguration } from './settings/ModelConfiguration';
import { Button } from '../ui/Button';
import { Wand2 } from 'lucide-react';

export const GenerationSettings: React.FC = () => {
  const [modelType, setModelType] = useState<'text-to-3d' | 'image-to-3d'>('text-to-3d');
  const [importMethod, setImportMethod] = useState<'pre-installed' | 'huggingface' | 'local'>('pre-installed');
  const [selectedModel, setSelectedModel] = useState('');
  const [configuration, setConfiguration] = useState({
    resolution: '512x512',
    steps: 50,
    optimization: 'balanced'
  });

  const handleSubmit = () => {
    console.log({
      modelType,
      importMethod,
      selectedModel,
      configuration
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg space-y-8">
      <h2 className="text-2xl font-bold">Paramètres de Génération 3D</h2>
      
      <ModelTypeSelector 
        selected={modelType} 
        onSelect={setModelType} 
      />
      
      <ModelImportMethod 
        method={importMethod}
        onMethodChange={setImportMethod}
        selectedModel={selectedModel}
        onModelSelect={setSelectedModel}
        modelType={modelType}
      />
      
      {selectedModel && (
        <ModelConfiguration
          configuration={configuration}
          onChange={setConfiguration}
        />
      )}
      
      <Button 
        className="w-full"
        onClick={handleSubmit}
        disabled={!selectedModel}
      >
        <Wand2 className="w-5 h-5 mr-2" />
        Valider et continuer
      </Button>
    </div>
  );
};