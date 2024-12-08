import React from 'react';
import { motion } from 'framer-motion';
import { Box } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
      
      <div className="relative container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex justify-center mb-8">
            <Box className="w-16 h-16 text-blue-400" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            3DGenesis
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Transformez vos idées en mondes 3D époustouflants grâce à la génération assistée par IA.
            Créez, personnalisez et donnez vie à votre imagination.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Commencer à Créer</Button>
            <Button variant="secondary" size="lg">Voir la Démo</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};