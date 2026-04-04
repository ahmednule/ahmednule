import Link from "next/link"
import { ArrowRight, Check, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  "Transparent contribution tracking",
  "Automated savings calculations",
  "Group management & reporting",
  "Financial analytics dashboard",
]

const techStack = ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"]

export function ProjectSpotlight() {
  return (
    <section className="px-6 py-24 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-medium text-primary mb-2">Featured Project</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
            ShambaSync
          </h2>
          <p className="text-muted-foreground mt-1">
            Empowering financial saving groups in underserved communities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A platform empowering financial saving groups in underserved communities. ShambaSync provides transparent tracking, automated calculations, and comprehensive financial reporting for community-based savings organizations.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm rounded-lg bg-secondary/80 text-secondary-foreground font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="https://github.com/ahmednule/shambasync" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl shadow-primary/10">
              <div className="relative h-80 lg:h-96 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                  }} />
                </div>
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <p className="text-primary font-semibold text-lg">ShambaSync</p>
                  <p className="text-muted-foreground text-sm mt-1">Screenshot coming soon</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-primary/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
