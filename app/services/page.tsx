import { Header } from "@/components/header"
import { ScrollAnimations } from "@/components/scroll-animations"

export default function ServicesPage() {
  return (
    <>
      <ScrollAnimations />
      <Header currentPage="services" />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#03045e] mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive water purification solutions with expert installation, maintenance, and support services
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Installation Service */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#03045e] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#03045e] mb-4">Professional Installation</h3>
                <p className="text-gray-600 mb-4">
                  Expert installation of RO water purifiers with proper plumbing connections and system setup.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Free site inspection</li>
                  <li>• Professional plumbing work</li>
                  <li>• System testing & commissioning</li>
                  <li>• 1-year installation warranty</li>
                </ul>
              </div>

              {/* Maintenance Service */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#03045e] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#03045e] mb-4">Regular Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  Scheduled maintenance services to ensure optimal performance and water quality.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Filter replacement reminders</li>
                  <li>• System cleaning & sanitization</li>
                  <li>• Performance optimization</li>
                  <li>• Annual maintenance contracts</li>
                </ul>
              </div>

              {/* Repair Service */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#03045e] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#03045e] mb-4">Repair & Support</h3>
                <p className="text-gray-600 mb-4">
                  Quick repair services and technical support for all water purifier issues.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• 24/7 customer support</li>
                  <li>• Same-day repair service</li>
                  <li>• Genuine spare parts</li>
                  <li>• 6-month repair warranty</li>
                </ul>
              </div>

              {/* Water Testing */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#03045e] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#03045e] mb-4">Water Quality Testing</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive water analysis to determine the best purification solution for your needs.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Free water quality testing</li>
                  <li>• TDS & pH level analysis</li>
                  <li>• Contamination detection</li>
                  <li>• Customized recommendations</li>
                </ul>
              </div>

              {/* Commercial Solutions */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#03045e] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#03045e] mb-4">Commercial Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Large-scale water purification systems for offices, schools, hospitals, and industries.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• High-capacity RO plants</li>
                  <li>• Custom system design</li>
                  <li>• Bulk water solutions</li>
                  <li>• Enterprise support contracts</li>
                </ul>
              </div>

              {/* Consultation */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#03045e] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#03045e] mb-4">Expert Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Professional guidance to help you choose the right water purification system.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Free consultation calls</li>
                  <li>• Site visit & assessment</li>
                  <li>• Product recommendations</li>
                  <li>• Cost-benefit analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#03045e] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need Professional Water Purification Services?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact our experts for personalized solutions and competitive pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#03045e] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                Schedule Service Call
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#03045e] transition-colors duration-300">
                Get Free Quote
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
