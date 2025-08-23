import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { AnimatedLogo } from "@/components/animated-logo"
import Link from "next/link"

interface HeaderProps {
  currentPage?: string
}

export function Header({ currentPage = "home" }: HeaderProps) {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div>
            <Link href="/">
              <AnimatedLogo />
            </Link>
          </div>
          <div className="hidden space-x-8 md:flex">
            <Link
              href="/"
              className={`font-medium transition-colors duration-300 ${
                currentPage === "home" ? "text-[#03045e]" : "text-gray-700 hover:text-[#03045e]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`font-medium transition-colors duration-300 ${
                currentPage === "products" ? "text-[#03045e]" : "text-gray-700 hover:text-[#03045e]"
              }`}
            >
              Products
            </Link>
            <Link
              href="/services"
              className={`font-medium transition-colors duration-300 ${
                currentPage === "services" ? "text-[#03045e]" : "text-gray-700 hover:text-[#03045e]"
              }`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors duration-300 ${
                currentPage === "about" ? "text-[#03045e]" : "text-gray-700 hover:text-[#03045e]"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors duration-300 ${
                currentPage === "contact" ? "text-[#03045e]" : "text-gray-700 hover:text-[#03045e]"
              }`}
            >
              Contact
            </Link>
          </div>
          <Link href="/contact">
            <Button className="transform rounded-full bg-[#03045e] px-6 py-2 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#02044b]">
              <Phone className="mr-2 h-4 w-4" />
              Get Quote
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
