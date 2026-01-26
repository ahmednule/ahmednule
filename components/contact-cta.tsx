"use client"

import Link from "next/link"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ContactCTA() {
  return (
    <section className="px-6 py-16 lg:px-12 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="relative">
          {/* Animated border gradient */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-xl"
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main content with border */}
          <div className="relative rounded-2xl border-2 border-primary/30 bg-card/50 backdrop-blur-sm p-8 lg:p-12">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl lg:text-3xl font-bold text-foreground mb-4 text-balance"
            >
              {"Let's Work Together"}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground mb-8 leading-relaxed"
            >
              {"I'm currently available for freelance work and exciting new opportunities. If you have a project in mind or just want to chat, feel free to reach out."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    Get in Touch
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
