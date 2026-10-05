export const dynamicParams = false;
"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Anchor, Building2, Sun, HardHat, Hotel, Zap, ArrowRight } from "lucide-react"

const industries = [
  {
    icon: <Anchor size={28} />,
    title: "Yacht Marinas",
    description: "Main walkways, finger piers, fuel docks, and breakwater pontoons for marinas of all sizes. Standard and custom configurations for superyacht berths.",
    applications: ["Floating walkways", "Berthing fingers", "Fuel dock platforms", "Breakwater attenuators"],
  },
  {
    icon: <Hotel size={28} />,
    title: "Resorts & Hospitality",
    description: "Overwater villas, floating restaurants, swimming platforms, sun decks, and event pavilions. Custom color matching for brand aesthetics.",
    applications: ["Overwater villas", "Swimming platforms", "Floating restaurants", "Event decks"],
  },
  {
    icon: <Sun size={28} />,
    title: "Floating Solar Energy",
    description: "Complete PV mounting systems for reservoirs, lakes, hydropower dams, and coastal waters. Integrated cable management and maintenance walkways.",
    applications: ["Utility-scale PV arrays", "Hydropower reservoirs", "Industrial ponds", "Coastal installations"],
  },
  {
    icon: <HardHat size={28} />,
    title: "Marine Construction",
    description: "Heavy-duty work platforms for dredging, piling, demolition, and offshore construction. Rated for continuous equipment loads.",
    applications: ["Dredging platforms", "Piling barges", "Crane platforms", "Material storage"],
  },
  {
    icon: <Building2 size={28} />,
    title: "Government & Infrastructure",
    description: "Public access piers, ferry terminals, Coast Guard platforms, and emergency response docks. Built to national engineering standards.",
    applications: ["Public piers", "Ferry terminals", "Coast Guard docks", "Emergency platforms"],
  },
  {
    icon: <Zap size={28} />,
    title: "Aquaculture & Fisheries",
    description: "Fish farm walkways, feeding platforms, harvest stations, and equipment storage. UV-stabilized for permanent marine exposure.",
    applications: ["Fish farm walkways", "Feeding stations", "Harvest platforms", "Equipment storage"],
  },
]

export default function IndustriesPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Industries</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Every Surface. Every Industry.</h1>
          <p className="mt-4 text-white/45 max-w-xl mx-auto">
            Our HDPE pontoons float in 60+ countries across every industry that touches water. Explore how we serve each sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-6 spotlight-container"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 text-primary">
                {industry.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{industry.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed mb-4">{industry.description}</p>
              <div>
                <p className="text-xs text-white/30 mb-2 uppercase tracking-wider">Applications</p>
                <div className="flex flex-wrap gap-2">
                  {industry.applications.map((app) => (
                    <span key={app} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/40">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link href="/contact" className="btn-primary !px-10 !py-3.5 group">
            Discuss Your Industry Application <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
