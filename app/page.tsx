import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { MasterySection } from "@/components/about/mastery-section"
import { TechStackSection } from "@/components/about/tech-stack-section"
import { ProjectSpotlight } from "@/components/project-spotlight"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GitHubActivity } from "@/components/github-activity"
import { ContactCTA } from "@/components/contact-cta"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <MasterySection />
      <TechStackSection />
      <ProjectSpotlight />
      <TestimonialsSection />
      <GitHubActivity />
      <ContactCTA />
    </div>
  )
}
