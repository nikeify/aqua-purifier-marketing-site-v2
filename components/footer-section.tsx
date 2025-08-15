"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, Youtube, MessageCircle } from "lucide-react"

interface FooterSectionProps {
  onScrollToSection: (sectionId: string) => void
}

export function FooterSection({ onScrollToSection }: FooterSectionProps) {
  return (
    <footer
      id="contact"
      className="py-16 text-white relative overflow-hidden bg-gradient-to-br from-[#03045e] to-[#02044b]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Aquaved</h3>
              <p className="text-sm text-blue-200 font-medium">by Vedant Enterprises</p>
            </div>
            <p className="text-blue-100 mb-4 leading-relaxed">
              Your trusted partner for pure water solutions since 2012.
            </p>
            <div className="space-y-3">
              <Button
                size="sm"
                className="bg-white text-[#03045e] hover:bg-gray-100 hover:text-[#03045e] w-full justify-start rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now: +91 98765 43210
              </Button>
              <Button
                size="sm"
                className="bg-[#03045e] hover:bg-[#02044b] text-white w-full justify-start rounded-full transition-all duration-300 border border-white"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
            </div>
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-blue-200">Follow Us</h5>
              <div className="flex space-x-3">
                <a
                  href="https://youtube.com/@aquaved"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Visit our YouTube channel"
                >
                  <Youtube className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Contact us on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Products", "Services", "About Us"].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onScrollToSection(link.toLowerCase().replace(" ", ""))}
                    className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-blue-100">
              <li className="hover:text-white transition-colors cursor-pointer">Home RO Systems</li>
              <li className="hover:text-white transition-colors cursor-pointer">Commercial Purifiers</li>
              <li className="hover:text-white transition-colors cursor-pointer">Spare Parts</li>
              <li className="hover:text-white transition-colors cursor-pointer">Accessories</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-blue-100">
              <p className="flex items-center hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                info@aquaved.com
              </p>
              <p className="flex items-center hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                +91 98765 43210
              </p>
              <p className="flex items-center hover:text-white transition-colors">📍 Mumbai, Maharashtra</p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-white transition-colors cursor-pointer group"
              >
                <MessageCircle className="w-4 h-4 mr-2 group-hover:text-green-400" />
                WhatsApp: +91 98765 43210
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-200/30 mt-12 pt-8 text-center text-blue-100">
          <p>&copy; 2024 Vedant Enterprises (Aquaved). All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
