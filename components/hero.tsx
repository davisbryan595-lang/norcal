"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "brightness(0.6) saturate(1.1)",
          }}
        >
          <source src="https://videos.pexels.com/video-files/3571085/3571085-sd_640_360_30fps.mp4" type="video/mp4" />
          {/* Fallback to image if video doesn't load */}
          <img src="/luxury-car-detailing-foam-wash.jpg" alt="Car detailing" className="w-full h-full object-cover" />
        </video>

        {/* Animated Overlay with Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"
          animate={{
            opacity: [0.5, 0.6, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#00ff00] rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold font-poppins mb-6 leading-tight">
          Your Car, <span className="gradient-text neon-text">Detailed to Perfection</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Serving Marysville and Surrounding Areas — Exterior, Interior & Full Detailing
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#booking"
            className="px-8 py-4 bg-[#00ff00] text-black font-bold font-poppins rounded-lg btn-glow hover:shadow-lg transition-all text-lg"
          >
            BOOK NOW
          </Link>
          <Link
            href="#gallery"
            className="px-8 py-4 border-2 border-[#00ff00] text-[#00ff00] font-bold font-poppins rounded-lg hover:bg-[#00ff00] hover:text-black transition-all text-lg"
          >
            VIEW GALLERY
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-[#00ff00] rounded-full flex justify-center">
          <div className="w-1 h-2 bg-[#00ff00] rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
