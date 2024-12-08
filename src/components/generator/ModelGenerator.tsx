import React, { useState } from 'react';
import { GeneratorForm } from './GeneratorForm';
import { Preview3D } from './Preview3D';
import { GeneratorControls } from './GeneratorControls';
import { ModelSelector } from './ModelSelector';
import { useModelGeneration } from '../../hooks/useModelGeneration';
import { ModelGenerationOptions } from '../../types/generator';
import { Model } from '../../types/models';

export const ModelGenerator: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [options, setOptions] = useState<ModelGenerationOptions>({
    prompt: '',
    style: 'realistic',
    complexity: 'medium',
    format: 'gltf'
  });

  const { model, isGenerating, generateModel } = useModelGeneration();

  const handleGenerate = async () => {
    if (options.prompt.trim() && selectedModel) {
      await generateModel(options);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <ModelSelector onModelSelect={setSelectedModel} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <GeneratorForm 
                options={options} 
                setOptions={setOptions}
                onGenerate={handleGenerate}
                isGenerating={isGenerating}
                modelType={selectedModel?.type}
              />
              <GeneratorControls 
                model={model}
                isGenerating={isGenerating}
              />
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[600px]">
              <Preview3D model={model} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};