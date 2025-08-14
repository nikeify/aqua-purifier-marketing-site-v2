"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Award,
  Wrench,
  Package,
  Phone,
  Mail,
  Youtube,
  MessageCircle,
} from "lucide-react"
import { ScrollAnimationWrapper } from "@/components/scroll-animations"
import dynamic from "next/dynamic"
import Link from "next/link"
import { Header } from "@/components/header"

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
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const products = [
    {
      name: "Aquaved Premium Kitchen RO",
      image: "/aquaved-ro-kitchen.jpeg",
      caption: "Advanced RO system with digital display and copper accents",
      price: "₹18,999",
    },
    {
      name: "Aquaved Fusion RO System",
      image: "/aquaved-fusion-ro.jpeg",
      caption: "Modern white and copper design with premium filtration",
      price: "₹16,999",
    },
    {
      name: "Aquaved Mineral Water Purifier",
      image: "/aquaved-mineral-water.jpeg",
      caption: "Compact design with Dr.AquaBerry innovative technology",
      price: "₹14,999",
    },
    {
      name: "Aquaved Smart Countertop",
      image: "/aquaved-countertop-dispenser.jpeg",
      caption: "Sleek countertop dispenser with touch controls",
      price: "₹22,999",
    },
    {
      name: "Aquaved Next Gen LED",
      image: "/aquaved-nextgen-led.jpeg",
      caption: "Advanced LED display with smart monitoring features",
      price: "₹24,999",
    },
  ]

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="home" />

      {/* Hero Section */}
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
                onClick={() => scrollToSection("products")}
                size="lg"
                className="bg-white text-[#03045e] hover:bg-gray-100 hover:text-[#03045e] text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Explore Our Products
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
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

      {/* Key Highlights */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Package,
                title: "Premium Manufacturer",
                desc: "Manufacturer of premium RO systems with cutting-edge technology",
              },
              { icon: Users, title: "20,000+ Happy Customers", desc: "Trusted by thousands of families since 2012" },
              {
                icon: Award,
                title: "Wide Range of Parts",
                desc: "Comprehensive collection of RO spare parts and accessories",
              },
              {
                icon: Wrench,
                title: "Expert Service Support",
                desc: "Professional installation and maintenance services",
              },
            ].map((item, index) => (
              <ScrollAnimationWrapper key={index} id={`highlight-${index}`} delay={index * 200}>
                <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 bg-white border-0 shadow-lg h-full flex flex-col">
                  <CardContent className="pt-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <item.icon className="w-8 h-8 text-[#03045e]" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-[#03045e]">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <LazyTrustBadges />

      {/* Featured Products Carousel */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper id="products-header">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#03045e]">Featured Products</h2>
              <p className="text-xl text-gray-600 mb-6">Discover our range of premium water purification systems</p>
              <Link href="/products">
                <Button className="bg-[#03045e] hover:bg-[#02044b] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                  View All Products
                </Button>
              </Link>
            </div>
          </ScrollAnimationWrapper>

          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {products.map((product, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="mx-4 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                      <div className="aspect-[4/3] overflow-hidden relative group">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading={index < 2 ? "eager" : "lazy"}
                          decoding="async"
                          width="400"
                          height="300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#03045e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <CardContent className="p-6 text-center">
                        <h3 className="text-2xl font-semibold mb-2 text-[#03045e]">{product.name}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{product.caption}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-[#03045e]">{product.price}</span>
                          <Button
                            size="sm"
                            className="bg-[#03045e] hover:bg-[#02044b] text-white rounded-full px-6 transition-all duration-300 transform hover:scale-105"
                          >
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 text-[#03045e]"
              aria-label="Previous product"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 text-[#03045e]"
              aria-label="Next product"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-[#03045e] scale-125" : "bg-gray-300 hover:bg-[#03045e]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <LazyTestimonials />

      {/* About Company Snapshot */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimationWrapper id="about-images" animation="slide-right">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/aquaved-transparent-ro.jpeg"
                  alt="Transparent RO System showing internal components"
                  className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="400"
                />
                <img
                  src="/aquaved-smart-led.jpeg"
                  alt="Smart LED Display Water Purifier"
                  className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mt-8"
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="400"
                />
                <img
                  src="/aquaved-copper-transparent.jpeg"
                  alt="Copper Transparent RO System"
                  className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 -mt-8"
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="400"
                />
                <img
                  src="/aquaved-nextgen-led.jpeg"
                  alt="Next Generation LED Technology Water Purifier"
                  className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="400"
                />
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper id="about-content" animation="slide-left">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-[#03045e]">About Vedant Enterprises</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Since 2012, Vedant Enterprises has been at the forefront of water purification technology under the
                  trusted Aquaved brand. We specialize in manufacturing, trading, and servicing premium RO water
                  purifiers that ensure every drop of water is pure and safe for your family.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice for
                  over 20,000 families across the region. From residential to commercial solutions, we provide
                  comprehensive water purification systems backed by expert service support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-[#03045e] hover:bg-[#02044b] text-white transition-all duration-300 transform hover:scale-105 rounded-full px-8"
                  >
                    Learn More About Us
                  </Button>
                  <Button
                    size="lg"
                    className="bg-[#03045e] hover:bg-[#02044b] text-white transition-all duration-300 transform hover:scale-105 rounded-full px-8"
                  >
                    Download Brochure
                  </Button>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper id="services-header">
            <h2 className="text-4xl font-bold mb-16 text-[#03045e]">Our Services</h2>
          </ScrollAnimationWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Installation", desc: "Professional installation services with proper setup and testing" },
              {
                title: "Maintenance",
                desc: "Regular maintenance and filter replacement services to ensure optimal performance",
              },
              { title: "Repair", desc: "Quick and reliable repair services with genuine spare parts" },
            ].map((service, index) => (
              <ScrollAnimationWrapper key={index} id={`service-${index}`} delay={index * 200}>
                <Card className="p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg h-full flex flex-col">
                  <CardContent className="pt-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-[#03045e]">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6 flex-1">{service.desc}</p>
                    </div>
                    <Button className="bg-[#03045e] hover:bg-[#02044b] text-white transition-all duration-300 rounded-full mt-auto">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="py-16 text-white relative overflow-hidden bg-gradient-to-br from-[#03045e] to-[#02044b]"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Aquaved</h3>
                <p className="text-sm text-blue-200 font-medium">by Vedant Enterprises</p>
              </div>
              <p className="text-blue-100 mb-4 leading-relaxed">
                Your trusted partner for pure water solutions since 2012.
              </p>
              <div className="space-y-3">
                <Button
                  size="sm"
                  className="bg-white text-[#03045e] hover:bg-gray-100 hover:text-[#03045e] w-full justify-start rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: +91 98765 43210
                </Button>
                <Button
                  size="sm"
                  className="bg-[#03045e] hover:bg-[#02044b] text-white w-full justify-start rounded-full transition-all duration-300 border border-white"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
              </div>
              <div className="mt-6">
                <h5 className="text-sm font-semibold mb-3 text-blue-200">Follow Us</h5>
                <div className="flex space-x-3">
                  <a
                    href="https://youtube.com/@aquaved"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                    aria-label="Visit our YouTube channel"
                  >
                    <Youtube className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                    aria-label="Contact us on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "Products", "Services", "About Us"].map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.toLowerCase().replace(" ", ""))}
                      className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-blue-100">
                <li className="hover:text-white transition-colors cursor-pointer">Home RO Systems</li>
                <li className="hover:text-white transition-colors cursor-pointer">Commercial Purifiers</li>
                <li className="hover:text-white transition-colors cursor-pointer">Spare Parts</li>
                <li className="hover:text-white transition-colors cursor-pointer">Accessories</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-blue-100">
                <p className="flex items-center hover:text-white transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  info@aquaved.com
                </p>
                <p className="flex items-center hover:text-white transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 98765 43210
                </p>
                <p className="flex items-center hover:text-white transition-colors">📍 Mumbai, Maharashtra</p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white transition-colors cursor-pointer group"
                >
                  <MessageCircle className="w-4 h-4 mr-2 group-hover:text-green-400" />
                  WhatsApp: +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-200/30 mt-12 pt-8 text-center text-blue-100">
            <p>&copy; 2024 Vedant Enterprises (Aquaved). All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
