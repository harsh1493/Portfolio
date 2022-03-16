import React, { useRef,useState ,useMemo,useEffect} from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame,useLoader } from '@react-three/fiber'
import { useSpring, animated, config } from '@react-spring/three'
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
export default function Model({ ...props }) {
  const [active, setActive] = useState(false);
  const [inViewPort, setInViewPort] = useState(false);
  
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/medidate.gltf')
  const texture_1 = useLoader(TextureLoader, 'SurfaceImperfections003_1K_var1.jpg');
  const texture_2 = useLoader(TextureLoader, 'textures/glass.jpg');
  const factor = useMemo(() => 0.5 + Math.random(), [])


  
  //animate out on scroll
  const scrollY = useWindowPosition();
    useEffect(() => {
      if(scrollY>=600){
        setInViewPort(false)
      }else{
        setInViewPort(true)
      }
    }, [scrollY])


  useFrame((state) => {
    const t = (1 + Math.sin(state.clock.getElapsedTime() * factor)) / 2 
    group.current.position.y = 1 + t 
  })
  
  // const {position} = useSpring({ to: { opacity: 1,position:[scrollY-200,0,0]}, from: { opacity: 0,position:[0,0,0] },config:{duration:200}})


  const {scale,position } = useSpring({
    to: { 
       position:inViewPort?[0, 0, 0]:[7,0,0],
      scale:active?0.5:1,
   //   position: !active ? [0, 0, 0] : [7, 0, 0],
    },
    from: {
      position:inViewPort?[0, 0, 0]: [0, 0, 0] ,
      scale: 0
    },
    config: { mass: 5, tension: 500, friction: 150, }
  });
  return (
    <group ref={group} {...props} dispose={null} position={[1,2,3]} castShadow receiveShadow>
      {/* <group rotation={[-Math.PI / 2, 0.01, 1.3]} position={[0,-0.2,0]} scale={4}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials.Standard3ECBBA}  color="lightblue" roughness={0} metalness={0.1} />
      </group> */}
      <group rotation={[-Math.PI / 2, 0.01, 1.3]} position={[4,-0.2,0]} scale={4} castShadow receiveShadow >
        <animated.mesh position={position} scale={scale} onClick={() => setActive(!active)} geometry={nodes.mesh_0.geometry}  color="lightblue" roughness={0} metalness={0.1} castShadow receiveShadow>
             <meshStandardMaterial attach="material" roughness={0} metalness={0.5} />
        </animated.mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/models/medidate.gltf')

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
};

export const useWindowPosition = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const setFromEvent = (e) => setPosition(window.scrollY);
    window.addEventListener("scroll", setFromEvent);

    return () => {
      window.removeEventListener("scroll", setFromEvent);
    };
  }, []);

  return position;
};

