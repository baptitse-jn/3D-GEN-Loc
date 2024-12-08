import React from 'react';
import { Clock, Search, Trash2, Box } from 'lucide-react';
import { useGenerationHistory } from '../../hooks/useGenerationHistory';
import { formatDistanceToNow } from '../../utils/dateUtils';

export const ProjectSidebar: React.FC = () => {
  const { history, removeFromHistory } = useGenerationHistory();
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredHistory = history.filter(item => 
    item.modelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.prompt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-80 h-full bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Historique des Projets</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {filteredHistory.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <Box className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="font-medium">Aucun projet trouvé</p>
            <p className="text-sm">Commencez par générer des modèles 3D</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredHistory.map((item) => (
              <div
                key={item.id}
                className="p-4 hover:bg-gray-50 transition-colors cursor-pointer relative group"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 truncate">
                      {item.modelName}
                    </h3>
                    <p className="text-sm text-gray-500 truncate">
                      {item.prompt}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromHistory(item.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-200 rounded-full"
                  >
                    <Trash2 className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
                <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>{formatDistanceToNow(new Date(item.date).getTime())}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};