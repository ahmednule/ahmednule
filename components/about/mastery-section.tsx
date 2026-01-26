"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MASTERY_DATA } from "@/lib/about/mastery"

export function MasterySection() {
  return (
    <section className="px-6 py-16 lg:px-12 bg-card/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">
          My Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MASTERY_DATA.map((mastery, index) => (
            <motion.div
              key={mastery.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={mastery.src}
                  alt={mastery.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {mastery.title}
                </h3>
                <p className="text-sm text-gray-200">{mastery.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
