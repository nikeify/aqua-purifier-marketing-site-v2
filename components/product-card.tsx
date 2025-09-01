"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEnquiry } from "@/components/enquiry-context"
import { toast } from "sonner"
import type { Product } from "@/types/product"
import type { EnquiryProduct } from "@/components/enquiry-context"

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

  // build a minimal payload for the enquiry system so we don't rely on exact
  // internal Enquiry types. Adjust fields to match your enquiry-context type.
  const handleAddToEnquiry = () => {
    const enquiryPayload: EnquiryProduct = {
      id: product.id,
      name: product.name,
      category: product.category,
      image: product.images?.[0] ?? product.image ?? "/placeholder.svg",
      description: product.description ?? "",
      features: product.features ?? [],
    }

    addToEnquiry(enquiryPayload)
    toast.success(`${product.name} added to enquiry!`)
  }

  const productSlug = product.slug ?? generateSlug(product.name)
  const imageSrc = product.images?.[0] ?? product.image ?? "/placeholder.svg"

  return (
    <Card
      className="group h-full transform overflow-hidden border-0 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <CardContent className="flex h-full flex-col p-0">
        <Link href={`/products/${productSlug}`} className="relative block overflow-hidden">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={imageSrc}
              alt={`${product.name} - Aquaved RO water purifier`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, 400px"
              quality={80}
            />
          </div>
          <Badge className="absolute top-4 left-4 bg-[#03045e] text-white">
            {product.category}
          </Badge>
        </Link>

        <div className="flex flex-1 flex-col p-6">
          <Link href={`/products/${productSlug}`}>
            <h3 className="mb-3 cursor-pointer text-xl font-semibold text-gray-900 transition-colors group-hover:text-[#03045e]">
              {product.name}
            </h3>
          </Link>

          <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">{product.description}</p>

          <div className="mb-6 flex flex-wrap gap-2">
            {(product.features ?? []).slice(0, 2).map((feature, idx) => (
              <Badge key={idx} variant="secondary" className="bg-gray-100 text-xs text-gray-700">
                {feature}
              </Badge>
            ))}
          </div>

          <Button
            onClick={handleAddToEnquiry}
            className="mt-auto w-full rounded-lg bg-[#03045e] py-2 text-white transition-colors duration-300 hover:bg-[#02044B]"
          >
            Add to Enquiry
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
