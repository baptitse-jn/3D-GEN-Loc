import React, { useState } from 'react';
import { Menu, X, Box, Settings as SettingsIcon, CreditCard, Wand2, FolderOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Box className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold text-gray-900">3D GEN Loc</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/generation" 
              className={`text-gray-600 hover:text-blue-500 transition-colors flex items-center space-x-1 ${
                location.pathname === '/generation' ? 'text-blue-500' : ''
              }`}
            >
              <Wand2 className="w-4 h-4" />
              <span>Génération</span>
            </Link>
            <Link 
              to="/projet" 
              className={`text-gray-600 hover:text-blue-500 transition-colors flex items-center space-x-1 ${
                location.pathname === '/projet' ? 'text-blue-500' : ''
              }`}
            >
              <FolderOpen className="w-4 h-4" />
              <span>Projet</span>
            </Link>
            <Link 
              to="/hub" 
              className={`text-gray-600 hover:text-blue-500 transition-colors flex items-center space-x-1 ${
                location.pathname === '/hub' ? 'text-blue-500' : ''
              }`}
            >
              <SettingsIcon className="w-4 h-4" />
              <span>HUB</span>
            </Link>
            <Link 
              to="/cout-api" 
              className={`text-gray-600 hover:text-blue-500 transition-colors flex items-center space-x-1 ${
                location.pathname === '/cout-api' ? 'text-blue-500' : ''
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>Coût API</span>
            </Link>
          </div>

          <button
            className="md:hidden text-gray-600 hover:text-blue-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              <Link 
                to="/generation" 
                className={`text-gray-600 hover:text-blue-500 transition-colors flex items-center space-x-1 ${
                  location.pathname === '/generation' ? 'text-blue-500' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Wand2 className="w-4 h-4" />
                <span>Génération</span>
              </Link>
              <Link 
                to="/projet" 
                className={`text-gray-600 hover:text-blue-500 transition-colors flex items-center space-x-1 ${
                  location.pathname === '/projet' ? 'text-blue-500' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                <FolderOpen className="w-4 h-4" />
                <span>Projet</span>
              </Link>
              <Link 
                to="/hub" 
                className={`text-gray-600 hover:text-blue-500 transition-colors flex items-center space-x-1 ${
                  location.pathname === '/hub' ? 'text-blue-500' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                <SettingsIcon className="w-4 h-4" />
                <span>HUB</span>
              </Link>
              <Link 
                to="/cout-api" 
                className={`text-gray-600 hover:text-blue-500 transition-colors flex items-center space-x-1 ${
                  location.pathname === '/cout-api' ? 'text-blue-500' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                <CreditCard className="w-4 h-4" />
                <span>Coût API</span>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};