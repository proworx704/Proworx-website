import { useState } from "react";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Droplets,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";
import { trackPhoneClick, trackBookNowConversion } from "@/lib/tracking";

/* ──────────────────────── DATA ──────────────────────── */

const PACKAGES = [
  {
    name: "GYEON Q² One EVO",
    tag: "1-Year Protection",
    priceFrom: "$499",
    deposit: "$150",
    configKey: "ceramicDeposit1yr",
    features: [
      "Prep wash & clay bar decontamination",
      "Light prep polish (paint prep)",
      "Single-layer GYEON Q² One EVO",
      "Hydrophobic protection & UV shield",
      "Enhanced gloss & depth",
      "1-year GYEON manufacturer warranty",
    ],
    popular: false,
  },
  {
    name: "GYEON Q² Pure EVO",
    tag: "3-Year Protection",
    priceFrom: "$899",
    deposit: "$270",
    configKey: "ceramicDeposit3yr",
    features: [
      "Prep wash & clay bar decontamination",
      "Light prep polish (paint prep)",
      "GYEON Q² Pure EVO professional coating",
      "Superior chemical & UV resistance",
      "Extreme hydrophobic properties",
      "3-year GYEON manufacturer warranty",
      "Annual inspection included",
    ],
    popular: true,
  },
  {
    name: "GYEON Q² Flash EVO",
    tag: "10-Year Protection",
    priceFrom: "$1,599",
    deposit: "$480",
    configKey: "ceramicDeposit10yr",
    features: [
      "Prep wash & clay bar decontamination",
      "Light prep polish (paint prep)",
      "GYEON Q² Flash EVO top-tier coating",
      "Maximum hardness & scratch resistance",
      "Self-cleaning hydrophobic effect",
      "10-year GYEON manufacturer warranty",
      "Annual inspection & maintenance",
    ],
    popular: false,
  },
];

const REVIEWS = [
  {
    name: "Corey W.",
    text: "Tyler and his team are best in class. They service all our vehicles (including an old classic) with such care and professionalism. He's always punctual and very up front on pricing.",
    stars: 5,
  },
  {
    name: "John",
    text: "Been using Tyler's service for a few years now. Tyler details both of my cars each month. Excellent attention to detail as you would expect. Highly recommend!",
    stars: 5,
  },
  {
    name: "Misti M.",
    text: "On time, great attention to detail and excellent customer service! I feel like I have a new car! Highly recommend!",
    stars: 5,
  },
  {
    name: "Frank T.",
    text: "Great job on 2019 Volvo. Looks like new inside and outside. Great experience.",
    stars: 5,
  },
];

const GALLERY_ITEMS = [
  { image: "/images/escalade-rear.jpg", slot: "ceramic-gallery-1", alt: "Cadillac Escalade ceramic coating — deep gloss under hex lights", label: "Escalade — GYEON Q² Pure" },
  { image: "/images/aston-front.jpg", slot: "ceramic-gallery-2", alt: "Aston Martin ceramic coated by ProWorx", label: "Aston Martin — GYEON Q² Flash" },
  { image: "/images/corvette-front.jpg", slot: "ceramic-gallery-3", alt: "Corvette ceramic coating with mirror finish", label: "Corvette — Paint Correction + Ceramic" },
  { image: "/images/ferrari-side.jpg", slot: "ceramic-gallery-4", alt: "Ferrari Roma ceramic coated by ProWorx", label: "Ferrari Roma — GYEON Q² Pure" },
  { image: "/images/audi-front.jpg", slot: "ceramic-gallery-5", alt: "Audi ceramic coating showroom finish", label: "Audi — GYEON Q² One" },
  { image: "/images/rangerover-front.jpg", slot: "ceramic-gallery-6", alt: "Range Rover ceramic protection by ProWorx", label: "Range Rover — GYEON Q² Pure" },
];

const PRO_VS_CONSUMER = [
  { feature: "Coating Type", pro: "SiO₂ professional-grade (GYEON / IGL)", consumer: "Spray-on sealant" },
  { feature: "Longevity", pro: "1–10 years", consumer: "1–3 months" },
  { feature: "Surface Prep", pro: "Clay bar, iron decon & machine polish", consumer: "Basic wash" },
  { feature: "Hardness", pro: "True 9H hardness rating", consumer: "No measurable hardness" },
  { feature: "Warranty", pro: "GYEON manufacturer warranty", consumer: "None" },
  { feature: "Hydrophobic", pro: "Extreme water beading for years", consumer: "Fades in weeks" },
];

