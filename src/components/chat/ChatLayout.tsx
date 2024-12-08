import React, { useState } from 'react';
import { ConversationSidebar } from './ConversationSidebar';
import { ModelSelector } from './ModelSelector';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const ChatLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar avec bouton de toggle */}
      <div 
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-30 md:relative md:translate-x-0`}
      >
        <ConversationSidebar />
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
      <div className="flex-1 flex flex-col">
        <div className="p-4 bg-white shadow-sm">
          <ModelSelector />
        </div>
        <div className="flex-1 p-4">
          {/* Contenu de la conversation */}
        </div>
      </div>
    </div>
  );
};