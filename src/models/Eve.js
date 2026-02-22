
import { Gltf} from '@react-three/drei'
export default function Eve() {
  return (

            <Gltf castShadow receiveShadow position={[30, 30, 10]} rotation={[100 , 0, 0]} scale={10} src="/models/eve.glb" />
  )
}
