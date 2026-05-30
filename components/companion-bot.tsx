"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, AnimatePresence as FramerPresence } from "framer-motion"
import { usePathname } from "next/navigation"

const phrases = [
  { trigger: 0, text: "SYSTEM_INIT // Welcome to my portfolio! 👋", emotion: "idle" },
  { trigger: 5, text: "LOADING_DATA // Check out my experience stats...", emotion: "scanning" },
  { trigger: 20, text: "ANALYZING // My tech stack is quite diverse!", emotion: "processing" },
  { trigger: 40, text: "HIGHLIGHT // ShambaSync is my flagship project", emotion: "excited" },
  { trigger: 60, text: "VERIFIED // People enjoy working with me", emotion: "verified" },
  { trigger: 80, text: "READY_STATE // Let's build something together!", emotion: "ready" },
]

export function CompanionBot() {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0])
  const [isVisible, setIsVisible] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)
  const { scrollYProgress } = useScroll()
  const pathname = usePathname()
  const lastScrollY = useRef(0)
  const [isScrollingDown, setIsScrollingDown] = useState(true)

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const direction = latest > lastScrollY.current
      setIsScrollingDown(direction)
      lastScrollY.current = latest

      const progress = latest * 100
      const phrase = phrases
        .slice()
        .reverse()
        .find((p) => progress >= p.trigger)

      if (phrase && phrase.text !== currentPhrase.text) {
        setIsVisible(false)
        setTimeout(() => {
          setCurrentPhrase(phrase)
          setIsVisible(true)
        }, 200)
      }
    })

    return () => unsubscribe()
  }, [scrollYProgress, currentPhrase])

  // Different expressions based on emotion
  const expressions = {
    idle: { color: "from-cyan-400 to-blue-500", eyeShape: "round", blink: true },
    scanning: { color: "from-emerald-400 to-green-500", eyeShape: "scan", blink: false },
    processing: { color: "from-amber-400 to-orange-500", eyeShape: "thinking", blink: true },
    excited: { color: "from-pink-400 to-rose-500", eyeShape: "star", blink: true },
    verified: { color: "from-violet-400 to-purple-500", eyeShape: "check", blink: true },
    ready: { color: "from-cyan-400 to-primary", eyeShape: "ready", blink: true },
  }

  const expression = expressions[currentPhrase.emotion as keyof typeof expressions]

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex items-end gap-4 pointer-events-auto"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.5, type: "spring" }}
    >
      {/* Speech Bubble */}
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={currentPhrase.text}
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative mb-4"
          >
            <div className="bg-[#12121a]/95 backdrop-blur-xl border border-primary/30 rounded-lg rounded-br-sm p-4 shadow-2xl shadow-primary/10 max-w-[280px]">
              <p className="text-sm font-mono text-foreground leading-relaxed">
                <span className="text-primary">&gt;</span> {currentPhrase.text}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                  className="text-primary ml-0.5"
                >
                  _
                </motion.span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Bot Character - Cyber Style */}
      <motion.div
        className="relative cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: isScrollingDown ? [0, -3, 0] : [0, 3, 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          },
        }}
      >
        {/* Outer glow */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${expression.color} blur-2xl opacity-40 rounded-xl`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        />

        {/* Bot Body */}
        <div
          className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${expression.color} shadow-2xl flex items-center justify-center transform transition-transform duration-300 overflow-hidden`}
        >
          {/* Circuit pattern background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1 left-1 w-2 h-px bg-white" />
            <div className="absolute top-1 left-1 w-px h-2 bg-white" />
            <div className="absolute bottom-1 right-1 w-2 h-px bg-white" />
            <div className="absolute bottom-1 right-1 w-px h-2 bg-white" />
          </div>

          {/* Face Container */}
          <div className="relative w-8 h-5 flex items-center justify-center gap-1">
            {/* Eyes based on emotion */}
            {expression.eyeShape === "round" && (
              <>
                <motion.div
                  className="w-2.5 h-2.5 bg-white rounded-full"
                  animate={{ scaleY: expression.blink ? [1, 0.1, 1] : 1 }}
                  transition={{ repeat: expression.blink ? Infinity : 0, duration: 3, delay: 1 }}
                />
                <motion.div
                  className="w-2.5 h-2.5 bg-white rounded-full"
                  animate={{ scaleY: expression.blink ? [1, 0.1, 1] : 1 }}
                  transition={{ repeat: expression.blink ? Infinity : 0, duration: 3, delay: 1 }}
                />
              </>
            )}

            {expression.eyeShape === "scan" && (
              <>
                <div className="w-3 h-1.5 bg-white rounded-full relative overflow-hidden">
                  <motion.div
                    className="absolute top-0 w-1 h-full bg-[#0a0a0f]"
                    animate={{ left: ["0%", "100%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  />
                </div>
                <div className="w-3 h-1.5 bg-white rounded-full relative overflow-hidden">
                  <motion.div
                    className="absolute top-0 w-1 h-full bg-[#0a0a0f]"
                    animate={{ left: ["0%", "100%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                  />
                </div>
              </>
            )}

            {expression.eyeShape === "thinking" && (
              <>
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                />
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                />
              </>
            )}

            {expression.eyeShape === "star" && (
              <>
                <motion.div
                  className="text-white text-lg"
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  ✦
                </motion.div>
                <motion.div
                  className="text-white text-lg"
                  animate={{ rotate: [0, -360] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  ✦
                </motion.div>
              </>
            )}

            {expression.eyeShape === "check" && (
              <>
                <motion.div
                  className="w-3 h-3 border-2 border-white rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 bg-white rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  />
                </motion.div>
              </>
            )}

            {expression.eyeShape === "ready" && (
              <>
                <motion.div
                  className="w-2.5 h-1.5 bg-white rounded-full"
                  animate={{ scaleY: [1, 0.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
                <motion.div
                  className="w-2.5 h-1.5 bg-white rounded-full"
                  animate={{ scaleY: [1, 0.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              </>
            )}
          </div>

          {/* Status indicators */}
          <motion.div
            className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-white/50 rounded-full"
            animate={{ scaleX: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />

          {/* Corner accents */}
          <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-white/30" />
          <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-white/30" />
          <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-white/30" />
          <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-white/30" />
        </div>

        {/* Data stream effect */}
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-px h-4 bg-gradient-to-b from-primary to-transparent"
          animate={{ opacity: [0.3, 0.7, 0.3], height: [8, 16, 8] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>

      {/* Expanded menu */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 bg-[#12121a]/95 backdrop-blur-xl border border-primary/30 rounded-lg p-3 shadow-2xl"
          >
            <div className="flex flex-col gap-1 min-w-[160px]">
              {[
                { icon: "🏠", label: "HOME", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
                { icon: "💼", label: "PROJECTS", action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
                { icon: "📧", label: "CONTACT", action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
              ].map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => {
                    item.action()
                    setIsExpanded(false)
                  }}
                  className="text-left px-3 py-2 hover:bg-primary/10 rounded font-mono text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  whileHover={{ x: 4 }}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
