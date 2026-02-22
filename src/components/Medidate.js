import React, { useRef, useState, useMemo, useEffect, memo } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'
import { useWindowPosition } from '../hooks/useCommon';
const Model = memo(({ ...props }) => {
  const [active, setActive] = useState(false);
  const [inViewPort, setInViewPort] = useState(false);
  const group = useRef();
  const { nodes } = useGLTF('/models/medidate.gltf');
  const factor = useMemo(() => 0.5 + Math.random(), []);
  const scrollY = useWindowPosition();

  useEffect(() => {
    setInViewPort(scrollY < 600);
  }, [scrollY]);

  useFrame((state) => {
    const t = (1 + Math.sin(state.clock.getElapsedTime() * factor)) / 2;
    group.current.position.y = 1 + t;
  });

  const { scale, position } = useSpring({
    to: {
      position: inViewPort ? [0, 0, 0] : [7, 0, 0],
      scale: active ? 0.5 : 1,
    },
    from: {
      position: [0, 0, 0],
      scale: 0,
    },
    config: { mass: 1, tension: 120, friction: 30 }
  });

  return (
    <group ref={group} {...props} dispose={null} position={[1, 2, 3]} castShadow receiveShadow>
      <group rotation={[-Math.PI / 2, 0.01, 1.3]} position={[4, -0.2, 0]} scale={4} castShadow receiveShadow>
        <animated.mesh
          position={position}
          scale={scale}
          onClick={() => setActive(!active)}
          geometry={nodes.mesh_0.geometry}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial 
            color="#ffffff"
            roughness={0.3} 
            metalness={0.6}
          />
        </animated.mesh>
      </group>
    </group>
  );
});

useGLTF.preload('/models/medidate.gltf');

export default Model;

