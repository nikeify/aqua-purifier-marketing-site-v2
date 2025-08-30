import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { AnimatedLogo } from "@/components/animated-logo"
import Link from "next/link"

interface HeaderProps {
  currentPage?: string
}

export function Header({ currentPage = "home" }: HeaderProps) {
  const navItems: { page: string; href: string; label: string }[] = [
    { page: "home", href: "/", label: "Home" },
    { page: "products", href: "/products", label: "Products" },
    { page: "services", href: "/services", label: "Services" },
    { page: "about", href: "/about", label: "About Us" },
    { page: "contact", href: "/contact", label: "Contact" },
  ]

  const linkClass = (page: string) =>
    `font-medium transition-colors duration-300 ${
      currentPage === page ? "text-[#03045e]" : "text-gray-700 hover:text-[#03045e]"
    }`

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <AnimatedLogo />
          </Link>

          {/* Desktop nav */}
          <div className="hidden space-x-8 md:flex">
            {navItems.map(item => (
              <Link key={item.page} href={item.href} className={linkClass(item.page)}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile nav */}
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded p-2">
              <div className="space-y-1">
                <span className="block h-0.5 w-6 bg-gray-800"></span>
                <span className="block h-0.5 w-6 bg-gray-800"></span>
                <span className="block h-0.5 w-6 bg-gray-800"></span>
              </div>
            </summary>
            <div className="absolute right-0 mt-2 w-48 rounded-lg border bg-white p-4 shadow-lg">
              <nav className="flex flex-col space-y-2">
                {navItems.map(item => (
                  <Link key={item.page} href={item.href} className={linkClass(item.page)}>
                    {item.label}
                  </Link>
                ))}
                <Link href="/contact">
                  <Button className="mt-2 w-full bg-[#03045e] text-white hover:bg-[#02044b]">
                    <Phone className="mr-2 h-4 w-4" />
                    Get Quote
                  </Button>
                </Link>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </nav>
  )
}
