"use client"

import { motion } from "motion/react"

const certifications = [
  "ISO 9001:2015", "CE Certified", "Bureau Veritas", "DNV-GL", "ISO 14001",
  "SGS Tested", "UV15 Stabilized", "ASTM Compliant", "RoHS", "REACH",
]

export function CertificationMarquee() {
  return (
    <section className="border-y border-white/5 py-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mb-4">
        <p className="text-xs text-white/25 text-center uppercase tracking-[0.2em] font-medium">Certifications & Standards</p>
      </div>
      <motion.div
        className="flex gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {[...certifications, ...certifications].map((cert, i) => (
          <div
            key={i}
            className="glass px-5 py-2.5 rounded-full text-sm font-medium text-white/60 whitespace-nowrap shrink-0 hover:text-white hover:border-white/20 transition-colors"
          >
            {cert}
          </div>
        ))}
      </motion.div>
    </section>
  )
}
