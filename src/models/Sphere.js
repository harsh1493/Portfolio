import React, { useRef, useState, useEffect, memo } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { animated, useSpring } from '@react-spring/three'
import { TextureLoader } from 'three';
import { useWindowPosition } from '../hooks/useCommon';

const Sphere = memo(({ axisOfRotation = [0, 0, 0], rotateDirection = 1, delay = 0, path = 'textures/react.png', ...props }) => {
  const ref = useRef();
  const texture = useLoader(TextureLoader, path);
  const [inViewPort, setInViewPort] = useState(false);
  const scrollY = useWindowPosition();

  useEffect(() => {
    setInViewPort(scrollY < 300);
  }, [scrollY]);

  useFrame((state) => {
    ref.current.rotation.y = (state.clock.getElapsedTime() + delay) * rotateDirection * 0.5;
  });

  const { position, scale } = useSpring({
    to: {
      position: inViewPort ? [2.7, 2.7, 2.7] : [40, -10, 20],
      scale: inViewPort ? 1 : 0.5,
    },
    from: {
      position: [40, -10, 20],
      scale: 0,
    },
    config: { mass: 1, tension: 120, friction: 30 },
  });

  return (
    <animated.group ref={ref} rotation={axisOfRotation} position={[5, 2, 3.2]}>
      <animated.mesh position={position} scale={scale} {...props} castShadow receiveShadow>
        <sphereGeometry args={[0.5, 64, 64]} />
        <meshStandardMaterial 
          color="#ffffff"
          roughness={0.5} 
          metalness={0.5}
          map={texture}
        />
      </animated.mesh>
    </animated.group>
  );
});

export default Sphere;