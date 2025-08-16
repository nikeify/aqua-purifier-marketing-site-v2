"use client"

import Image from "next/image"
import Link from "next/link"
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

interface ProductCardProps {
  product: Product
  index?: number
}

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToEnquiry } = useEnquiry()

  const handleAddToEnquiry = (product: Product) => {
    addToEnquiry(product)
    toast.success(`${product.name} added to enquiry!`)
  }

  const productSlug = generateSlug(product.name)

  return (
    <Card
      className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-md overflow-hidden h-full"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <CardContent className="p-0 h-full flex flex-col">
        <Link href={`/products/${productSlug}`} className="relative overflow-hidden block">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={`${product.name} - Aquaved RO water purifier`}
            width={400}
            height={300}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <Badge className="absolute top-4 left-4 bg-[#03045e] text-white">{product.category}</Badge>
        </Link>

        <div className="p-6 flex-1 flex flex-col">
          <Link href={`/products/${productSlug}`}>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#03045e] transition-colors cursor-pointer">
              {product.name}
            </h3>
          </Link>

          <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1">{product.description}</p>

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
  )
}
