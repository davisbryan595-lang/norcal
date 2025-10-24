"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import Pricing from "@/components/pricing"
import Booking from "@/components/booking"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import BubbleEffect from "@/components/bubble-effect"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-black">
      <BubbleEffect />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Pricing />
      <Booking />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
