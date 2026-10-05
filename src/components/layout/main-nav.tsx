"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { marketingConfig } from "@/config/marketing"
import { siteConfig } from "@/config/site"
import { Menu, X, ChevronDown } from "lucide-react"
import type { NavItem } from "@/config/marketing"

export function MainNav() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "glass border-b border-white/5 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight">
            {siteConfig.name}
            <span className="text-primary">.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {marketingConfig.mainNav.map((item) => (
            <NavItemDesktop
              key={item.href}
              item={item}
              pathname={pathname}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/resources/calculator" className="btn-outline !px-5 !py-2.5 !text-sm">
            Buoyancy Calculator
          </Link>
          <Link href="/contact" className="btn-primary !px-5 !py-2.5 !text-sm">
            Get Quote
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-white/80 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass border-t border-white/5">
          <nav className="max-w-[1400px] mx-auto px-4 py-4 flex flex-col gap-1">
            {marketingConfig.mainNav.map((item) => (
              <NavItemMobile key={item.href} item={item} pathname={pathname} />
            ))}
            <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-3">
              <Link href="/resources/calculator" className="btn-outline justify-center">
                Buoyancy Calculator
              </Link>
              <Link href="/contact" className="btn-primary justify-center">
                Get Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavItemDesktop({
  item,
  pathname,
  openDropdown,
  setOpenDropdown,
}: {
  item: NavItem
  pathname: string
  openDropdown: string | null
  setOpenDropdown: (key: string | null) => void
}) {
  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
  const hasChildren = item.children && item.children.length > 0
  const isOpen = openDropdown === item.href

  return (
    <div
      className="relative"
      onMouseEnter={() => hasChildren && setOpenDropdown(item.href)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-1 px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200",
          isActive
            ? "text-white bg-white/10"
            : "text-white/60 hover:text-white hover:bg-white/5"
        )}
      >
        {item.title}
        {hasChildren && (
          <ChevronDown
            size={14}
            className={cn("transition-transform duration-200", isOpen && "rotate-180")}
          />
        )}
      </Link>
      {hasChildren && isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 glass-strong rounded-2xl py-2 shadow-2xl shadow-black/40 animate-scale-in origin-top">
          {item.children!.map((child) =>
            child.title === "─" ? (
              <div key={child.href} className="my-1 border-t border-white/5" />
            ) : (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  "block px-4 py-2.5 text-sm transition-colors",
                  pathname === child.href
                    ? "text-primary bg-primary/5"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                {child.title}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  )
}

function NavItemMobile({ item, pathname }: { item: NavItem; pathname: string }) {
  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

  return (
    <div>
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
          isActive ? "text-primary bg-primary/5" : "text-white/70 hover:text-white hover:bg-white/5"
        )}
      >
        {item.title}
      </Link>
      {item.children && (
        <div className="ml-4 mt-1 space-y-1">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-3 py-2 rounded-xl text-sm text-white/50 hover:text-white/80 transition-colors"
            >
              {child.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
