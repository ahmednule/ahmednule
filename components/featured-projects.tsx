import Link from "next/link"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, drag-and-drop interface, and team features.",
    tags: ["React", "Node.js", "Socket.io"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "AI Content Generator",
    description: "Machine learning powered content creation tool with custom templates and brand voice settings.",
    tags: ["Python", "OpenAI", "React"],
    github: "https://github.com",
    demo: "https://example.com",
  },
]

export function FeaturedProjects() {
  return (
    <section className="px-6 py-16 lg:px-12 bg-card/50">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Featured Projects</h2>
        <Button asChild variant="ghost" size="sm">
          <Link href="/projects" className="text-primary">
            View All
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <Card key={project.title} className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-foreground">{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
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
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
