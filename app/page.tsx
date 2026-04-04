import { HeroSection } from "@/components/hero-section"
import { MasterySection } from "@/components/about/mastery-section"
import { TechStackSection } from "@/components/about/tech-stack-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactCTA } from "@/components/contact-cta"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MasterySection />
      <TechStackSection />
      <TestimonialsSection />
      <ContactCTA />
    </div>
  )
}
