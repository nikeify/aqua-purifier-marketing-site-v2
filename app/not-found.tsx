import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import Link from "next/link"

const messageOops = "Oops! The page you're looking for seems to have evaporated."
const messageFindPath = "Just like how we purify water, let's help you find the right path."

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />

      <main className="flex min-h-screen items-center justify-center pt-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="bg-gradient-to-br from-[#03045e] to-blue-400 bg-clip-text text-9xl font-bold text-transparent">
              404
            </h1>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#03045e] to-blue-400"></div>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Page Not Found</h2>
            <p className="mb-2 text-lg text-gray-600">{messageOops}</p>
            <p className="text-gray-500">{messageFindPath}</p>
          </div>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/">
              <Button className="transform rounded-full bg-[#03045e] px-8 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#02044b]">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Button>
            </Link>

            <Link href="/products">
              <Button
                variant="outline"
                className="rounded-full border-[#03045e] bg-transparent px-8 py-3 text-[#03045e] transition-all duration-300 hover:bg-[#03045e] hover:text-white"
              >
                <Search className="mr-2 h-5 w-5" />
                Browse Products
              </Button>
            </Link>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
            <h3 className="mb-6 text-xl font-semibold text-gray-900">Popular Pages</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Link
                href="/products"
                className="group flex items-center rounded-lg p-4 transition-colors hover:bg-gray-50"
              >
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 transition-colors group-hover:bg-[#03045e] group-hover:text-white">
                  <Search className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-gray-900">Our Products</h4>
                  <p className="text-sm text-gray-500">RO Water Purifiers</p>
                </div>
              </Link>

              <Link
                href="/services"
                className="group flex items-center rounded-lg p-4 transition-colors hover:bg-gray-50"
              >
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 transition-colors group-hover:bg-[#03045e] group-hover:text-white">
                  <ArrowLeft className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-gray-900">Our Services</h4>
                  <p className="text-sm text-gray-500">Installation & Support</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}
