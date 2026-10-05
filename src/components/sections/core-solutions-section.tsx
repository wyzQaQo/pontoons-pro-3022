"use client"

import Link from "next/link"
import { motion } from "motion/react"
import {
  Anchor,
  Box,
  Waves,
  ArrowRight,
  Ruler,
  Shield,
  Ship,
  Package,
} from "lucide-react"

const solutions = [
  {
    keyword: "Floating Dock",
    title: "Modular Floating Dock Systems",
    subtitle: "Complete marina & waterfront solutions",
    description:
      "From single-berth residential docks to 200-slip superyacht marinas, our HDPE floating dock systems scale to any project. Zero-maintenance, hurricane-rated, 15+ year tropical lifespan.",
    href: "/products/floating-docks",
    bgGradient: "from-primary/20 via-primary/5 to-transparent",
    borderColor: "border-primary/30 hover:border-primary/50",
    glowColor: "shadow-primary/20",
    icon: <Anchor size={32} />,
    stats: [
      { icon: <Ruler size={14} />, value: "350 kg/m2", label: "Load Capacity" },
      { icon: <Shield size={14} />, value: "4:1", label: "Safety Factor" },
      { icon: <Ship size={14} />, value: "300+", label: "Marinas Built" },
    ],
    productImage: "https://picsum.photos/seed/floating-dock/600/400",
  },
  {
    keyword: "Modular Pontoon",
    title: "HDPE Modular Pontoon Cubes",
    subtitle: "The foundation of every floating structure",
    description:
      "Industry-standard 50x50x40cm pontoon cubes. Virgin HDPE, UV15 stabilized for permanent marine exposure. 350kg buoyancy per unit. The most trusted building block in floating infrastructure worldwide.",
    href: "/products/standard-modular-pontoon-pp5050",
    bgGradient: "from-accent/15 via-accent/5 to-transparent",
    borderColor: "border-accent/30 hover:border-accent/50",
    glowColor: "shadow-accent/20",
    icon: <Box size={32} />,
    stats: [
      { icon: <Ruler size={14} />, value: "50x50x40cm", label: "Dimensions" },
      { icon: <Package size={14} />, value: "5M+", label: "Produced" },
      { icon: <Shield size={14} />, value: "UV15", label: "Stabilized" },
    ],
    productImage: "https://picsum.photos/seed/pontoon-cube/600/400",
  },
  {
    keyword: "Jet Ski Dock",
    title: "Jet Ski Drive-On Dock Systems",
    subtitle: "Protect your PWC, elevate your waterfront",
    description:
      "Purpose-built drive-on docking platform. Simply ride your jet ski onto the sloped entry — no winch, no hassle. Keeps the hull completely out of water, preventing osmosis and fouling. Fits all major PWC brands.",
    href: "/products/jet-ski-drive-on-dock-jd300",
    bgGradient: "from-secondary/15 via-secondary/5 to-transparent",
    borderColor: "border-secondary/30 hover:border-secondary/50",
    glowColor: "shadow-secondary/20",
    icon: <Waves size={32} />,
    stats: [
      { icon: <Ship size={14} />, value: "750 kg", label: "Weight Capacity" },
      { icon: <Ruler size={14} />, value: "3.0x1.8m", label: "Platform Size" },
      { icon: <Shield size={14} />, value: "All Brands", label: "Compatible" },
    ],
    productImage: "https://picsum.photos/seed/jetski-dock/600/400",
  },
]

export function CoreSolutionsSection() {
  return (
    <section className="relative -mt-16 pb-16 md:pb-24 z-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-white/25 mb-3"
          >
            Core Solutions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-2xl md:text-3xl font-bold tracking-tight"
          >
            Three Products. Infinite Possibilities.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.keyword}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Link
                href={sol.href}
                className={`group block h-full glass-card overflow-hidden relative border ${sol.borderColor} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:${sol.glowColor}`}
              >
                {/* Gradient bg */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${sol.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Product image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={sol.productImage}
                    alt={sol.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                  {/* Keyword badge */}
                  <div className="absolute top-4 left-4">
                    <span className="glass-strong px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider text-white/80">
                      {sol.keyword}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-5 md:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                      {sol.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-base leading-tight group-hover:text-white transition-colors">
                        {sol.title}
                      </h3>
                      <p className="text-xs text-white/35 mt-0.5">{sol.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-sm text-white/45 leading-relaxed mb-4 line-clamp-3">
                    {sol.description}
                  </p>

                  {/* Stats row */}
                  <div className="flex gap-3 mb-4 flex-wrap">
                    {sol.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 text-white/50 text-xs"
                      >
                        {stat.icon}
                        <span className="font-semibold text-white/80">{stat.value}</span>
                        <span className="text-white/30">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                    Explore {sol.keyword} <ArrowRight size={15} />
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
