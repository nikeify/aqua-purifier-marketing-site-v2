"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { KeyHighlights } from "@/components/key-highlights"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { FooterSection } from "@/components/footer-section"

const LazyTestimonials = dynamic(
  () => import("@/components/testimonials").then((mod) => ({ default: mod.Testimonials })),
  {
    loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />,
    ssr: false,
  },
)

const LazyTrustBadges = dynamic(
  () => import("@/components/trust-badges").then((mod) => ({ default: mod.TrustBadges })),
  {
    loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />,
    ssr: false,
  },
)

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const criticalImages = ["/modern-ro-water-purifier.png", "/aquaved-ro-kitchen.jpeg", "/aquaved-fusion-ro.jpeg"]

    const imagePromises = criticalImages.map((src) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.onload = resolve
        img.onerror = resolve
        img.src = src
      })
    })

    Promise.all(imagePromises).then(() => setImagesLoaded(true))
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="home" />

      <HeroSection onScrollToSection={scrollToSection} />
      <FeaturedProducts />
      <KeyHighlights />
      <LazyTrustBadges />
      <LazyTestimonials />
      <AboutSection />
      <ServicesSection />
      <FooterSection onScrollToSection={scrollToSection} />
    </div>
  )
}
