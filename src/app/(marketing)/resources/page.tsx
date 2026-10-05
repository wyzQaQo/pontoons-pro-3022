"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Calculator, BookOpen, Download, FileText, Wrench, ArrowRight } from "lucide-react"

const resources = [
  {
    icon: <Calculator size={24} />,
    title: "Buoyancy & Area Calculator",
    description: "Calculate required pontoons, connectors, and load capacity for any floating platform dimensions.",
    href: "/resources/calculator",
    badge: "Interactive Tool",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Installation Guides",
    description: "Step-by-step assembly manuals with diagrams. Available in English, Spanish, Arabic, and French.",
    href: "/resources/installation",
  },
  {
    icon: <Download size={24} />,
    title: "Technical Library",
    description: "Datasheets, CAD files (STEP/IGES), load calculation sheets, and mooring analysis templates.",
    href: "/resources",
  },
  {
    icon: <FileText size={24} />,
    title: "Case Studies",
    description: "Detailed project reports from marina installations, floating solar farms, and resort developments worldwide.",
    href: "/resources/case-studies",
  },
  {
    icon: <Wrench size={24} />,
    title: "Engineering Support",
    description: "Custom mooring analysis, structural calculations, and 3D layout design from our in-house engineering team.",
    href: "/contact",
  },
]

export default function ResourcesPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Resources</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Everything You Need to Build on Water</h1>
          <p className="mt-4 text-white/45 max-w-xl mx-auto">
            Engineering tools, installation manuals, and technical documentation for marine professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {resources.map((res, i) => (
            <motion.div key={res.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Link href={res.href} className="glass-card p-6 h-full flex flex-col group spotlight-container">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">{res.icon}</div>
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{res.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed flex-1">{res.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-x-0 group-hover:translate-x-1 transition-transform">
                  Access <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
