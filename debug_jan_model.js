// Temporary debug script to inspect jan.glb model structure
import React, { useEffect } from 'react';
import { useGLTF, useGraph } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const ModelDebugger = () => {
  const { scene } = useGLTF('/models/animations/jan.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  useEffect(() => {
    console.log('=== JAN.GLB MODEL STRUCTURE ===');
    console.log('Available nodes:', Object.keys(nodes));
    console.log('Available materials:', Object.keys(materials));
    
    // Log each node with its properties
    Object.entries(nodes).forEach(([name, node]) => {
      console.log(`Node: ${name}`, {
        type: node.type,
        hasGeometry: !!node.geometry,
        hasMaterial: !!node.material,
        hasChildren: node.children?.length > 0,
        childrenCount: node.children?.length || 0,
        position: node.position,
        rotation: node.rotation,
        scale: node.scale
      });
    });
  }, [nodes, materials]);

  return null;
};

export default ModelDebugger;