"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { productCategories } from "@/config/products"
import { SectionHeading } from "@/components/ui/section-heading"
import { Anchor, Building2, Sun, Link2, ArrowRight } from "lucide-react"

const categoryIcons: Record<string, React.ReactNode> = {
  Anchor: <Anchor size={24} />,
  Building2: <Building2 size={24} />,
  Sun: <Sun size={24} />,
  Link: <Link2 size={24} />,
}

export function CategoriesSection() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Our Products"
          heading="Complete Floating Solutions"
          description="From a single jet ski dock to a 50,000-panel floating solar farm, our modular systems scale to any project."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {productCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/products/${cat.slug}`} className="group block h-full">
                <div className="glass-card p-6 md:p-8 h-full spotlight-container flex flex-col transition-all duration-500 group-hover:border-primary/20">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 text-primary group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                    {categoryIcons[cat.icon]}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-white/45 leading-relaxed flex-1">
                    {cat.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-x-0 group-hover:translate-x-1 transition-transform">
                    Explore products <ArrowRight size={15} />
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