const FAQ_ITEMS = [
  {
    q: "What is ceramic coating?",
    a: "Ceramic coating is a liquid polymer applied to your vehicle's exterior that creates a semi-permanent bond with the paint. It provides hydrophobic protection, UV resistance, chemical resistance, and enhanced gloss that lasts years — not weeks like wax or sealant.",
  },
  {
    q: "How much does ceramic coating cost in Charlotte?",
    a: "ProWorx offers three GYEON ceramic coating packages: Q² One EVO (1 year) starting at $499, Q² Pure EVO (3 years) starting at $899, and Q² Flash EVO (10 years) starting at $1,599. Reserve any package with just 30% down.",
  },
  {
    q: "Is this a drop-off or mobile service?",
    a: "Ceramic coating alone can be done mobile, but drop-off at our Waxhaw location is preferred for best results. If you need paint correction + ceramic coating, drop-off is required — the multi-stage process needs a controlled environment.",
  },
  {
    q: "How long does ceramic coating last?",
    a: "Depending on the package, ProWorx ceramic coatings last 1, 3, or 10 years. All packages include a GYEON manufacturer warranty, and our 3-year and 10-year packages include annual inspections.",
  },
  {
    q: "Do I need paint correction before ceramic coating?",
    a: "Not necessarily — every package includes a light prep polish to create the ideal bonding surface. However, if your paint has swirl marks, scratches, or oxidation, adding a paint correction service first will give you the best possible result under the coating.",
  },
  {
    q: "Is ProWorx a certified installer?",
    a: "Yes. ProWorx is a certified GYEON and IGL ceramic coating installer with 12+ years of professional detailing experience. All coatings are applied by trained professionals with proper prep and curing procedures.",
  },
];

/* ──────────────────────── COMPONENTS ──────────────────────── */

function StarRating({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
      ))}
    </span>
  );
}

