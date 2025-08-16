import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ShoppingCart, Heart, Share2 } from "lucide-react"
import { Header } from "@/components/header"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { SpecsTable } from "@/components/product/specs-table"
import { ProductGallery } from "@/components/product/product-gallery"
import { RelatedProducts } from "@/components/product/related-products"
import type { Product, ProductPageProps } from "@/types/product"
import productsData from "@/data/products.json"

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

        <div className="mt-16">
          <SpecsTable specs={product.specs} />
        </div>

        <RelatedProducts products={relatedProducts} />
      </main>
    </div>
  )
}
