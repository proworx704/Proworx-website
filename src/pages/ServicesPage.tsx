import { ArrowRight, CheckCircle2, Clock, Droplets, Gift, Phone, Shield, Sparkles, Truck } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookNowLink } from "@/components/BookNowLink";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig, useServices } from "@/hooks/useCms";
import { INSIDE_OUT_LINKS, INTERIOR_LINKS, EXTERIOR_LINKS } from "@/lib/paymentLinks";

/* ── Small row for an add-on service from CMS ──────────────────────────── */
function ServiceRow({ service }: { service: { name: string; description: string; price: string; duration: string } }) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-border/50 last:border-0">
      <div className="flex-1">
        <h4 className="font-semibold text-sm mb-0.5">{service.name}</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
      </div>
      <div className="text-right shrink-0">
        <p className="font-bold text-gold text-sm">{service.price}</p>
        <p className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
          <Clock className="size-3" />{service.duration}
        </p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   DATA — 3 base packages, pricing at $90/hr with current durations
   ══════════════════════════════════════════════════════════════════════════ */

const BASE_PACKAGES = [
  {
    key: "inside-out",
    name: "Inside & Out",
    slug: "standard-inside-out",
    tagline: "The Full Reset",
    description:
      "A complete interior and exterior detail in one appointment — the go-to choice for a full vehicle refresh.",
    features: [
      "Full interior vacuum (carpets, seats, crevices)",
      "Wipe-down of all interior surfaces",
      "Interior glass cleaning",
      "Hand wash with foam pre-treatment",
      "Wheels & tires cleaned and dressed",
      "Exterior glass cleaned",
      "Light spray wax & tire shine",
    ],
    priceTiers: [
      { label: "Sedan / Coupe", duration: "2 hr 30 min", price: "$258" },
      { label: "Small SUV / Truck", duration: "3 hrs", price: "$310" },
      { label: "Large SUV / Off-Road Truck", duration: "3 hr 30 min", price: "$361" },
      { label: "Van", duration: "4 hrs", price: "$413" },
    ],
    notes: [
      "Pet Hair Fee: Additional time charged at base rate.",
      "Condition: Extra time/cost may apply for neglected vehicles.",
    ],
    highlight: true,
    financeLinks: INSIDE_OUT_LINKS,
    photoSlot: "services-standard",
    photoFallback: "/images/full-insideout.jpg",
    imageAlt: "Ferrari Roma full inside & out detail by ProWorx",
    videoSrc: "/videos/ceramic-hero-bg.mp4",
    videoPoster: "/images/full-insideout.jpg",
  },
  {
    key: "interior",
    name: "Interior Only",
    slug: "standard-interior",
    tagline: "Deep Interior Clean",
    description:
      "A comprehensive interior reset — perfect for daily-driven vehicles that need a thorough clean inside without the exterior detail.",
    features: [
      "Full interior vacuum (carpets, seats, crevices)",
      "Wipe-down of all interior surfaces",
      "Door panels, cupholders, center console & vents",
      "Interior glass cleaning",
      "Light stain treatment (as applicable)",
    ],
    priceTiers: [
      { label: "Sedan / Coupe", duration: "1 hr 45 min", price: "$181" },
      { label: "Small SUV / Truck", duration: "2 hrs", price: "$207" },
      { label: "Large SUV / Off-Road Truck", duration: "2 hr 30 min", price: "$258" },
      { label: "Van", duration: "3 hrs", price: "$310" },
    ],
    notes: [
      "Pet Hair Fee: Additional time charged at base rate.",
      "Condition: Extra time/cost may apply for neglected vehicles.",
    ],
    highlight: false,
    financeLinks: INTERIOR_LINKS,
    photoSlot: "services-interior",
    photoFallback: "/images/rangerover-interior.jpg",
    imageAlt: "Interior detail by ProWorx",
  },
  {
    key: "exterior",
    name: "Exterior Only",
    slug: "standard-exterior",
    tagline: "Professional Exterior Refresh",
    description:
      "A professional exterior hand wash and protection service — ideal for well-maintained vehicles that need a quality exterior refresh.",
    features: [
      "Hand wash with foam pre-treatment",
      "Wheels & tires cleaned and dressed",
      "Exterior glass cleaned",
      "Light spray wax for shine & short-term protection",
    ],
    priceTiers: [
      { label: "Sedan / Coupe", duration: "1 hr 15 min", price: "$130" },
      { label: "Small SUV / Truck", duration: "1 hr 30 min", price: "$155" },
      { label: "Large SUV / Off-Road Truck", duration: "1 hr 45 min", price: "$181" },
      { label: "Van", duration: "2 hrs", price: "$207" },
    ],
    notes: ["Condition: Extra time/cost may apply for neglected vehicles."],
    highlight: false,
    financeLinks: EXTERIOR_LINKS,
    photoSlot: "services-exterior",
    photoFallback: "/images/porsche-foam.jpg",
    imageAlt: "White Porsche covered in foam — exterior detail by ProWorx",
  },
];

