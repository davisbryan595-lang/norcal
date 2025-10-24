"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black/50 border-t border-gray-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold font-poppins gradient-text mb-4">NOR-CAL AUTO CARE</h3>
            <p className="text-gray-400 text-sm">Premium auto detailing services in Marysville, CA</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold font-poppins mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "Gallery", "Pricing", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#00ff00] transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold font-poppins mb-4">Services</h4>
            <ul className="space-y-2">
              {["Exterior Cleaning", "Interior Cleaning", "Full Detail"].map((service) => (
                <li key={service}>
                  <Link href="#services" className="text-gray-400 hover:text-[#00ff00] transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold font-poppins mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+15303150483" className="text-gray-400 hover:text-[#00ff00] transition-colors">
                  (530) 315-0483
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@norcalautocare.com"
                  className="text-gray-400 hover:text-[#00ff00] transition-colors"
                >
                  info@norcalautocare.com
                </a>
              </li>
              <li className="text-gray-400">Marysville, CA</li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="border-t border-gray-800 pt-8 flex justify-between items-center">
          <p className="text-gray-500 text-sm">© {currentYear} Nor-Cal Auto Care. All rights reserved.</p>
          <div className="flex gap-4">
            {[
              { icon: Facebook, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Twitter, href: "#" },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full border border-[#00ff00] flex items-center justify-center text-[#00ff00] hover:bg-[#00ff00] hover:text-black transition-all"
              >
                <social.icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
