"use client"

import Link from "next/link"
import { Suspense, useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Line, Sparkles, Text } from "@react-three/drei"
import { ArrowRight, Cpu, Database, Download, Gauge, Github, Radio, Server, Smartphone, Wifi } from "lucide-react"
import * as THREE from "three"
import { Button } from "@/components/ui/button"

const systemLayers = [
  { label: "Device Layer", detail: "Sensors, boards, signal capture", icon: Cpu },
  { label: "API Layer", detail: "Secure services and automations", icon: Server },
  { label: "Data Layer", detail: "PostgreSQL, Prisma, analytics", icon: Database },
  { label: "Experience Layer", detail: "Dashboards, portals, web apps", icon: Smartphone },
]

const projects = [
  { name: "SmartLife", type: "IoT automation", signal: "Live device control" },
  { name: "AgriGuide", type: "Data platform", signal: "Field insight engine" },
  { name: "ShambaSync", type: "Fintech system", signal: "Community savings logic" },
]

const techGroups = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Supabase",
  "Django",
  "Laravel",
  "Tailwind",
  "IoT",
  "APIs",
]

function CameraRig() {
  const target = useMemo(() => new THREE.Vector3(), [])

  useFrame(({ camera }) => {
    const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
    const progress = THREE.MathUtils.clamp(window.scrollY / scrollable, 0, 1)
    const x = THREE.MathUtils.lerp(0, 3.8, progress)
    const y = THREE.MathUtils.lerp(3.4, 1.6, progress)
    const z = THREE.MathUtils.lerp(10.5, 6.2, progress)

    camera.position.lerp(target.set(x, y, z), 0.045)
    camera.lookAt(0, 0.2, -8 - progress * 9)
  })

  return null
}

function SignalLine({
  from,
  to,
  color = "#22d3ee",
}: {
  from: [number, number, number]
  to: [number, number, number]
  color?: string
}) {
  const mid: [number, number, number] = [
    (from[0] + to[0]) / 2,
    Math.max(from[1], to[1]) + 0.8,
    (from[2] + to[2]) / 2,
  ]

  return (
    <Line
      points={[from, mid, to]}
      color={color}
      lineWidth={1.4}
      transparent
      opacity={0.65}
    />
  )
}

function DeviceNode({
  position,
  color,
  label,
}: {
  position: [number, number, number]
  color: string
  label: string
}) {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!group.current) return
    group.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.3 + position[0]) * 0.08
  })

  return (
    <group ref={group} position={position}>
      <mesh castShadow>
        <boxGeometry args={[1.2, 0.24, 0.86]} />
        <meshStandardMaterial color="#0f172a" metalness={0.5} roughness={0.28} />
      </mesh>
      <mesh position={[0, 0.15, 0]}>
        <boxGeometry args={[0.82, 0.05, 0.48]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.45} />
      </mesh>
      <mesh position={[0.42, 0.34, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.48, 12]} />
        <meshStandardMaterial color="#e2e8f0" />
      </mesh>
      <mesh position={[0.42, 0.62, 0]}>
        <sphereGeometry args={[0.08, 18, 18]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.3} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.24, 0]}>
        <torusGeometry args={[0.68, 0.01, 12, 80]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} transparent opacity={0.78} />
      </mesh>
      <Text
        position={[0, -0.42, 0.02]}
        rotation={[-0.35, 0, 0]}
        fontSize={0.16}
        anchorX="center"
        color="#cbd5e1"
      >
        {label}
      </Text>
    </group>
  )
}

function DashboardPanel({
  position,
  title,
  accent,
}: {
  position: [number, number, number]
  title: string
  accent: string
}) {
  return (
    <Float speed={1.1} floatIntensity={0.35} rotationIntensity={0.18}>
      <group position={position} rotation={[0, -0.16, 0]}>
        <mesh>
          <boxGeometry args={[2.45, 1.32, 0.08]} />
          <meshStandardMaterial color="#08111f" metalness={0.25} roughness={0.32} transparent opacity={0.88} />
        </mesh>
        <mesh position={[-0.82, 0.29, 0.07]}>
          <boxGeometry args={[0.55, 0.12, 0.03]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.85} />
        </mesh>
        <mesh position={[0.14, -0.08, 0.07]}>
          <boxGeometry args={[1.54, 0.06, 0.03]} />
          <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.4} />
        </mesh>
        <mesh position={[0.14, -0.33, 0.07]}>
          <boxGeometry args={[1.12, 0.06, 0.03]} />
          <meshStandardMaterial color="#34d399" emissive="#34d399" emissiveIntensity={0.4} />
        </mesh>
        <Text position={[0, 0.48, 0.09]} fontSize={0.18} anchorX="center" color="#f8fafc">
          {title}
        </Text>
      </group>
    </Float>
  )
}

