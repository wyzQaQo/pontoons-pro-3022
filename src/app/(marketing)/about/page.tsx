"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { SectionHeading } from "@/components/ui/section-heading"
import { siteConfig } from "@/config/site"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Factory, Globe, Shield, Users, ArrowRight, Check } from "lucide-react"

const values = [
  { icon: <Shield size={22} />, title: "Engineering Integrity", description: "Every pontoon is load-tested to 4x rated capacity. We publish real test data, not theoretical maximums." },
  { icon: <Globe size={22} />, title: "Global Reach, Local Support", description: "Warehouses in Dubai, Rotterdam, and Los Angeles. Installation supervisors available for on-site deployment worldwide." },
  { icon: <Factory size={22} />, title: "Vertical Manufacturing", description: "From raw HDPE resin to finished pontoon under one roof. In-house tooling, blow-molding, and QC laboratory." },
  { icon: <Users size={22} />, title: "Client Partnership", description: "We do not just sell pontoons. We provide complete engineering support, mooring analysis, and installation planning." },
]

const timeline = [
  { year: "2008", title: "Founded", description: "Established in Taizhou, China's plastics manufacturing hub, with 2 blow-molding lines." },
  { year: "2012", title: "First Export", description: "Shipped first container to a marina project in Australia. ISO 9001 certification achieved." },
  { year: "2016", title: "Middle East Expansion", description: "Opened Dubai warehouse. Delivered pontoons for 3 major marina projects in UAE and Qatar." },
  { year: "2020", title: "Solar Division", description: "Launched dedicated floating solar PV product line. First 20MW installation in Thailand." },
  { year: "2024", title: "50K sqm Facility", description: "Expanded to 50,000 sqm production facility. 2M+ annual pontoon capacity. DNV-GL certified." },
  { year: "2026", title: "Global Leader", description: "1,200+ projects in 60+ countries. Recognized as a top-3 HDPE pontoon manufacturer worldwide." },
]

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">About Us</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Engineering Marine Infrastructure Since 2008</h1>
          <p className="mt-4 text-white/45 max-w-2xl mx-auto">
            From a small blow-molding workshop to one of the world's largest HDPE pontoon manufacturers. Our story is built on engineering integrity and relentless innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 max-w-4xl mx-auto">
          {[
            { value: siteConfig.company.employees, label: "Team Members" },
            { value: siteConfig.company.factoryArea, label: "Production Facility" },
            { value: siteConfig.company.annualOutput, label: "Annual Output" },
            { value: "14 Days", label: "Standard Lead Time" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-5 text-center"
            >
              <p className="text-2xl font-bold text-gradient">{stat.value}</p>
              <p className="text-xs text-white/40 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 max-w-5xl mx-auto">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">{val.icon}</div>
              <h3 className="font-bold mb-2">{val.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{val.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-24">
          <SectionHeading heading="Our Journey" align="center" />
          <div className="mt-12 max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-6 pb-8 relative"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-primary">{item.year.slice(2)}</span>
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-white/5 mt-2" />}
                </div>
                <div className="pb-4">
                  <p className="text-xs text-primary font-medium mb-1">{item.year}</p>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-white/45">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn-primary !px-10 !py-3.5 group">
            Start Your Project <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
