import { ArrowRight, CheckCircle2, Clock, Droplets, Phone, Shield, Sparkles, Truck } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookNowLink } from "@/components/BookNowLink";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig, useServices, useMemberships } from "@/hooks/useCms";

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

/* ── Tier card used in the side-by-side package sections ────────────────── */
function TierCard({
  tier,
  highlight,
  bookLabel,
  bookHref,
  config,
}: {
  tier: {
    name: string;
    slug?: string;
    badge?: string;
    description: string;
    features: string[];
    priceTiers: { label: string; duration: string; price: string }[];
    notes?: string[];
  };
  highlight?: boolean;
  bookLabel: string;
  bookHref?: string;
  config?: Record<string, string>;
}) {
  // Per-service widget URL takes priority over section-level bookHref
  const resolvedHref = (tier.slug && config?.[`widgetUrl:${tier.slug}`]) || bookHref;
  return (
    <div className={`rounded-2xl bg-card border p-6 flex flex-col relative ${highlight ? "border-gold shadow-lg shadow-gold/10" : "border-border"}`}>
      {tier.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-full whitespace-nowrap">
          {tier.badge}
        </div>
      )}
      <h3 className="font-bold text-xl mb-2">{tier.name}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tier.description}</p>

      {/* What's Included */}
      <div className="mb-4">
        <p className="text-xs font-bold text-gold uppercase tracking-widest mb-2">What's Included</p>
        <ul className="space-y-1.5">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="size-3.5 text-gold mt-0.5 shrink-0" />{f}
            </li>
          ))}
        </ul>
      </div>

      {/* Pricing by vehicle */}
      <div className="rounded-xl bg-muted/50 border border-border/50 p-3 mb-4 flex-1">
        <p className="text-xs font-bold text-gold uppercase tracking-widest mb-2">Pricing</p>
        {tier.priceTiers.map((t) => (
          <div key={t.label} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
            <div>
              <p className="text-sm font-medium">{t.label}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="size-3" />{t.duration}</p>
            </div>
            <p className="font-bold text-gold">{t.price}</p>
          </div>
        ))}
      </div>

      {/* Notes */}
      {tier.notes && tier.notes.length > 0 && (
        <div className="mb-4">
          {tier.notes.map((note) => (
            <p key={note} className="text-xs text-muted-foreground italic mb-1">{note}</p>
          ))}
        </div>
      )}

      <Button className={highlight ? "bg-gold text-gold-foreground hover:bg-gold/90 font-bold" : "bg-muted text-foreground hover:bg-muted/80 font-semibold"} asChild>
        <BookNowLink href={resolvedHref}>{bookLabel} <ArrowRight className="size-4" /></BookNowLink>
      </Button>
    </div>
  );
}

