import { HeroSection } from "@/components/hero-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { ContactCTA } from "@/components/contact-cta"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProjects />
      <ContactCTA />
    </div>
  )
}
