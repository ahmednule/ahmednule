"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MASTERY_DATA } from "@/lib/about/mastery"

export function MasterySection() {
  return (
    <section className="relative px-6 py-24 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-6xl mx-auto"
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
          My Expertise
        </h2>
        <p className="text-muted-foreground mb-12">
          Core areas where I bring the most value
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MASTERY_DATA.map((mastery, index) => (
            <motion.div
              key={mastery.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={mastery.src}
                  alt={mastery.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-colors" />
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
