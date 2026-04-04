"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CERTIFICATIONS_DATA } from "@/lib/about/certifications"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"

export function CertificationsSection() {
  return (
    <section className="relative px-6 py-24 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-2">
          <Award className="w-7 h-7 text-primary" />
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
            Certifications & Education
          </h2>
        </div>
        <p className="text-muted-foreground mb-12">
          Continuous learning and professional development
        </p>

        <div className="space-y-6">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-card border border-border flex-shrink-0">
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
                      <p className="text-sm text-primary font-medium">
                        {cert.organization}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1.5 px-2 py-0.5 rounded-md bg-primary/10 inline-block">
                        {cert.year}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
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
