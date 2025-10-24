"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function DiscountPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      const key = "discount_popup_seen_at"
      const last = localStorage.getItem(key)
      const now = Date.now()
      const dayMs = 24 * 60 * 60 * 1000
      if (!last || now - Number(last) > dayMs) {
        const t = setTimeout(() => setOpen(true), 1500)
        return () => clearTimeout(t)
      }
    } catch {}
  }, [])

  const handleClose = () => {
    try {
      localStorage.setItem("discount_popup_seen_at", String(Date.now()))
    } catch {}
    setOpen(false)
  }

  const handleClaim = () => {
    try {
      localStorage.setItem("discount_popup_seen_at", String(Date.now()))
    } catch {}
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={(v) => (v ? setOpen(true) : handleClose())}>
      <DialogContent className="glass-effect-dark border border-[#00ff00] text-white">
        <DialogHeader>
          <DialogTitle className="font-poppins text-2xl">
            <span className="gradient-text">Limited-Time Discount</span>
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Get 10% OFF your first detail when you book today. Use code <span className="font-semibold text-white">SAVE10</span>.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Link
            href="#booking"
            onClick={handleClaim}
            className="px-5 py-3 bg-[#00ff00] text-black font-bold font-poppins rounded-lg btn-glow text-sm"
          >
            Claim 10% OFF
          </Link>
          <button onClick={handleClose} className="px-5 py-3 border-2 border-[#00ff00] text-[#00ff00] rounded-lg text-sm">
            No thanks
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
