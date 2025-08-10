"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AuroraBackground } from "@/components/aurora-background"
import { GradientText } from "@/components/gradient-text"
import { Section } from "@/components/section"

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects", value: "9+" },
  { label: "Clients", value: "10+" },
]

export function HeroSection() {
  return (
    <Section className="pt-24 pb-12">
      <AuroraBackground />
      <div className="relative z-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for work
        </span>

        <h1 className="mt-6 text-5xl font-extrabold leading-[1.1] tracking-tight md:text-7xl">
          <GradientText>Ahmed Nule</GradientText>
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-balance text-lg leading-relaxed text-white/75 md:text-xl">
          Software Engineer crafting modern web and AI products with a focus on performance, polish, and
          maintainability.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Button
            asChild
            className="px-6 py-6 text-base bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="px-6 py-6 text-base border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-3xl grid-cols-3 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center backdrop-blur-sm"
            >
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-xs text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
