import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
})

export const metadata: Metadata = {
  title: "Aquaved - Pure Water, Pure Trust | Premium RO Water Purifiers",
  description:
    "Vedant Enterprises (Aquaved) - Trusted manufacturer, trader, and service provider of RO water purifiers and spare parts since 2012. 20,000+ happy customers across Mumbai, Maharashtra.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords:
    "RO water purifier Mumbai, water purification system, Aquaved RO, Vedant Enterprises, water filter installation, RO spare parts, water purifier service, home water purifier, commercial RO system, water treatment Mumbai",
  authors: [{ name: "Vedant Enterprises" }],
  openGraph: {
    title: "Aquaved - Premium RO Water Purifiers | Vedant Enterprises",
    description:
      "Trusted water purification solutions since 2012. 20,000+ happy customers. Professional installation & service in Mumbai.",
    url: "https://aquaved.com",
    siteName: "Aquaved",
    images: [
      {
        url: "/aquaved-ro-kitchen.jpeg",
        width: 1200,
        height: 630,
        alt: "Aquaved Premium RO Water Purifier",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aquaved - Premium RO Water Purifiers",
    description: "Trusted water purification solutions since 2012. 20,000+ happy customers.",
    images: ["/aquaved-ro-kitchen.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/modern-ro-water-purifier.png" as="image" />
        <link rel="preload" href="/aquaved-ro-kitchen.jpeg" as="image" />
        <link rel="preload" href="/aquaved-fusion-ro.jpeg" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vedant Enterprises (Aquaved)",
              url: "https://aquaved.com",
              logo: "https://aquaved.com/favicon.png",
              description: "Premium RO water purifier manufacturer, trader, and service provider since 2012",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-98765-43210",
                contactType: "customer service",
                email: "info@aquaved.com",
              },
              foundingDate: "2012",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
