export const dynamicParams = false;
"use client"
import { motion } from "motion/react"
import { Award, ShieldCheck, Globe, FileBadge } from "lucide-react"

const certs = [
  { title: "ISO 9001:2015", description: "Quality Management System certification covering design, manufacturing, and after-sales service of HDPE modular floating pontoon systems.", scope: "Quality Management" },
  { title: "ISO 14001:2015", description: "Environmental Management System certification. Our production processes are designed for minimal waste and full material recyclability.", scope: "Environmental Management" },
  { title: "CE Marking", description: "European Conformity marking confirming compliance with EU health, safety, and environmental requirements for construction products.", scope: "EU Market Access" },
  { title: "Bureau Veritas (BV)", description: "Third-party verification of load capacity, buoyancy calculations, and connection system integrity by one of the world's leading classification societies.", scope: "Product Verification" },
  { title: "DNV-GL Certification", description: "Type approval from DNV-GL, the world's largest classification society, for offshore and marine floating structure applications.", scope: "Marine Classification" },
  { title: "SGS Test Reports", description: "Independent material testing and product performance verification by SGS, the global leader in inspection and testing services.", scope: "Material Testing" },
]

export default function CertificatesPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Certifications</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Globally Certified, Locally Trusted</h1>
          <p className="mt-4 text-white/45 max-w-2xl mx-auto">
            Our products and processes meet the world's most stringent marine infrastructure standards.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certs.map((cert, i) => (
            <motion.div key={cert.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"><Award size={22} /></div>
              <h3 className="font-bold mb-2">{cert.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed mb-3">{cert.description}</p>
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary">{cert.scope}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
