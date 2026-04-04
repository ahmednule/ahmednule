import { AboutHero } from "@/components/about-hero"
import { ExperienceSection } from "@/components/about/experience-section"
import { CertificationsSection } from "@/components/about/certifications-section"
import { InterestsSection } from "@/components/interests-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <ExperienceSection />
      <CertificationsSection />
      <InterestsSection />
    </div>
  )
}
