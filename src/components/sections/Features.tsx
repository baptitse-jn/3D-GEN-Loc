import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Download, Gauge, Lock } from 'lucide-react';
import { FeatureCard } from '../ui/FeatureCard';

const features = [
  {
    icon: <Wand2 className="w-6 h-6" />,
    title: 'Génération par IA',
    description: 'Créez des modèles 3D complexes à partir de simples descriptions textuelles ou d\'images de référence.'
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: 'Formats d\'Export Multiples',
    description: 'Exportez vos créations dans les formats standards de l\'industrie comme GLTF, OBJ et FBX.'
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    title: 'Aperçu en Temps Réel',
    description: 'Prévisualisez et interagissez instantanément avec vos modèles 3D dans le navigateur.'
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Sécurisé & Privé',
    description: 'Vos créations restent privées et protégées avec une sécurité de niveau entreprise.'
  }
];