import Link from "next/link"
import { Header } from "@/components/header"

const messageProductNotFound = "Sorry, we couldn't find the product you're looking for."
export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="products" />

      <main className="mx-auto mt-16 max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Product Not Found</h1>
        <p className="mb-8 text-xl text-gray-600">{messageProductNotFound}</p>
        <Link
          href="/products"
          className="inline-flex items-center rounded-lg bg-[#03045e] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#02044b]"
        >
          Browse All Products
        </Link>
      </main>
    </div>
  )
}
