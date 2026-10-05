"use client"

import Link from "next/link"
import { Anchor, Box, Waves, ArrowRight } from "lucide-react"

const pillarLinks = [
  {
    keyword: "Floating Dock Systems",
    anchor: "floating dock systems for marinas and waterfronts",
    href: "/products/floating-docks",
    description:
      "Complete modular floating dock solutions for yacht marinas, residential waterfronts, and commercial applications.",
    icon: <Anchor size={18} />,
    color: "text-primary border-primary/20 hover:border-primary/50",
  },
  {
    keyword: "Modular Pontoon Cubes",
    anchor: "HDPE modular pontoon cubes (50x50x40cm)",
    href: "/products/standard-modular-pontoon-pp5050",
    description:
      "The industry-standard building block. Virgin HDPE, UV15 stabilized, 350kg buoyancy per unit.",
    icon: <Box size={18} />,
    color: "text-accent border-accent/20 hover:border-accent/50",
  },
  {
    keyword: "Jet Ski Drive-On Docks",
    anchor: "jet ski and PWC drive-on docking platforms",
    href: "/products/jet-ski-drive-on-dock-jd300",
    description:
      "Sloped-entry docking for personal watercraft. Keep your hull completely out of water, zero maintenance.",
    icon: <Waves size={18} />,
    color: "text-secondary border-secondary/20 hover:border-secondary/50",
  },
]

export function InternalLinkingSection({ excludeSlug }: { excludeSlug?: string }) {
  const links = pillarLinks.filter((l) => l.href !== excludeSlug)

  return (
    <div className="mb-20">
      <h2 className="text-xl font-bold mb-6">Explore Related PontoonPro Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link) => (
          <Link
            key={link.keyword}
            href={link.href}
            className={`group glass-card p-5 flex items-start gap-4 border transition-all duration-300 ${link.color}`}
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
              {link.icon}
            </div>
            <div className="min-w-0">
              <h4 className="font-semibold text-sm mb-1 group-hover:text-white transition-colors">
                {link.keyword}
              </h4>
              <p className="text-xs text-white/40 leading-relaxed mb-2">{link.description}</p>
              <span className="text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity translate-x-0 group-hover:translate-x-1 transition-transform">
                View {link.anchor} <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
