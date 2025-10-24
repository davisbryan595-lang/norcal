"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Booking() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", phone: "", email: "", service: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="booking" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Book Your <span className="gradient-text">Appointment</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get in touch with us to schedule your detailing service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-gray-600 py-3 px-0 text-white placeholder-gray-500 focus:border-[#00ff00] focus:outline-none transition-colors"
              />
            </div>

            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-gray-600 py-3 px-0 text-white placeholder-gray-500 focus:border-[#00ff00] focus:outline-none transition-colors"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-gray-600 py-3 px-0 text-white placeholder-gray-500 focus:border-[#00ff00] focus:outline-none transition-colors"
              />
            </div>

            <div className="relative">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-gray-600 py-3 px-0 text-white placeholder-gray-500 focus:border-[#00ff00] focus:outline-none transition-colors appearance-none"
              >
                <option value="" disabled className="bg-black">
                  Select a Service
                </option>
                <option value="exterior" className="bg-black">
                  Exterior Cleaning
                </option>
                <option value="interior" className="bg-black">
                  Interior Cleaning
                </option>
                <option value="full" className="bg-black">
                  Full Detail
                </option>
              </select>
            </div>

            <div className="relative">
              <textarea
                name="message"
                placeholder="Additional Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border-b-2 border-gray-600 py-3 px-0 text-white placeholder-gray-500 focus:border-[#00ff00] focus:outline-none transition-colors resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-[#00ff00] text-black font-bold font-poppins rounded-lg btn-glow hover:shadow-lg transition-all text-lg"
            >
              {submitted ? "✓ SUBMITTED" : "SUBMIT BOOKING"}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-effect-dark p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#00ff00] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold font-poppins mb-2">Phone</h3>
                  <a href="tel:+15303150483" className="text-gray-400 hover:text-[#00ff00] transition-colors">
                    (530) 315-0483
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-effect-dark p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#00ff00] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold font-poppins mb-2">Email</h3>
                  <a
                    href="mailto:info@norcalautocare.com"
                    className="text-gray-400 hover:text-[#00ff00] transition-colors"
                  >
                    info@norcalautocare.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-effect-dark p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#00ff00] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold font-poppins mb-2">Location</h3>
                  <p className="text-gray-400">Marysville, CA</p>
                  <p className="text-gray-500 text-sm">Serving surrounding areas</p>
                </div>
              </div>
            </div>

            <div className="glass-effect-dark p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#00ff00] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold font-poppins mb-2">Hours</h3>
                  <p className="text-gray-400">Monday - Sunday</p>
                  <p className="text-gray-500 text-sm">8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
