import { useRef, useMemo } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import * as THREE from 'three';

const Target = (props) => {
  const targetRef = useRef();

  const rings = useMemo(() => {
    const ringGeometries = [
      { radius: 2, color: '#ff4444' },
      { radius: 1.6, color: '#ffffff' },
      { radius: 1.2, color: '#ff4444' },
      { radius: 0.8, color: '#ffffff' },
      { radius: 0.4, color: '#ff4444' },
    ];

    return ringGeometries.map((ring, index) => {
      const geometry = new THREE.RingGeometry(ring.radius - 0.1, ring.radius, 32);
      const material = new THREE.MeshBasicMaterial({ 
        color: ring.color, 
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9
      });
      return { geometry, material, key: index };
    });
  }, []);

  useGSAP(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      
      gsap.to(targetRef.current.rotation, {
        z: Math.PI * 2,
        duration: 10,
        repeat: -1,
        ease: 'none'
      });
    }
  });

  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]}>
      {rings.map((ring) => (
        <mesh key={ring.key} geometry={ring.geometry} material={ring.material} />
      ))}
      <mesh>
        <cylinderGeometry args={[0.05, 0.05, 4, 8]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
    </group>
  );
};

export default Target;