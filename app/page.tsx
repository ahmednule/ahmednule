import { HeroSection } from "@/components/hero-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { GradientDivider } from "@/components/divider"

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <HeroSection />
      <GradientDivider />
      <TechnologiesSection />
      <GradientDivider />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
