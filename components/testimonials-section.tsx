"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import testimonials from "@/lib/testimonials"

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const t = testimonials[index]

  return (
    <Section>
      <SectionHeader title="Testimonials" subtitle="What partners and clients say" />
      <div className="mx-auto mt-10 max-w-3xl">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
          <div className="mx-auto mb-6 grid place-items-center">
            <div className="relative h-28 w-28 overflow-hidden rounded-2xl">
              <Image
                src={t.avatar || "/placeholder.svg"}
                alt={`${t.name} headshot`}
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
          </div>
          <p className="text-balance text-center text-lg leading-relaxed text-white/80">“{t.quote}”</p>
          <div className="mt-6 text-center">
            <div className="font-semibold">{t.name}</div>
            <div className="text-sm text-white/60">{t.role}</div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white/15 bg-white/5 hover:bg-white/10"
              onClick={() => setIndex((p) => (p - 1 + testimonials.length) % testimonials.length)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white/15 bg-white/5 hover:bg-white/10"
              onClick={() => setIndex((p) => (p + 1) % testimonials.length)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-6 rounded-full ${
                  i === index ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-white/15"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
