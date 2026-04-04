"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const filters = ["All", "Frontend", "Backend", "Full-stack"]

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution with real-time inventory management, secure payment processing via Stripe, and a powerful admin dashboard for managing products and orders.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    category: "Full-stack",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool featuring real-time updates using WebSockets, intuitive drag-and-drop interface, and comprehensive team collaboration features.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    category: "Full-stack",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "AI Content Generator",
    description: "Machine learning powered content creation tool with customizable templates, brand voice settings, and support for multiple content formats including blog posts and social media.",
    tags: ["Python", "OpenAI", "React", "FastAPI"],
    category: "Full-stack",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Design System Library",
    description: "A comprehensive component library built with accessibility in mind. Includes 50+ reusable components, dark mode support, and extensive documentation with Storybook.",
    tags: ["React", "TypeScript", "Storybook", "Tailwind"],
    category: "Frontend",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Interactive dashboard for visualizing business metrics with real-time data updates, customizable widgets, and export capabilities for reports and presentations.",
    tags: ["Vue.js", "D3.js", "WebSocket", "Chart.js"],
    category: "Frontend",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "REST API Boilerplate",
    description: "Production-ready Node.js API starter with authentication, rate limiting, database migrations, comprehensive testing setup, and Docker configuration for easy deployment.",
    tags: ["Node.js", "Express", "PostgreSQL", "Docker"],
    category: "Backend",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Portfolio Website Builder",
    description: "Drag-and-drop website builder specifically designed for creatives. Features customizable themes, responsive layouts, and one-click deployment to various hosting platforms.",
    tags: ["Next.js", "Prisma", "Vercel", "Tailwind"],
    category: "Full-stack",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Microservices Architecture",
    description: "Scalable microservices setup using Docker and Kubernetes. Includes service mesh, distributed tracing, centralized logging, and automated CI/CD pipelines.",
    tags: ["Node.js", "Docker", "Kubernetes", "Redis"],
    category: "Backend",
    github: "https://github.com",
    demo: "https://example.com",
  },
]

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter)

  return (
    <section className="px-6 pb-24 lg:px-12">
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
              activeFilter === filter
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <Card key={project.title} className="bg-card border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <span className="text-xs text-primary/80 font-medium mt-1.5 inline-block px-2 py-0.5 rounded-md bg-primary/10">
                    {project.category}
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label={`View ${project.title} demo`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground mb-5 leading-relaxed">
                {project.description}
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-lg bg-secondary/80 text-secondary-foreground font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
