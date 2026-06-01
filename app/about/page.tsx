import { AboutHero } from "@/components/about-hero"
import { ExperienceSection } from "@/components/about/experience-section"
import { CertificationsSection } from "@/components/about/certifications-section"
import { InterestsSection } from "@/components/interests-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background bg-[linear-gradient(rgba(34,211,238,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.045)_1px,transparent_1px)] bg-[size:44px_44px]">
      <AboutHero />
      <ExperienceSection />
      <CertificationsSection />
      <InterestsSection />
    </div>
  )
}
