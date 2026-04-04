"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FRONT_END_TECHS } from "@/lib/about/frontend"
import { BACKEND_TECHS } from "@/lib/about/backend"

export function TechStackSection() {
  return (
    <section className="px-6 py-24 lg:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
            Tech Stack
          </h2>
          <p className="text-muted-foreground">
            Technologies I use to bring ideas to life
          </p>
        </div>

        {/* Frontend */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Frontend
          </h3>
          <motion.div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {FRONT_END_TECHS.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="relative group"
              >
                <div className="bg-card border border-border rounded-xl p-4 flex items-center justify-center h-24 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300">
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <p className="text-xs text-center text-muted-foreground mt-2.5 group-hover:text-foreground transition-colors font-medium">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Backend
          </h3>
          <motion.div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {BACKEND_TECHS.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="relative group"
              >
                <div className="bg-card border border-border rounded-xl p-4 flex items-center justify-center h-24 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300">
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <p className="text-xs text-center text-muted-foreground mt-2.5 group-hover:text-foreground transition-colors font-medium">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
