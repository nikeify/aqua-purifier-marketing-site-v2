"use client"

import { useEffect, useState } from "react"
import { Shield, Award, CheckCircle, Users } from "lucide-react"

const badges = [
  {
    icon: Shield,
    title: "ISO Certified",
    description: "Quality Management System",
  },
  {
    icon: Award,
    title: "Industry Leader",
    description: "12+ Years of Excellence",
  },
  {
    icon: CheckCircle,
    title: "BIS Approved",
    description: "Bureau of Indian Standards",
  },
  {
    icon: Users,
    title: "20,000+",
    description: "Satisfied Customers",
  },
]

export function TrustBadges() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("trust-badges")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="trust-badges" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#03045e" }}>
            Trusted & Certified
          </h2>
          <p className="text-lg text-gray-600">Your assurance of quality and reliability</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div
                key={index}
                className={`text-center transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                  <Icon className="w-8 h-8" style={{ color: "#03045e" }} />
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#03045e" }}>
                  {badge.title}
                </h3>
                <p className="text-gray-600 text-sm">{badge.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
