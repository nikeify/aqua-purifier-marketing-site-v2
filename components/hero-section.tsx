import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/modern-ro-water-purifier.png"
          alt="Modern RO Water Purifier"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03045e]/80 to-[#03045e]/60"></div>
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="mb-6 text-5xl leading-tight font-bold md:text-7xl">
            Pure Water, <span className="text-blue-200">Pure Trust</span>
          </h1>
          <p className="mb-8 text-xl leading-relaxed text-blue-100 md:text-2xl">
            Premium RO Water Purifiers & Expert Service since 2012
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/products">
              <Button
                size="lg"
                className="transform rounded-full bg-white px-8 py-4 text-lg text-[#03045e] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:text-[#03045e]"
              >
                Explore Our Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="transform rounded-full border-2 border-white bg-[#03045e] px-8 py-4 text-lg text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#02044b]"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
