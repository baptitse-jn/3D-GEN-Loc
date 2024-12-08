import React, { useState } from 'react';
import { Box, Plus, FolderOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { useGenerationHistory } from '../hooks/useGenerationHistory';
import { Preview3D } from '../components/generator/Preview3D';
import { Button } from '../components/ui/Button';
import { ProjectSidebar } from '../components/project/ProjectSidebar';

export const Project: React.FC = () => {
  const { history } = useGenerationHistory();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 pt-16 flex">
      {/* Sidebar avec bouton de toggle */}
      <div 
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-30 md:relative md:translate-x-0 pt-16`}
      >
        <ProjectSidebar />
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-r-lg shadow-lg md:hidden"
        >
          {isSidebarOpen ? (
            <ChevronLeft className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* En-tête */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Mes Projets 3D</h1>
              <p className="text-gray-600">Gérez et organisez vos créations 3D</p>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Nouveau Projet
            </Button>
          </div>

          {/* Liste des projets */}
          {history.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Box className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Aucun projet pour le moment</h2>
              <p className="text-gray-600 mb-6">
                Commencez par générer des modèles 3D dans la section Génération
              </p>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Créer mon premier projet
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {history.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-100">
                    <Preview3D model={item.modelUrl} />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">{item.modelName}</h3>
                    <p className="text-sm text-gray-600 mb-4">{item.prompt}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{item.date}</span>
                      <Button variant="secondary" size="sm">
                        <FolderOpen className="w-4 h-4 mr-2" />
                        Ouvrir
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};