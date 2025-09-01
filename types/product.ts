export interface Product {
  id: number
  slug?: string
  name: string
  category: string
  // price fields are optional to support products that don't specify pricing yet
  price?: string
  originalPrice?: string
  // support either legacy `image` or new `images` array
  image?: string
  images?: string[]
  caption?: string
  description: string
  features: string[]
  // specs and booleans can be optional
  specs?: Record<string, string>
  inStock?: boolean
  featured?: boolean
}

export interface ProductPageProps {
  params: { slug: string }
}
