import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  id?: string
}

export function Section({ children, className, containerClassName, id }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-20", className)}>
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/textures/lines.png')] bg-top opacity-[0.07]"
        aria-hidden="true"
      />
      <div className={cn("relative z-10 mx-auto w-full max-w-6xl px-6", containerClassName)}>{children}</div>
    </section>
  )
}
