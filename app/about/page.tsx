import { AboutHero } from "@/components/about-hero"
import { SkillsSection } from "@/components/skills-section"
import { TimelineSection } from "@/components/timeline-section"
import { InterestsSection } from "@/components/interests-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <SkillsSection />
      <TimelineSection />
      <InterestsSection />
    </div>
  )
}
