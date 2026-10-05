export const dynamicParams = false;
"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { productCategories, products } from "@/config/products"
import { Search, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === "all" || p.categoryId === activeCategory
    const matchesSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Products</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Complete Floating Solutions</h1>
          <p className="mt-4 text-white/45 max-w-xl mx-auto">
            Explore our full range of HDPE modular pontoons, floating dock systems, solar PV platforms, and marine accessories.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-3xl mx-auto">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-primary/30 transition-colors"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            <CategoryPill active={activeCategory === "all"} onClick={() => setActiveCategory("all")}>
              All
            </CategoryPill>
            {productCategories.map((cat) => (
              <CategoryPill
                key={cat.id}
                active={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.name.replace("Modular ", "").replace("Floating ", "").replace(" & Connectors", "")}
              </CategoryPill>
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white/40 text-lg">No products match your search.</p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("all") }}
              className="btn-outline mt-4"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link href={`/products/${product.slug}`} className="group block h-full">
                  <div className="glass-card h-full flex flex-col p-6 spotlight-container">
                    <div className="aspect-[4/3] rounded-xl bg-white/3 overflow-hidden mb-5">
                      <img
                        src={product.images[0] || `https://picsum.photos/seed/${product.slug}/600/450`}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="primary">
                          {productCategories.find((c) => c.id === product.categoryId)?.name || product.categoryId}
                        </Badge>
                        {product.featured && <Badge variant="accent">Featured</Badge>}
                      </div>
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                      <p className="text-sm text-white/45 leading-relaxed line-clamp-2">{product.shortDescription}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {product.specifications.slice(0, 2).map((spec) => (
                          <span key={spec.label} className="text-[10px] text-white/35 px-2 py-0.5 rounded-full bg-white/5">
                            {spec.value}
                          </span>
                        ))}
                      </div>
                      <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function CategoryPill({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
        active
          ? "bg-primary/15 text-primary border border-primary/30"
          : "glass text-white/50 hover:text-white/80 hover:bg-white/8"
      }`}
    >
      {children}
    </button>
  )
}
