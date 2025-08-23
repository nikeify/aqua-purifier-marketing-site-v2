"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Sharma",
    location: "Mumbai",
    rating: 5,
    text: `"Excellent service and product quality. Our family has been using Aquaved RO for 3 years now. The water tastes pure and fresh every day."`,
    image: "/happy-customer-portrait.png",
  },
  {
    name: "Priya Patel",
    location: "Pune",
    rating: 5,
    text: `"Professional installation and great after-sales support. The technician explained everything clearly and the system works perfectly."`,
    image: "/satisfied-female-customer.png",
  },
  {
    name: "Amit Kumar",
    location: "Delhi",
    rating: 5,
    text: `"Best investment for our home. The water quality has improved significantly and the maintenance service is prompt and reliable."`,
    image: "/happy-male-customer.png",
  },
  {
    name: "Sunita Joshi",
    location: "Bangalore",
    rating: 5,
    text: `"Highly recommend Aquaved. Great product range and the team is very knowledgeable. Our commercial setup runs smoothly."`,
    image: "/confident-business-owner.png",
  },
]

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
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

    const element = document.getElementById("testimonials")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-16 text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-4xl font-bold" style={{ color: "#03045e" }}>
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">Trusted by thousands of satisfied families</p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="transform bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <CardContent className="p-8 text-center">
                      <div className="mb-4 flex justify-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="mb-6 text-lg leading-relaxed text-gray-700 italic">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center justify-center">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          quality={80}
                          className="mr-4 h-12 w-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold" style={{ color: "#03045e" }}>
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-500">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 transform rounded-full bg-white p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
            style={{ color: "#03045e" }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 transform rounded-full bg-white p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
            style={{ color: "#03045e" }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentTestimonial === index
                  ? "scale-125 bg-[#03045e]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
