import Link from "next/link"
import { Header } from "@/components/header"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="products" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">Sorry, we couldn't find the product you're looking for.</p>
        <Link
          href="/products"
          className="inline-flex items-center px-6 py-3 bg-[#03045e] text-white font-semibold rounded-lg hover:bg-[#02044b] transition-colors"
        >
          Browse All Products
        </Link>
      </main>
    </div>
  )
}
