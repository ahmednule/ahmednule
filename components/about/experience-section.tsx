"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { EXPERIENCE_DATA } from "@/lib/about/experience"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <section className="px-6 py-16 lg:px-12 bg-card/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">
          Work Experience
        </h2>

        <div className="space-y-6">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.title}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-card border border-border">
                          <Image
                            src={exp.companyLogo}
                            alt={exp.company}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-foreground">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground">
                            {exp.company}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-primary">
                        {exp.type}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {exp.startDate.toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                        {exp.endDate && (
                          <>
                            {" "}
                            -{" "}
                            {exp.endDate.toLocaleDateString("en-US", {
                              month: "short",
                              year: "numeric",
                            })}
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
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
