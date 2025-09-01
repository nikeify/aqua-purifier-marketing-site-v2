import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ShoppingCart, Heart, Share2 } from "lucide-react"
import { Header } from "@/components/header"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { SpecsTable } from "@/components/product/specs-table"
import { ProductGallery } from "@/components/product/product-gallery"
import { RelatedProducts } from "@/components/product/related-products"
import type { Product } from "@/types/product"
import productsData from "@/data/products.json"

function getProduct(slug: string): Product | undefined {
  return productsData.find(product => product.slug === slug)
}

function getRelatedProducts(currentProduct: Product): Product[] {
  return productsData
    .filter(
      product => product.category === currentProduct.category && product.id !== currentProduct.id,
    )
    .slice(0, 3)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)

  if (!product) {
    return {
      title: "Product Not Found - Aquaved",
    }
  }

  // ensure we always provide a string for OG image (fallback to placeholder)
  const ogImage =
    product.images && product.images.length ? product.images[0] : "/placeholder-sv70y.png"

  return {
    title: `${product.name} - Aquaved RO Water Purifiers`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Aquaved`,
      description: product.description,
      images: [ogImage],
    },
  }
}

export async function generateStaticParams() {
  return productsData.map(product => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({
  params,
}: {
  // accept params as a Promise so it satisfies the generated PageProps type
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProduct(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product)

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="products" />

      <main className="mx-auto mt-16 max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs product={product} />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* ensure images prop is always a string[]; fallback to placeholder when missing */}
          <ProductGallery
            images={
              product.images && product.images.length ? product.images : ["/placeholder-sv70y.png"]
            }
            name={product.name}
          />

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm tracking-wide text-gray-500 uppercase">{product.category}</p>
              <h1 className="mt-2 text-3xl font-bold text-gray-900">{product.name}</h1>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-[#03045e]">{product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
              )}
              {product.inStock ? (
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  In Stock
                </span>
              ) : (
                <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                  Out of Stock
                </span>
              )}
            </div>

            <p className="leading-relaxed text-gray-600">{product.description}</p>

            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-[#03045e]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex space-x-4">
              <button className="flex flex-1 items-center justify-center space-x-2 rounded-lg bg-[#03045e] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#02044b]">
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Enquiry</span>
              </button>
              <button className="rounded-lg border border-gray-300 p-3 transition-colors hover:bg-gray-50">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
              <button className="rounded-lg border border-gray-300 p-3 transition-colors hover:bg-gray-50">
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
