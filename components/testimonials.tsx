"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Excellent service and product quality. Our family has been using Aquaved RO for 3 years now. The water tastes pure and fresh every day.",
    image: "/happy-customer-portrait.png",
  },
  {
    name: "Priya Patel",
    location: "Pune",
    rating: 5,
    text: "Professional installation and great after-sales support. The technician explained everything clearly and the system works perfectly.",
    image: "/satisfied-female-customer.png",
  },
  {
    name: "Amit Kumar",
    location: "Delhi",
    rating: 5,
    text: "Best investment for our home. The water quality has improved significantly and the maintenance service is prompt and reliable.",
    image: "/happy-male-customer.png",
  },
  {
    name: "Sunita Joshi",
    location: "Bangalore",
    rating: 5,
    text: "Highly recommend Aquaved. Great product range and the team is very knowledgeable. Our commercial setup runs smoothly.",
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
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#03045e" }}>
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">Trusted by thousands of satisfied families</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                      <div className="flex items-center justify-center">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <h4 className="font-semibold" style={{ color: "#03045e" }}>
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-500 text-sm">{testimonial.location}</p>
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
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            style={{ color: "#03045e" }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            style={{ color: "#03045e" }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentTestimonial === index ? "bg-[#03045e] scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
