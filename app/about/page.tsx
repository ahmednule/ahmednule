import { AboutHero } from "@/components/about-hero"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <AboutHero />
      <SkillsSection />
      <ExperienceSection />
    </div>
  )
}
