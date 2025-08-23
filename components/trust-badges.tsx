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
    <section id="trust-badges" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-12 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="mb-4 text-3xl font-bold" style={{ color: "#03045e" }}>
            Trusted & Certified
          </h2>
          <p className="text-lg text-gray-600">Your assurance of quality and reliability</p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div
                key={index}
                className={`text-center transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <div className="mx-auto mb-4 flex h-20 w-20 transform items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl">
                  <Icon className="h-8 w-8" style={{ color: "#03045e" }} />
                </div>
                <h3 className="mb-2 text-lg font-semibold" style={{ color: "#03045e" }}>
                  {badge.title}
                </h3>
                <p className="text-sm text-gray-600">{badge.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
