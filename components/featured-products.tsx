"use client"

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
    setCurrentSlide((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
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
  )
}
