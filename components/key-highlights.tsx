import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Wrench, Package } from "lucide-react"
import { ScrollAnimationWrapper } from "@/components/scroll-animations"

export function KeyHighlights() {
  const highlights = [
    {
      icon: Package,
      title: "Premium Manufacturer",
      desc: "Manufacturer of premium RO systems with cutting-edge technology",
    },
    {
      icon: Users,
      title: "20,000+ Happy Customers",
      desc: "Trusted by thousands of families since 2012",
    },
    {
      icon: Award,
      title: "Wide Range of Parts",
      desc: "Comprehensive collection of RO spare parts and accessories",
    },
    {
      icon: Wrench,
      title: "Expert Service Support",
      desc: "Professional installation and maintenance services",
    },
  ]

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <ScrollAnimationWrapper key={index} id={`highlight-${index}`} delay={index * 200}>
              <Card className="flex h-full transform flex-col border-0 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
                <CardContent className="flex flex-1 flex-col justify-between pt-6">
                  <div>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 p-4">
                      <item.icon className="h-8 w-8 text-[#03045e]" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-[#03045e]">{item.title}</h3>
                  </div>
                  <p className="leading-relaxed text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
