import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ShoppingCart, Heart, Share2 } from "lucide-react"
import { Header } from "@/components/header"
import productsData from "@/data/products.json"

interface Product {
  id: number
  slug: string
  name: string
  category: string
  price: string
  originalPrice?: string
  images: string[]
  description: string
  features: string[]
  specs: Record<string, string>
  inStock: boolean
}

interface ProductPageProps {
  params: { slug: string }
}

function getProduct(slug: string): Product | undefined {
  return productsData.find((product) => product.slug === slug)
}

function getRelatedProducts(currentProduct: Product): Product[] {
  return productsData
    .filter((product) => product.category === currentProduct.category && product.id !== currentProduct.id)
    .slice(0, 3)
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProduct(params.slug)

  if (!product) {
    return {
      title: "Product Not Found - Aquaved",
    }
  }

  return {
    title: `${product.name} - Aquaved RO Water Purifiers`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Aquaved`,
      description: product.description,
      images: [product.images[0]],
    },
  }
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }))
}

function ProductGallery({ images, name }: { images: string[]; name: string }) {
  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={images[0] || "/placeholder.svg"}
          alt={name}
          width={600}
          height={600}
          className="h-full w-full object-cover object-center"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-4">
          {images.slice(1).map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${name} view ${index + 2}`}
                width={200}
                height={200}
                className="h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function Breadcrumbs({ product }: { product: Product }) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
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

function SpecsTable({ specs }: { specs: Record<string, string> }) {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {Object.entries(specs).map(([key, value]) => (
          <div key={key} className="border-b border-gray-200 pb-2">
            <dt className="text-sm font-medium text-gray-500">{key}</dt>
            <dd className="text-sm text-gray-900">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.slug}`} className="group">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-[#03045e]">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{product.category}</p>
                <p className="text-lg font-bold text-[#03045e] mt-2">{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProduct(params.slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product)

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="products" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <Breadcrumbs product={product} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">{product.category}</p>
              <h1 className="text-3xl font-bold text-gray-900 mt-2">{product.name}</h1>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-[#03045e]">{product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
              )}
              {product.inStock ? (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  In Stock
                </span>
              ) : (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Out of Stock
                </span>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-[#03045e] rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 bg-[#03045e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#02044b] transition-colors flex items-center justify-center space-x-2">
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Enquiry</span>
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Share2 className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16">
          <SpecsTable specs={product.specs} />
        </div>

        {/* Related Products */}
        <RelatedProducts products={relatedProducts} />
      </main>
    </div>
  )
}
