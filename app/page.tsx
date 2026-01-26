import { HeroSection } from "@/components/hero-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactCTA } from "@/components/contact-cta"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TestimonialsSection />
      <ContactCTA />
    </div>
  )
}
