import React from 'react';
import { BarChart3, AlertCircle } from 'lucide-react';
import { useApiUsage } from '../../hooks/useApiUsage';
import { apiConfigs } from '../../data/apiConfigs';

export const ApiUsageDetails: React.FC = () => {
  const { getApiUsage } = useApiUsage();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Détails par API</h2>
      
      <div className="grid grid-cols-1 gap-6">
        {apiConfigs.map((config) => {
          const usage = getApiUsage(config.id);
          const usagePercentage = (usage.currentUsage / usage.limit) * 100;
          
          return (
            <div key={config.id} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{config.name}</h3>
                  <p className="text-sm text-gray-600">{config.provider}</p>
                </div>
                <BarChart3 className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Utilisation</span>
                    <span>{usage.currentUsage} / {usage.limit} requêtes</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        usagePercentage > 90 
                          ? 'bg-red-500' 
                          : usagePercentage > 75 
                            ? 'bg-orange-500' 
                            : 'bg-blue-500'
                      }`}
                      style={{ width: `${Math.min(usagePercentage, 100)}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Coût actuel</p>
                    <p className="text-lg font-semibold">{usage.currentCost}€</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Coût estimé</p>
                    <p className="text-lg font-semibold">{usage.estimatedCost}€</p>
                  </div>
                </div>

                {usage.currentUsage > usage.limit * 0.9 && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm">Proche de la limite d'utilisation</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};