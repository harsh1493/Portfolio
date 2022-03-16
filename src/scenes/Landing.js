import React ,{Suspense }from 'react'
import Model from "../components/Medidate";
import { Canvas } from "@react-three/fiber"
import Sphere from '../models/Sphere';
// import { EffectComposer, Bloom } from '@react-three/postprocessing'

const Landing = () => {
    return (
        <Canvas  dpr={[1, 2]} linear shadows camera={{ position: [-5, 2, 10], fov: 60 }} style={{ height: "100vh",width:"100vw" }}  >
             <fog attach="fog" args={["white", 0, 40]} />
            <ambientLight intensity={0.4} />
            <directionalLight
                castShadow
                position={[2.5, 8, 5]}
                intensity={1.5}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <pointLight position={[-10, 0, -20]} color="red" intensity={2.5} />
            <pointLight position={[0, -10, 0]} intensity={1.5} />
            <group position={[0, -3.5, 0]}>
                <mesh receiveShadow castShadow position={[6, 0, 0]}>
                    <boxBufferGeometry attach="geometry" args={[6, 1, 1]} />
                    <meshStandardMaterial attach="material" />
                </mesh>
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
                    <planeBufferGeometry attach="geometry" args={[100, 100]} />
                    <shadowMaterial attach="material" transparent opacity={0.4} />
                </mesh>
                <Suspense fallback={null}>

                <Sphere path={"textures/react2.png"}/>
                <Sphere axisOfRotation={[0.6, -1, 0]} rotateDirection={-1} path={"textures/three.png"} />
                <Sphere axisOfRotation={[-0.5, 0.5, 0]} rotateDirection={1} delay={10} path={"textures/tailwind.png"} />
                {/* <Sphere  axisOfRotation={[-0.4,0.2,-0.2]} rotateDirection={-1} delay={2}/> */}
                    <Model />
                </Suspense>
            </group>
            {/* <OrbitControls /> */}
    
        </Canvas> 
  ); 
}
        
export default Landing