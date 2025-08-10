import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    id: 1,
    title: "AgriGuide",
    description:
      "Agriguide is an AI-driven platform designed to assist users in identifying diseases and pests affecting plants. By leveraging advanced machine learning algorithms, the platform provides accurate diagnostics and actionable recommendations for plant care.",
    image: "/agricultural-ai-platform.png",
    technologies: ["React", "Node.js", "AI/ML", "MongoDB"],
    liveUrl: "https://agriguide.vercel.app",
    githubUrl: "https://github.com/ahmed/agriguide",
    status: "completed",
  },
  {
    id: 2,
    title: "SmartLife",
    description:
      "Smart-Life is a Next.js project that aims to revolutionize local transport by offering an AI-powered tracking and navigation web application. The platform provides real-time updates and intelligent route optimization.",
    image: "/smart-transportation-app.png",
    technologies: ["Next.js", "TypeScript", "AI", "Maps API"],
    liveUrl: "https://smartlife.vercel.app",
    githubUrl: "https://github.com/ahmed/smartlife",
    status: "in-progress",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with modern design, secure payments, inventory management, and admin dashboard. Built with scalability and performance in mind.",
    image: "/modern-ecommerce-platform.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/ahmed/ecommerce",
    status: "completed",
  },
]

export function ProjectsGrid() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
