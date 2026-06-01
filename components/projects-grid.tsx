"use client"

import { useState } from "react"
import { ExternalLink, Github, Layers3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const filters = ["All", "Frontend", "Backend", "Full-stack"]

const projects = [
  {
    title: "Online Management System",
    description: "A Django web app that simplifies managing employee leave requests, featuring leave balance tracking, automated notifications, and a calendar view. Most starred project on GitHub with 6 stars.",
    tags: ["Django", "Python", "HTML", "CSS"],
    category: "Full-stack",
    github: "https://github.com/ahmednule/Online_leave_Management_system",
    demo: "https://online-leave-management-system.onrender.com",
  },
  {
    title: "Diabetes Care Kenya",
    description: "A health platform solving challenges Kenyans face when diagnosed with diabetes. Built with Next.js 15, Prisma ORM, Aceternity UI, and Tailwind CSS for a modern, accessible experience.",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind", "Aceternity UI"],
    category: "Full-stack",
    github: "https://github.com/ahmednule/diabetes-care-kenya",
    demo: "https://diabetes-care-kenya.vercel.app/",
  },
  {
    title: "Smart Kuku",
    description: "A modern poultry management system built with TypeScript for tracking and managing farm operations efficiently.",
    tags: ["TypeScript", "Next.js", "React"],
    category: "Full-stack",
    github: "https://github.com/ahmednule/smart-kuku",
    demo: null,
  },
  {
    title: "Interview Time",
    description: "A collection of interview preparation materials and coding challenges in Python for technical interview readiness.",
    tags: ["Python", "Algorithms", "DSA"],
    category: "Backend",
    github: "https://github.com/ahmednule/interview-time",
    demo: null,
  },
  {
    title: "Big-O Notation",
    description: "Python implementations and visualizations of Big-O notation concepts for understanding algorithm complexity analysis.",
    tags: ["Python", "Algorithms", "CS Fundamentals"],
    category: "Backend",
    github: "https://github.com/ahmednule/Big-O-Notation",
    demo: null,
  },
  {
    title: "BIT 2203 DSA",
    description: "Data Structures and Algorithms coursework from Mount Kenya University. Covers fundamental CS concepts with Python implementations.",
    tags: ["Python", "DSA", "University"],
    category: "Backend",
    github: "https://github.com/ahmednule/BIT_2203_DSA",
    demo: null,
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
      <div className="mx-auto mb-10 flex max-w-6xl flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-200",
              activeFilter === filter
                ? "bg-cyan-300 text-slate-950 shadow-md shadow-cyan-950/20"
                : "border border-white/10 bg-card/80 text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <Card key={project.title} className="group border-white/10 bg-card/82 shadow-2xl shadow-slate-950/15 backdrop-blur-md transition-all duration-300 hover:border-cyan-300/35 hover:bg-card">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="min-w-0">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-cyan-300/10 text-cyan-200">
                    <Layers3 className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-foreground transition-colors group-hover:text-cyan-100">
                    {project.title}
                  </CardTitle>
                  <span className="mt-2 inline-block rounded-md border border-emerald-300/15 bg-emerald-300/10 px-2 py-0.5 text-xs font-medium text-emerald-100">
                    {project.category}
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-cyan-300/10 hover:text-cyan-100"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-cyan-300/10 hover:text-cyan-100"
                      aria-label={`View ${project.title} demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-5 leading-7 text-muted-foreground">
                {project.description}
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 bg-secondary/70 px-2.5 py-1 text-xs font-medium text-secondary-foreground"
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
