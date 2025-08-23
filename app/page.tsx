import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { KeyHighlights } from "@/components/key-highlights"
import { ServicesSection } from "@/components/services-section"
import { FooterSection } from "@/components/footer-section"
import { LazyAboutSection, LazyTestimonials, LazyTrustBadges } from "./lazy-components"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="home" />
      <HeroSection />
      <FeaturedProducts />
      <KeyHighlights />
      <LazyTrustBadges />
      <LazyTestimonials />
      <LazyAboutSection />
      <ServicesSection />
      <FooterSection />
    </div>
  )
}
