import React from 'react';
import { ApiUsageOverview } from '../components/pricing/ApiUsageOverview';
import { ApiUsageDetails } from '../components/pricing/ApiUsageDetails';
import { ApiCostCalculator } from '../components/pricing/ApiCostCalculator';

export const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Suivi de Consommation API</h1>
            <p className="text-gray-600">Surveillez et planifiez votre utilisation des différentes API</p>
          </div>
          
          <ApiCostCalculator />
          <ApiUsageOverview />
          <ApiUsageDetails />
        </div>
      </div>
    </div>
  );
};