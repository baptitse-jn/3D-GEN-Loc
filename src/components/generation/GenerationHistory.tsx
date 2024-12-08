import React from 'react';
import { History, Download, Eye, Trash2, Clock } from 'lucide-react';
import { Button } from '../ui/Button';
import { useGenerationHistory } from '../../hooks/useGenerationHistory';

export const GenerationHistory: React.FC = () => {
  const { history, removeFromHistory } = useGenerationHistory();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <History className="w-5 h-5 text-blue-500" />
          <h2 className="text-xl font-semibold">Historique des Générations</h2>
        </div>
        <span className="text-sm text-gray-500">{history.length} générations</span>
      </div>

      <div className="space-y-4">
        {history.length === 0 ? (
          <p className="text-center text-gray-500 py-8">
            Aucune génération n'a encore été effectuée
          </p>
        ) : (
          history.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">{item.modelName}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{item.prompt}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="secondary">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary">
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="secondary"
                    onClick={() => removeFromHistory(item.id)}
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <span>{item.type}</span>
                  <span>{item.resolution}</span>
                  <span>{item.steps} étapes</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};