"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, ShoppingCart, Send } from "lucide-react"
import { useEnquiry } from "@/components/enquiry-context"

export function EnquirySidebar() {
  const { enquiryItems, removeFromEnquiry, clearEnquiry, isEnquiryOpen, setIsEnquiryOpen } = useEnquiry()

  if (!isEnquiryOpen && enquiryItems.length === 0) return null

  return (
    <>
      {/* Backdrop */}
      {isEnquiryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsEnquiryOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isEnquiryOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b bg-[#03045e] text-white">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-5 h-5" />
              <h3 className="text-lg font-semibold">Enquiry List</h3>
              <Badge className="bg-white text-[#03045e]">{enquiryItems.length}</Badge>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsEnquiryOpen(false)}
              className="text-white hover:bg-white hover:bg-opacity-20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {enquiryItems.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No products in enquiry</p>
                <p className="text-sm text-gray-400 mt-2">Add products to create an enquiry</p>
              </div>
            ) : (
              <div className="space-y-4">
                {enquiryItems.map((product) => (
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
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm text-gray-900 truncate">{product.name}</h4>
                          <p className="text-xs text-gray-500 mt-1">{product.category}</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromEnquiry(product.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-0 h-auto mt-2"
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
            <div className="border-t p-4 space-y-3">
              <Button onClick={clearEnquiry} variant="outline" className="w-full bg-transparent">
                Clear All
              </Button>
              <Link href="/#contact" onClick={() => setIsEnquiryOpen(false)}>
                <Button className="w-full bg-[#03045e] hover:bg-[#02044b] text-white">
                  <Send className="w-4 h-4 mr-2" />
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
          className="fixed bottom-6 right-6 bg-[#03045e] hover:bg-[#02044b] text-white rounded-full w-14 h-14 shadow-lg z-40"
        >
          <ShoppingCart className="w-6 h-6" />
          <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
            {enquiryItems.length}
          </Badge>
        </Button>
      )}
    </>
  )
}
