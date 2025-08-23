"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, ShoppingCart, Send } from "lucide-react"
import { useEnquiry } from "@/components/enquiry-context"

export function EnquirySidebar() {
  const { enquiryItems, removeFromEnquiry, clearEnquiry, isEnquiryOpen, setIsEnquiryOpen } =
    useEnquiry()

  if (!isEnquiryOpen && enquiryItems.length === 0) return null

  return (
    <>
      {/* Backdrop */}
      {isEnquiryOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 z-40 bg-black lg:hidden"
          onClick={() => setIsEnquiryOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-96 transform bg-white shadow-2xl transition-transform duration-300 ${
          isEnquiryOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b bg-[#03045e] p-6 text-white">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Enquiry List</h3>
              <Badge className="bg-white text-[#03045e]">{enquiryItems.length}</Badge>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsEnquiryOpen(false)}
              className="hover:bg-opacity-20 text-white hover:bg-white"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {enquiryItems.length === 0 ? (
              <div className="py-16 text-center">
                <ShoppingCart className="mx-auto mb-4 h-16 w-16 text-gray-300" />
                <p className="text-gray-500">No products in enquiry</p>
                <p className="mt-2 text-sm text-gray-400">Add products to create an enquiry</p>
              </div>
            ) : (
              <div className="space-y-4">
                {enquiryItems.map(product => (
                  <Card key={product.id} className="border shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex space-x-3">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={80}
                          height={60}
                          className="rounded-lg object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate text-sm font-medium text-gray-900">
                            {product.name}
                          </h4>
                          <p className="mt-1 text-xs text-gray-500">{product.category}</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromEnquiry(product.id)}
                            className="mt-2 h-auto p-0 text-red-500 hover:bg-red-50 hover:text-red-700"
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {enquiryItems.length > 0 && (
            <div className="space-y-3 border-t p-4">
              <Button onClick={clearEnquiry} variant="outline" className="w-full bg-transparent">
                Clear All
              </Button>
              <Link href="/#contact" onClick={() => setIsEnquiryOpen(false)}>
                <Button className="w-full bg-[#03045e] text-white hover:bg-[#02044b]">
                  <Send className="mr-2 h-4 w-4" />
                  Send Enquiry ({enquiryItems.length})
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Floating Button */}
      {!isEnquiryOpen && enquiryItems.length > 0 && (
        <Button
          onClick={() => setIsEnquiryOpen(true)}
          className="fixed right-6 bottom-6 z-40 h-14 w-14 rounded-full bg-[#03045e] text-white shadow-lg hover:bg-[#02044b]"
        >
          <ShoppingCart className="h-6 w-6" />
          <Badge className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {enquiryItems.length}
          </Badge>
        </Button>
      )}
    </>
  )
}
