import { siteConfig } from "./site"

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
  children?: NavItem[]
}

export interface MarketingConfig {
  mainNav: NavItem[]
}

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Solutions",
      href: "/products",
      children: [
        { title: "Floating Dock Systems", href: "/products/floating-docks" },
        { title: "Modular Pontoon Cubes", href: "/products/standard-modular-pontoon-pp5050" },
        { title: "Jet Ski Drive-On Docks", href: "/products/jet-ski-drive-on-dock-jd300" },
        { title: "─", href: "#" },
        { title: "Industrial Platforms", href: "/products/industrial-platforms" },
        { title: "Floating Solar PV", href: "/products/floating-solar" },
        { title: "All Products", href: "/products" },
      ],
    },
    {
      title: "Industries",
      href: "/industries",
    },
    {
      title: "Resources",
      href: "/resources",
      children: [
        { title: "Technical Library", href: "/resources" },
        { title: "Buoyancy Calculator", href: "/resources/calculator" },
        { title: "Installation Guides", href: "/resources/installation" },
        { title: "Case Studies", href: "/resources/case-studies" },
      ],
    },
    {
      title: "About",
      href: "/about",
      children: [
        { title: "Our Story", href: "/about" },
        { title: "Factory Tour", href: "/factory" },
        { title: "Quality Control", href: "/quality" },
        { title: "Certifications", href: "/certificates" },
      ],
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
}
