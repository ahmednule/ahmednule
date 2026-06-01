"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { EXPERIENCE_DATA } from "@/lib/about/experience"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:px-12">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-300/5 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl"
      >
        <h2 className="mb-2 text-2xl font-bold text-foreground lg:text-3xl">
          Work Experience
        </h2>
        <p className="mb-10 text-muted-foreground">
          Where I've contributed and grown as a developer
        </p>

        <div className="space-y-5">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.title}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-white/10 bg-card/85 shadow-2xl shadow-slate-950/15 backdrop-blur-md transition-all duration-300 hover:border-cyan-300/35">
                <CardHeader>
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="relative h-12 w-12 overflow-hidden rounded-md border border-white/10 bg-card">
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
                    <div className="sm:text-right">
                      <p className="inline-block rounded-md border border-cyan-300/15 bg-cyan-300/10 px-2.5 py-1 text-sm font-medium text-cyan-100">
                        {exp.type}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1.5">
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
                  <p className="leading-7 text-muted-foreground">
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
