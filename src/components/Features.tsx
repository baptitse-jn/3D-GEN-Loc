import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Download, Gauge, Lock } from 'lucide-react';

const features = [
  {
    icon: <Wand2 className="w-6 h-6" />,
    title: 'AI-Powered Generation',
    description: 'Create complex 3D models from simple text descriptions or reference images.'
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: 'Multiple Export Formats',
    description: 'Export your creations in industry-standard formats like GLTF, OBJ, and FBX.'
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    title: 'Real-time Preview',
    description: 'Instantly preview and interact with your 3D models in the browser.'
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Secure & Private',
    description: 'Your creations remain private and protected with enterprise-grade security.'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">Everything you need to bring your 3D visions to life</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};