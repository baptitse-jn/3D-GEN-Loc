import React, { useState } from 'react';
import { ModelSelector } from '../components/generation/ModelSelector';
import { GenerationForm } from '../components/generation/GenerationForm';
import { Preview3D } from '../components/generator/Preview3D';
import { GenerationHistory } from '../components/generation/GenerationHistory';
import { Model } from '../types/models';

export const Generation: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Sélection du Modèle</h2>
            <ModelSelector onModelSelect={setSelectedModel} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <GenerationForm selectedModel={selectedModel} />
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px]">
                <Preview3D model={null} />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg">
              <GenerationHistory />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};