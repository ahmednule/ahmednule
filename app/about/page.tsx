import { AboutHero } from "@/components/about-hero"
import { MasterySection } from "@/components/about/mastery-section"
import { TechStackSection } from "@/components/about/tech-stack-section"
import { ExperienceSection } from "@/components/about/experience-section"
import { CertificationsSection } from "@/components/about/certifications-section"
import { InterestsSection } from "@/components/interests-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <MasterySection />
      <TechStackSection />
      <ExperienceSection />
      <CertificationsSection />
      <InterestsSection />
    </div>
  )
}
