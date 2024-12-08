import React from 'react';
import { Box } from 'lucide-react';

export const PreviewLoader: React.FC = () => {
  return (
    <div className="text-center text-gray-400">
      <Box className="w-12 h-12 mb-4 mx-auto animate-pulse" />
      <p className="text-lg">Prêt à générer votre modèle 3D</p>
      <p className="text-sm">Remplissez le formulaire pour commencer</p>
    </div>
  );
};