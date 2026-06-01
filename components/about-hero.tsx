import { MapPin } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:px-12 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-300/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-5 inline-flex items-center rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-sm font-medium text-cyan-100">
          Connected systems engineer
        </div>
        <h1 className="mb-6 text-5xl font-bold tracking-normal text-foreground lg:text-6xl">
          About Me
        </h1>
        <div className="mb-8 flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Nairobi, Kenya</span>
        </div>
        <div className="max-w-3xl space-y-6 text-muted-foreground leading-8">
          <p>
            I am a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work sits where product design, full-stack development, and practical systems thinking meet.
          </p>
          <p>
            Currently, I specialize in building modern web applications and reliable product interfaces, with a growing focus on connected workflows, IoT dashboards, APIs, and data-driven software.
          </p>
          <p>
            I have worked across agencies, organizations, start-ups, and digital product studios. I also enjoy contributing to open-source projects, technical writing, and mentoring other developers.
          </p>
          <p>
            Away from the code editor, I am usually exploring new technologies, reading about design systems, working on side projects, or spending time outdoors.
          </p>
        </div>
      </div>
    </section>
  )
}
