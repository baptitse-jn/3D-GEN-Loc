import React from 'react';
import { Settings } from 'lucide-react';
import { ApiKeyManager } from './ApiKeyManager';

export const SettingsPanel: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center space-x-2 mb-8">
          <Settings className="w-6 h-6 text-blue-500" />
          <h2 className="text-2xl font-bold">Paramètres</h2>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-6">Configuration des API</h3>
          <ApiKeyManager />
        </div>
      </div>
    </div>
  );
};