import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimationWrapper } from "@/components/scroll-animations"

export function ServicesSection() {
  const services = [
    { title: "Installation", desc: "Professional installation services with proper setup and testing" },
    {
      title: "Maintenance",
      desc: "Regular maintenance and filter replacement services to ensure optimal performance",
    },
    { title: "Repair", desc: "Quick and reliable repair services with genuine spare parts" },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimationWrapper id="services-header">
          <h2 className="text-4xl font-bold mb-16 text-[#03045e]">Our Services</h2>
        </ScrollAnimationWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimationWrapper key={index} id={`service-${index}`} delay={index * 200}>
              <Card className="p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg h-full flex flex-col">
                <CardContent className="pt-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-[#03045e]">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-1">{service.desc}</p>
                  </div>
                  <Button className="bg-[#03045e] hover:bg-[#02044b] text-white transition-all duration-300 rounded-full mt-auto">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
