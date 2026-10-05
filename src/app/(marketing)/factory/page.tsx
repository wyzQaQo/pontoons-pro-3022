"use client"

import { motion } from "motion/react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Factory, Cog, FlaskConical, Package, Truck, CheckCircle } from "lucide-react"

const process = [
  { icon: <Cog size={22} />, title: "Raw Material Inspection", description: "Virgin HDPE resin tested for density, MFI, and UV stabilizer content before entering production. Every batch traced to supplier lot number." },
  { icon: <Factory size={22} />, title: "Blow & Roto Molding", description: "12 automated blow-molding lines and 4 roto-molding stations. Cycle times optimized for wall thickness consistency. Real-time temperature monitoring." },
  { icon: <FlaskConical size={22} />, title: "In-House QC Laboratory", description: "Destructive load testing, UV accelerated weathering (ASTM G154), salt spray corrosion testing (ASTM B117), and dimensional verification on every production batch." },
  { icon: <Package size={22} />, title: "Assembly & Packaging", description: "Pontoons nested for maximum container utilization. Pre-assembled connection kits reduce on-site labor. Export-grade palletizing with moisture barrier." },
  { icon: <Truck size={22} />, title: "Global Logistics", description: "FCL and LCL shipping from Ningbo/Shanghai ports. CIF delivery to any major port worldwide. 14-day standard lead time on stock configurations." },
]

export default function FactoryPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Factory Tour</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">50,000 sqm of Manufacturing Excellence</h1>
          <p className="mt-4 text-white/45 max-w-2xl mx-auto">
            Take a virtual walk through our state-of-the-art production facility in Taizhou, China. We welcome factory audits from all prospective clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {[
            { label: "Total Area", value: "50,000 sqm" },
            { label: "Production Lines", value: "16 Lines" },
            { label: "Annual Capacity", value: "2M+ Units" },
            { label: "Employees", value: "500+" },
            { label: "QC Lab Equipment", value: "40+ Instruments" },
            { label: "Warehouse", value: "15,000 sqm" },
          ].map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card p-6 text-center">
              <p className="text-3xl font-bold text-gradient">{item.value}</p>
              <p className="text-xs text-white/40 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <SectionHeading heading="Manufacturing Process" align="center" />
          <div className="mt-12 space-y-6">
            {process.map((step, i) => (
              <motion.div key={step.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">{step.icon}</div>
                <div>
                  <h3 className="font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
