"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollAnimationWrapper } from "@/components/scroll-animations"
import Link from "next/link"

export function FeaturedProducts() {
  const [currentSlide, setCurrentSlide] = useState(0)

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

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + products.length) % products.length)
  }

  return (
    <section id="products" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper id="products-header">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#03045e]">Featured Products</h2>
            <p className="mb-6 text-xl text-gray-600">
              Discover our range of premium water purification systems
            </p>
            <Link href="/products">
              <Button className="transform rounded-full bg-[#03045e] px-8 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-[#02044b]">
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
                  <Card className="mx-4 transform overflow-hidden bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="group relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        width={400}
                        height={300}
                        quality={80}
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#03045e]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="mb-2 text-2xl font-semibold text-[#03045e]">{product.name}</h3>
                      <p className="mb-4 leading-relaxed text-gray-600">{product.caption}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-[#03045e]">{product.price}</span>
                        <Button
                          size="sm"
                          className="transform rounded-full bg-[#03045e] px-6 text-white transition-all duration-300 hover:scale-105 hover:bg-[#02044b]"
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
            className="absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-white p-3 text-[#03045e] shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
            aria-label="Previous product"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-white p-3 text-[#03045e] shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
            aria-label="Next product"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "scale-125 bg-[#03045e]" : "bg-gray-300 hover:bg-[#03045e]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
