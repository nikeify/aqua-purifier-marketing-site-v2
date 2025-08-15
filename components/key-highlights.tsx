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
    { icon: Users, title: "20,000+ Happy Customers", desc: "Trusted by thousands of families since 2012" },
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <ScrollAnimationWrapper key={index} id={`highlight-${index}`} delay={index * 200}>
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 bg-white border-0 shadow-lg h-full flex flex-col">
                <CardContent className="pt-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-[#03045e]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-[#03045e]">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
