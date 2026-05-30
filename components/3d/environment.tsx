"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Grid, Stars, Float, Sparkles } from "@react-three/drei"
import * as THREE from "three"

function FloatingGeometry({ position, color, speed = 1, type = "icosahedron" }: { position: [number, number, number], color: string, speed?: number, type?: string }) {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.x += delta * 0.2 * speed
    mesh.current.rotation.y += delta * 0.3 * speed
  })

  return (
    <Float speed={speed * 2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={mesh} position={position}>
        {type === "icosahedron" ? (
          <icosahedronGeometry args={[1, 0]} />
        ) : type === "octahedron" ? (
          <octahedronGeometry args={[1, 0]} />
        ) : (
          <boxGeometry args={[1, 1, 1]} />
        )}
        <meshStandardMaterial color={color} wireframe opacity={0.2} transparent />
      </mesh>
    </Float>
  )
}

export function Environment3D() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.5} 
        castShadow 
        shadow-mapSize-width={1024} 
        shadow-mapSize-height={1024} 
      />
      
      {/* Professional monochromatic/subtle lighting */}
      <pointLight position={[-10, 5, -10]} color="#e2e8f0" intensity={10} />
      <pointLight position={[10, 5, -30]} color="#3b82f6" intensity={15} />
      <pointLight position={[-5, 5, -50]} color="#cbd5e1" intensity={10} />

      <fog attach="fog" args={["#030305", 5, 35]} />

      <Grid
        position={[0, 0, 0]}
        args={[100, 100]}
        cellSize={1}
        cellThickness={1}
        cellColor="#1e293b"
        sectionSize={5}
        sectionThickness={1.5}
        sectionColor="#334155"
        fadeDistance={45}
        fadeStrength={1}
      />

      <Stars 
        radius={50} 
        depth={50} 
        count={3000} 
        factor={3} 
        saturation={0} 
        fade 
        speed={1} 
      />
      
      {/* Subtle particles */}
      <Sparkles count={150} scale={20} size={1.5} speed={0.2} opacity={0.4} color="#e2e8f0" position={[0, 2, -20]} />
      <Sparkles count={150} scale={20} size={2} speed={0.3} opacity={0.3} color="#94a3b8" position={[0, 2, -40]} />

      {/* Floating geometric objects - Professional theme */}
      <FloatingGeometry position={[-4, 3, -10]} color="#64748b" speed={0.3} type="octahedron" />
      <FloatingGeometry position={[5, 4, -20]} color="#94a3b8" speed={0.5} />
      <FloatingGeometry position={[-6, 2, -30]} color="#cbd5e1" speed={0.4} type="box" />
      <FloatingGeometry position={[4, 5, -40]} color="#64748b" speed={0.3} type="octahedron" />
      <FloatingGeometry position={[-3, 4, -50]} color="#94a3b8" speed={0.5} />
    </>
  )
}
