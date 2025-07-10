import { Float, useTexture } from '@react-three/drei';

const MongoDBLogo = (props) => {
  const texture = useTexture('/assets/MongoDB_SpringGreen.png');

  return (
    <Float floatIntensity={0.8}>
      <group position={[8, 8, 0]} scale={0.7} {...props} dispose={null}>
        <mesh rotation={[0, 0, 0]}>
          <planeGeometry args={[2.2, 2.2]} />
          <meshStandardMaterial map={texture} transparent />
        </mesh>
      </group>
    </Float>
  );
};

export default MongoDBLogo;