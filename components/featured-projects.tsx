import Link from "next/link"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const featuredProjects = [
  {
    title: "Diabetes Care Kenya",
    description: "A health platform solving challenges Kenyans face when diagnosed with diabetes. Built with Next.js 15, Prisma ORM, and Aceternity UI.",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    github: "https://github.com/ahmednule/diabetes-care-kenya",
    demo: "https://diabetes-care-kenya.vercel.app/",
  },
  {
    title: "Smart Kuku",
    description: "A modern poultry management system built with TypeScript for tracking and managing farm operations efficiently.",
    tags: ["TypeScript", "Next.js", "React"],
    github: "https://github.com/ahmednule/smart-kuku",
    demo: null,
  },
  {
    title: "Rust Tutorial",
    description: "A hands-on Rust learning resource documenting the journey into systems programming with practical examples.",
    tags: ["Rust", "HTML", "CSS"],
    github: "https://github.com/ahmednule/rust-tutorial",
    demo: null,
  },
]

export function FeaturedProjects() {
  return (
    <section className="relative px-6 py-24 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

      <div className="relative flex items-center justify-between mb-10">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground mt-1">A selection of my best work</p>
        </div>
        <Button asChild variant="ghost" size="sm">
          <Link href="/projects" className="text-primary">
            View All
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <Card key={project.title} className="bg-card border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="text-foreground group-hover:text-primary transition-colors">{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-lg bg-secondary/80 text-secondary-foreground font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