/* ══════════════════════════════════════════════════════════════════════════ */

export function ServicesPage() {
  const { config } = useSiteConfig();
  const { services } = useServices();

  const interiorPackages = services?.interiorPackages ?? [];
  const interiorAddons = services?.interiorAddons ?? [];
  const exteriorPackages = services?.exteriorPackages ?? [];
  const exteriorAddons = services?.exteriorAddons ?? [];
  const ceramicAddons = services?.ceramicAddons ?? [];

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Auto Detailing Services & Pricing — Charlotte, NC"
        description="Mobile auto detailing in Charlotte, NC. Inside & Out, Interior Only, and Exterior Only packages with customizable add-ons. Ceramic coating, paint correction & monthly plans available."
        keywords="auto detailing services Charlotte NC, mobile detailing pricing, car interior cleaning Charlotte, exterior detail Waxhaw NC, mobile car wash pricing near me, paint correction packages Charlotte, ceramic coating Charlotte NC, auto detailing packages, car detail cost Charlotte"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", position: 2, name: "Services & Pricing", item: "https://www.proworxdetailing.com/services" },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What auto detailing services does ProWorx offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "ProWorx offers three core detailing packages — Inside & Out, Interior Only, and Exterior Only — each customizable with standard and ceramic add-ons. We also offer paint correction, ceramic coating, fleet detailing, boat detailing, and monthly maintenance plans. All services are mobile — we come to your location in Charlotte, NC and surrounding areas including Waxhaw, Matthews, Indian Trail, and Ballantyne.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does a full detail cost in Charlotte NC?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A full Inside & Out detail starts at $258 for a Sedan and goes up to $413 for a Van. Interior Only starts at $181 and Exterior Only starts at $130. Add-ons like hot water extraction, clay bar, ceramic protection, and headlight restoration are available to customize any package. SUV, truck, and van pricing available on our services page.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I customize my detail package?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! Start with any base package and add standard add-ons (hot water extraction, steam cleaning, headlight restoration, clay bar, odor removal) or ceramic add-ons (fabric protection, GYEON leather shield, ceramic tire dressing, plastic & trim ceramic, 12-month ceramic wax) to build the perfect package for your vehicle.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer monthly detailing plans?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! We offer monthly maintenance plans with multiple tiers and billing frequencies. Plans include scheduled mobile service and can be canceled anytime. Visit our Maintenance page for full details.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What areas do you serve for mobile detailing?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "ProWorx Mobile Detailing serves Charlotte, NC and the surrounding areas including Waxhaw, Matthews, Indian Trail, Mint Hill, Pineville, Monroe, Ballantyne, Huntersville, Concord, Lake Norman, and Fort Mill, SC. We bring all equipment and water to your location.",
                  },
                },
              ],
            },
          ],
        }}
      />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg
            slot="services-hero"
            fallback="/images/corvette-front.jpg"
            alt="Black Corvette ZR1 showcasing a flawless mirror finish after professional detailing by ProWorx"
            className="w-full h-full object-cover"
            loading="eager"
            focalY={25}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Our <span className="text-gradient-gold">Detailing Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Simple, transparent detailing. Pick your base package, add what you want, and we'll handle the rest — all mobile, at your location.
            </p>
            <p className="text-base text-muted-foreground/80 leading-relaxed mb-8">
              Like ordering at a restaurant — choose your entrée, then add the toppings that make it yours.
            </p>
            <Button size="lg" className="bg-gold-dark text-gold-foreground hover:bg-gold-dark/90 h-13 px-8 text-base font-bold" asChild>
              <BookNowLink href={config["widgetUrl:homepage-cta"] || config.bookingUrlAddOns || undefined}>
                Build Your Package <ArrowRight className="size-5" />
              </BookNowLink>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════ FIRST-TIME CUSTOMER PROMO ═══════════ */}
      <section className="py-0">
        <div className="container">
          <div className="-mt-8 relative z-10 max-w-3xl mx-auto rounded-2xl border-2 border-gold/40 bg-gradient-to-r from-card to-card/80 backdrop-blur p-6 shadow-lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="size-12 rounded-xl bg-gold/20 text-gold flex items-center justify-center shrink-0">
                  <Gift className="size-6" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">First-Time Customer?</h2>
                  <p className="text-sm text-muted-foreground">
                    Get <span className="text-gold font-bold">10% off</span> your first standard detail service — applied at checkout after your service is completed.
                  </p>
                </div>
              </div>
              <Button className="bg-gold-dark text-gold-foreground hover:bg-gold-dark/90 font-bold shrink-0" size="lg" asChild>
                <BookNowLink href={config["widgetUrl:homepage-cta"] || config.bookingUrlAddOns || undefined}>
                  Book Now <ArrowRight className="size-5" />
                </BookNowLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <section className="py-14 md:py-16 bg-card/50 border-b border-border/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">How It Works</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Three Simple Steps</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Choose Your Base",
                  desc: "Pick Inside & Out, Interior Only, or Exterior Only based on what your vehicle needs.",
                },
                {
                  step: "2",
                  title: "Add Your Extras",
                  desc: "Customize with standard add-ons like shampoo or clay bar, or go further with ceramic protection upgrades.",
                },
                {
                  step: "3",
                  title: "We Come to You",
                  desc: "Book your appointment and we'll arrive fully equipped — water, power, and professional-grade products.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="size-12 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center text-gold font-black text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ BASE PACKAGES ═══════════ */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Choose Your Base</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Core Detail Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Every package includes a final quality inspection. Start with your base, then add extras to customize.
            </p>
          </div>

          <div className="space-y-20">
            {BASE_PACKAGES.map((pkg, idx) => (
              <div key={pkg.key} className="max-w-6xl mx-auto">
                {/* Media */}
                <div className="mb-8">
                  {pkg.videoSrc ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={pkg.videoPoster}
                      className="rounded-2xl w-full aspect-[21/9] object-cover shadow-xl"
                    >
                      <source src={pkg.videoSrc} type="video/mp4" />
                      <track kind="captions" />
                    </video>
                  ) : (
                    <CmsImg
                      slot={pkg.photoSlot}
                      fallback={pkg.photoFallback}
                      alt={pkg.imageAlt}
                      className="rounded-2xl w-full aspect-[21/9] object-cover shadow-xl"
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`rounded-2xl border p-8 md:p-10 ${
                    pkg.highlight
                      ? "border-gold shadow-lg shadow-gold/10 bg-card"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left — Info */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold">{pkg.name}</h3>
                        {pkg.highlight && (
                          <span className="px-3 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-full">
                            Most Popular
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">{pkg.description}</p>

                      <p className="text-xs font-bold text-gold uppercase tracking-widest mb-3">What's Included</p>
                      <ul className="space-y-2 mb-6">
                        {pkg.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      {pkg.notes.length > 0 && (
                        <div className="mb-6">
                          {pkg.notes.map((note) => (
                            <p key={note} className="text-xs text-muted-foreground italic mb-1">
                              {note}
                            </p>
                          ))}
                        </div>
                      )}

                      <Button
                        className={
                          pkg.highlight
                            ? "bg-gold-dark text-gold-foreground hover:bg-gold-dark/90 font-bold"
                            : "bg-muted text-foreground hover:bg-muted/80 font-semibold"
                        }
                        asChild
                      >
                        <BookNowLink
                          href={
                            config[`widgetUrl:${pkg.slug}`] ||
                            config["widgetUrl:homepage-cta"] ||
                            undefined
                          }
                        >
                          Book {pkg.name} <ArrowRight className="size-4" />
                        </BookNowLink>
                      </Button>
                    </div>

                    {/* Right — Pricing */}
                    <div className="rounded-xl bg-muted/50 border border-border/50 p-6 flex flex-col justify-center">
                      <p className="text-xs font-bold text-gold uppercase tracking-widest mb-4">
                        Pricing by Vehicle Size
                      </p>
                      {pkg.priceTiers.map((t) => {
                        const finUrl = pkg.financeLinks?.[t.label];
                        return (
                        <div
                          key={t.label}
                          className="flex items-center justify-between py-3 border-b border-border/30 last:border-0"
                        >
                          <div>
                            <p className="text-sm font-medium">{t.label}</p>
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="size-3" />
                              {t.duration}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <p className="font-bold text-gold text-lg">{t.price}</p>
                            {finUrl && (
                              <a
                                href={finUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-semibold hover:bg-blue-600/20 transition-colors whitespace-nowrap"
                              >
                                💳 Finance
                              </a>
                            )}
                          </div>
                        </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ADD-ONS (The Toppings) ═══════════ */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Customize Your Detail</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Add-On Options</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Add any of these to your base package for the ultimate custom detail.
              </p>
            </div>

            {/* Hot Water Extraction highlight */}
            <div className="rounded-2xl bg-card border border-gold/30 p-6 mb-8 max-w-2xl mx-auto text-center">
              <div className="size-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold mx-auto mb-3">
                <Droplets className="size-5" />
              </div>
              <h3 className="font-bold text-lg mb-1">Hot Water Extraction / Shampoo</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Deep clean seats & all carpeted areas with professional hot water extraction.
              </p>
              <p className="font-bold text-gold text-xl">$100</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Interior add-ons */}
              <div className="rounded-2xl bg-card border border-border p-5">
                <p className="text-xs font-bold text-gold uppercase tracking-widest mb-4">Standard Interior Add-ons</p>
                {[...interiorPackages, ...interiorAddons].map((s) => (
                  <ServiceRow key={s._id} service={s} />
                ))}
              </div>
              {/* Exterior add-ons */}
              <div className="rounded-2xl bg-card border border-border p-5">
                <p className="text-xs font-bold text-gold uppercase tracking-widest mb-4">Standard Exterior Add-ons</p>
                {[...exteriorPackages, ...exteriorAddons].map((s) => (
                  <ServiceRow key={s._id} service={s} />
                ))}
              </div>
              {/* Ceramic add-ons */}
              <div className="rounded-2xl bg-card border border-border p-5 md:col-span-2 lg:col-span-1">
                <p className="text-xs font-bold text-gold uppercase tracking-widest mb-4">Ceramic Add-ons</p>
                {ceramicAddons.map((s) => (
                  <ServiceRow key={s._id} service={s} />
                ))}
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button className="bg-gold-dark text-gold-foreground hover:bg-gold-dark/90 font-bold" asChild>
                <BookNowLink href={config["widgetUrl:homepage-cta"] || config.bookingUrlAddOns || undefined}>
                  Build Your Package <ArrowRight className="size-4" />
                </BookNowLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SPECIALTY SERVICES ═══════════ */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Specialty</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Specialty Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Sparkles className="size-6" />,
                title: "Paint Correction",
                desc: "Remove swirls, scratches & oxidation",
                link: "/paint-correction",
                slot: "card-paint",
                fallback: "/images/corvette-rear.jpg",
              },
              {
                icon: <Shield className="size-6" />,
                title: "Ceramic Coating",
                desc: "GYEON certified, up to lifetime protection",
                link: "/ceramic-coating",
                slot: "card-ceramic",
                fallback: "/images/escalade-rear.jpg",
              },
              {
                icon: <Truck className="size-6" />,
                title: "Fleet Detailing",
                desc: "Volume pricing for business vehicles",
                link: "/fleet",
                slot: "fleet-hero",
                fallback: "/images/aston-rear.jpg",
              },
            ].map((s) => (
              <Link key={s.title} to={s.link}>
                <div className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-gold/30 transition-all h-full">
                  <div className="relative h-40 overflow-hidden">
                    <CmsImg
                      slot={s.slot}
                      fallback={s.fallback}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="size-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-3">
                      {s.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm">{s.desc}</p>
                    <div className="mt-3 text-gold text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More <ArrowRight className="size-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ MAINTENANCE CTA ═══════════ */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <div className="size-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mx-auto mb-6">
              <Shield className="size-7" />
            </div>
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Stay Protected</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Keep Your Vehicle Looking Its Best</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Regular maintenance keeps your paint protected, your interior fresh, and your vehicle's value intact. Explore
              our monthly plans designed to fit your schedule and budget.
            </p>
            <Button
              size="lg"
              className="bg-gold-dark text-gold-foreground hover:bg-gold-dark/90 h-13 px-8 text-base font-bold"
              asChild
            >
              <Link to="/maintenance">
                View Maintenance Plans <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICE AREAS ═══════════ */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-center">Detailing Services Near You</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
            We bring our full detailing setup to you across the Charlotte metro area.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              { label: "Car Detailing Charlotte NC", href: "/car-detailing-charlotte-nc" },
              { label: "Mobile Detailing Charlotte NC", href: "/mobile-detailing-charlotte-nc" },
              { label: "Ceramic Coating Charlotte NC", href: "/ceramic-coating-charlotte-nc" },
              { label: "Paint Correction Charlotte NC", href: "/paint-correction-charlotte-nc" },
              { label: "Boat Detailing Charlotte NC", href: "/boat-detailing-charlotte-nc" },
              { label: "Ceramic Coating Waxhaw NC", href: "/waxhaw" },
              { label: "Ceramic Coating South Charlotte NC", href: "/ceramic-coating-south-charlotte-nc" },
              { label: "Mobile Detailing Cost", href: "/mobile-detailing-cost" },
              { label: "GYEON Certified Charlotte", href: "/gyeon-certified-installer-charlotte" },
              { label: "Ceramic Coating vs Wax", href: "/ceramic-coating-vs-wax" },
              { label: "All Service Areas", href: "/areas" },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:border-gold/40 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="py-20 md:py-28">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">Ready to Get Started?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Pick your base package, add what you want, and book — it's that simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gold-dark text-gold-foreground hover:bg-gold-dark/90 h-13 px-8 text-base font-bold"
              asChild
            >
              <BookNowLink href={config["widgetUrl:homepage-cta"] || config.bookingUrlAddOns || undefined}>
                Build Your Package <ArrowRight className="size-5" />
              </BookNowLink>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10"
              asChild
            >
              <a href={config.phoneLink}>
                <Phone className="size-5" /> {config.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
