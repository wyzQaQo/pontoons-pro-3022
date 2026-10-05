export const dynamicParams = false;
"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { siteConfig } from "@/config/site"
import { Mail, Phone, MapPin, MessageCircle, Send, ArrowRight, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Contact</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Let's Build Something That Floats</h1>
          <p className="mt-4 text-white/45 max-w-xl mx-auto">
            Share your project requirements and receive a detailed quotation within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: <Mail size={18} />, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
              { icon: <Phone size={18} />, label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
              { icon: <MapPin size={18} />, label: "Address", value: siteConfig.contact.address },
            ].map((item) => (
              <div key={item.label} className="glass-card p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium hover:text-primary transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 flex items-center gap-4 hover:border-green-500/30 transition-colors group cursor-pointer block"
            >
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400">
                <MessageCircle size={18} />
              </div>
              <div>
                <p className="text-xs text-white/40 mb-1">WhatsApp</p>
                <p className="text-sm font-medium group-hover:text-green-400 transition-colors">Chat with our sales team</p>
              </div>
            </a>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 text-center"
              >
                <CheckCircle size={48} className="text-success mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Thank You for Your Inquiry</h3>
                <p className="text-white/45 mb-6">
                  Our engineering team will review your requirements and respond within 24 hours with a detailed quotation.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-outline">
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/30 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2">Email *</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/30 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/30 transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/30 transition-colors"
                      placeholder="+ Country code"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/50 mb-2">Product Interest</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-primary/30 transition-colors"
                  >
                    <option value="" className="bg-surface">Select product category</option>
                    <option value="floating-docks" className="bg-surface">Modular Floating Docks</option>
                    <option value="industrial-platforms" className="bg-surface">Industrial Floating Platforms</option>
                    <option value="floating-solar" className="bg-surface">Floating Solar PV Systems</option>
                    <option value="accessories" className="bg-surface">Accessories & Connectors</option>
                    <option value="custom" className="bg-surface">Custom Project / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/50 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/30 transition-colors resize-none"
                    placeholder="Describe your project: dimensions, location, load requirements, quantity needed, timeline..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full !py-3.5 group">
                  <Send size={16} />
                  Send Inquiry
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
