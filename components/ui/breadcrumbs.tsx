import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type { Product } from "@/types/product"

interface BreadcrumbsProps {
  product: Product
}

export function Breadcrumbs({ product }: BreadcrumbsProps) {
  return (
    <nav className="mb-8 flex items-center space-x-2 text-sm text-gray-500">
      <Link href="/" className="hover:text-[#03045e]">
        Home
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link href="/products" className="hover:text-[#03045e]">
        Products
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="text-gray-900">{product.name}</span>
    </nav>
  )
}
