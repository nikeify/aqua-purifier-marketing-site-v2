"use client"

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { ScrollAnimationWrapper } from "@/components/scroll-animations"

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void
}

export function HeroSection({ onScrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/modern-ro-water-purifier.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#03045e]/80 to-[#03045e]/60"></div>
      </div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <ScrollAnimationWrapper id="hero-content" animation="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Pure Water, <span className="text-blue-200">Pure Trust</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Premium RO Water Purifiers & Expert Service since 2012
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onScrollToSection("products")}
              size="lg"
              className="bg-white text-[#03045e] hover:bg-gray-100 hover:text-[#03045e] text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Explore Our Products
            </Button>
            <Button
              onClick={() => onScrollToSection("contact")}
              size="lg"
              className="bg-[#03045e] hover:bg-[#02044b] text-white text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-white"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}
