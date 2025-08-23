"use client"

import dynamic from "next/dynamic"

export const LazyTestimonials = dynamic(
  () => import("@/components/testimonials").then(mod => ({ default: mod.Testimonials })),
  {
    loading: () => <div className="mx-4 h-64 animate-pulse rounded-lg bg-gray-100" />,
    ssr: false,
  },
)

export const LazyTrustBadges = dynamic(
  () => import("@/components/trust-badges").then(mod => ({ default: mod.TrustBadges })),
  {
    loading: () => <div className="mx-4 h-32 animate-pulse rounded-lg bg-gray-100" />,
    ssr: false,
  },
)

export const LazyAboutSection = dynamic(
  () => import("@/components/about-section").then(mod => mod.AboutSection),
  {
    loading: () => <div className="mx-4 my-8 h-64 animate-pulse rounded-lg bg-gray-100" />,
    ssr: false,
  },
)
