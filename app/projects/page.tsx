import { ProjectsHeader } from "@/components/projects-header"
import { ProjectsGrid } from "@/components/projects-grid"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <ProjectsHeader />
      <ProjectsGrid />
    </div>
  )
}
