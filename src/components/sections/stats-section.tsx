"use client"

import { motion } from "motion/react"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Globe, Building2, Package, Anchor } from "lucide-react"

const stats = [
  { icon: <Globe size={24} />, value: 60, suffix: "+", label: "Countries Served" },
  { icon: <Building2 size={24} />, value: 1200, suffix: "+", label: "Projects Delivered" },
  { icon: <Package size={24} />, value: 5000000, suffix: "+", label: "Pontoons Produced" },
  { icon: <Anchor size={24} />, value: 300, suffix: "+", label: "Marina Installations" },
]

export function StatsSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 ocean-radial pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <SectionHeading
          heading="Trusted Worldwide"
          description="From private beach villas in the Maldives to utility-scale infrastructure in the Middle East, our pontoons float on every continent."
          align="center"
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-6 text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary/15 transition-colors">
                {stat.icon}
              </div>
              <AnimatedCounter end={stat.value} suffix={stat.suffix} className="text-3xl md:text-4xl" />
              <p className="text-xs text-white/40 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
