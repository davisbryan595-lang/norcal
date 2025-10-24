import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Marysville Auto Detailing | Professional Interior & Exterior Car Detailing",
  description:
    "Premium mobile detailing services in Marysville, CA. Interior cleaning, exterior cleaning, and full-detail packages. Call (530) 315-0483 to book today.",
  keywords: "Marysville car detailing, mobile detail, exterior wash, ceramic coating, car cleaning",
  openGraph: {
    title: "Nor-Cal Auto Care | Quality Detailing",
    description: "Premium auto detailing services in Marysville, CA",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Nor-Cal Auto Care",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/norcal-k6c43jOYdf3E7rZrdljTBtnqcvVCZm.jpg",
              description: "Premium auto detailing services in Marysville, CA",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Marysville",
                addressRegion: "CA",
              },
              telephone: "(530) 315-0483",
              areaServed: ["Marysville", "Surrounding Areas"],
              serviceType: ["Exterior Cleaning", "Interior Cleaning", "Full Detail"],
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased bg-black text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
