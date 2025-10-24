"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const plans = [
    {
      name: "Basic Detail",
      price: 99,
      description: "Perfect for regular maintenance",
      features: ["Exterior hand wash", "Tire shine", "Surface polish", "Interior vacuum"],
      recommended: false,
    },
    {
      name: "Full Detail",
      price: 149,
      description: "Our most popular package",
      features: [
        "Complete exterior wash",
        "Interior deep clean",
        "Leather conditioning",
        "Window cleaning",
        "Wax application",
      ],
      recommended: true,
    },
    {
      name: "Premium Package",
      price: 199,
      description: "Ultimate restoration",
      features: [
        "Full inside-out restoration",
        "Ceramic coating",
        "Protective finish",
        "Engine bay cleaning",
        "Undercarriage wash",
        "Premium products",
      ],
      recommended: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="pricing" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Our <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Transparent pricing for premium detailing services</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative rounded-lg p-8 transition-all duration-300 ${
                plan.recommended
                  ? "glass-effect-dark glow-border border-2 border-[#00ff00] scale-105"
                  : "glass-effect-dark border border-gray-700 hover-lift"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#00ff00] text-black px-4 py-1 rounded-full text-sm font-bold font-poppins">
                    RECOMMENDED
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold font-poppins mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold gradient-text font-poppins">${plan.price}</span>
                <span className="text-gray-400 ml-2">per service</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#00ff00]" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#booking"
                className={`w-full py-3 rounded-lg font-bold font-poppins transition-all text-center block ${
                  plan.recommended
                    ? "bg-[#00ff00] text-black btn-glow hover:shadow-lg"
                    : "border-2 border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-black"
                }`}
              >
                BOOK NOW
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
