"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1200)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/norcal-k6c43jOYdf3E7rZrdljTBtnqcvVCZm.jpg"
            alt="Nor-Cal Auto Care Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="w-8 h-8 rounded-full border-2 border-[#00ff00]/30 border-t-[#00ff00] animate-spin" />
      </div>
    </div>
  )
}
