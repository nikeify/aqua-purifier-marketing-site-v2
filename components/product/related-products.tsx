import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/types/product"

interface RelatedProductsProps {
  products: Product[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null

  return (
    <section className="mt-16">
      <h2 className="mb-8 text-2xl font-bold text-gray-900">Related Products</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {products.map(product => (
          <Link key={product.id} href={`/products/${product.slug}`} className="group">
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={product.images?.[0] || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-[#03045e]">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{product.category}</p>
                <p className="mt-2 text-lg font-bold text-[#03045e]">{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
