"use client"

import { useEffect } from "react"

export default function BubbleEffect() {
  useEffect(() => {
    const createBubble = () => {
      const bubble = document.createElement("div")
      bubble.className = "bubble"

      const size = Math.random() * 100 + 20
      const left = Math.random() * window.innerWidth
      const duration = Math.random() * 4 + 6

      bubble.style.width = `${size}px`
      bubble.style.height = `${size}px`
      bubble.style.left = `${left}px`
      bubble.style.bottom = "-100px"
      bubble.style.animationDuration = `${duration}s`

      document.body.appendChild(bubble)

      setTimeout(() => bubble.remove(), duration * 1000)
    }

    const interval = setInterval(createBubble, 2000)

    return () => clearInterval(interval)
  }, [])

  return null
}
