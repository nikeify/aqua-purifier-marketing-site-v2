"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { AnimatedLogo } from "@/components/animated-logo"
import Link from "next/link"

interface HeaderProps {
  currentPage?: string
}

export function Header({ currentPage = "home" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

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

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <Link href="/">
              <AnimatedLogo />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`transition-colors duration-300 font-medium ${
                currentPage === "home" ? "text-[#03045e]" : "text-gray-700 hover:text-[#03045e]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`transition-colors duration-300 font-medium ${
                currentPage === "products" ? "text-[#03045e]" : "text-gray-700 hover:text-[#03045e]"
              }`}
            >
              Products
            </Link>
            <Link
              href="/services"
              className={`transition-colors duration-300 font-medium ${
                currentPage === "services" ? "text-[#03045e]" : "text-gray-700 hover:text-[#03045e]"
              }`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`transition-colors duration-300 font-medium ${
                currentPage === "about" ? "text-[#03045e]" : "text-gray-700 hover:text-[#03045e]"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`transition-colors duration-300 font-medium ${
                currentPage === "contact" ? "text-[#03045e]" : "text-gray-700 hover:text-[#03045e]"
              }`}
            >
              Contact
            </Link>
          </div>
          <Link href="/contact">
            <Button className="bg-[#03045e] hover:bg-[#02044b] text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Phone className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
