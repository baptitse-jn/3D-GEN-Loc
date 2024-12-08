import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Center } from '@react-three/drei';
import { Model3D } from './Model3D';
import { PreviewLoader } from './PreviewLoader';

interface Preview3DProps {
  model: string | null;
}

export const Preview3D: React.FC<Preview3DProps> = ({ model }) => {
  return (
    <div className="w-full h-full bg-gray-900 relative">
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 50 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5}>
            <Center>
              {model ? (
                <Model3D url={model} />
              ) : (
                <mesh>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshStandardMaterial color="#4F46E5" />
                </mesh>
              )}
            </Center>
          </Stage>
        </Suspense>
        <OrbitControls makeDefault />
      </Canvas>
      
      {!model && (
        <div className="absolute inset-0 flex items-center justify-center">
          <PreviewLoader />
        </div>
      )}
    </div>
  );
};