import React ,{Suspense }from 'react'
import Model from "../components/Medidate";
import { Canvas } from "@react-three/fiber"
import Sphere from '../models/Sphere';
// import { EffectComposer, Bloom } from '@react-three/postprocessing'

const Landing = () => {
    return (
        <Canvas dpr={[1, 2]} shadows camera={{ position: [-5, 2, 10], fov: 60 }} style={{ height: "100vh",width:"100vw" }}  >
            <ambientLight intensity={1.5} color="#ffffff" />
            <hemisphereLight intensity={1} groundColor="#444444" color="#ffffff" />
            <directionalLight
                castShadow
                position={[5, 10, 7]}
                intensity={3}
                color="#ffffff"
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />
            <pointLight position={[0, 5, 0]} color="#ffffff" intensity={2} />
            <pointLight position={[-5, 0, 5]} color="#4dabf7" intensity={1} />
            <pointLight position={[5, 0, -5]} color="#ff6b6b" intensity={1} />
            <spotLight position={[10, 10, 10]} angle={0.5} penumbra={0.5} intensity={2} color="#ffffff" castShadow />
            <group position={[0, -3.5, 0]}>
                <mesh receiveShadow castShadow position={[6, 0, 0]}>
                    <meshStandardMaterial />
                </mesh>
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
                    <planeGeometry args={[100, 100]} />
                    <shadowMaterial transparent opacity={0.4} />
                </mesh>
                <Suspense fallback={null}>

                <Sphere path="textures/react2.png" />
                <Sphere axisOfRotation={[0.6, -1, 0]} rotateDirection={-1} path="textures/node.png" />
                <Sphere axisOfRotation={[-0.5, 0.5, 0]} rotateDirection={1} delay={10} path="textures/ai.png" />
                <Sphere axisOfRotation={[0.8, 0.3, -0.6]} rotateDirection={-1} delay={5} path="textures/three.png" />
                {/* <Sphere  axisOfRotation={[-0.4,0.2,-0.2]} rotateDirection={-1} delay={2}/> */}
                    <Model />
                </Suspense>
            </group>
            {/* <OrbitControls /> */}
    
        </Canvas> 
  ); 
}
        
export default Landing