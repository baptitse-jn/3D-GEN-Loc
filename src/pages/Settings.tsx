import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';
import { ApiKeyManager } from '../components/settings/ApiKeyManager';
import { ModelImport } from '../components/settings/ModelImport';

export const Settings: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center space-x-2">
            <SettingsIcon className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold">Paramètres</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <ModelImport />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-6">Configuration des API</h3>
            <ApiKeyManager />
          </div>
        </div>
      </div>
    </div>
  );
};