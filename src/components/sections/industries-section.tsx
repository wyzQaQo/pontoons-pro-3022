"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { SectionHeading } from "@/components/ui/section-heading"
import { ArrowRight } from "lucide-react"

const industries = [
  {
    title: "Luxury Yacht Marinas",
    description: "Floating dock systems for superyacht berths, fuel docks, and marina breakwaters. Engineered for 24/7 pedestrian traffic with integrated utility channels.",
    image: "https://picsum.photos/seed/yacht-marina/800/500",
    href: "/industries",
  },
  {
    title: "Resort & Hospitality",
    description: "Overwater villas, floating restaurants, swimming platforms, and event decks. Custom colors and finishes to match any resort aesthetic.",
    image: "https://picsum.photos/seed/resort-floating/800/500",
    href: "/industries",
  },
  {
    title: "Floating Solar Farms",
    description: "Utility-scale PV mounting systems engineered for 25-year panel lifecycle. Integrated cable management, maintenance walkways, and corrosion-resistant aluminum rails.",
    image: "https://picsum.photos/seed/solar-floating/800/500",
    href: "/industries",
  },
  {
    title: "Marine Construction",
    description: "Heavy-duty work platforms for dredging, piling, and offshore construction. Rated for crane loads and continuous equipment operation in offshore conditions.",
    image: "https://picsum.photos/seed/marine-construction/800/500",
    href: "/industries",
  },
]

export function IndustriesSection() {
  return (
    <section className="section-padding">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Industries"
          heading="Solutions Across Every Water Surface"
          description="From the Persian Gulf to the South China Sea, our systems perform in the world's most demanding marine environments."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={industry.href} className="group block">
                <div className="glass-card overflow-hidden">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-white/45 leading-relaxed mb-3">
                      {industry.description}
                    </p>
                    <span className="text-xs text-primary font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1 inline-flex">
                      Learn more <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
