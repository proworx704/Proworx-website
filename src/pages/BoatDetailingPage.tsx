import { Anchor, ArrowRight, CheckCircle2, Droplets, Phone, Ruler, Shield, Sparkles, Waves } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { BookNowLink } from "@/components/BookNowLink";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";

/* ── Boat service pricing by size bracket ── */
const BOAT_SERVICES = [
  {
    name: "Basic Boat Wash",
    slug: "basic-boat-wash",
    description: "Exterior hand wash, rinse, and dry. Ideal for routine upkeep between deep cleans.",
    tiers: [
      { label: "Up to 20 ft", price: "$250" },
      { label: "21–25 ft", price: "$325" },
      { label: "26–30 ft", price: "$400" },
      { label: "31–35 ft", price: "$500" },
    ],
  },
  {
    name: "Interior Detail",
    slug: "interior-boat-detail",
    description: "Deep clean of all interior surfaces — seats, cushions, compartments, cup holders, dash, and floor. Restore your cabin to like-new condition.",
    tiers: [
      { label: "Up to 20 ft", price: "$350" },
      { label: "21–25 ft", price: "$450" },
      { label: "26–30 ft", price: "$550" },
      { label: "31–35 ft", price: "$675" },
    ],
  },
  {
    name: "Exterior Detail + Wax",
    slug: "exterior-boat-detail",
    description: "Full exterior wash, decontamination, and hand wax application for lasting shine and UV protection on the water.",
    tiers: [
      { label: "Up to 20 ft", price: "$450" },
      { label: "21–25 ft", price: "$575" },
      { label: "26–30 ft", price: "$700" },
      { label: "31–35 ft", price: "$850" },
    ],
  },
  {
    name: "Full Boat Detail",
    slug: "full-boat-detail",
    description: "The works — comprehensive interior deep clean plus exterior wash, decontamination, and wax. Top-to-bottom restoration.",
    tiers: [
      { label: "Up to 20 ft", price: "$600" },
      { label: "21–25 ft", price: "$775" },
      { label: "26–30 ft", price: "$950" },
      { label: "31–35 ft", price: "$1,150" },
    ],
    popular: true,
  },
  {
    name: "Oxidation Removal",
    slug: "boat-oxidation",
    description: "Machine compound and polish to remove oxidation, chalking, and heavy water spots from gelcoat and fiberglass surfaces.",
    tiers: [
      { label: "Up to 20 ft", price: "$375" },
      { label: "21–25 ft", price: "$475" },
      { label: "26–30 ft", price: "$575" },
      { label: "31–35 ft", price: "$700" },
    ],
  },
];

const CERAMIC_PACKAGES = [
  {
    name: "Marine Ceramic — 2-Year",
    protection: "2-Year Protection",
    description: "Professional marine-grade ceramic coating providing hydrophobic protection, UV resistance, and easy maintenance for two full seasons.",
    tiers: [
      { label: "Up to 20 ft", price: "$800" },
      { label: "21–25 ft", price: "$1,000" },
      { label: "26–30 ft", price: "$1,250" },
      { label: "31–35 ft", price: "$1,500" },
    ],
    popular: false,
  },
  {
    name: "Marine Ceramic — 5-Year",
    protection: "5-Year Protection",
    description: "Our premium marine ceramic package — maximum durability against saltwater, UV, and the elements. Ideal for boats that stay in the water or see heavy use.",
    tiers: [
      { label: "Up to 20 ft", price: "$1,200" },
      { label: "21–25 ft", price: "$1,550" },
      { label: "26–30 ft", price: "$1,900" },
      { label: "31–35 ft", price: "$2,250" },
    ],
    popular: true,
  },
];

const ADDONS = [
  { name: "Interior Boat Ceramic", desc: "Ceramic protection for interior surfaces — vinyl, leather, and plastics stay protected from UV and stains." },
  { name: "Hull Cleaning", desc: "Below-waterline cleaning to remove algae, barnacles, and buildup. Keep your hull smooth and efficient." },
  { name: "Trailer Detail", desc: "Full clean and dress of your boat trailer — rinse, degrease, and protect. Starting at $75." },
  { name: "Teak Cleaning & Seal", desc: "Clean, brighten, and seal teak wood surfaces for lasting protection and natural beauty." },
  { name: "Metal & Brightwork Polish", desc: "Hand polish stainless steel, aluminum, and chrome hardware to a mirror finish." },
  { name: "Canvas & Cushion Cleaning", desc: "Deep clean Bimini tops, boat covers, and seat cushions — remove dirt, salt, and mildew stains." },
  { name: "Mildew & Odor Treatment", desc: "Professional mold and mildew removal with anti-microbial treatment. Eliminates musty odors from compartments and upholstery." },
  { name: "Engine / Outboard Detail", desc: "Clean, degrease, and dress the engine compartment or outboard motor. Restore a like-new look." },
  { name: "Non-Skid Deck Deep Clean", desc: "Scrub and restore textured non-skid deck surfaces — remove ground-in stains, scuffs, and grime." },
  { name: "Water Spot Removal", desc: "Remove hard water mineral deposits from gelcoat, glass, and metal using specialized compounds." },
  { name: "Vinyl Seat Restoration", desc: "Deep clean, condition, and UV-protect all vinyl seating. Restores color and prevents cracking." },
  { name: "Glass & Windshield Sealant", desc: "Hydrophobic ceramic sealant for all glass — repels water, salt spray, and makes cleaning easier." },
];