/* ── Side-by-side tiered section for a service category ─────────────────── */
function TieredPackageSection({
  categoryLabel,
  tiers,
  bookLabel,
  bookHref,
  photoSlot,
  photoFallback,
  imageAlt,
  config,
}: {
  categoryLabel: string;
  tiers: {
    name: string;
    slug?: string;
    badge?: string;
    description: string;
    features: string[];
    priceTiers: { label: string; duration: string; price: string }[];
    notes?: string[];
    highlight?: boolean;
  }[];
  bookLabel: string;
  bookHref?: string;
  photoSlot: string;
  photoFallback: string;
  imageAlt: string;
  config?: Record<string, string>;
}) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">{categoryLabel}</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Choose Your Level</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Every tier includes a final quality inspection. Upgrade for enhanced protection and deeper cleaning.</p>
      </div>

      {/* Image */}
      <div className="mb-10">
        <CmsImg slot={photoSlot} fallback={photoFallback} alt={imageAlt} className="rounded-2xl w-full aspect-[21/9] object-cover shadow-xl" loading="eager" />
      </div>

      {/* Tier cards grid */}
      <div className={`grid gap-6 ${tiers.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : tiers.length === 3 ? "md:grid-cols-3" : tiers.length === 2 ? "md:grid-cols-2 max-w-4xl mx-auto" : ""}`}>
        {tiers.map((tier) => (
          <TierCard
            key={tier.name}
            tier={tier}
            highlight={tier.highlight}
            bookLabel={bookLabel}
            bookHref={bookHref}
            config={config}
          />
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */

export function ServicesPage() {
  const { config } = useSiteConfig();
  const { services } = useServices();
  const { memberships } = useMemberships();

  const interiorPackages = services?.interiorPackages ?? [];
  const interiorAddons = services?.interiorAddons ?? [];
  const exteriorPackages = services?.exteriorPackages ?? [];
  const exteriorAddons = services?.exteriorAddons ?? [];
  const ceramicAddons = services?.ceramicAddons ?? [];

  /* ── Inside & Out tiers (4 tiers) ────────────────────────────────────── */
  const insideOutTiers = [
    {
      name: "Standard Inside & Out",
      slug: "standard-inside-out",
      badge: "Best Value",
      description: "A full-vehicle refresh combining interior and exterior services into one streamlined appointment.",
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
        { label: "Sedan", duration: "2 hr 30 min", price: "$258" },
        { label: "Small SUV / Small Truck", duration: "3 hrs", price: "$309" },
        { label: "Large SUV / Off-Road Truck", duration: "3 hr 30 min", price: "$361" },
        { label: "Van", duration: "4 hrs", price: "$412" },
      ],
      notes: ["Pet Hair Fee: Additional time charged at base rate.", "Condition: Extra time/cost may apply for neglected vehicles."],
    },
    {
      name: "Elite Inside & Out — Ceramic",
      slug: "elite-inside-out",
      badge: "Best Protection",
      highlight: true,
      description: "Standard Inside & Out plus ceramic protection products bundled at 15% off — the ultimate long-lasting shield for interior and exterior.",
      features: [
        "Everything in Standard, plus:",
        "Fabric protection / weather guard",
        "GYEON leather shield",
        "Ceramic tire dressing",
        "Plastic & trim ceramic coating",
        "12-month ceramic wax",
      ],
      priceTiers: [
        { label: "Sedan", duration: "5 hr 15 min", price: "$581" },
        { label: "Small SUV / Small Truck", duration: "5 hr 45 min", price: "$632" },
        { label: "Large SUV / Off-Road Truck", duration: "6 hr 15 min", price: "$684" },
        { label: "Van", duration: "6 hr 45 min", price: "$735" },
      ],
      notes: ["Ceramic protection bundled at 15% off.", "Pet Hair Fee: Additional time charged at base rate."],
    },
  ];

  /* ── Interior Only tiers (3 tiers) ──────────────────────────────────── */
  const interiorTiers = [
    {
      name: "Standard Interior",
      slug: "standard-interior",
      badge: "Best Value",
      description: "A comprehensive interior reset for daily-driven vehicles, restoring cleanliness without heavy restoration services.",
      features: [
        "Full interior vacuum (carpets, seats, crevices)",
        "Wipe-down of all interior surfaces",
        "Door panels, cupholders, center console & vents",
        "Interior glass cleaning",
        "Light stain treatment (as applicable)",
      ],
      priceTiers: [
        { label: "Sedan", duration: "1 hr 45 min", price: "$181" },
        { label: "Small SUV / Small Truck", duration: "2 hrs", price: "$206" },
        { label: "Large SUV / Off-Road Truck", duration: "2 hr 30 min", price: "$258" },
        { label: "Van", duration: "3 hrs", price: "$309" },
      ],
      notes: ["Pet Hair Fee: Additional time charged at base rate.", "Condition: Extra time/cost may apply for neglected vehicles."],
    },
    {
      name: "Ceramic Interior Only",
      slug: "ceramic-interior",
      badge: "Best Protection",
      highlight: true,
      description: "Standard Interior plus ceramic interior protection products bundled at 15% off — advanced fabric and leather shield.",
      features: [
        "Everything in Standard Interior, plus:",
        "Fabric protection / weather guard",
        "GYEON leather shield",
      ],
      priceTiers: [
        { label: "Sedan", duration: "2 hr 15 min", price: "$300" },
        { label: "Small SUV / Small Truck", duration: "2 hr 30 min", price: "$325" },
        { label: "Large SUV / Off-Road Truck", duration: "3 hrs", price: "$377" },
        { label: "Van", duration: "3 hr 30 min", price: "$428" },
      ],
      notes: ["Ceramic protection bundled at 15% off.", "Pet Hair Fee: Additional time charged at base rate."],
    },
  ];

  /* ── Exterior Only tiers (3 tiers) ──────────────────────────────────── */
  const exteriorTiers = [
    {
      name: "Standard Exterior",
      slug: "standard-exterior",
      badge: "Best Value",
      description: "Designed for well-maintained vehicles that need a professional exterior refresh and protection.",
      features: [
        "Hand wash with foam pre-treatment",
        "Wheels & tires cleaned and dressed",
        "Exterior glass cleaned",
        "Light spray wax for shine & short-term protection",
      ],
      priceTiers: [
        { label: "Sedan", duration: "1 hr 15 min", price: "$129" },
        { label: "Small SUV / Small Truck", duration: "1 hr 30 min", price: "$155" },
        { label: "Large SUV / Off-Road Truck", duration: "1 hr 45 min", price: "$181" },
        { label: "Van", duration: "2 hrs", price: "$206" },
      ],
      notes: ["Condition: Extra time/cost may apply for neglected vehicles."],
    },
    {
      name: "Ceramic Exterior Only",
      slug: "ceramic-exterior",
      badge: "Best Protection",
      highlight: true,
      description: "Standard Exterior plus ceramic exterior protection products bundled at 15% off — the ultimate long-lasting exterior shield.",
      features: [
        "Everything in Standard Exterior, plus:",
        "Ceramic tire dressing",
        "Plastic & trim ceramic coating",
        "12-month ceramic wax",
      ],
      priceTiers: [
        { label: "Sedan", duration: "3 hr 30 min", price: "$333" },
        { label: "Small SUV / Small Truck", duration: "3 hr 45 min", price: "$359" },
        { label: "Large SUV / Off-Road Truck", duration: "4 hrs", price: "$385" },
        { label: "Van", duration: "4 hr 15 min", price: "$410" },
      ],
      notes: ["Ceramic protection bundled at 15% off.", "Condition: Extra time/cost may apply for neglected vehicles."],
    },
  ];

  // Map membership key → siteConfig subscribe URL key
  const subscribeKeyMap: Record<string, string> = {
    clean: "subscribeUrl:membership-exterior",
    shield: "subscribeUrl:membership-interior",
    armor: "subscribeUrl:membership-full",
    ceramic: "subscribeUrl:membership-ceramic",
  };

  // Build membership plan display data
  const membershipPlans = (memberships ?? []).map((m) => ({
    ...m,
    url: config[subscribeKeyMap[m.key] ?? ""] || m.url,
    icon: m.key === "clean" ? <Droplets className="size-6" /> : m.key === "shield" ? <Shield className="size-6" /> : <Sparkles className="size-6" />,
  }));

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Auto Detailing Services & Pricing — Charlotte, NC"
        description="Mobile auto detailing in Charlotte, NC. Interior, exterior & full detail packages from $129. Ceramic coating, paint correction & monthly plans."
        keywords="auto detailing services Charlotte NC, mobile detailing pricing, car interior cleaning Charlotte, exterior detail Waxhaw NC, mobile car wash pricing near me, paint correction packages Charlotte, ceramic coating Charlotte NC, auto detailing packages, car detail cost Charlotte"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Services & Pricing", "item": "https://www.proworxdetailing.com/services" }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What auto detailing services does ProWorx offer?", "acceptedAnswer": { "@type": "Answer", "text": "ProWorx offers Standard and Ceramic tiers for inside & out, interior-only, and exterior-only detailing, plus paint correction, ceramic coating, fleet detailing, boat detailing, and monthly maintenance plans. All services are mobile — we come to your location in Charlotte, NC and surrounding areas including Waxhaw, Matthews, Indian Trail, and Ballantyne." }},
                { "@type": "Question", "name": "How much does a full detail cost in Charlotte NC?", "acceptedAnswer": { "@type": "Answer", "text": "Standard Inside & Out starts at $258 (Sedan) and includes full interior vacuum, surface wipe-down, hand wash, wheels & tires, and spray wax. Our Elite Ceramic Inside & Out package starts at $581 with ceramic protection bundled at 15% off — including fabric protection, GYEON Leather Shield, ceramic tire dressing, plastic & trim ceramic, and 12-month ceramic wax. Add-ons like clay bar, shampooing, and steam cleaning are available on any package. SUV and Van pricing available on our services page." }},
                { "@type": "Question", "name": "Do you offer monthly detailing plans?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer five monthly maintenance plans: Exterior Only ($60.77/mo), Interior Only ($101.75/mo), Full Inside & Out ($163.25/mo with ceramic protection), Ceramic Exterior ($102.79/mo), and Ceramic Inside & Out ($184.76/mo). All plans include scheduled service and can be canceled anytime." }},
                { "@type": "Question", "name": "What areas do you serve for mobile detailing?", "acceptedAnswer": { "@type": "Answer", "text": "ProWorx Mobile Detailing serves Charlotte, NC and the surrounding areas including Waxhaw, Matthews, Indian Trail, Mint Hill, Pineville, Monroe, Ballantyne, Huntersville, Concord, Lake Norman, and Fort Mill, SC. We bring all equipment and water to your location." }},
                { "@type": "Question", "name": "What is the difference between Standard and Ceramic detailing?", "acceptedAnswer": { "@type": "Answer", "text": "Standard covers the essentials: vacuum, wipe-down, hand wash, and spray wax with add-ons available at regular price. Ceramic packages bundle ceramic protection products at 15% off — fabric protection, GYEON leather shield, ceramic tire dressing, plastic & trim ceramic, and 12-month ceramic wax. Add-ons like clay bar, shampooing, steam cleaning, and headlight restoration can be added to any package." }}
              ]
            }
          ]
        }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="services-hero" fallback="/images/corvette-front.jpg" alt="Black Corvette ZR1 showcasing a flawless mirror finish after professional detailing by ProWorx" className="w-full h-full object-cover" loading="eager" focalY={25} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Our <span className="text-gradient-gold">Detailing Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              From quick maintenance washes to full paint corrections and ceramic coatings — we offer a complete range of professional detailing services, all mobile.
            </p>
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
              <BookNowLink href={config["widgetUrl:homepage-cta"] || config.bookingUrlAddOns || undefined}>Build Your Package <ArrowRight className="size-5" /></BookNowLink>
            </Button>
          </div>
        </div>
      </section>

      {/* 1. Inside & Out — Standard / Elite Ceramic */}
      <section className="py-20 md:py-28">
        <div className="container">
          <TieredPackageSection
            categoryLabel="Full Service"
            tiers={insideOutTiers}
            bookLabel="Book Inside & Out"
            bookHref={config.bookingUrlFullDetail || undefined}
            photoSlot="services-standard"
            photoFallback="/images/full-insideout.jpg"
            imageAlt="Ferrari Roma full inside & out detail by ProWorx with van on-site"
            config={config}
          />
        </div>
      </section>

      {/* 2. Interior Only — Standard / Ceramic */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <TieredPackageSection
            categoryLabel="Interior Only"
            tiers={interiorTiers}
            bookLabel="Book Interior Detail"
            bookHref={config.bookingUrlInterior || undefined}
            photoSlot="services-interior"
            photoFallback="/images/rangerover-interior.jpg"
            imageAlt="Interior detail by ProWorx"
            config={config}
          />
        </div>
      </section>

      {/* 3. Exterior Only — Standard / Ceramic */}
      <section className="py-20 md:py-28">
        <div className="container">
          <TieredPackageSection
            categoryLabel="Exterior Only"
            tiers={exteriorTiers}
            bookLabel="Book Exterior Detail"
            bookHref={config.bookingUrlExterior || undefined}
            photoSlot="services-exterior"
            photoFallback="/images/porsche-foam.jpg"
            imageAlt="White Porsche covered in foam — exterior detail by ProWorx"
            config={config}
          />
        </div>
      </section>

      {/* 4. Add-On Options */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Customize Your Detail</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Add-On Options</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Enhance any service with these add-ons for the ultimate finish.</p>
            </div>

            {/* Hot Water Extraction highlight */}
            <div className="rounded-2xl bg-card border border-gold/30 p-6 mb-8 max-w-2xl mx-auto text-center">
              <div className="size-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold mx-auto mb-3">
                <Droplets className="size-5" />
              </div>
              <h3 className="font-bold text-lg mb-1">Hot Water Extraction / Shampoo</h3>
              <p className="text-sm text-muted-foreground mb-2">Deep clean seats & all carpeted areas with professional hot water extraction.</p>
              <p className="font-bold text-gold text-xl">$100</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Interior add-ons */}
              <div className="rounded-2xl bg-card border border-border p-5">
                <p className="text-xs font-bold text-gold uppercase tracking-widest mb-4">Interior Add-ons</p>
                {[...interiorPackages, ...interiorAddons].map((s) => <ServiceRow key={s._id} service={s} />)}
              </div>
              {/* Exterior add-ons */}
              <div className="rounded-2xl bg-card border border-border p-5">
                <p className="text-xs font-bold text-gold uppercase tracking-widest mb-4">Exterior Add-ons</p>
                {[...exteriorPackages, ...exteriorAddons].map((s) => <ServiceRow key={s._id} service={s} />)}
              </div>
              <div className="rounded-2xl bg-card border border-border p-5 md:col-span-2 lg:col-span-1">
                <p className="text-xs font-bold text-gold uppercase tracking-widest mb-4">Ceramic Add-ons</p>
                {ceramicAddons.map((s) => <ServiceRow key={s._id} service={s} />)}
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold" asChild>
                <BookNowLink href={config["widgetUrl:homepage-cta"] || config.bookingUrlAddOns || undefined}>Build Your Package <ArrowRight className="size-4" /></BookNowLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Specialty</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Specialty Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Sparkles className="size-6" />, title: "Paint Correction", desc: "Remove swirls, scratches & oxidation", link: "/paint-correction", slot: "card-paint", fallback: "/images/corvette-rear.jpg" },
              { icon: <Shield className="size-6" />, title: "Ceramic Coating", desc: "GYEON certified, up to 10-year protection", link: "/ceramic-coating", slot: "card-ceramic", fallback: "/images/escalade-rear.jpg" },
              { icon: <Truck className="size-6" />, title: "Fleet Detailing", desc: "Volume pricing for business vehicles", link: "/fleet", slot: "fleet-hero", fallback: "/images/fleet-real.jpg" },
            ].map((s) => (
              <Link key={s.title} to={s.link}>
                <div className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-gold/30 transition-all h-full">
                  <div className="relative h-40 overflow-hidden">
                    <CmsImg slot={s.slot} fallback={s.fallback} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="size-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-3">{s.icon}</div>
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

      {/* Membership Plans */}
      <section id="memberships" className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Memberships</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Monthly Detailing Plans</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Keep your vehicle looking its best year-round. Cancel anytime.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {membershipPlans.map((plan) => (
              <div key={plan._id} className={`rounded-2xl bg-card border p-7 flex flex-col relative ${plan.popular ? "border-gold shadow-lg shadow-gold/10" : "border-border"}`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-full">Best Value</div>}
                <div className="size-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-4">{plan.icon}</div>
                <h3 className="font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-3xl font-black mb-5">${plan.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                <ul className="space-y-2 flex-1 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <Button className={plan.popular ? "bg-gold text-gold-foreground hover:bg-gold/90 font-bold" : "bg-muted text-foreground hover:bg-muted/80 font-semibold"} asChild>
                  <a href={plan.url} target="_blank" rel="noopener noreferrer">Subscribe <ArrowRight className="size-4" /></a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICE AREAS ═══════════ */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-center">Detailing Services Near You</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">We bring our full detailing setup to you across the Charlotte metro area.</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              { label: "Car Detailing Charlotte NC", href: "/car-detailing-charlotte-nc" },
              { label: "Mobile Detailing Charlotte NC", href: "/mobile-detailing-charlotte-nc" },
              { label: "Ceramic Coating Charlotte NC", href: "/ceramic-coating-charlotte-nc" },
              { label: "Paint Correction Charlotte NC", href: "/paint-correction-charlotte-nc" },
              { label: "Boat Detailing Charlotte NC", href: "/boat-detailing-charlotte-nc" },
              { label: "Ceramic Coating Waxhaw NC", href: "/waxhaw" },
              { label: "Ceramic Coating Indian Trail NC", href: "/ceramic-coating-indian-trail-nc" },
              { label: "Ceramic Coating Fort Mill SC", href: "/ceramic-coating-fort-mill-sc" },
              { label: "Mobile Detailing Cost", href: "/mobile-detailing-cost" },
              { label: "GYEON Certified Charlotte", href: "/gyeon-certified-installer-charlotte" },
              { label: "Ceramic Coating vs Wax", href: "/ceramic-coating-vs-wax" },
              { label: "All Service Areas", href: "/areas" },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:border-gold/40 hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">Not Sure What You Need?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">Call us for a free consultation. We'll recommend the perfect package for your vehicle.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
              <BookNowLink href={config["widgetUrl:homepage-cta"] || config.bookingUrlAddOns || undefined}>Build Your Package <ArrowRight className="size-5" /></BookNowLink>
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
