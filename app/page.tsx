"use client"
import React, { useState, useEffect } from 'react';
import { HeroSection } from "@/components/hero-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { GradientDivider } from "@/components/divider"
  
export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
      
      <div 
        className="fixed inset-0 bg-gradient-to-br from-blue-950/10 via-purple-950/10 to-transparent pointer-events-none transition-opacity duration-1000"
        style={{ 
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: isLoaded ? 1 : 0
        }}
      />
      
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800/50 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
          style={{ 
            width: `${Math.min(100, (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` 
          }}
        />
      </div>
      
      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div 
          className="transform transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        >
          <HeroSection />
        </div>
        
        <GradientDivider />
        
        <div 
          className="transform transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        >
          <TechnologiesSection />
        </div>
        
        <GradientDivider />
        
        <div 
          className="transform transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${scrollY * -0.03}px)` }}
        >
          <TestimonialsSection />
        </div>
        
        <CTASection />
      </div>
      
      <div className="fixed top-1/4 right-10 pointer-events-none">
        <div 
          className="w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"
          style={{ 
            transform: `translateY(${Math.sin(Date.now() * 0.001) * 20}px)`,
            animationDuration: '4s' 
          }}
        />
      </div>
      
      <div className="fixed bottom-1/4 left-10 pointer-events-none">
        <div 
          className="w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse"
          style={{ 
            transform: `translateY(${Math.sin(Date.now() * 0.0015 + Math.PI) * 15}px)`,
            animationDuration: '3s' 
          }}
        />
      </div>
    </div>
  )
}
