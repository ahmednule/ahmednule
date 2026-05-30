"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function Spotlight() {
  const [isVisible, setIsVisible] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 30, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible, mouseX, mouseY])

  // Don't show on mobile
  if (typeof window !== "undefined" && window.innerWidth < 1024) return null

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden hidden lg:block"
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          background: `
            radial-gradient(
              circle,
              rgba(0, 212, 255, 0.08) 0%,
              rgba(0, 212, 255, 0.03) 30%,
              rgba(131, 56, 236, 0.02) 60%,
              transparent 70%
            )
          `,
        }}
      />

      {/* Secondary glow */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          background: `
            radial-gradient(
              circle,
              rgba(255, 0, 110, 0.06) 0%,
              transparent 60%
            )
          `,
        }}
      />
    </motion.div>
  )
}
