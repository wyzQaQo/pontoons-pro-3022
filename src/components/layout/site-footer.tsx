import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Anchor, Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Anchor size={16} className="text-white" />
              </div>
              <span className="text-lg font-bold">{siteConfig.name}<span className="text-primary">.</span></span>
            </Link>
            <p className="text-sm text-white/40 max-w-sm leading-relaxed mb-6">
              Premium HDPE modular floating pontoon systems for marinas, resorts, floating solar farms, and industrial marine platforms worldwide.
            </p>
            <div className="flex items-center gap-3">
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href={siteConfig.links.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="YouTube">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-4">Products</h4>
            <ul className="space-y-3">
              <li><Link href="/products/floating-docks" className="text-sm text-white/50 hover:text-white transition-colors">Floating Docks</Link></li>
              <li><Link href="/products/industrial-platforms" className="text-sm text-white/50 hover:text-white transition-colors">Industrial Platforms</Link></li>
              <li><Link href="/products/floating-solar" className="text-sm text-white/50 hover:text-white transition-colors">Floating Solar PV</Link></li>
              <li><Link href="/products/accessories" className="text-sm text-white/50 hover:text-white transition-colors">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-white/50 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/factory" className="text-sm text-white/50 hover:text-white transition-colors">Factory Tour</Link></li>
              <li><Link href="/quality" className="text-sm text-white/50 hover:text-white transition-colors">Quality Control</Link></li>
              <li><Link href="/certificates" className="text-sm text-white/50 hover:text-white transition-colors">Certifications</Link></li>
              <li><Link href="/blog" className="text-sm text-white/50 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Mail size={13} /> {siteConfig.contact.email}
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Phone size={13} /> {siteConfig.contact.phone}
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <MapPin size={13} className="mt-0.5 shrink-0" /> {siteConfig.contact.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-white/25 hover:text-white/40 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-xs text-white/25 hover:text-white/40 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
