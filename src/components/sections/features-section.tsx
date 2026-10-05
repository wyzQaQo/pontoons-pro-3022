"use client"

import { motion } from "motion/react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Shield, Timer, Waves, Factory, Recycle, Wrench } from "lucide-react"

const features = [
  {
    icon: <Shield size={22} />,
    title: "4:1 Safety Factor",
    description: "Every pontoon is engineered with a 4:1 design-to-ultimate load ratio, exceeding international marine infrastructure standards for static and dynamic loading.",
  },
  {
    icon: <Timer size={22} />,
    title: "15+ Year Lifespan",
    description: "UV15-stabilized virgin HDPE resists tropical sun degradation. Zero rust, zero rot, zero water absorption. Designed for permanent marine installation without replacement cycles.",
  },
  {
    icon: <Waves size={22} />,
    title: "Hurricane-Rated Connection",
    description: "Our interlocking lug system with hot-dip galvanized pins withstands 3m significant wave heights. Side bolt fastening eliminates independent pontoon movement under heavy surge.",
  },
  {
    icon: <Factory size={22} />,
    title: "50,000 sqm Production Facility",
    description: "State-of-the-art blow molding and roto-molding lines in Taizhou, China. 2M+ annual pontoon capacity with 14-day lead time on standard configurations.",
  },
  {
    icon: <Recycle size={22} />,
    title: "100% Recyclable Material",
    description: "All HDPE material is fully recyclable at end of service life. Our closed-loop manufacturing process minimizes waste and supports green building certifications.",
  },
  {
    icon: <Wrench size={22} />,
    title: "Tool-Free Assembly",
    description: "Complete installation requires only a rubber mallet. Our pin-and-lug connection system enables 200 sqm per day assembly rates with a 3-person crew.",
  },
]

export function FeaturesSection() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 ocean-radial pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Why PontoonPro"
          heading="Engineered to Outlast the Elements"
          description="Twenty years of HDPE marine manufacturing expertise distilled into every pontoon. Here is what sets our systems apart."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary/15 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2 text-sm">{feature.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
