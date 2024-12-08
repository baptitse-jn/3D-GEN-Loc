import React from 'react';
import { CreditCard, AlertTriangle } from 'lucide-react';
import { useApiUsage } from '../../hooks/useApiUsage';

export const ApiUsageOverview: React.FC = () => {
  const { totalUsage, totalCost, remainingCredits } = useApiUsage();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Vue d'ensemble</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-blue-600 font-medium">Utilisation Totale</span>
            <CreditCard className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-2xl font-bold">{totalUsage} requêtes</p>
          <p className="text-sm text-gray-600">Ce mois-ci</p>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-green-600 font-medium">Coût Total</span>
            <CreditCard className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-2xl font-bold">{totalCost}€</p>
          <p className="text-sm text-gray-600">Ce mois-ci</p>
        </div>

        <div className="bg-orange-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-orange-600 font-medium">Crédits Restants</span>
            <AlertTriangle className="w-5 h-5 text-orange-500" />
          </div>
          <p className="text-2xl font-bold">{remainingCredits}</p>
          <p className="text-sm text-gray-600">Sur tous les services</p>
        </div>
      </div>
    </div>
  );
};