import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollAnimationWrapper } from "@/components/scroll-animations"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimationWrapper id="about-images" animation="slide-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/aquaved-transparent-ro.jpeg"
                    alt="Transparent RO System showing internal components"
                    fill
                    className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                    quality={80}
                  />
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group mt-8">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/aquaved-smart-led.jpeg"
                    alt="Smart LED Display Water Purifier"
                    fill
                    className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                    quality={80}
                  />
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group -mt-8">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/aquaved-copper-transparent.jpeg"
                    alt="Copper Transparent RO System"
                    fill
                    className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                    quality={80}
                  />
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/aquaved-nextgen-led.jpeg"
                    alt="Next Generation LED Technology Water Purifier"
                    fill
                    className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                    quality={80}
                  />
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper id="about-content" animation="slide-left">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#03045e]">About Vedant Enterprises</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since 2012, Vedant Enterprises has been at the forefront of water purification technology under the
                trusted Aquaved brand. We specialize in manufacturing, trading, and servicing premium RO water purifiers
                that ensure every drop of water is pure and safe for your family.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice for
                over 20,000 families across the region. From residential to commercial solutions, we provide
                comprehensive water purification systems backed by expert service support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#03045e] hover:bg-[#02044b] text-white transition-all duration-300 transform hover:scale-105 rounded-full px-8"
                >
                  Learn More About Us
                </Button>
                <Button
                  size="lg"
                  className="bg-[#03045e] hover:bg-[#02044b] text-white transition-all duration-300 transform hover:scale-105 rounded-full px-8"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}
