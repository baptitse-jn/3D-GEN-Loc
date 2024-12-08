import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';

interface Model3DProps extends GroupProps {
  url: string;
}

export const Model3D: React.FC<Model3DProps> = ({ url, ...props }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} {...props} />;
};