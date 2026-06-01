"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CERTIFICATIONS_DATA } from "@/lib/about/certifications"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"

export function CertificationsSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:px-12">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-300/5 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl"
      >
        <div className="flex items-center gap-3 mb-2">
          <Award className="h-7 w-7 text-emerald-200" />
          <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
            Certifications & Education
          </h2>
        </div>
        <p className="text-muted-foreground mb-12">
          Continuous learning and professional development
        </p>

        <div className="space-y-5">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-white/10 bg-card/85 shadow-2xl shadow-slate-950/15 backdrop-blur-md transition-all duration-300 hover:border-emerald-300/35">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-white/10 bg-card">
                      <Image
                        src={cert.logo}
                        alt={cert.organization}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-foreground mb-1">
                        {cert.title}
                      </CardTitle>
                      <p className="text-sm font-medium text-emerald-100">
                        {cert.organization}
                      </p>
                      <p className="mt-1.5 inline-block rounded-md border border-emerald-300/15 bg-emerald-300/10 px-2 py-0.5 text-xs text-muted-foreground">
                        {cert.year}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="leading-7 text-muted-foreground">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
