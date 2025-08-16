import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />

      <main className="pt-16 flex items-center justify-center min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-transparent bg-gradient-to-br from-[#03045e] to-blue-400 bg-clip-text">
              404
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#03045e] to-blue-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-2">Oops! The page you're looking for seems to have evaporated.</p>
            <p className="text-gray-500">Just like how we purify water, let's help you find the right path.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/">
              <Button className="bg-[#03045e] hover:bg-[#02044b] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Button>
            </Link>

            <Link href="/products">
              <Button
                variant="outline"
                className="border-[#03045e] text-[#03045e] hover:bg-[#03045e] hover:text-white px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
              >
                <Search className="w-5 h-5 mr-2" />
                Browse Products
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Popular Pages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/products"
                className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#03045e] group-hover:text-white transition-colors">
                  <Search className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-gray-900">Our Products</h4>
                  <p className="text-sm text-gray-500">RO Water Purifiers</p>
                </div>
              </Link>

              <Link
                href="/services"
                className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#03045e] group-hover:text-white transition-colors">
                  <ArrowLeft className="w-6 h-6" />
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
