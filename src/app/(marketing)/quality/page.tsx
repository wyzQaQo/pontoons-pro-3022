export const dynamicParams = false;
"use client"
import { motion } from "motion/react"
import { Shield, FlaskConical, FileCheck, Gauge, ClipboardCheck } from "lucide-react"

const tests = [
  { icon: <Gauge size={20} />, title: "Load Testing", description: "Every production batch undergoes destructive load testing to 4x rated capacity. Test certificates included with every shipment.", standard: "Internal PT-QC-001" },
  { icon: <FlaskConical size={20} />, title: "UV Accelerated Weathering", description: "ASTM G154 Cycle 1 testing simulates 15 years of tropical UV exposure in 2,000 hours. Color and mechanical properties verified post-exposure.", standard: "ASTM G154" },
  { icon: <ClipboardCheck size={20} />, title: "Salt Spray Corrosion", description: "All metal components (pins, bolts, cleats) tested to 2,000+ hours salt spray exposure. Zero red rust permitted on galvanized components.", standard: "ASTM B117" },
  { icon: <FileCheck size={20} />, title: "Dimensional Verification", description: "100% dimensional inspection on critical connection features. CMM and laser scanning for production tooling validation.", standard: "ISO 2768-m" },
  { icon: <Shield size={20} />, title: "Material Certification", description: "Incoming HDPE resin tested for density, Melt Flow Index, tensile strength, and UV stabilizer concentration. Full traceability to resin lot.", standard: "ISO 1183 / ISO 1133" },
]

export default function QualityPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Quality Control</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Zero Compromise on Quality</h1>
          <p className="mt-4 text-white/45 max-w-2xl mx-auto">
            Every pontoon undergoes rigorous testing before leaving our factory. Our in-house laboratory is equipped for destructive load testing, UV simulation, and full material characterization.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tests.map((test, i) => (
            <motion.div key={test.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card p-6">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">{test.icon}</div>
              <h3 className="font-bold mb-2">{test.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed mb-3">{test.description}</p>
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/35">{test.standard}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
