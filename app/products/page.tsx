import type { Metadata } from "next"
import type { Product } from "@/types/product"
import { ScrollAnimations } from "@/components/scroll-animations"
import { EnquiryProvider } from "@/components/enquiry-context"
import { EnquirySidebar } from "@/components/enquiry-sidebar"
import { ProductGrid } from "@/components/product-grid"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Aquaved RO Water Purifiers – Browse Our Products",
  description:
    "Explore Aquaved's premium RO water purifiers and spare parts. Trusted by 20,000+ customers since 2012. Quality, performance, and expert service guaranteed.",
  keywords: "RO water purifier, domestic RO, commercial RO, water purification, Aquaved products",
  openGraph: {
    title: "Aquaved RO Water Purifiers – Browse Our Products",
    description:
      "Explore Aquaved's premium RO water purifiers and spare parts. Trusted by 20,000+ customers since 2012.",
    images: ["/aquaved-ro-kitchen.jpeg"],
  },
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Kitchen RO System",
    category: "Domestic RO",
    image: "/aquaved-ro-kitchen.jpeg",
    description:
      "Advanced RO system with digital display and copper alkaline technology for kitchen countertops.",
    features: ["Digital Display", "Copper Alkaline", "Multi-Stage Filtration"],
  },
  {
    id: 2,
    name: "Fusion RO Water Purifier",
    category: "Domestic RO",
    image: "/aquaved-fusion-ro.jpeg",
    description:
      "Sleek white RO system with copper accents and advanced reverse osmosis technology.",
    features: ["RO + UV + UF + TDS", "Copper Technology", "Wall Mounted"],
  },
  {
    id: 3,
    name: "Mineral Water Purifier",
    category: "Domestic RO",
    image: "/aquaved-mineral-water.jpeg",
    description:
      "Compact mineral water purifier with Dr.AquaBerry technology and blue accent design.",
    features: ["Mineral Enhancement", "Compact Design", "Dr.AquaBerry Tech"],
  },
  {
    id: 4,
    name: "Transparent RO System",
    category: "Domestic RO",
    image: "/aquaved-transparent-ro.jpeg",
    description:
      "See-through RO system showcasing internal filtration components with copper accents.",
    features: ["Transparent Design", "Visible Filtration", "Copper Alkaline"],
  },
  {
    id: 5,
    name: "Smart Countertop Dispenser",
    category: "Domestic RO",
    image: "/aquaved-countertop-dispenser.jpeg",
    description:
      'Modern black countertop water dispenser with touch controls and "Freshness In Every Drop".',
    features: ["Touch Controls", "Countertop Design", "Smart Display"],
  },
  {
    id: 6,
    name: "Next Gen LED System",
    category: "Domestic RO",
    image: "/aquaved-nextgen-led.jpeg",
    description:
      "Advanced RO system with green LED display and next-generation water purification technology.",
    features: ["LED Display", "Next Gen Tech", "Multi-Stage Process"],
  },
  {
    id: 7,
    name: "Smart LED Display RO",
    category: "Domestic RO",
    image: "/aquaved-smart-led.jpeg",
    description:
      "Digital smart RO system with copper LED display and advanced purification indicators.",
    features: ["Digital Smart Display", "Copper LED", "Advanced Indicators"],
  },
  {
    id: 8,
    name: "Copper Transparent RO",
    category: "Domestic RO",
    image: "/aquaved-copper-transparent.jpeg",
    description:
      "Premium transparent RO system with copper alkaline technology and visible filtration process.",
    features: ["Copper Alkaline", "Transparent Body", "Premium Quality"],
  },
  {
    id: 9,
    name: "Silver Touch Dispenser",
    category: "Domestic RO",
    image: "/aquaved-silver-dispenser.jpeg",
    description:
      "Elegant silver countertop dispenser with touch panel controls and modern aesthetics.",
    features: ["Touch Panel", "Silver Finish", "Countertop Model"],
  },
  {
    id: 10,
    name: "Premium Water System",
    category: "Spare Parts",
    image: "/aquaved-transparent-system.jpeg",
    description:
      "Complete water purifier system with visible filtration stages and premium quality components.",
    features: ["Complete System", "Visible Stages", "ISO Certified"],
  },
  {
    id: 11,
    name: "Burgundy Touch Dispenser",
    category: "Domestic RO",
    image: "/aquaved-burgundy-dispenser.jpeg",
    description: "Stylish burgundy water dispenser with touch controls and premium finish.",
    features: ["Touch Controls", "Burgundy Finish", "Premium Design"],
  },
  {
    id: 12,
    name: "Next Gen Transparent RO",
    category: "Domestic RO",
    image: "/aquaved-nextgen-transparent.jpeg",
    description:
      "Advanced transparent RO system with Next Gen LED display and copper alkaline technology.",
    features: ["Next Gen Display", "Transparent Design", "Copper Alkaline"],
  },
  {
    id: 13,
    name: "Commercial RO Plant",
    category: "Commercial RO",
    image: "/aquaved-commercial-plant.jpeg",
    description:
      "Heavy-duty commercial RO plant with three-stage filtration for industrial applications.",
    features: ["Commercial Grade", "Three Stage", "Industrial Use"],
  },
  {
    id: 14,
    name: "Mineral Water System",
    category: "Spare Parts",
    image: "/aquaved-mineral-transparent.jpeg",
    description:
      "Transparent mineral water purification system with advanced filtration technology.",
    features: ["Mineral Enhancement", "Transparent Body", "Advanced Tech"],
  },
  {
    id: 15,
    name: "Endless Purity RO",
    category: "Domestic RO",
    image: "/aquaved-endless-purity.jpeg",
    description:
      'Multi-stage water purifier with "Endless Purity" technology and sleek white design.',
    features: ["Multi-Stage", "Endless Purity", "Sleek Design"],
  },
  {
    id: 16,
    name: "Pink LED Smart RO",
    category: "Domestic RO",
    image: "/aquaved-pink-led.jpeg",
    description: "Next Gen water purifier with pink LED display and digital smart technology.",
    features: ["Pink LED Display", "Digital Smart", "Next Gen Tech"],
  },
]

export default function ProductsPage() {
  return (
    <EnquiryProvider>
      <ScrollAnimations />
      <div className="min-h-screen bg-gray-50">
        <Header currentPage="products" />

        {/* Page Header */}
        <section className="mt-16 bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Our Products</h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Discover our complete range of premium RO water purifiers and spare parts — built for
              homes, offices, and industries.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <ProductGrid products={products} />

        {/* Enquiry Sidebar */}
        <EnquirySidebar />
      </div>
    </EnquiryProvider>
  )
}
