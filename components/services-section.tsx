import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimationWrapper } from "@/components/scroll-animations"

export function ServicesSection() {
  const services = [
    {
      title: "Installation",
      desc: "Professional installation services with proper setup and testing",
    },
    {
      title: "Maintenance",
      desc: "Regular maintenance and filter replacement services to ensure optimal performance",
    },
    { title: "Repair", desc: "Quick and reliable repair services with genuine spare parts" },
  ]

  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollAnimationWrapper id="services-header">
          <h2 className="mb-16 text-4xl font-bold text-[#03045e]">Our Services</h2>
        </ScrollAnimationWrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <ScrollAnimationWrapper key={index} id={`service-${index}`} delay={index * 200}>
              <Card className="flex h-full transform flex-col border-0 bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardContent className="flex flex-1 flex-col justify-between pt-6">
                  <div>
                    <h3 className="mb-4 text-2xl font-semibold text-[#03045e]">{service.title}</h3>
                    <p className="mb-6 flex-1 leading-relaxed text-gray-600">{service.desc}</p>
                  </div>
                  <Button className="mt-auto rounded-full bg-[#03045e] text-white transition-all duration-300 hover:bg-[#02044b]">
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
