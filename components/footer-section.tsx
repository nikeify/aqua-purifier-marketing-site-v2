"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, Youtube, MessageCircle } from "lucide-react"
import Link from "next/link"

export function FooterSection() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#03045e] to-[#02044b] py-16 text-white"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4">
              <h3 className="mb-2 text-3xl font-bold text-white drop-shadow-lg">Aquaved</h3>
              <p className="text-sm font-medium text-blue-200">by Vedant Enterprises</p>
            </div>
            <p className="mb-4 leading-relaxed text-blue-100">
              Your trusted partner for pure water solutions since 2012.
            </p>
            <div className="space-y-3">
              <Button
                size="sm"
                className="w-full transform justify-start rounded-full bg-white px-3 py-2 text-xs text-[#03045e] transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:text-[#03045e] sm:text-sm"
              >
                <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="truncate">
                  <span className="hidden sm:inline">Call Now: </span>
                  <span className="sm:hidden">Call: </span>
                  +91 98765 43210
                </span>
              </Button>
              <Button
                size="sm"
                className="w-full justify-start rounded-full border border-white bg-[#03045e] px-3 py-2 text-xs text-white transition-all duration-300 hover:bg-[#02044b] sm:text-sm"
              >
                <Mail className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="truncate">Email Us</span>
              </Button>
            </div>
            <div className="mt-6">
              <h5 className="mb-3 text-sm font-semibold text-blue-200">Follow Us</h5>
              <div className="flex space-x-3">
                <a
                  href="https://youtube.com/@aquaved"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform rounded-full bg-red-600 p-2 transition-all duration-300 hover:scale-110 hover:bg-red-700"
                  aria-label="Visit our YouTube channel"
                >
                  <Youtube className="h-4 w-4 text-white" />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform rounded-full bg-green-600 p-2 transition-all duration-300 hover:scale-110 hover:bg-green-700"
                  aria-label="Contact us on WhatsApp"
                >
                  <MessageCircle className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="transform text-blue-100 transition-colors duration-300 hover:translate-x-1 hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="transform text-blue-100 transition-colors duration-300 hover:translate-x-1 hover:text-white"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transform text-blue-100 transition-colors duration-300 hover:translate-x-1 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transform text-blue-100 transition-colors duration-300 hover:translate-x-1 hover:text-white"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Products</h4>
            <ul className="space-y-2 text-blue-100">
              <li className="cursor-pointer transition-colors hover:text-white">Home RO Systems</li>
              <li className="cursor-pointer transition-colors hover:text-white">
                Commercial Purifiers
              </li>
              <li className="cursor-pointer transition-colors hover:text-white">Spare Parts</li>
              <li className="cursor-pointer transition-colors hover:text-white">Accessories</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-blue-100">
              <p className="flex items-center transition-colors hover:text-white">
                <Mail className="mr-2 h-4 w-4" />
                info@aquaved.com
              </p>
              <p className="flex items-center transition-colors hover:text-white">
                <Phone className="mr-2 h-4 w-4" />
                +91 98765 43210
              </p>
              <p className="flex items-center transition-colors hover:text-white">
                📍 Mumbai, Maharashtra
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex cursor-pointer items-center transition-colors hover:text-white"
              >
                <MessageCircle className="mr-2 h-4 w-4 group-hover:text-green-400" />
                WhatsApp: +91 98765 43210
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-blue-200/30 pt-8 text-center text-blue-100">
          <p>&copy; 2024 Vedant Enterprises (Aquaved). All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
