export interface ProductCategory {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  image: string
}

export interface Product {
  id: string
  name: string
  slug: string
  categoryId: string
  description: string
  shortDescription: string
  features: string[]
  applications: string[]
  specifications: { label: string; value: string }[]
  images: string[]
  relatedProducts: string[]
  faqs: { question: string; answer: string }[]
  downloads: { name: string; type: string; url: string }[]
  seoKeywords: string[]
  featured: boolean
  order: number
}

export const productCategories: ProductCategory[] = [
  {
    id: "floating-docks",
    name: "Modular Floating Docks",
    slug: "floating-docks",
    description:
      "Premium HDPE modular floating dock systems for marinas, yacht clubs, residential waterfronts, and water sports facilities. Quick assembly, superior stability, 15+ year lifespan in tropical marine environments.",
    icon: "Anchor",
    image: "/images/categories/floating-docks.jpg",
  },
  {
    id: "industrial-platforms",
    name: "Industrial Floating Platforms",
    slug: "industrial-platforms",
    description:
      "Heavy-duty floating platforms engineered for marine construction, dredging operations, floating restaurants, event venues, and helicopter landing pads. Rated for extreme loads and harsh offshore conditions.",
    icon: "Building2",
    image: "/images/categories/industrial-platforms.jpg",
  },
  {
    id: "floating-solar",
    name: "Floating Solar PV Systems",
    slug: "floating-solar",
    description:
      "Complete floating solar mounting solutions for utility-scale photovoltaic arrays on reservoirs, lakes, and coastal waters. Optimized tilt angles, integrated cable management, compatible with all major panel brands.",
    icon: "Sun",
    image: "/images/categories/floating-solar.jpg",
  },
  {
    id: "accessories",
    name: "Accessories & Connectors",
    slug: "accessories",
    description:
      "High-strength interlocking pins, mooring cleats, fender systems, aluminum gangways, and full accessory kits. Engineered for seamless integration with all PontoonPro pontoon systems.",
    icon: "Link",
    image: "/images/categories/accessories.jpg",
  },
]

