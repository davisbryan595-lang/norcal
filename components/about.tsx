"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { label: "Cars Detailed", value: 2500, suffix: "+" },
    { label: "Happy Clients", value: 1800, suffix: "+" },
    { label: "5-Star Reviews", value: 98, suffix: "%" },
  ]

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 rounded-lg overflow-hidden"
          >
            <Image src="/professional-car-detailing-team-working.jpg" alt="Nor-Cal Auto Care Team" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              About <span className="gradient-text">Nor-Cal Auto Care</span>
            </h2>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Proudly serving Marysville and nearby communities with premium auto detailing services. We believe that
              every vehicle deserves the highest level of care and attention to detail.
            </p>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Your satisfaction is our shine. We use only the finest products and techniques to ensure your vehicle
              looks and feels its absolute best.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect-dark p-4 rounded-lg text-center"
                >
                  <div className="text-3xl font-bold gradient-text font-poppins">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}