export function BoatDetailingPage() {
  const { config } = useSiteConfig();

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Boat Detailing"
        description="Professional mobile boat detailing in Charlotte, NC. Interior, exterior, oxidation removal & marine ceramic coating. We come to you — dockside or driveway. View pricing by boat size."
        keywords="boat detailing Charlotte NC, mobile boat detailing, boat wash near me, marine ceramic coating, boat oxidation removal, boat detail pricing"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Boat Detailing", "item": "https://www.proworxdetailing.com/boat-detailing" }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "Does ProWorx offer mobile boat detailing?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! ProWorx provides professional mobile boat detailing in Charlotte, NC. We come to your dock, driveway, or storage lot with our fully self-contained mobile setup. Services include basic wash, interior detail, exterior detail with wax, full boat detail, oxidation removal, and marine ceramic coating." }},
                { "@type": "Question", "name": "How much does boat detailing cost?", "acceptedAnswer": { "@type": "Answer", "text": "Boat detailing is priced by boat length. For example, a full boat detail starts at $600 for boats up to 20 ft, $775 for 21-25 ft, $950 for 26-30 ft, and $1,150 for 31-35 ft. Contact us for larger vessels." }},
                { "@type": "Question", "name": "Do you offer ceramic coating for boats?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer marine ceramic coating packages with 2-year and 5-year protection options. Prices range from $800-$2,250 depending on boat size and package selected." }}
              ]
            }
          ]
        }}
      />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="boat-hero" fallback="/images/boat-hero.webp" alt="ProWorx mobile boat detailing service" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6 backdrop-blur-sm">
              <Anchor className="size-3.5" />
              Mobile Boat Detailing
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Professional <span className="text-gradient-gold">Boat Detailing</span> in Charlotte, NC
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Keep your boat looking showroom-fresh all season. From basic washes to full details and marine ceramic coatings — we bring the detail shop to your dock or driveway. Pricing based on boat length.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <a href="#services">
                  View Boat Pricing <ArrowRight className="size-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> {config.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Mobile Boat Detailing ── */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Choose ProWorx for Your Boat?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Your boat battles sun, salt, and water every time it hits the lake. Professional detailing preserves the finish, protects your investment, and keeps it looking its best.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Waves className="size-5" />, title: "We Come to You", desc: "Dockside, driveway, or storage lot — our fully self-contained mobile setup means zero hassle for you." },
                { icon: <Ruler className="size-5" />, title: "Size-Based Pricing", desc: "Transparent pricing based on your boat's length. No hidden fees — you know the cost before we start." },
                { icon: <Shield className="size-5" />, title: "Marine-Grade Products", desc: "We use professional marine detailing products formulated for gelcoat, fiberglass, vinyl, and teak." },
                { icon: <Sparkles className="size-5" />, title: "Oxidation Experts", desc: "Charlotte sun and lake water take a toll. We restore faded, chalky gelcoat to a deep, glossy finish." },
                { icon: <Droplets className="size-5" />, title: "Ceramic Protection", desc: "Marine ceramic coatings provide years of hydrophobic, UV-resistant protection — perfect for boats." },
                { icon: <Anchor className="size-5" />, title: "Full-Service Detailing", desc: "Interior, exterior, hull, trailer, teak, metal — we handle every surface on your vessel." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-card border border-border p-5">
                  <div className="size-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-3">{item.icon}</div>
                  <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Boat Image Showcase ── */}
      <section className="py-0">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 -mt-4 mb-0 max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden aspect-[4/3]">
              <img src="/images/boat-hero.webp" alt="Professional boat detailing at dock" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-[4/3]">
              <img src="/images/boat-wash.webp" alt="Hand washing boat hull" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-[4/3]">
              <img src="/images/boat-interior.webp" alt="Detailed boat interior cockpit" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-[4/3]">
              <img src="/images/boat-exterior.webp" alt="Freshly detailed boat on trailer" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Detailing Services + Pricing ── */}
      <section id="services" className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Detailing Services</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Boat Detailing Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              All services priced by boat length. Select the package that fits your needs — or call us for a custom quote on larger vessels.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {BOAT_SERVICES.map((svc) => (
              <div key={svc.name} className={`rounded-2xl bg-card border p-6 md:p-7 ${svc.popular ? "border-gold shadow-lg shadow-gold/10 relative" : "border-border"}`}>
                {svc.popular && <div className="absolute -top-3 left-6 px-4 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-full">Most Popular</div>}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg md:text-xl">{svc.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">{svc.description}</p>
                  </div>
                  <Button size="sm" className={svc.popular ? "bg-gold text-gold-foreground hover:bg-gold/90 font-bold shrink-0" : "bg-muted text-foreground hover:bg-muted/80 font-semibold shrink-0"} asChild>
                    <BookNowLink href={config[`widgetUrl:${svc.slug}`] || `/book?service=${svc.slug}`}>Book Now <ArrowRight className="size-3.5" /></BookNowLink>
                  </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {svc.tiers.map((tier) => (
                    <div key={tier.label} className="rounded-xl bg-background border border-border p-3 text-center">
                      <p className="text-xs text-muted-foreground mb-1">{tier.label}</p>
                      <p className="font-bold text-gold text-lg">{tier.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 max-w-xl mx-auto">
            Boats over 35 ft? <a href={config.phoneLink} className="text-gold hover:underline">Call us</a> for a custom quote. Pricing may vary based on condition and accessibility.
          </p>
        </div>
      </section>

      {/* ── Marine Ceramic Coating ── */}
      <section id="ceramic" className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Long-Term Protection</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Marine Ceramic Coating</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Professional-grade marine ceramic coatings that protect gelcoat and fiberglass from UV damage, water spots, and oxidation — for years, not weeks.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {CERAMIC_PACKAGES.map((pkg) => (
              <div key={pkg.name} className={`rounded-2xl bg-card border p-7 flex flex-col relative ${pkg.popular ? "border-gold shadow-lg shadow-gold/10" : "border-border"}`}>
                {pkg.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-full">Best Value</div>}
                <h3 className="font-bold text-xl mb-1">{pkg.name}</h3>
                <p className="text-gold text-sm font-medium mb-3">{pkg.protection}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{pkg.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {pkg.tiers.map((tier) => (
                    <div key={tier.label} className="rounded-xl bg-background border border-border p-3 text-center">
                      <p className="text-xs text-muted-foreground mb-1">{tier.label}</p>
                      <p className="font-bold text-gold">{tier.price}</p>
                    </div>
                  ))}
                </div>
                <ul className="space-y-2 flex-1 mb-6">
                  {[
                    "Hydrophobic water repellency",
                    "UV & oxidation resistance",
                    "Easy-clean surface",
                    "Professional application",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className={pkg.popular ? "bg-gold text-gold-foreground hover:bg-gold/90 font-bold" : "bg-muted text-foreground hover:bg-muted/80 font-semibold"} asChild>
                  <a href={config.phoneLink}>Get a Quote <ArrowRight className="size-4" /></a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Add-Ons ── */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Customize Your Service</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Boat Detail Add-Ons</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Enhance any boat detailing package with these specialized add-on services.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ADDONS.map((addon) => (
                <div key={addon.name} className="rounded-xl bg-card border border-border p-5 flex flex-col">
                  <h3 className="font-bold text-sm mb-2">{addon.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">{addon.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Add-on pricing varies by boat size and condition. <a href={config.phoneLink} className="text-gold hover:underline">Call us</a> for details.
            </p>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How Mobile Boat Detailing Works</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Call or Book", desc: "Tell us your boat's length, type, and what services you need." },
                { step: "2", title: "Get Your Quote", desc: "We'll confirm pricing based on size and services — no surprises." },
                { step: "3", title: "We Come to You", desc: "Our mobile team arrives at your dock, driveway, or storage lot with everything we need." },
                { step: "4", title: "Enjoy the Results", desc: "Your boat is clean, protected, and ready for the water." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="size-12 rounded-full bg-gold/10 flex items-center justify-center text-gold font-black text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="boat-cta" fallback="/images/boat-exterior.webp" alt="Freshly detailed boat on trailer" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Ready to Get Your Boat <span className="text-gradient-gold">Looking Its Best</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Schedule a mobile boat detail today. We'll come to you with everything we need — just point us to the boat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
              <BookNowLink href="/book?category=boatDetailing">Book Boat Detail <ArrowRight className="size-5" /></BookNowLink>
            </Button>
            <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
              <a href={config.phoneLink}><Phone className="size-5" /> {config.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
