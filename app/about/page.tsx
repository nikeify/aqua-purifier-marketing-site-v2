import { Header } from "@/components/header"
import { ScrollAnimations } from "@/components/scroll-animations"
import Image from "next/image"

export default function AboutPage() {
  return (
    <>
      <ScrollAnimations />
      <Header currentPage="about" />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h1 className="mb-6 text-4xl font-bold text-[#03045e] md:text-5xl">About Aquaved</h1>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Leading manufacturer and supplier of premium water purification systems, committed
                to providing pure, safe drinking water for every home and business.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-[#03045e]">Our Story</h2>
                <p className="mb-6 text-gray-600">
                  Founded with a vision to make pure drinking water accessible to everyone, Aquaved
                  has been at the forefront of water purification technology for over a decade. We
                  started as a small family business with a simple mission: to provide reliable,
                  efficient, and affordable water purification solutions.
                </p>
                <p className="mb-6 text-gray-600">
                  Today, we are proud to be one of the leading manufacturers of RO water purifiers,
                  serving thousands of satisfied customers across the region. Our commitment to
                  quality, innovation, and customer satisfaction has made us a trusted name in the
                  water purification industry.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#03045e]">10+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#03045e]">50K+</div>
                    <div className="text-gray-600">Happy Customers</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/aquaved-ro-kitchen.jpeg"
                  alt="Aquaved water purifier in modern kitchen"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="rounded-xl bg-white p-8 shadow-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#03045e]">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#03045e]">Our Mission</h3>
                <p className="text-gray-600">
                  To provide innovative, reliable, and affordable water purification solutions that
                  ensure access to safe drinking water for every household and business, while
                  maintaining the highest standards of quality and customer service.
                </p>
              </div>
              <div className="rounded-xl bg-white p-8 shadow-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#03045e]">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#03045e]">Our Vision</h3>
                <p className="text-gray-600">
                  To become the most trusted and preferred brand in water purification technology,
                  leading the industry through continuous innovation, sustainable practices, and
                  unwavering commitment to customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#03045e]">Our Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#03045e]">
                  <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-[#03045e]">Quality First</h3>
                <p className="text-gray-600">
                  We never compromise on quality. Every product undergoes rigorous testing to ensure
                  it meets our high standards and delivers exceptional performance.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#03045e]">
                  <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-[#03045e]">Customer Centric</h3>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do. We listen, understand, and
                  deliver solutions that exceed expectations.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#03045e]">
                  <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-[#03045e]">Innovation</h3>
                <p className="text-gray-600">
                  We continuously invest in research and development to bring cutting-edge water
                  purification technologies to our customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#03045e]">Why Choose Aquaved?</h2>
              <p className="text-xl text-gray-600">
                What sets us apart in the water purification industry
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-white p-6 text-center shadow-lg">
                <div className="mb-2 text-2xl font-bold text-[#03045e]">ISO Certified</div>
                <p className="text-gray-600">
                  Quality management systems certified to international standards
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 text-center shadow-lg">
                <div className="mb-2 text-2xl font-bold text-[#03045e]">24/7 Support</div>
                <p className="text-gray-600">
                  Round-the-clock customer service and technical support
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 text-center shadow-lg">
                <div className="mb-2 text-2xl font-bold text-[#03045e]">Pan-India Service</div>
                <p className="text-gray-600">Extensive service network across the country</p>
              </div>
              <div className="rounded-xl bg-white p-6 text-center shadow-lg">
                <div className="mb-2 text-2xl font-bold text-[#03045e]">Eco-Friendly</div>
                <p className="text-gray-600">
                  Sustainable practices and environmentally conscious manufacturing
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
