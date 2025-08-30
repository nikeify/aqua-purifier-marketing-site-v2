import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollAnimationWrapper } from "@/components/scroll-animations"

export function AboutSection() {
  return (
    <section id="about" className="overflow-x-hidden bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <ScrollAnimationWrapper id="about-images" animation="slide-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/aquaved-transparent-ro.jpeg"
                    alt="Transparent RO System showing internal components"
                    fill
                    className="transform object-cover transition-transform duration-300 group-hover:scale-105"
                    quality={80}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"                  />
                </div>
              </div>

              <div className="group mt-8 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/aquaved-smart-led.jpeg"
                    alt="Smart LED Display Water Purifier"
                    fill
                    className="transform object-cover transition-transform duration-300 group-hover:scale-105"
                    quality={80}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
              </div>

              <div className="group -mt-8 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/aquaved-copper-transparent.jpeg"
                    alt="Copper Transparent RO System"
                    fill
                    className="transform object-cover transition-transform duration-300 group-hover:scale-105"
                    quality={80}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
              </div>

              <div className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/aquaved-nextgen-led.jpeg"
                    alt="Next Generation LED Technology Water Purifier"
                    fill
                    className="transform object-cover transition-transform duration-300 group-hover:scale-105"
                    quality={80}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper id="about-content" animation="slide-left">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-[#03045e]">About Vedant Enterprises</h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Since 2012, Vedant Enterprises has been at the forefront of water purification
                technology under the trusted Aquaved brand. We specialize in manufacturing, trading,
                and servicing premium RO water purifiers that ensure every drop of water is pure and
                safe for your family.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Our commitment to quality, innovation, and customer satisfaction has made us the
                preferred choice for over 20,000 families across the region. From residential to
                commercial solutions, we provide comprehensive water purification systems backed by
                expert service support.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="transform rounded-full bg-[#03045e] px-8 text-white transition-all duration-300 hover:scale-105 hover:bg-[#02044b]"
                >
                  Learn More About Us
                </Button>
                <Button
                  size="lg"
                  className="transform rounded-full bg-[#03045e] px-8 text-white transition-all duration-300 hover:scale-105 hover:bg-[#02044b]"
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
