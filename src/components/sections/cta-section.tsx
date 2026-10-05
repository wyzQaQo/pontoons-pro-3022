"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, Mail, MessageCircle } from "lucide-react"
import { siteConfig } from "@/config/site"

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
      <div className="absolute inset-0 grid-bg" />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            Ready to Build on Water?
          </h2>
          <p className="mt-5 text-base text-white/45 leading-relaxed max-w-xl mx-auto">
            Share your project requirements and receive a detailed quotation within 24 hours, including 3D layout drawings, complete BOM, and CIF shipping estimate to your port.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link href="/contact" className="btn-primary !px-10 !py-3.5 !text-base group">
              Request Your Quote
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !px-10 !py-3.5 !text-base flex items-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp Direct
            </a>
          </div>

          <p className="mt-6 text-xs text-white/25">
            Or email us directly at{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">
              {siteConfig.contact.email}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
