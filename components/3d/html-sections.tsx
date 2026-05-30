"use client"

import { Scroll } from "@react-three/drei"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { MasterySection } from "@/components/about/mastery-section"
import { TechStackSection } from "@/components/about/tech-stack-section"
import { ProjectSpotlight } from "@/components/project-spotlight"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactCTA } from "@/components/contact-cta"

// We use the Scroll component from drei with 'html' prop
// This allows us to position standard DOM elements relative to the scroll progress.
// The scroll container is relative, and we can position things at top: "100vh", "200vh", etc.

export function HtmlSections() {
  return (
    <Scroll html style={{ width: '100%', height: '100%' }}>
      {/* 
        We use raw CSS absolute positioning to place each section at a different "page".
        A page is 100vh.
      */}
      
      {/* Page 1 (0vh) - Hero */}
      <div style={{ position: 'absolute', top: '0vh', width: '100vw' }}>
        <div className="container mx-auto px-4 lg:px-8 py-24 flex items-center min-h-screen pointer-events-none">
          <div className="pointer-events-auto w-full">
            <HeroSection />
          </div>
        </div>
      </div>

      {/* Page 2 (120vh) - Stats & Mastery */}
      <div style={{ position: 'absolute', top: '120vh', width: '100vw' }}>
        <div className="container mx-auto px-4 lg:px-8 py-24 min-h-screen flex flex-col justify-center gap-12 pointer-events-none">
          <div className="pointer-events-auto">
            <StatsSection />
            <div className="mt-12">
              <MasterySection />
            </div>
          </div>
        </div>
      </div>

      {/* Page 3 (280vh) - Tech Stack */}
      <div style={{ position: 'absolute', top: '280vh', width: '100vw' }}>
        <div className="container mx-auto px-4 lg:px-8 py-24 min-h-screen flex items-center pointer-events-none">
          <div className="pointer-events-auto w-full">
            <TechStackSection />
          </div>
        </div>
      </div>

      {/* Page 4 (480vh) - Projects */}
      <div style={{ position: 'absolute', top: '480vh', width: '100vw' }}>
        <div className="container mx-auto px-4 lg:px-8 py-24 min-h-screen pointer-events-none">
          <div className="pointer-events-auto w-full">
            <ProjectSpotlight />
          </div>
        </div>
      </div>

      {/* Page 5 (630vh) - Testimonials */}
      <div style={{ position: 'absolute', top: '630vh', width: '100vw' }}>
        <div className="container mx-auto px-4 lg:px-8 py-24 min-h-screen flex items-center pointer-events-none">
          <div className="pointer-events-auto w-full">
            <TestimonialsSection />
          </div>
        </div>
      </div>

      {/* Page 6 (780vh) - Contact */}
      <div style={{ position: 'absolute', top: '780vh', width: '100vw' }}>
        <div className="container mx-auto px-4 lg:px-8 py-24 min-h-screen flex items-center pointer-events-none">
          <div className="pointer-events-auto w-full">
            <ContactCTA />
          </div>
        </div>
      </div>
    </Scroll>
  )
}
