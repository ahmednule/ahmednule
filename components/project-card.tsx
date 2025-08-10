import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Clock } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  status: "completed" | "in-progress"
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden hover:border-purple-500 transition-all duration-300">
      <div className="grid md:grid-cols-2 gap-6 p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            {project.status === "in-progress" && (
              <Badge variant="outline" className="border-yellow-500 text-yellow-400">
                <Clock className="w-3 h-3 mr-1" />
                In Progress
              </Badge>
            )}
          </div>

          <p className="text-gray-300 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-purple-900/50 text-purple-300">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3 pt-4">
            <Button asChild variant="outline" size="sm">
              <Link href={project.liveUrl} target="_blank">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href={project.githubUrl} target="_blank">
                <Github className="w-4 h-4 mr-2" />
                Code
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative h-64 md:h-full rounded-xl overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  )
}
