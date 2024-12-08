import React from 'react';
import { Settings2 } from 'lucide-react';

interface ModelConfigurationProps {
  configuration: {
    resolution: string;
    steps: number;
    optimization: string;
  };
  onChange: (config: any) => void;
}

export const ModelConfiguration: React.FC<ModelConfigurationProps> = ({
  configuration,
  onChange
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Settings2 className="w-5 h-5 text-blue-500" />
        <h3 className="text-lg font-semibold">Configuration du Modèle</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Résolution de Sortie
          </label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={configuration.resolution}
            onChange={(e) => onChange({ ...configuration, resolution: e.target.value })}
          >
            <option value="256x256">256x256 - Basse résolution</option>
            <option value="512x512">512x512 - Résolution standard</option>
            <option value="1024x1024">1024x1024 - Haute résolution</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Étapes de Génération
          </label>
          <input
            type="range"
            min="20"
            max="100"
            step="10"
            value={configuration.steps}
            onChange={(e) => onChange({ ...configuration, steps: Number(e.target.value) })}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>Rapide</span>
            <span>{configuration.steps} étapes</span>
            <span>Précis</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Optimisation
          </label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={configuration.optimization}
            onChange={(e) => onChange({ ...configuration, optimization: e.target.value })}
          >
            <option value="speed">Vitesse - Génération rapide</option>
            <option value="balanced">Équilibré - Compromis optimal</option>
            <option value="quality">Qualité - Meilleurs résultats</option>
          </select>
        </div>
      </div>
    </div>
  );
};