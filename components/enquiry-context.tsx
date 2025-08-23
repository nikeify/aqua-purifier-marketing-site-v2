"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface Product {
  id: number
  name: string
  category: string
  image: string
  description: string
  features: string[]
}

interface EnquiryContextType {
  enquiryItems: Product[]
  addToEnquiry: (product: Product) => void
  removeFromEnquiry: (productId: number) => void
  clearEnquiry: () => void
  isEnquiryOpen: boolean
  setIsEnquiryOpen: (open: boolean) => void
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined)

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [enquiryItems, setEnquiryItems] = useState<Product[]>([])
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)

  const addToEnquiry = (product: Product) => {
    setEnquiryItems(prev => {
      if (prev.find(item => item.id === product.id)) {
        return prev // Already in enquiry
      }
      return [...prev, product]
    })
    setIsEnquiryOpen(true)
  }

  const removeFromEnquiry = (productId: number) => {
    setEnquiryItems(prev => prev.filter(item => item.id !== productId))
  }

  const clearEnquiry = () => {
    setEnquiryItems([])
    setIsEnquiryOpen(false)
  }

  return (
    <EnquiryContext.Provider
      value={{
        enquiryItems,
        addToEnquiry,
        removeFromEnquiry,
        clearEnquiry,
        isEnquiryOpen,
        setIsEnquiryOpen,
      }}
    >
      {children}
    </EnquiryContext.Provider>
  )
}

export function useEnquiry() {
  const context = useContext(EnquiryContext)
  if (context === undefined) {
    throw new Error("useEnquiry must be used within an EnquiryProvider")
  }
  return context
}
