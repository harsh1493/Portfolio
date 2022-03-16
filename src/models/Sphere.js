
import React, { useRef,useState,useEffect } from "react"
import { useFrame,useLoader} from "@react-three/fiber"
import {a, useSpring, animated, config } from '@react-spring/three'
import { Html } from '@react-three/drei'
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
export default function Sphere({ axisOfRotation = [0, 0, 0], rotateDirection = 1, delay = 0,path='textures/react2.png', ...props }) {
    const ref = useRef()
    const texture_1 = useLoader(TextureLoader, 'textures/react.png');
    const texture_2 = useLoader(TextureLoader, 'textures/react2.png');
    const texture_3 = useLoader(TextureLoader, 'textures/three.png');
    const texture_4 = useLoader(TextureLoader, 'textures/tailwind.png');
    const texture = useLoader(TextureLoader, path);
  
    
  //animate out on scroll
  const [inViewPort, setInViewPort] = useState(false);
  const [toggle, setToggle] = useState(0);
  const scrollY = useWindowPosition();
  const [{ x }] = useSpring({ x: toggle, config: { mass: 5, tension: 1000, friction: 50, precision: 0.0001 } }, [toggle])

  useEffect(() => {
    if(scrollY>=300){
      setInViewPort(false)
      setToggle(0)
    }else{
      setInViewPort(true)
      setToggle(1)
    }
  }, [scrollY])



    useFrame((state) => (ref.current.rotation.y = (state.clock.getElapsedTime() + delay) * rotateDirection))
    const { position, scale } = useSpring({
        to: {
            position: inViewPort?[2.7, 2.7, 2.7]:[40, -10, 20],
            scale: 1,
        },
        from: {
            position: [40, -10, 20],
            scale: 0
        },
        config: { mass: 5, tension: 500, friction: 150,}
    });
    return (
        <a.group ref={ref} rotation={axisOfRotation} position={[5, 2, 3.2]} >
            <animated.mesh position={position} {...props} scale={scale} castShadow receiveShadow>
                <sphereBufferGeometry attach="geometry" args={[0.5, 32, 32]} />
                <meshPhongMaterial attach="material"  roughness={0} metalness={1}  map={texture} transparent />
                {/* <Html scale={0.5}  position={[0,-0.1,0]}   occlude>
                    <div className="font-extrabold text-2xl relative -z-10 text-slate-900">
                        HTML <span style={{ fontSize: '1.5em' }}></span>
                    </div>
                </Html> */}
            </animated.mesh>
        </a.group>
    )
}

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
  