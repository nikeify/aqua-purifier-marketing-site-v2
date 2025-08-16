export interface Product {
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

export interface ProductPageProps {
  params: { slug: string }
}
