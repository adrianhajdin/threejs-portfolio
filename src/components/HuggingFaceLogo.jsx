import { Float, useTexture } from '@react-three/drei';

const HuggingFaceLogo = (props) => {
  const texture = useTexture('/assets/huggingface.png');

  return (
    <Float floatIntensity={0.9}>
      <group position={[8, 8, 0]} scale={0.6} {...props} dispose={null}>
        <mesh rotation={[0, 0, 0]}>
          <planeGeometry args={[2.5, 2.5]} />
          <meshStandardMaterial map={texture} transparent />
        </mesh>
      </group>
    </Float>
  );
};

export default HuggingFaceLogo; 