"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Calendar, FolderCode, Cpu, Award } from "lucide-react"

const stats = [
  { label: "Years of Experience", value: 3, suffix: "+", icon: Calendar },
  { label: "Projects Completed", value: 10, suffix: "+", icon: FolderCode },
  { label: "Technologies", value: 20, suffix: "+", icon: Cpu },
  { label: "Certifications", value: 5, suffix: "", icon: Award },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1500
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="px-6 lg:px-12">
      <div className="max-w-5xl mx-auto border-y border-border">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border border-border">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group px-6 py-10 text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
