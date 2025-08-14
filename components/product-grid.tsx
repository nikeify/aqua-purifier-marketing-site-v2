"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEnquiry } from "@/components/enquiry-context"
import { toast } from "sonner"

interface Product {
  id: number
  name: string
  category: string
  image: string
  description: string
  features: string[]
}

interface ProductGridProps {
  products: Product[]
}

const categories = ["All", "Domestic RO", "Commercial RO", "Spare Parts"]

export function ProductGrid({ products }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState("All")
  const { addToEnquiry } = useEnquiry()

  const filteredProducts =
    activeCategory === "All" ? products : products.filter((product) => product.category === activeCategory)

  const handleAddToEnquiry = (product: Product) => {
    addToEnquiry(product)
    toast.success(`${product.name} added to enquiry!`)
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#03045e] text-white shadow-lg"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-[#03045e] hover:text-white"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-md overflow-hidden h-full"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardContent className="p-0 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} - Aquaved RO water purifier`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#03045e] text-white">{product.category}</Badge>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#03045e] transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    onClick={() => handleAddToEnquiry(product)}
                    className="w-full bg-[#03045e] hover:bg-[#02044b] text-white py-2 rounded-lg transition-colors duration-300 mt-auto"
                  >
                    Add to Enquiry
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
