"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const draw = () => {
      time += 0.005
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const waveCount = 3
      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath()
        const offset = w * 0.3
        const amplitude = 20 + w * 15
        const frequency = 0.003 + w * 0.001
        const baseY = canvas.height * (0.6 + w * 0.12)

        ctx.moveTo(0, canvas.height)
        for (let x = 0; x <= canvas.width; x += 3) {
          const y = baseY + Math.sin(x * frequency + time + offset) * amplitude + Math.sin(x * 0.008 + time * 0.7) * amplitude * 0.5
          ctx.lineTo(x, y)
        }
        ctx.lineTo(canvas.width, canvas.height)
        ctx.closePath()

        const alpha = 0.04 + w * 0.02
        const hue = 195 + w * 5
        ctx.fillStyle = `hsla(${hue}, 80%, 50%, ${alpha})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/60 via-background/40 to-background" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 py-32 md:py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs md:text-sm font-medium uppercase tracking-[0.25em] text-primary mb-6">
            Marine Infrastructure Manufacturer Since 2008
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05]"
        >
          Engineering the Future of{" "}
          <span className="text-gradient">Floating Infrastructure</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto mt-6 text-base md:text-lg text-white/45 leading-relaxed"
        >
          From luxury yacht marinas in Dubai to utility-scale floating solar farms in Southeast Asia, our HDPE modular pontoon systems deliver unmatched durability with zero maintenance for 15+ years.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <Link href="/contact" className="btn-primary !px-8 !py-3.5 !text-base group">
            Request Factory Quote
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link href="/resources/calculator" className="btn-outline !px-8 !py-3.5 !text-base">
            Try Buoyancy Calculator
          </Link>
        </motion.div>

        {/* Core Product Keyword Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-8"
        >
          {[
            { label: "Floating Dock", href: "/products/floating-docks", color: "border-primary/30 bg-primary/5 hover:bg-primary/10 text-primary" },
            { label: "Modular Pontoon", href: "/products/standard-modular-pontoon-pp5050", color: "border-accent/30 bg-accent/5 hover:bg-accent/10 text-accent" },
            { label: "Jet Ski Dock", href: "/products/jet-ski-drive-on-dock-jd300", color: "border-secondary/30 bg-secondary/5 hover:bg-secondary/10 text-secondary" },
          ].map((pill) => (
            <Link
              key={pill.label}
              href={pill.href}
              className={`px-5 py-2.5 rounded-full border text-sm font-semibold transition-all duration-300 hover:scale-105 ${pill.color}`}
            >
              {pill.label}
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-12 pt-8 border-t border-white/5"
        >
          {[
            { value: "60+", label: "Countries Served" },
            { value: "1,200+", label: "Projects Delivered" },
            { value: "15+", label: "Year Service Life" },
            { value: "ISO 9001", label: "Certified Quality" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-lg md:text-xl font-bold">{stat.value}</p>
              <p className="text-xs text-white/35 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
