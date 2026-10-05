"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Calculator, Anchor, Ship, Ruler, ArrowRight, Mail } from "lucide-react"
import Link from "next/link"
import { SectionHeading } from "@/components/ui/section-heading"

export function BuoyancyCalculator() {
  const [length, setLength] = useState("10")
  const [width, setWidth] = useState("4")
  const [dockType, setDockType] = useState<"standard" | "industrial">("standard")

  const results = useMemo(() => {
    const l = parseFloat(length) || 0
    const w = parseFloat(width) || 0
    const area = l * w

    const pontoonsPerSqm = dockType === "industrial" ? 2 : 4
    const buoyancyPerPontoon = dockType === "industrial" ? 1000 : 350
    const totalPontoons = Math.ceil(area * pontoonsPerSqm)
    const totalBuoyancy = totalPontoons * buoyancyPerPontoon
    const totalBuoyancyTons = (totalBuoyancy / 1000).toFixed(1)

    const shortPins = Math.ceil(totalPontoons * 0.8)
    const sideBolts = Math.ceil(totalPontoons * 0.6)

    const jetSkis = Math.floor(area / 10)
    const smallBoats = Math.floor(area / 25)
    const cbmPerPontoon = dockType === "industrial" ? 0.5 : 0.125
    const totalCBM = (totalPontoons * cbmPerPontoon).toFixed(1)

    return {
      area,
      totalPontoons,
      totalBuoyancy,
      totalBuoyancyTons,
      shortPins,
      sideBolts,
      jetSkis,
      smallBoats,
      totalCBM,
    }
  }, [length, width, dockType])

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 ocean-bottom pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Interactive Tool"
          heading="Buoyancy & Area Calculator"
          description="Enter your floating platform dimensions to instantly calculate required pontoons, connectors, and load capacity. Generate a complete RFQ in one click."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-2 glass-card p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calculator size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Platform Dimensions</h3>
                <p className="text-xs text-white/40">Enter your required size</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/50 mb-2">Dock Type</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setDockType("standard")}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      dockType === "standard"
                        ? "bg-primary/15 text-primary border border-primary/30"
                        : "bg-white/3 text-white/50 border border-white/5 hover:bg-white/5"
                    }`}
                  >
                    <Anchor size={14} className="inline mr-1.5" />
                    Standard Dock
                  </button>
                  <button
                    onClick={() => setDockType("industrial")}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      dockType === "industrial"
                        ? "bg-accent/15 text-accent border border-accent/30"
                        : "bg-white/3 text-white/50 border border-white/5 hover:bg-white/5"
                    }`}
                  >
                    <Ship size={14} className="inline mr-1.5" />
                    Industrial
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/50 mb-2">
                  Length (meters)
                </label>
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  min="1"
                  max="500"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-primary/40 focus:bg-white/8 transition-all"
                  placeholder="e.g. 10"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/50 mb-2">
                  Width (meters)
                </label>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  min="1"
                  max="500"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-primary/40 focus:bg-white/8 transition-all"
                  placeholder="e.g. 4"
                />
              </div>
            </div>

            <Link
              href={`/contact?area=${results.area}&pontoons=${results.totalPontoons}&type=${dockType}`}
              className="btn-accent w-full justify-center !py-3 group"
            >
              Generate RFQ for This Configuration
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${length}-${width}-${dockType}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 md:p-8 h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Ruler size={18} className="text-primary" />
                  <h3 className="font-semibold text-sm">Calculation Results</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <ResultCard label="Total Area" value={`${results.area.toFixed(1)} m2`} />
                  <ResultCard label="Pontoons Required" value={results.totalPontoons.toLocaleString()} highlight />
                  <ResultCard label="Buoyancy" value={`${results.totalBuoyancyTons} tons`} />
                  <ResultCard label="Short Pins" value={results.shortPins.toLocaleString()} />
                  <ResultCard label="Side Bolts" value={results.sideBolts.toLocaleString()} />
                  <ResultCard label="Est. CBM" value={results.totalCBM} />
                </div>

                <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-xs text-white/50 mb-1">Capacity Estimates</p>
                  <p className="text-sm">
                    This platform can accommodate approximately{" "}
                    <span className="text-primary font-semibold">{results.jetSkis} jet skis</span>{" "}
                    or{" "}
                    <span className="text-primary font-semibold">{results.smallBoats} small boats</span>
                    .
                  </p>
                </div>

                <p className="mt-4 text-xs text-white/30">
                  Based on {dockType === "industrial" ? "2 pontoons/m2 (PP-1000, 1,000kg buoyancy each)" : "4 pontoons/m2 (PP-5050, 350kg buoyancy each)"}.
                  All calculations include a 4:1 safety factor. For complex engineering projects, please contact our technical team.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function ResultCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="glass p-4 rounded-xl text-center">
      <p className={`text-xl md:text-2xl font-bold ${highlight ? "text-gradient" : "text-white"}`}>
        {value}
      </p>
      <p className="text-xs text-white/40 mt-1">{label}</p>
    </div>
  )
}
