export const dynamicParams = false;
"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Calendar, ArrowRight, Tag } from "lucide-react"

const posts = [
  {
    title: "HDPE vs Concrete vs Wood: The Complete Floating Dock Material Comparison",
    excerpt: "A comprehensive technical analysis of the three primary materials used in floating dock construction. We compare lifecycle cost, maintenance requirements, environmental impact, and structural performance across 15 criteria.",
    date: "2026-05-15",
    category: "Engineering",
    slug: "hdpe-vs-concrete-vs-wood-floating-dock-comparison",
  },
  {
    title: "How to Calculate Mooring Loads for Floating Solar Arrays",
    excerpt: "Step-by-step engineering methodology for determining wind, wave, and current loads on utility-scale floating PV installations. Includes worked examples and free calculation spreadsheet.",
    date: "2026-04-28",
    category: "Solar Energy",
    slug: "calculate-mooring-loads-floating-solar",
  },
  {
    title: "The Complete Guide to Jet Ski Drive-On Dock Installation",
    excerpt: "From site preparation to final anchoring, this guide covers everything you need to know about installing a drive-on PWC dock system. Includes video walkthrough and tool checklist.",
    date: "2026-04-10",
    category: "Installation",
    slug: "jet-ski-drive-on-dock-installation-guide",
  },
  {
    title: "Marina Design Standards: What Every Developer Should Know",
    excerpt: "Navigate the complex world of international marina design codes. Covers PIANC guidelines, ADA compliance, fire safety requirements, and regional variations across Europe, Middle East, and Asia-Pacific.",
    date: "2026-03-22",
    category: "Industry",
    slug: "marina-design-standards-developer-guide",
  },
  {
    title: "UV Degradation in Marine Polymers: Understanding UV15 Stabilization",
    excerpt: "Deep dive into the polymer chemistry behind UV stabilization. How our UV15 additive package extends HDPE pontoon service life beyond 15 years in equatorial UV exposure conditions.",
    date: "2026-03-05",
    category: "Materials Science",
    slug: "uv-degradation-marine-polymers-uv15-stabilization",
  },
]

export default function BlogPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Blog</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Engineering Insights & Industry Knowledge</h1>
          <p className="mt-4 text-white/45 max-w-xl mx-auto">
            Technical articles, installation guides, and industry analysis from our marine engineering team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/blog/${post.slug}`} className="glass-card p-6 h-full flex flex-col group spotlight-container">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {post.category}
                  </span>
                  <span className="text-xs text-white/30 flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                </div>
                <h3 className="font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-x-0 group-hover:translate-x-1 transition-transform">
                  Read article <ArrowRight size={14} />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