function GalleryCarousel() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? GALLERY_ITEMS.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === GALLERY_ITEMS.length - 1 ? 0 : i + 1));
  const item = GALLERY_ITEMS[idx];

  return (
    <div className="relative">
      {/* Main image */}
      <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-muted">
        <CmsImg
          slot={item.slot}
          fallback={item.image}
          alt={item.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent pt-12 pb-4 px-5">
          <p className="text-white font-semibold text-sm">{item.label}</p>
        </div>
        {/* Nav arrows */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
      {/* Thumbnails */}
      <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-hide">
        {GALLERY_ITEMS.map((g, i) => (
          <button
            key={g.slot}
            type="button"
            onClick={() => setIdx(i)}
            className={`shrink-0 rounded-lg overflow-hidden border-2 transition-all ${i === idx ? "border-gold ring-1 ring-gold/40" : "border-transparent opacity-60 hover:opacity-100"}`}
            aria-label={`View ${g.label}`}
          >
            <CmsImg
              slot={g.slot}
              fallback={g.image}
              alt={g.alt}
              className="w-20 h-14 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {FAQ_ITEMS.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl border border-border bg-card overflow-hidden"
        >
          <button
            type="button"
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            aria-expanded={openIdx === i}
          >
            <span className="font-semibold text-sm">{faq.q}</span>
            <ChevronDown
              className={`size-4 shrink-0 text-muted-foreground transition-transform ${openIdx === i ? "rotate-180" : ""}`}
            />
          </button>
          {openIdx === i && (
            <div className="px-5 pb-4">
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ──────────────────────── PAGE ──────────────────────── */

export function CeramicCoatingPage() {
  const { config } = useSiteConfig();

  const getDepositUrl = (configKey: string) => {
    const url = config[configKey];
    return url || config.ceramicDepositUrl;
  };

  const bookingUrl = config["widgetUrl:header-book-now"] || config.bookingUrl || "https://book.proworxdetailing.com/book";

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Ceramic Coating — Charlotte, NC | Gyeon & IGL Certified"
        description="Gyeon & IGL certified ceramic coating in Charlotte, NC. Starting at $499 with 1-10 year protection. 50+ 5-star reviews, 12+ years experience. Reserve with 30% down."
        keywords="ceramic coating Charlotte NC, Gyeon ceramic coating, IGL ceramic coating, paint protection Charlotte, ceramic coat near me, car ceramic coating cost, best ceramic coating Charlotte, professional ceramic coating"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", position: 2, name: "Ceramic Coating", item: "https://www.proworxdetailing.com/ceramic-coating" },
              ],
            },
            {
              "@type": "Service",
              name: "Professional Ceramic Coating",
              provider: {
                "@type": "LocalBusiness",
                name: "ProWorx Mobile Detailing",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "3008 Collaroy Rd",
                  addressLocality: "Waxhaw",
                  addressRegion: "NC",
                  postalCode: "28173",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5",
                  reviewCount: "50",
                },
              },
              areaServed: "Charlotte, NC",
              description: "Professional GYEON & IGL certified ceramic coating with 1-10 year protection packages.",
              offers: {
                "@type": "AggregateOffer",
                lowPrice: "499",
                highPrice: "1599",
                priceCurrency: "USD",
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: FAQ_ITEMS.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            },
          ],
        }}
      />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg
            slot="ceramic-hero"
            fallback="/images/escalade-rear.jpg"
            alt="Cadillac Escalade ceramic coating reflections under hex lights"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            {/* Trust pills */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-semibold backdrop-blur-sm">
                <Shield className="size-3" />
                GYEON Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-semibold backdrop-blur-sm">
                <Shield className="size-3" />
                IGL Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 text-xs font-semibold backdrop-blur-sm">
                <Star className="size-3 fill-current" />
                5.0 Stars · 50+ Reviews
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-5">
              Professional <span className="text-gradient-gold">Ceramic Coating</span> in Charlotte, NC
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Not wax. Not sealant. Real ceramic protection that lasts <strong className="text-foreground">up to 10 years</strong> — backed by a GYEON manufacturer warranty. Applied by a certified installer with 12+ years of experience.
            </p>
            <p className="text-base text-gold font-semibold mb-8">
              Starting at $499 · Reserve with just 30% down
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold"
                asChild
              >
                <a href="#packages">
                  View Packages & Book <ArrowRight className="size-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10"
                asChild
              >
                <a href={config.phoneLink} onClick={trackPhoneClick}>
                  <Phone className="size-5" /> {config.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TRUST BAR ═══════════ */}
      <section className="border-y border-border bg-card/60 backdrop-blur-sm">
        <div className="container py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: <Award className="size-5 text-gold" />, label: "12+ Years", sub: "Professional Experience" },
              { icon: <Star className="size-5 text-amber-400 fill-amber-400" />, label: "5.0 Stars", sub: "50+ Verified Reviews" },
              { icon: <ShieldCheck className="size-5 text-gold" />, label: "GYEON & IGL", sub: "Certified Installer" },
              { icon: <Calendar className="size-5 text-gold" />, label: "1–10 Year", sub: "Manufacturer Warranty" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="shrink-0 size-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div>
                  <p className="font-bold text-sm leading-tight">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ GALLERY ═══════════ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Our <span className="text-gradient-gold">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Real results from real customers in Charlotte. Every vehicle below received a professional GYEON ceramic coating by ProWorx.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <GalleryCarousel />
          </div>
        </div>
      </section>

      {/* ═══════════ PACKAGES ═══════════ */}
      <section id="packages" className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Ceramic Coating <span className="text-gradient-gold">Packages</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional-grade GYEON ceramic coatings applied by a certified installer. Every package includes prep cleaning & light polish. Pricing varies by vehicle size.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PACKAGES.map((pkg) => {
              const depositUrl = getDepositUrl(pkg.configKey);
              return (
                <div
                  key={pkg.name}
                  className={`relative rounded-2xl bg-card border p-6 flex flex-col transition-shadow hover:shadow-lg ${
                    pkg.popular
                      ? "border-gold shadow-lg shadow-gold/10 ring-1 ring-gold/20"
                      : "border-border"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-full whitespace-nowrap">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-4">
                    <p className="text-gold text-xs font-bold uppercase tracking-wider mb-1">
                      {pkg.tag}
                    </p>
                    <h3 className="font-bold text-lg leading-tight">{pkg.name}</h3>
                  </div>
                  <div className="mb-5">
                    <span className="text-3xl font-black">{pkg.priceFrom}</span>
                    <span className="text-sm text-muted-foreground ml-1">starting</span>
                    <p className="text-xs text-muted-foreground mt-1">
                      30% deposit ({pkg.deposit}) to reserve
                    </p>
                  </div>
                  <ul className="space-y-2 flex-1 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full font-bold ${
                      pkg.popular
                        ? "bg-gold text-gold-foreground hover:bg-gold/90"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                    asChild
                  >
                    <a
                      href={depositUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackBookNowConversion(depositUrl)}
                    >
                      Reserve Now <ArrowRight className="size-4" />
                    </a>
                  </Button>
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8 max-w-lg mx-auto">
            30% deposit is applied to your final service total. Financing available through{" "}
            <a href={config.wisetackUrl} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
              Wisetack
            </a>{" "}
            — prequalify with no credit impact.
          </p>
        </div>
      </section>

      {/* ═══════════ WHAT'S INCLUDED ═══════════ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                What's Included in <span className="text-gradient-gold">Every Package</span>
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: <Droplets className="size-5" />,
                    title: "Prep Wash & Decontamination",
                    desc: "Full exterior wash, clay bar treatment, and iron removal to ensure a perfectly clean surface before coating.",
                  },
                  {
                    icon: <Sparkles className="size-5" />,
                    title: "Light Prep Polish",
                    desc: "A single-step machine polish to create the ideal bonding surface. This is paint prep — not correction.",
                  },
                  {
                    icon: <Shield className="size-5" />,
                    title: "Ceramic Coating Application",
                    desc: "Professional hand-applied GYEON ceramic coating, panel by panel, inspected under LED lighting for full coverage.",
                  },
                  {
                    icon: <Clock className="size-5" />,
                    title: "Proper Cure Time",
                    desc: "Every coating is given the full manufacturer-recommended cure time. No shortcuts.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="shrink-0 size-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-0.5">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Paint correction callout */}
              <div className="mt-6 rounded-xl bg-gold/5 border border-gold/20 p-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Need paint correction?</span>{" "}
                  If your vehicle has swirl marks, scratches, or oxidation, add a{" "}
                  <a href="/paint-correction" className="text-gold hover:underline font-medium">
                    paint correction
                  </a>{" "}
                  before your coating for the best result.
                </p>
              </div>
            </div>

            <CmsImg
              slot="ceramic-process"
              fallback="/images/aston-rear.jpg"
              alt="ProWorx applying ceramic coating to an Aston Martin"
              className="rounded-2xl w-full aspect-[4/3] object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICE DELIVERY ═══════════ */}
      <section className="py-12 md:py-16 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-gold/20 bg-gold/5 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="size-5 text-gold" />
                  <h3 className="font-bold text-sm">Ceramic Coating Only</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Available as mobile service or drop-off at our Waxhaw location. <span className="text-foreground font-medium">Drop-off preferred</span> for best results.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="size-5 text-gold" />
                  <h3 className="font-bold text-sm">Paint Correction + Ceramic</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-medium">Drop-off required</span> — the multi-stage paint correction process requires a controlled environment for the best finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ WHY CERAMIC COATING ═══════════ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <CmsImg
              slot="ceramic-why"
              fallback="/images/aston-front.jpg"
              alt="Ceramic coated Aston Martin showing extreme gloss"
              className="rounded-2xl w-full aspect-[4/3] object-cover shadow-xl order-2 lg:order-1"
            />
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Why <span className="text-gradient-gold">Ceramic Coating?</span>
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  { title: "Extreme Hydrophobic Protection", desc: "Water, dirt, and contaminants bead up and slide right off the surface." },
                  { title: "UV & Chemical Resistance", desc: "Shields against sun damage, bird droppings, tree sap, and road grime." },
                  { title: "Showroom Gloss & Depth", desc: "Deepens your paint color and adds a candy-like wet look that lasts." },
                  { title: "Easier Maintenance", desc: "Cuts wash time in half. Your car stays cleaner, longer between washes." },
                  { title: "GYEON Manufacturer Warranty", desc: "Real warranty from GYEON — not a detailer promise. Annual inspections keep it valid." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-sm">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold"
                asChild
              >
                <a href="#packages">
                  View Packages <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PRO VS CONSUMER ═══════════ */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                Professional vs. <span className="text-gradient-gold">DIY Ceramic</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Not all ceramic coatings are equal. Here's how professional-grade GYEON compares to the spray-on products at auto parts stores.
              </p>
            </div>
            <div className="rounded-2xl bg-card border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-bold bg-muted/50 w-[30%]">Feature</th>
                      <th className="text-left p-4 font-bold bg-gold/10 text-gold w-[35%]">
                        <div className="flex items-center gap-2">
                          <Shield className="size-4" />
                          ProWorx (Professional)
                        </div>
                      </th>
                      <th className="text-left p-4 font-bold bg-muted/50 w-[35%]">Consumer Spray-On</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRO_VS_CONSUMER.map((row) => (
                      <tr key={row.feature} className="border-b border-border/50">
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 bg-gold/5">
                          <span className="flex items-start gap-2">
                            <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />
                            {row.pro}
                          </span>
                        </td>
                        <td className="p-4 text-muted-foreground">
                          <span className="flex items-start gap-2">
                            <X className="size-4 text-muted-foreground/50 mt-0.5 shrink-0" />
                            {row.consumer}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ REVIEWS ═══════════ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              What Our <span className="text-gradient-gold">Customers Say</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <StarRating count={5} />
              <span className="text-sm font-semibold">5.0</span>
              <span className="text-sm text-muted-foreground">from 50+ reviews</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="rounded-xl border border-border bg-card p-5 flex flex-col"
              >
                <StarRating count={review.stars} />
                <p className="text-sm text-muted-foreground leading-relaxed mt-3 flex-1">
                  "{review.text}"
                </p>
                <p className="font-semibold text-sm mt-3">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CERTIFICATION BADGES ═══════════ */}
      <section className="py-12 md:py-16 bg-card/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Certified Professional Installer</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* GYEON Badge */}
              <div className="flex items-center gap-4 rounded-xl border border-gold/20 bg-gold/5 px-6 py-4">
                <div className="size-14 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center">
                  <Shield className="size-7 text-gold" />
                </div>
                <div className="text-left">
                  <p className="font-black text-lg leading-tight">GYEON</p>
                  <p className="text-xs text-muted-foreground">Certified Installer</p>
                  <p className="text-xs text-gold font-medium">Q² Professional Line</p>
                </div>
              </div>
              {/* IGL Badge */}
              <div className="flex items-center gap-4 rounded-xl border border-gold/20 bg-gold/5 px-6 py-4">
                <div className="size-14 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center">
                  <ShieldCheck className="size-7 text-gold" />
                </div>
                <div className="text-left">
                  <p className="font-black text-lg leading-tight">IGL Coatings</p>
                  <p className="text-xs text-muted-foreground">Certified Installer</p>
                  <p className="text-xs text-gold font-medium">Professional Grade</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-5 max-w-md mx-auto">
              ProWorx is trained, tested, and certified by both GYEON and IGL Coatings. Every application meets manufacturer standards.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* ═══════════ FINANCING ═══════════ */}
      <section className="py-12 md:py-16 bg-card/50">
        <div className="container">
          <div className="max-w-3xl mx-auto rounded-2xl bg-blue-600/10 border border-blue-600/20 p-7 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Buy Now, Pay Later</h2>
            <p className="text-muted-foreground mb-5 text-sm">
              Prequalify for the Wisetack credit option with no impact to your credit score.
              Flexible monthly payments on all ceramic coating packages. Subject to eligibility.
            </p>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 font-bold" asChild>
              <a href={config.wisetackUrl} target="_blank" rel="noopener noreferrer">
                Prequalify Now <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICE AREAS ═══════════ */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-center">Ceramic Coating Near You</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">We offer professional ceramic coating services across the greater Charlotte metro area.</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              { label: "Ceramic Coating Charlotte", href: "/ceramic-coating-charlotte-nc" },
              { label: "Ceramic Coating South Charlotte", href: "/ceramic-coating-south-charlotte-nc" },
              { label: "Ceramic Coating Waxhaw", href: "/waxhaw" },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:border-gold/40 hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-4 max-w-3xl mx-auto">
            {[
              { label: "Paint Correction Charlotte", href: "/paint-correction-charlotte-nc" },
              { label: "Car Detailing Charlotte", href: "/car-detailing-charlotte-nc" },
              { label: "Mobile Detailing Charlotte", href: "/mobile-detailing-charlotte-nc" },
              { label: "Boat Detailing Charlotte", href: "/boat-detailing-charlotte-nc" },
              { label: "GYEON Certified Installer", href: "/gyeon-certified-installer-charlotte" },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:border-gold/40 hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg
            slot="ceramic-cta"
            fallback="/images/ferrari-side.jpg"
            alt="Ferrari Roma ceramic coated by ProWorx"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-1.5 mb-5">
              <StarRating count={5} />
              <span className="text-sm text-muted-foreground ml-1">50+ 5-star reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to Protect Your Vehicle for <span className="text-gradient-gold">Years to Come?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Reserve your spot with just 30% down. Free consultation available — we'll inspect your paint and recommend the ideal package.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold"
                asChild
              >
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackBookNowConversion(bookingUrl)}
                >
                  Book Now <ArrowRight className="size-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10"
                asChild
              >
                <a href={config.phoneLink} onClick={trackPhoneClick}>
                  <Phone className="size-5" /> Free Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
