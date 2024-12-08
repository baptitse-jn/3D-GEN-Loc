import React from 'react';
import { GenerationSettings } from '../components/generator/GenerationSettings';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <GenerationSettings />
      </div>
    </div>
  );
};