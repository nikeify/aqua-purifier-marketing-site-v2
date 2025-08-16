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
    loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg mx-4" />,
    ssr: false,
  },
)

const LazyTrustBadges = dynamic(
  () => import("@/components/trust-badges").then((mod) => ({ default: mod.TrustBadges })),
  {
    loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-lg mx-4" />,
    ssr: false,
  },
)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="home" />
      <HeroSection />
      <FeaturedProducts />
      <KeyHighlights />
      <LazyTrustBadges />
      <LazyTestimonials />
      <AboutSection />
      <ServicesSection />
      <FooterSection />
    </div>
  )
}
