"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
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
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      aria-label={`View ${project.title} demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
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
