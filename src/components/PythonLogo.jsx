import { Float, useTexture } from '@react-three/drei';

const PythonLogo = (props) => {
  const texture = useTexture('/assets/python.png');

  return (
    <Float floatIntensity={1}>
      <group position={[8, 8, 0]} scale={0.8} {...props} dispose={null}>
        <mesh rotation={[0, 0, 0]}>
          <planeGeometry args={[2, 2]} />
          <meshStandardMaterial map={texture} transparent />
        </mesh>
      </group>
    </Float>
  );
};

export default PythonLogo; 