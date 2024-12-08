import React from 'react';
import { Button } from '../ui/Button';
import { Model } from '../../types/models';
import { Wand2, Upload } from 'lucide-react';

interface GenerationFormProps {
  selectedModel: Model | null;
}

export const GenerationForm: React.FC<GenerationFormProps> = ({ selectedModel }) => {
  if (!selectedModel) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <p className="text-gray-500 text-center">
          Veuillez sélectionner un modèle pour commencer
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Paramètres de Génération</h2>
      
      <div className="space-y-4">
        {selectedModel.type === 'text-to-3d' ? (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              placeholder="Décrivez le modèle 3D que vous souhaitez créer..."
            />
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image de référence
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
                    <span>Télécharger un fichier</span>
                    <input type="file" className="sr-only" accept="image/*" />
                  </label>
                  <p className="pl-1">ou glisser-déposer</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG jusqu'à 10MB</p>
              </div>
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Style
          </label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="realistic">Réaliste</option>
            <option value="stylized">Stylisé</option>
            <option value="lowpoly">Low Poly</option>
            <option value="abstract">Abstrait</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Complexité
          </label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="simple">Simple</option>
            <option value="medium">Moyenne</option>
            <option value="complex">Complexe</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Format d'export
          </label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="gltf">GLTF/GLB</option>
            <option value="obj">OBJ</option>
            <option value="fbx">FBX</option>
          </select>
        </div>

        <Button className="w-full">
          <Wand2 className="w-5 h-5 mr-2" />
          Générer le modèle
        </Button>
      </div>
    </div>
  );
};