function CoreSystem() {
  const core = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (!core.current) return
    core.current.rotation.y += delta * 0.28
  })

  return (
    <group ref={core} position={[0, 0.35, -8]}>
      <mesh>
        <cylinderGeometry args={[1.05, 1.05, 0.38, 6]} />
        <meshStandardMaterial color="#172033" metalness={0.62} roughness={0.25} />
      </mesh>
      <mesh position={[0, 0.35, 0]}>
        <sphereGeometry args={[0.42, 36, 36]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.2} metalness={0.2} roughness={0.18} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.65, 0.018, 12, 120]} />
        <meshStandardMaterial color="#34d399" emissive="#34d399" emissiveIntensity={0.9} />
      </mesh>
      <mesh rotation={[1.1, 0.25, 0]}>
        <torusGeometry args={[2.18, 0.012, 12, 120]} />
        <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.55} transparent opacity={0.7} />
      </mesh>
    </group>
  )
}

function IoTScene() {
  const nodes = [
    { position: [-3.4, 0.05, -5.4] as [number, number, number], color: "#22d3ee", label: "sensor" },
    { position: [3.2, -0.2, -6.4] as [number, number, number], color: "#34d399", label: "gateway" },
    { position: [-2.7, -0.08, -10.8] as [number, number, number], color: "#f59e0b", label: "edge" },
    { position: [3.7, 0.15, -12.1] as [number, number, number], color: "#a78bfa", label: "cloud" },
  ]

  return (
    <>
      <color attach="background" args={["#020617"]} />
      <fog attach="fog" args={["#020617", 8, 30]} />
      <ambientLight intensity={0.52} />
      <directionalLight position={[4, 8, 6]} intensity={1.4} />
      <pointLight position={[-5, 2, -4]} color="#22d3ee" intensity={11} />
      <pointLight position={[4, 3, -14]} color="#34d399" intensity={8} />
      <pointLight position={[0, 3, -9]} color="#f59e0b" intensity={5} />

      <gridHelper args={[42, 42, "#155e75", "#1e293b"]} position={[0, -1.15, -9]} />
      <Sparkles count={180} scale={[12, 4, 20]} position={[0, 2, -10]} size={1.8} speed={0.22} color="#bae6fd" opacity={0.45} />

      <CoreSystem />
      {nodes.map((node) => (
        <DeviceNode key={node.label} {...node} />
      ))}
      <SignalLine from={nodes[0].position} to={[0, 0.45, -8]} />
      <SignalLine from={nodes[1].position} to={[0, 0.45, -8]} color="#34d399" />
      <SignalLine from={nodes[2].position} to={[0, 0.45, -8]} color="#f59e0b" />
      <SignalLine from={nodes[3].position} to={[0, 0.45, -8]} color="#a78bfa" />

      <DashboardPanel position={[-3.1, 1.8, -8.8]} title="Telemetry" accent="#22d3ee" />
      <DashboardPanel position={[3.3, 1.58, -10.6]} title="API Health" accent="#34d399" />
      <DashboardPanel position={[0.1, 2.18, -14.2]} title="Product UI" accent="#f59e0b" />
      <CameraRig />
    </>
  )
}

function SceneFallback() {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.07)_1px,transparent_1px)] bg-[size:42px_42px]" />
  )
}

