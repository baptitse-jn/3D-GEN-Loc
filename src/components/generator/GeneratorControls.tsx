import React from 'react';
import { Button } from '../ui/Button';
import { Download, RotateCcw, Share2 } from 'lucide-react';

interface GeneratorControlsProps {
  model: string | null;
  isGenerating: boolean;
}

export const GeneratorControls: React.FC<GeneratorControlsProps> = ({
  model,
  isGenerating
}) => {
  if (!model || isGenerating) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Actions</h3>
      <div className="grid grid-cols-3 gap-4">
        <Button variant="secondary" className="w-full">
          <Download className="w-4 h-4 mr-2" />
          Exporter
        </Button>
        <Button variant="secondary" className="w-full">
          <RotateCcw className="w-4 h-4 mr-2" />
          Régénérer
        </Button>
        <Button variant="secondary" className="w-full">
          <Share2 className="w-4 h-4 mr-2" />
          Partager
        </Button>
      </div>
    </div>
  );
};