export const products: Product[] = [
  {
    id: "standard-pontoon-50",
    name: "Standard Modular Pontoon Cube PP-5050",
    slug: "standard-modular-pontoon-pp5050",
    categoryId: "floating-docks",
    description:
      "The cornerstone of every PontoonPro floating system. Our PP-5050 HDPE pontoon cube features UV15-stabilized virgin HDPE material, precision blow-molded for consistent buoyancy across every unit. Each cube delivers 350kg of buoyancy with a 4:1 safety factor, making it the most reliable foundation for any floating structure.",
    shortDescription:
      "Industry-standard 50x50x40cm HDPE pontoon cube with 350kg buoyancy, UV15 stabilized, 4:1 safety factor.",
    features: [
      "Virgin HDPE material with UV15 stabilization - 15+ year lifespan in tropical UV exposure",
      "350kg buoyancy per cube (single layer), 700kg/m2 (double layer configuration)",
      "4-corner interlocking lug system for rapid assembly without tools",
      "Anti-slip textured top surface exceeding IMO safety standards",
      "Hollow blow-molded construction eliminates water absorption risk",
      "Operating temperature range: -40°C to +80°C",
      "100% recyclable at end of service life",
    ],
    applications: [
      "Yacht marinas and boat docks",
      "Jet ski and personal watercraft drive-on docks",
      "Residential waterfront platforms",
      "Swimming platforms and diving boards",
      "Temporary event floating stages",
    ],
    specifications: [
      { label: "Dimensions", value: "500 x 500 x 400 mm" },
      { label: "Weight", value: "7.5 kg per unit" },
      { label: "Buoyancy", value: "350 kg per unit (single layer)" },
      { label: "Load Capacity", value: "350 kg/m2 (single), 700 kg/m2 (double)" },
      { label: "Material", value: "100% Virgin HDPE, UV15 Stabilized" },
      { label: "Color", value: "Standard Grey / Custom colors available (MOQ applies)" },
      { label: "Service Life", value: "15+ years in tropical marine environments" },
      { label: "Temperature Range", value: "-40°C to +80°C" },
      { label: "Safety Factor", value: "4:1 (design load : ultimate load)" },
      { label: "Freeboard", value: "400 mm (unloaded), 200 mm (full load)" },
    ],
    images: ["/images/products/pp5050-1.jpg", "/images/products/pp5050-2.jpg", "/images/products/pp5050-3.jpg"],
    relatedProducts: ["heavy-duty-pontoon-100", "short-pin-connector", "side-bolt-kit"],
    faqs: [
      {
        question: "How many pontoons do I need for my dock?",
        answer:
          "For a standard floating dock, you need approximately 4 pontoons per square meter (single layer) or 2 pontoons per square meter (double layer). Use our Buoyancy Calculator for a precise estimate based on your specific dimensions and load requirements.",
      },
      {
        question: "What is the difference between single and double layer configuration?",
        answer:
          "Single layer uses one pontoon per position (350kg/m2 capacity) and is suitable for pedestrian docks and light watercraft. Double layer stacks two pontoons vertically (700kg/m2 capacity) for vehicle access, heavy equipment, and industrial applications.",
      },
      {
        question: "How do you connect the pontoons together?",
        answer:
          "Pontoons are connected using our high-strength galvanized steel short pins through the interlocking lug system at each corner. Side bolts provide additional lateral stability. Full assembly typically requires only a rubber mallet, no power tools needed.",
      },
    ],
    downloads: [
      { name: "PP-5050 Datasheet", type: "PDF", url: "/downloads/pp5050-datasheet.pdf" },
      { name: "PP-5050 CAD File", type: "STEP", url: "/downloads/pp5050-3d.step" },
      { name: "Installation Manual", type: "PDF", url: "/downloads/pontoon-installation-guide.pdf" },
    ],
    seoKeywords: [
      "HDPE pontoon cube",
      "50x50x40 pontoon",
      "floating dock cube",
      "modular dock pontoon",
      "plastic floating cube",
    ],
    featured: true,
    order: 1,
  },
  {
    id: "heavy-duty-pontoon-100",
    name: "Heavy-Duty Pontoon PP-1000",
    slug: "heavy-duty-industrial-pontoon-pp1000",
    categoryId: "industrial-platforms",
    description:
      "Engineered for the most demanding marine applications, the PP-1000 heavy-duty pontoon delivers 1,000kg of buoyancy in a single unit. Built with thicker HDPE walls, reinforced internal ribbing, and oversized connection lugs, this pontoon is rated for vehicle access, crane operations, and offshore industrial use.",
    shortDescription:
      "Heavy-duty industrial pontoon with 1,000kg buoyancy, reinforced walls, rated for vehicle and crane loads.",
    features: [
      "1,000kg buoyancy per unit with 4:1 safety factor",
      "Reinforced double-wall construction with internal cross-ribbing",
      "Oversized interlocking lugs for heavy-load connection integrity",
      "Anti-skid surface with drainage channels for all-weather grip",
      "Integrated mooring cleat mounting points",
      "Compatible with standard PP-5050 connection system",
    ],
    applications: [
      "Vehicle-accessible floating docks",
      "Floating crane and construction platforms",
      "Helicopter landing pads",
      "Offshore aquaculture platforms",
      "Floating restaurant/event foundations",
    ],
    specifications: [
      { label: "Dimensions", value: "1000 x 1000 x 500 mm" },
      { label: "Weight", value: "28 kg per unit" },
      { label: "Buoyancy", value: "1,000 kg per unit" },
      { label: "Load Capacity", value: "1,000 kg/m2" },
      { label: "Material", value: "Virgin HDPE + UV15 + Carbon Black" },
      { label: "Wall Thickness", value: "8 mm (double-layer blow-molded)" },
      { label: "Service Life", value: "20+ years" },
    ],
    images: ["/images/products/pp1000-1.jpg", "/images/products/pp1000-2.jpg"],
    relatedProducts: ["standard-pontoon-50", "heavy-duty-pin", "mooring-cleat-set"],
    faqs: [
      {
        question: "Can the PP-1000 support vehicle traffic?",
        answer:
          "Yes, when configured in a double-layer arrangement, the PP-1000 system is rated for vehicle loads up to 5 tons per axle. We recommend engineering consultation for specific vehicle access designs. The reinforced double-wall construction and internal cross-ribbing provide the structural integrity needed for continuous vehicular loads.",
      },
      {
        question: "What is the difference between PP-5050 and PP-1000 pontoons?",
        answer:
          "The PP-5050 (50x50x40cm) is our standard modular pontoon with 350kg buoyancy, ideal for pedestrian docks and light watercraft. The PP-1000 (100x100x50cm) is a heavy-duty pontoon with 1,000kg buoyancy, designed for industrial applications, vehicle access, and crane operations. PP-1000 uses thicker HDPE walls (8mm vs 5mm) and reinforced internal ribbing.",
      },
      {
        question: "How many PP-1000 pontoons do I need for a helicopter landing pad?",
        answer:
          "A helipad requires approximately 1 pontoon per square meter in a double-layer configuration, achieving 2,000 kg/m2 buoyancy. For a standard 15m x 15m helipad, you would need approximately 450 PP-1000 units. We provide complete engineering calculations and mooring analysis for aviation applications as part of our project support package.",
      },
    ],
    downloads: [
      { name: "PP-1000 Datasheet", type: "PDF", url: "/downloads/pp1000-datasheet.pdf" },
      { name: "PP-1000 CAD File", type: "STEP", url: "/downloads/pp1000-3d.step" },
    ],
    seoKeywords: ["heavy duty floating pontoon", "industrial floating platform", "vehicle dock pontoon"],
    featured: true,
    order: 2,
  },
  {
    id: "jet-ski-drive-on",
    name: "Jet Ski Drive-On Dock System JD-300",
    slug: "jet-ski-drive-on-dock-jd300",
    categoryId: "floating-docks",
    description:
      "The JD-300 is a purpose-built drive-on docking system for personal watercraft. The sloped entry design allows riders to simply drive their jet ski onto the platform, keeping the hull completely out of the water. Integrated rollers guide the watercraft into position while protecting the gel coat.",
    shortDescription:
      "Drive-on jet ski dock with sloped entry, integrated rollers, and hull protection. Fits all major PWC brands.",
    features: [
      "Sloped drive-on entry with HDPE rollers - no winch required",
      "Self-centering guide channels fit all major PWC brands (Sea-Doo, Yamaha, Kawasaki)",
      "Keeps hull completely out of water - prevents osmosis and fouling",
      "Modular design: connect multiple units side-by-side",
      "Integrated fender bumpers protect hull during docking",
      "Quick-connect system for seasonal removal",
    ],
    applications: [
      "Personal watercraft storage",
      "Resort and rental fleet docking",
      "Residential waterfront PWC docking",
      "Yacht tender docking",
    ],
    specifications: [
      { label: "Platform Size", value: "3000 x 1800 mm" },
      { label: "Weight Capacity", value: "750 kg per unit" },
      { label: "Draft", value: "150 mm (unloaded)" },
      { label: "Material", value: "HDPE + Marine-grade aluminum frame" },
      { label: "Compatible PWC Weight", value: "Up to 550 kg" },
    ],
    images: ["/images/products/jd300-1.jpg", "/images/products/jd300-2.jpg"],
    relatedProducts: ["standard-pontoon-50", "aluminum-gangway", "mooring-cleat-set"],
    faqs: [
      {
        question: "Does the JD-300 work with my Sea-Doo?",
        answer:
          "Yes, the JD-300 is designed to accommodate all major PWC brands including Sea-Doo, Yamaha WaveRunner, and Kawasaki Jet Ski. The self-centering guide channels automatically adjust to fit hull widths from 110cm to 140cm.",
      },
      {
        question: "Can I install the jet ski dock by myself?",
        answer:
          "Yes, the JD-300 arrives as a modular kit that can be assembled by 2 people in approximately 3-4 hours using basic hand tools. No welding or specialized equipment required. Full installation manual and video guide are included with every shipment.",
      },
      {
        question: "Does the drive-on dock damage my jet ski hull?",
        answer:
          "No. The JD-300 features HDPE rollers and soft fender bumpers along the entire guide channel. The rollers distribute weight evenly and rotate freely, eliminating any scratching or pressure points on the hull. This is significantly gentler than traditional floating dock berthing where the hull rubs against dock fenders.",
      },
      {
        question: "Can I use the JD-300 in saltwater?",
        answer:
          "Absolutely. All structural components are either HDPE plastic or marine-grade 6061-T6 aluminum, both fully resistant to saltwater corrosion. Stainless steel 316 fasteners are used throughout. The drive-on dock is designed for permanent saltwater installation with zero degradation.",
      },
    ],
    downloads: [
      { name: "JD-300 Brochure", type: "PDF", url: "/downloads/jd300-brochure.pdf" },
    ],
    seoKeywords: ["jet ski drive on dock", "PWC floating dock", "jet ski platform", "drive on pontoon dock"],
    featured: true,
    order: 3,
  },
  {
    id: "solar-pv-floater",
    name: "Solar PV Floating System SP-2000",
    slug: "floating-solar-pv-system-sp2000",
    categoryId: "floating-solar",
    description:
      "The SP-2000 is a complete floating photovoltaic mounting system designed for utility-scale solar installations on water bodies. Each unit supports two standard 72-cell solar panels at an optimized 12-degree tilt angle. The system includes integrated cable trays, walkways for maintenance access, and corrosion-resistant aluminum mounting rails.",
    shortDescription:
      "Complete floating solar PV mounting system supporting dual 72-cell panels at 12-degree optimized tilt.",
    features: [
      "Supports 2x standard 72-cell (2m x 1m) solar panels per floater unit",
      "Optimized 12-degree fixed tilt for maximum annual energy yield",
      "Integrated cable management channels - no underwater wiring",
      "Maintenance walkways between every row of panels",
      "Corrosion-resistant 6063-T5 aluminum mounting rails",
      "Designed for 25+ year service life matching panel warranty",
      "Wind load rated to 180 km/h (Category 2 hurricane)",
    ],
    applications: [
      "Utility-scale floating solar farms",
      "Hydroelectric dam reservoirs",
      "Industrial water treatment ponds",
      "Irrigation reservoirs",
      "Mining tailings ponds",
    ],
    specifications: [
      { label: "Panel Capacity", value: "2x 72-cell panels per unit" },
      { label: "Tilt Angle", value: "12 degrees (fixed, south-facing)" },
      { label: "Dimensions", value: "2200 x 4500 mm per floater" },
      { label: "Buoyancy", value: "2,400 kg per unit" },
      { label: "Material", value: "HDPE floaters + 6063-T5 aluminum rails" },
      { label: "Wind Rating", value: "180 km/h (Cat 2 hurricane)" },
      { label: "Wave Height", value: "Up to 1.5m significant wave height" },
    ],
    images: ["/images/products/sp2000-1.jpg", "/images/products/sp2000-2.jpg"],
    relatedProducts: ["standard-pontoon-50", "cable-float-system", "aluminum-gangway"],
    faqs: [
      {
        question: "How does floating solar compare to ground-mount in terms of efficiency?",
        answer:
          "Floating solar typically achieves 5-10% higher energy yield than ground-mount due to the cooling effect of water on the panels. Water bodies reduce ambient temperature around the panels by 3-5 degrees Celsius, which directly improves photovoltaic conversion efficiency. Additionally, water surfaces provide natural albedo reflection, increasing bifacial panel performance.",
      },
      {
        question: "What type of water bodies are suitable for the SP-2000?",
        answer:
          "The SP-2000 is engineered for calm to moderate water bodies including reservoirs, hydroelectric dams, industrial ponds, irrigation lakes, and mining tailings ponds. The system is rated for significant wave heights up to 1.5m and wind speeds up to 180 km/h (Category 2 hurricane). For open-sea or high-wave environments, our engineering team can provide a custom mooring solution.",
      },
      {
        question: "How is the floating solar array anchored in place?",
        answer:
          "The array is secured using a combination of concrete sinker blocks (500kg each), galvanized grade 80 anchor chains, and elastic mooring lines that compensate for water level fluctuations. The mooring layout is custom-designed for each project based on bathymetry data, prevailing wind direction, and maximum water level variation. A complete mooring analysis report is included with every system quotation.",
      },
      {
        question: "What maintenance does a floating solar system require?",
        answer:
          "Floating solar requires minimal structural maintenance due to the corrosion-resistant HDPE and aluminum construction. Primary maintenance activities include: (1) quarterly visual inspection of mooring lines and connections, (2) semi-annual cleaning of walkway surfaces, (3) annual torque check on all bolted connections. The HDPE floaters themselves require zero maintenance for their 25+ year service life.",
      },
    ],
    downloads: [
      { name: "SP-2000 System Design Guide", type: "PDF", url: "/downloads/sp2000-design-guide.pdf" },
      { name: "Floating Solar Mooring Analysis", type: "PDF", url: "/downloads/floating-solar-mooring.pdf" },
    ],
    seoKeywords: ["floating solar platform", "PV floater system", "floating photovoltaic mounting", "solar pontoon"],
    featured: true,
    order: 4,
  },
  {
    id: "short-pin-connector",
    name: "Short Pin Connector Set PS-100",
    slug: "short-pin-connector-ps100",
    categoryId: "accessories",
    description:
      "Hot-dip galvanized steel short pins with nylon locking caps. Each set connects 4 pontoon corners at a junction point. Precision-engineered for zero-play fit with the PP-5050 interlocking lug system. Salt-spray tested to 2,000+ hours.",
    shortDescription:
      "Hot-dip galvanized steel connecting pins with nylon caps. 4-point junction connector for PP-5050 pontoons.",
    features: [
      "Hot-dip galvanized steel (80 micron coating thickness)",
      "Nylon locking cap prevents loosening from wave vibration",
      "Quick assembly: insert and lock, no tools required",
      "2,000+ hour salt spray corrosion resistance tested",
      "Each set connects 4 pontoon corners",
    ],
    applications: ["All modular pontoon assembly", "Marina dock construction", "Floating platform assembly"],
    specifications: [
      { label: "Pin Material", value: "Q235 Steel + Hot-dip Galvanized" },
      { label: "Pin Diameter", value: "16 mm" },
      { label: "Pin Length", value: "200 mm" },
      { label: "Locking Cap", value: "Nylon 6 + UV Stabilized" },
      { label: "Corrosion Resistance", value: "2,000+ hours salt spray (ASTM B117)" },
    ],
    images: ["/images/products/ps100-1.jpg"],
    relatedProducts: ["standard-pontoon-50", "side-bolt-kit", "heavy-duty-pin"],
    faqs: [
      {
        question: "How many short pins do I need for my floating dock project?",
        answer:
          "As a general rule, you need approximately 0.8 short pins per pontoon cube. Each pin connects 4 pontoon corners at a junction point. For a precise calculation, use our Buoyancy Calculator which automatically computes the required pin quantity based on your platform dimensions and dock type.",
      },
      {
        question: "Are the short pins corrosion-resistant in saltwater?",
        answer:
          "Yes. The PS-100 short pins are hot-dip galvanized with an 80-micron coating thickness, providing 2,000+ hours of salt spray resistance (ASTM B117 tested). The nylon locking caps are UV-stabilized to prevent degradation from sun exposure. For extreme environments (continuous saltwater immersion), we also offer 316 stainless steel pins as a custom option.",
      },
    ],
    downloads: [],
    seoKeywords: ["pontoon connecting pin", "floating dock connector", "HDPE pontoon pin"],
    featured: false,
    order: 5,
  },
  {
    id: "side-bolt-kit",
    name: "Side Bolt Fastening Kit SB-200",
    slug: "side-bolt-fastening-kit-sb200",
    categoryId: "accessories",
    description:
      "Stainless steel 316 side bolts with washers and nuts for lateral connection between pontoon rows. Provides additional structural rigidity and prevents independent pontoon movement under wave loading. Each kit includes 50 bolt sets.",
    shortDescription:
      "316 stainless steel side bolt kit for lateral pontoon connection. 50 sets per kit with washers and nuts.",
    features: [
      "Marine-grade 316 stainless steel - zero rust in seawater",
      "M12 thread with oversized washer for distributed clamping force",
      "Prevents independent pontoon movement under wave loading",
      "50 complete sets per kit (bolt + washer + nut)",
    ],
    applications: ["All modular floating dock connections", "Lateral pontoon stabilization"],
    specifications: [
      { label: "Material", value: "316 Stainless Steel" },
      { label: "Thread", value: "M12 x 120 mm" },
      { label: "Washer", value: "M12 oversized 316 SS" },
      { label: "Quantity", value: "50 sets per kit" },
    ],
    images: ["/images/products/sb200-1.jpg"],
    relatedProducts: ["standard-pontoon-50", "short-pin-connector", "mooring-cleat-set"],
    faqs: [
      {
        question: "Why do I need side bolts in addition to short pins?",
        answer:
          "Short pins connect pontoons vertically at corner junctions, while side bolts provide lateral (horizontal) connection between adjacent pontoon rows. Without side bolts, individual pontoons can move independently under wave loading, creating wear on the pin connections and reducing overall platform rigidity. Side bolts create a unified structural platform that moves as one piece.",
      },
      {
        question: "How many side bolts per pontoon?",
        answer:
          "Approximately 0.6 side bolts per pontoon. Each side bolt connects two adjacent pontoons horizontally. The Buoyancy Calculator on our website automatically computes the required quantity based on your platform configuration.",
      },
    ],
    downloads: [],
    seoKeywords: ["pontoon side bolt", "floating dock fastener", "stainless steel dock bolt"],
    featured: false,
    order: 6,
  },
  {
    id: "aluminum-gangway",
    name: "Aluminum Access Gangway AG-400",
    slug: "aluminum-access-gangway-ag400",
    categoryId: "accessories",
    description:
      "Lightweight yet robust aluminum gangway with self-adjusting shore-end hinge and floating-end roller connection. Anti-slip decking, handrails on both sides, and corrosion-resistant 6061-T6 aluminum construction make this the ideal access solution for any floating dock.",
    shortDescription:
      "Aluminum gangway with anti-slip decking, dual handrails, self-adjusting hinges. Standard lengths 3m-12m.",
    features: [
      "6061-T6 marine-grade aluminum frame",
      "Self-adjusting hinge compensates for water level changes up to 2m",
      "Anti-slip FRP (fiberglass reinforced plastic) decking",
      "Dual 1100mm high handrails meet international safety codes",
      "Available in standard lengths: 3m, 4m, 6m, 8m, 10m, 12m",
      "Custom lengths and widths available on request",
    ],
    applications: ["Marina access", "Resort dock access", "Industrial floating platform access"],
    specifications: [
      { label: "Material", value: "6061-T6 Aluminum + FRP Decking" },
      { label: "Width", value: "1,200 mm (clear walkway)" },
      { label: "Standard Lengths", value: "3 / 4 / 6 / 8 / 10 / 12 meters" },
      { label: "Handrail Height", value: "1,100 mm" },
      { label: "Load Capacity", value: "500 kg/m2" },
      { label: "Water Level Range", value: "Up to 2.0m variation" },
    ],
    images: ["/images/products/ag400-1.jpg", "/images/products/ag400-2.jpg"],
    relatedProducts: ["standard-pontoon-50", "heavy-duty-pontoon-100"],
    faqs: [
      {
        question: "What length gangway do I need?",
        answer:
          "The gangway length depends on your maximum water level variation and the distance from shore to your floating dock. As a rule of thumb, the gangway should be at least 1.5x the maximum vertical water level range plus the horizontal distance at low water. Our AG-400 gangways are available in 3m, 4m, 6m, 8m, 10m, and 12m standard lengths. For assistance with sizing, contact our engineering team with your site's tidal data.",
      },
      {
        question: "How does the gangway handle changing water levels?",
        answer:
          "Each AG-400 features a self-adjusting shore-end hinge with a 180-degree range of motion and a floating-end roller connection that travels freely along a track on the dock. This dual-pivot system handles water level variations up to 2.0 meters without manual adjustment or reconfiguration.",
      },
    ],
    downloads: [{ name: "AG-400 Specification Sheet", type: "PDF", url: "/downloads/ag400-specs.pdf" }],
    seoKeywords: ["aluminum dock gangway", "floating dock access ramp", "marina gangway"],
    featured: false,
    order: 7,
  },
  {
    id: "mooring-cleat-set",
    name: "Mooring Cleat & Anchor Kit MC-500",
    slug: "mooring-cleat-anchor-kit-mc500",
    categoryId: "accessories",
    description:
      "Complete mooring solution for floating docks. Includes 316 stainless steel mooring cleats, galvanized anchor chains, concrete sinker blocks, and elastic mooring lines. Engineered to maintain dock position while absorbing wave surge.",
    shortDescription:
      "Complete mooring kit: SS316 cleats, galvanized chains, concrete anchors, elastic mooring lines.",
    features: [
      "316 stainless steel cleats - 5 ton breaking strength each",
      "Hot-dip galvanized grade 80 anchor chain - 10mm link diameter",
      "Precast concrete sinker blocks - 500 kg each",
      "Elastic mooring lines absorb wave surge (up to 100% elongation)",
      "Complete engineering calculation package included",
    ],
    applications: ["Permanent floating dock mooring", "Marina anchor systems", "Offshore platform mooring"],
    specifications: [
      { label: "Cleat Material", value: "316 Stainless Steel" },
      { label: "Cleat Breaking Load", value: "5,000 kg" },
      { label: "Chain Grade", value: "Grade 80, 10mm diameter" },
      { label: "Anchor Weight", value: "500 kg concrete block" },
      { label: "Mooring Line", value: "22mm nylon, elastic" },
    ],
    images: ["/images/products/mc500-1.jpg"],
    relatedProducts: ["standard-pontoon-50", "heavy-duty-pontoon-100", "short-pin-connector"],
    faqs: [
      {
        question: "How do I determine the right mooring configuration for my site?",
        answer:
          "Mooring design depends on water depth, bottom composition (sand, mud, rock), maximum wind speed, wave fetch distance, and current velocity. Our engineering team provides a free mooring analysis as part of every floating dock quotation. Simply provide your site coordinates and we will generate a complete mooring layout with anchor placement, chain lengths, and safety factors calculated to your local conditions.",
      },
      {
        question: "Can the MC-500 mooring kit handle tropical storms?",
        answer:
          "The MC-500 is rated for wind speeds up to 180 km/h when properly installed with the recommended number of anchor points. The elastic mooring lines absorb surge energy by stretching up to 100% elongation, preventing shock loads from transferring to the pontoon connections. For cyclone/hurricane-prone regions, we specify additional anchors and heavier chain grades in the engineering package.",
      },
    ],
    downloads: [{ name: "Mooring Calculation Guide", type: "PDF", url: "/downloads/mooring-calculation.pdf" }],
    seoKeywords: ["dock mooring kit", "floating dock anchor", "marina cleat"],
    featured: false,
    order: 8,
  },
]

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured).sort((a, b) => a.order - b.order)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(productId: string): Product[] {
  const product = products.find((p) => p.id === productId)
  if (!product) return []
  return product.relatedProducts
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => p !== undefined)
}