function HeroSystemVisual() {
  const nodes = [
    { label: "Sensor", value: "24.8 C", x: "11%", y: "18%", color: "bg-cyan-300" },
    { label: "Gateway", value: "98%", x: "72%", y: "16%", color: "bg-emerald-300" },
    { label: "API", value: "42ms", x: "14%", y: "73%", color: "bg-amber-300" },
    { label: "Cloud", value: "Live", x: "74%", y: "70%", color: "bg-violet-300" },
  ]

  return (
    <div className="pointer-events-none relative hidden min-h-[520px] lg:block">
      <div className="absolute inset-0 rounded-lg border border-white/10 bg-slate-950/28 shadow-2xl shadow-cyan-950/20 backdrop-blur-[2px]" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 620 520"
        role="img"
        aria-label="Connected IoT software system diagram"
      >
        <defs>
          <linearGradient id="signalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#34d399" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path d="M96 98 C170 58 248 76 306 144 C368 218 444 212 524 114" fill="none" stroke="url(#signalGradient)" strokeWidth="2" strokeDasharray="8 10" opacity="0.9" />
        <path d="M104 390 C164 316 232 302 310 356 C392 414 456 396 526 340" fill="none" stroke="url(#signalGradient)" strokeWidth="2" strokeDasharray="7 12" opacity="0.75" />
        <path d="M124 118 L310 260 L498 112 M132 380 L310 260 L504 368" fill="none" stroke="#38bdf8" strokeWidth="1.2" opacity="0.28" />

        <g filter="url(#softGlow)">
          <circle cx="310" cy="260" r="74" fill="#020617" stroke="#67e8f9" strokeOpacity="0.5" strokeWidth="2" />
          <circle cx="310" cy="260" r="46" fill="#0f172a" stroke="#34d399" strokeOpacity="0.6" />
          <circle cx="310" cy="260" r="14" fill="#67e8f9" opacity="0.92" />
          <path d="M274 260 H346 M310 224 V296" stroke="#bae6fd" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
        </g>

        <g opacity="0.88">
          <rect x="226" y="36" width="168" height="74" rx="10" fill="#08111f" stroke="#ffffff" strokeOpacity="0.12" />
          <text x="246" y="66" fill="#e0f2fe" fontSize="15" fontWeight="700">Telemetry Hub</text>
          <rect x="246" y="82" width="110" height="7" rx="4" fill="#22d3ee" opacity="0.75" />

          <rect x="222" y="410" width="176" height="76" rx="10" fill="#08111f" stroke="#ffffff" strokeOpacity="0.12" />
          <text x="242" y="441" fill="#ecfdf5" fontSize="15" fontWeight="700">Product UI</text>
          <rect x="242" y="456" width="42" height="8" rx="4" fill="#34d399" opacity="0.78" />
          <rect x="294" y="456" width="66" height="8" rx="4" fill="#f59e0b" opacity="0.72" />
        </g>
      </svg>

      {nodes.map((node) => (
        <div
          key={node.label}
          className="absolute w-36 rounded-lg border border-white/10 bg-slate-950/80 p-3 shadow-xl shadow-slate-950/30 backdrop-blur-md"
          style={{ left: node.x, top: node.y }}
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-400">{node.label}</span>
            <span className={`h-2 w-2 rounded-full ${node.color}`} />
          </div>
          <p className="text-lg font-semibold text-white">{node.value}</p>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 w-72 -translate-x-1/2 rounded-lg border border-cyan-300/15 bg-cyan-300/10 px-4 py-3 text-center">
        <p className="text-sm font-medium text-cyan-100">Devices &gt; APIs &gt; Data &gt; Interfaces</p>
      </div>
    </div>
  )
}

export function IoTPortfolioHome() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="fixed inset-0 z-0">
        <Suspense fallback={<SceneFallback />}>
          <Canvas
            camera={{ position: [0, 3.4, 10.5], fov: 46 }}
            dpr={[1, 1.75]}
            gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
          >
            <IoTScene />
          </Canvas>
        </Suspense>
      </div>

      <div className="fixed inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.26)_45%,rgba(2,6,23,0.78)_100%)]" />
      <div className="fixed inset-0 z-[1] bg-[linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(2,6,23,0.48)_46%,rgba(2,6,23,0.66)_100%)]" />

      <header className="fixed left-0 right-0 top-0 z-20 px-4 py-4 sm:px-6 lg:px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-lg border border-white/10 bg-slate-950/62 px-4 py-3 shadow-2xl shadow-cyan-950/20 backdrop-blur-md">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-cyan-300 text-slate-950">
              <Cpu className="h-4 w-4" />
            </span>
            Ahmed Nule
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            <Link href="/about" className="rounded-md px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white">
              About
            </Link>
            <Link href="/projects" className="rounded-md px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white">
              Projects
            </Link>
            <Link href="/contact" className="rounded-md px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white">
              Contact
            </Link>
          </div>
          <Button asChild size="sm" className="bg-emerald-300 text-slate-950 hover:bg-emerald-200">
            <Link href="/contact">Hire me</Link>
          </Button>
        </nav>
      </header>

      <div className="relative z-10">
        <section className="flex min-h-screen items-center px-6 pb-24 pt-32 lg:px-12">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-1.5 text-sm font-medium text-cyan-100">
                <Radio className="h-4 w-4" />
                IoT-focused software engineering portfolio
              </div>
              <h1 className="max-w-3xl text-5xl font-bold tracking-normal text-white sm:text-6xl lg:text-7xl">
                Ahmed Nule
              </h1>
              <p className="mt-5 max-w-2xl text-xl font-medium text-cyan-100 sm:text-2xl">
                Building connected web systems where devices, data, APIs, and user interfaces work as one product.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                I design and engineer full-stack software for real-world workflows, from IoT telemetry and dashboards to scalable backend services and polished frontend experiences.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-cyan-300 text-slate-950 hover:bg-cyan-200">
                  <Link href="/projects">
                    View systems
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-slate-500/70 bg-slate-950/45 text-slate-50 hover:bg-slate-800 hover:text-white">
                  <Link href="/contact">Start a project</Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="text-slate-200 hover:bg-slate-800/80 hover:text-white">
                  <a href="/assets/files/ahmednule.pdf" download="Ahmed_Nule_CV.pdf">
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
            <HeroSystemVisual />
          </div>
        </section>

        <section className="px-6 py-20 lg:px-12">
          <div className="max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">System Profile</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">A portfolio shaped around connected engineering.</h2>
              <p className="mt-4 leading-8 text-slate-300">
                The site now frames my work as a layered system: devices produce signals, APIs move them, databases preserve them, and interfaces make them useful.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {systemLayers.map((layer) => (
                <div key={layer.label} className="rounded-lg border border-white/10 bg-slate-950/68 p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur-md">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-cyan-300/12 text-cyan-200">
                    <layer.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{layer.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{layer.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-12">
          <div className="grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Engineering Stack</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Full-stack tools arranged like product infrastructure.</h2>
              <p className="mt-4 leading-8 text-slate-300">
                Instead of showing technologies as loose badges, the portfolio presents them as pieces of a working architecture.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {techGroups.map((tech) => (
                <div key={tech} className="rounded-md border border-white/10 bg-white/[0.055] px-4 py-4 text-sm font-medium text-slate-100 backdrop-blur-md">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-12">
          <div className="max-w-6xl">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Project Modules</p>
                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Work shown as systems, not screenshots.</h2>
              </div>
              <Button asChild variant="outline" className="w-fit border-slate-500/70 bg-slate-950/50 text-slate-50 hover:bg-slate-800 hover:text-white">
                <Link href="/projects">
                  Explore all projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {projects.map((project, index) => (
                <div key={project.name} className="rounded-lg border border-white/10 bg-slate-950/72 p-5 backdrop-blur-md">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-emerald-300/12 text-emerald-200">
                      {index === 0 ? <Wifi className="h-5 w-5" /> : index === 1 ? <Gauge className="h-5 w-5" /> : <Database className="h-5 w-5" />}
                    </div>
                    <span className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-slate-300">{project.type}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{project.signal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex min-h-[82vh] items-center px-6 py-24 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">Contact</p>
            <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Let's build the next connected product.</h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              Bring the device idea, workflow problem, or web platform brief. I can help shape it into a working software system with clean interfaces and reliable foundations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-emerald-300 text-slate-950 hover:bg-emerald-200">
                <Link href="/contact">Get in touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-500/70 bg-slate-950/45 text-slate-50 hover:bg-slate-800 hover:text-white">
                <Link href="https://github.com/ahmednule" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
