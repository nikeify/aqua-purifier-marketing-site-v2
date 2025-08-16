"use client"

import dynamic from "next/dynamic"

export const LazyTestimonials = dynamic(
  () => import("@/components/testimonials").then((mod) => ({ default: mod.Testimonials })),
  {
    loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg mx-4" />,
    ssr: false,
  },
)

export const LazyTrustBadges = dynamic(
  () => import("@/components/trust-badges").then((mod) => ({ default: mod.TrustBadges })),
  {
    loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-lg mx-4" />,
    ssr: false,
  },
)
