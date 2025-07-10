import { useRef, useEffect } from 'react';
import { useGLTF, useTexture, useVideoTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const DemoComputerSimple = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/computer.glb');
  
  // Use video texture directly without complex mobile detection
  const txt = useVideoTexture(props.texture, {
    muted: true,
    loop: true,
    start: true,
  });

  useEffect(() => {
    if (txt) {
      txt.flipY = false;
    }
  }, [txt]);

  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: 'power3.out',
    });
  }, [txt]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="monitor-screen"
          geometry={nodes['monitor-screen'].geometry}
          material={nodes['monitor-screen'].material}
          position={[0.127, 1.831, 0.511]}
          rotation={[1.571, -0.005, 0.031]}
          scale={[0.661, 0.608, 0.401]}>
          <meshBasicMaterial map={txt} toneMapped={false} />
        </mesh>
        <group name="RootNode" position={[0, 1.093, 0]} rotation={[-Math.PI / 2, 0, -0.033]} scale={0.045}>
          <group
            name="Monitor-B-_computer_0"
            position={[0.266, 1.132, 0.051]}
            rotation={[0, -0.033, 0]}
            scale={[0.042, 0.045, 0.045]}>
            <mesh
              name="Monitor-B-_computer_0_1"
              geometry={nodes['Monitor-B-_computer_0_1'].geometry}
              material={materials.computer}
            />
            <mesh
              name="Monitor-B-_computer_0_2"
              geometry={nodes['Monitor-B-_computer_0_2'].geometry}
              material={materials.base__0}
            />
            <mesh
              name="Monitor-B-_computer_0_3"
              geometry={nodes['Monitor-B-_computer_0_3'].geometry}
              material={materials.Material_36}
            />
            <mesh
              name="Monitor-B-_computer_0_4"
              geometry={nodes['Monitor-B-_computer_0_4'].geometry}
              material={materials.Material_35}
            />
            <mesh
              name="Monitor-B-_computer_0_5"
              geometry={nodes['Monitor-B-_computer_0_5'].geometry}
              material={materials.Material_34}
            />
            <mesh
              name="Monitor-B-_computer_0_6"
              geometry={nodes['Monitor-B-_computer_0_6'].geometry}
              material={materials.keys}
            />
            <mesh
              name="Monitor-B-_computer_0_7"
              geometry={nodes['Monitor-B-_computer_0_7'].geometry}
              material={materials.keys2}
            />
            <mesh
              name="Monitor-B-_computer_0_8"
              geometry={nodes['Monitor-B-_computer_0_8'].geometry}
              material={materials.Material_37}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/computer.glb');

export default DemoComputerSimple;