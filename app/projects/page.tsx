import { ProjectsHeader } from "@/components/projects-header"
import { ProjectsGrid } from "@/components/projects-grid"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background bg-[linear-gradient(rgba(34,211,238,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.045)_1px,transparent_1px)] bg-[size:44px_44px]">
      <ProjectsHeader />
      <ProjectsGrid />
    </div>
  )
}
