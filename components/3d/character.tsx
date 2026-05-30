"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll } from "@react-three/drei"
import * as THREE from "three"

export function Character() {
  const group = useRef<THREE.Group>(null)
  const scroll = useScroll()

  useFrame((state, delta) => {
    if (!group.current) return

    // scroll.offset is between 0 and 1.
    // Let's say the total journey is 50 units long.
    const journeyLength = 50
    const currentZ = -scroll.offset * journeyLength

    // Move the character
    // Use lerp for smooth movement
    group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, currentZ, 0.1)

    // Add a little bobbing effect as they "walk"
    // Bob based on scroll speed or just a continuous bob
    group.current.position.y = Math.sin(state.clock.elapsedTime * 4) * 0.1

    // Update the camera to follow the character
    // We want the camera behind and slightly above the character
    const cameraZ = currentZ + 5
    const cameraY = 2
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, cameraZ, 0.1)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, cameraY, 0.1)
    
    // Look at the character
    const lookAtPosition = new THREE.Vector3(0, 0, currentZ - 5)
    state.camera.lookAt(lookAtPosition)
  })

  return (
    <group ref={group}>
      {/* Simple Stylized Robot/Character for now */}
      
      {/* Body */}
      <mesh castShadow receiveShadow position={[0, 0.75, 0]}>
        <capsuleGeometry args={[0.3, 0.5, 4, 16]} />
        <meshStandardMaterial color="#3b82f6" roughness={0.4} metalness={0.6} />
      </mesh>
      
      {/* Head */}
      <mesh castShadow receiveShadow position={[0, 1.6, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.1, 1.65, -0.28]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#60a5fa" />
      </mesh>
      <mesh position={[0.1, 1.65, -0.28]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#60a5fa" />
      </mesh>
    </group>
  )
}
