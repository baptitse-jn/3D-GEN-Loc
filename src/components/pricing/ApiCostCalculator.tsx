import React, { useState } from 'react';
import { Calculator, DollarSign, Save } from 'lucide-react';
import { apiConfigs } from '../../data/apiConfigs';
import { useApiUsage } from '../../hooks/useApiUsage';
import { Button } from '../ui/Button';

export const ApiCostCalculator: React.FC = () => {
  const { updateUsageData } = useApiUsage();
  const [totalBudget, setTotalBudget] = useState<number>(0);
  const [requestsPerMonth, setRequestsPerMonth] = useState<number>(0);
  const [apiAllocations, setApiAllocations] = useState<{ [key: string]: number }>(
    Object.fromEntries(apiConfigs.map(config => [config.id, 0]))
  );

  const calculateCostPerRequest = (budget: number, requests: number) => {
    return requests > 0 ? (budget / requests).toFixed(4) : '0';
  };

  const handleAllocationChange = (apiId: string, allocation: number) => {
    const newAllocations = { ...apiAllocations, [apiId]: allocation };
    const totalAllocation = Object.values(newAllocations).reduce((sum, val) => sum + val, 0);
    
    if (totalAllocation <= totalBudget) {
      setApiAllocations(newAllocations);
    }
  };

  const handleSaveConfiguration = () => {
    const apiUsage = {};
    Object.entries(apiAllocations).forEach(([apiId, allocation]) => {
      apiUsage[apiId] = {
        currentUsage: 0,
        limit: Math.floor(requestsPerMonth * (allocation / totalBudget)),
        currentCost: 0,
        estimatedCost: allocation
      };
    });

    updateUsageData({
      totalUsage: 0,
      totalCost: 0,
      remainingCredits: requestsPerMonth,
      apiUsage
    });
  };

  const remainingBudget = totalBudget - Object.values(apiAllocations).reduce((sum, val) => sum + val, 0);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Calculator className="w-6 h-6 text-blue-500" />
          <h2 className="text-xl font-semibold">Calculateur de Coûts API</h2>
        </div>
        <Button
          onClick={handleSaveConfiguration}
          disabled={remainingBudget !== 0 || totalBudget === 0 || requestsPerMonth === 0}
        >
          <Save className="w-4 h-4 mr-2" />
          Appliquer la configuration
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Budget Mensuel Total (€)
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                value={totalBudget}
                onChange={(e) => setTotalBudget(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <DollarSign className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Requêtes par Mois
            </label>
            <input
              type="number"
              min="0"
              value={requestsPerMonth}
              onChange={(e) => setRequestsPerMonth(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {requestsPerMonth > 0 && (
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                Coût moyen par requête: {calculateCostPerRequest(totalBudget, requestsPerMonth)}€
              </p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="font-medium text-gray-900">Allocation par API</h3>
          {apiConfigs.map((config) => (
            <div key={config.id}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {config.name}
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  min="0"
                  max={totalBudget}
                  value={apiAllocations[config.id]}
                  onChange={(e) => handleAllocationChange(config.id, Number(e.target.value))}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <span className="text-sm text-gray-500">€</span>
              </div>
            </div>
          ))}

          <div className={`p-4 rounded-lg ${remainingBudget >= 0 ? 'bg-green-50' : 'bg-red-50'}`}>
            <p className={`text-sm ${remainingBudget >= 0 ? 'text-green-800' : 'text-red-800'}`}>
              Budget restant: {remainingBudget.toFixed(2)}€
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};