import { ArrowRight, CheckCircle2, Clock, Droplets, Phone, Shield, Sparkles, Truck } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookNowLink } from "@/components/BookNowLink";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig, useServices, useMemberships, useStandardInterior, useStandardExterior } from "@/hooks/useCms";

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

/** Package section with description, features, pricing tiers, and notes (matches old site layout) */
function PackageSection({
  pkg,
  bookLabel,
  bookHref,
  photoSlot,
  photoFallback,
  imageAlt,
  imageFirst,
}: {
  pkg: { name: string; description: string; features: string[]; priceTiers: { label: string; duration: string; price: string }[]; notes: string[] };
  bookLabel: string;
  bookHref?: string;
  photoSlot: string;
  photoFallback: string;
  imageAlt: string;
  imageFirst?: boolean;
}) {
  const imageEl = (
    <CmsImg slot={photoSlot} fallback={photoFallback} alt={imageAlt} className="rounded-2xl w-full aspect-[4/3] object-cover shadow-xl" />
  );

  const content = (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{pkg.name}</h2>
      <p className="text-muted-foreground leading-relaxed mb-5">{pkg.description}</p>

      {/* What's Included */}
      <div className="mb-5">
        <p className="text-xs font-bold text-gold uppercase tracking-widest mb-3">What's Included</p>
        <ul className="space-y-2">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />{f}
            </li>
          ))}
        </ul>
      </div>

      {/* Pricing by vehicle size */}
      <div className="rounded-xl bg-card border border-border p-4 mb-5">
        <p className="text-xs font-bold text-gold uppercase tracking-widest mb-3">Pricing</p>
        {pkg.priceTiers.map((tier) => (
          <div key={tier.label} className="flex items-center justify-between py-2.5 border-b border-border/50 last:border-0">
            <div>
              <p className="text-sm font-medium">{tier.label}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="size-3" />{tier.duration}
              </p>
            </div>
            <p className="font-bold text-gold">{tier.price}</p>
          </div>
        ))}
      </div>

      {/* Notes */}
      {pkg.notes.length > 0 && (
        <div className="mb-5">
          {pkg.notes.map((note) => (
            <p key={note} className="text-xs text-muted-foreground italic mb-1">{note}</p>
          ))}
        </div>
      )}

      <Button className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold" asChild>
        <BookNowLink href={bookHref}>{bookLabel} <ArrowRight className="size-4" /></BookNowLink>
      </Button>
    </div>
  );

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
      {imageFirst ? (
        <>
          <div className="order-2 lg:order-1">{imageEl}</div>
          <div className="order-1 lg:order-2">{content}</div>
        </>
      ) : (
        <>
          {content}
          {imageEl}
        </>
      )}
    </div>
  );
}

export function ServicesPage() {
  const { config } = useSiteConfig();
  const { services, standardDetail } = useServices();
  const { standardInterior } = useStandardInterior();
  const { standardExterior } = useStandardExterior();
  const { memberships } = useMemberships();

  const interiorPackages = services?.interiorPackages ?? [];
  const interiorAddons = services?.interiorAddons ?? [];
  const exteriorPackages = services?.exteriorPackages ?? [];
  const exteriorAddons = services?.exteriorAddons ?? [];
  const ceramicAddons = services?.ceramicAddons ?? [];

  const sd = standardDetail ?? {
    name: "Standard Inside & Out",
    description: "A full-vehicle refresh combining interior and exterior services into one streamlined appointment.",
    price: "Price varies",
    duration: "2 hr 30 min+",
    features: ["All Standard Exterior services", "All Standard Interior services", "Unified final quality inspection"],
  };

  const si = standardInterior ?? {
    name: "Standard Interior Only",
    description: "A comprehensive interior reset for daily-driven vehicles, restoring cleanliness without heavy restoration services.",
    features: ["Full interior vacuum (carpets, seats, crevices)", "Wipe-down of all interior surfaces", "Door panels, cupholders, center console, and vents", "Interior glass cleaning", "Light stain treatment (as applicable)"],
    priceTiers: [
      { label: "Coupe/Sedan", duration: "1 hr 45 min", price: "$127" },
      { label: "Small SUV / Small Truck", duration: "2 hrs", price: "$144" },
      { label: "3rd Row SUV / Off-Road Truck", duration: "2 hrs 30 min", price: "$180" },
      { label: "Van", duration: "3 hrs", price: "$216" },
    ],
    notes: ["Pet Hair Fee: Additional time will be charged at base rate (required if present).", "Condition: Extra time/cost may apply for neglected vehicles."],
  };

  const se = standardExterior ?? {
    name: "Standard Exterior Only",
    description: "Designed for well-maintained vehicles that need a professional exterior refresh and protection without paint correction.",
    features: ["Hand wash with foam pre-treatment", "Wheels and tires cleaned and dressed", "Exterior glass cleaned", "Light spray wax for shine and short-term protection", "Final quality inspection"],
    priceTiers: [
      { label: "Coupe/Sedan (4-door)", duration: "1 hr 30 min", price: "$103" },
      { label: "Small SUV / Small Truck", duration: "1 hr 45 min", price: "$124" },
      { label: "3rd Row SUV / Off-Road Truck", duration: "2 hrs 15 min", price: "$144" },
      { label: "Van", duration: "2 hrs", price: "$165" },
    ],
    notes: ["Condition: Extra time/cost may apply for neglected vehicles."],
  };

  // Build membership plan display data
  const membershipPlans = (memberships ?? []).map((m) => ({
    ...m,
    icon: m.key === "clean" ? <Droplets className="size-6" /> : m.key === "shield" ? <Shield className="size-6" /> : <Sparkles className="size-6" />,
  }));

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Auto Detailing Services"
        description="Full detail, interior cleaning, exterior wash, paint correction, ceramic coating & add-on services in Charlotte, NC. Mobile — we come to you. View packages & pricing."
        keywords="auto detailing services Charlotte NC, car interior cleaning, exterior detail, mobile car wash pricing, paint correction packages"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://proworxdetailing.com/services" }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What auto detailing services does ProWorx offer?", "acceptedAnswer": { "@type": "Answer", "text": "ProWorx offers full interior and exterior detailing, paint correction, ceramic coating, fleet detailing, boat detailing, and monthly maintenance plans. All services are mobile — we come to your location in Charlotte, NC." }},
                { "@type": "Question", "name": "How much does a full detail cost?", "acceptedAnswer": { "@type": "Answer", "text": "Full detail pricing starts based on vehicle size: Coupe/Sedan, Small SUV/Truck, 3rd Row SUV/Off-Road Truck, and Van categories. Contact us for an exact quote based on your vehicle." }},
                { "@type": "Question", "name": "Do you offer monthly detailing plans?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer three monthly maintenance plans: Exterior Only ($59/mo), Interior Only ($99/mo), and Full Inside & Out ($159/mo with ceramic protection). Cancel anytime." }}
              ]
            }
          ]
        }}
      />
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="services-hero" fallback="/images/corvette-front.jpg" alt="Black Corvette ZR1 detailed by ProWorx" className="w-full h-full object-cover" loading="eager" />
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
              <BookNowLink href={config.bookingUrlAddOns || undefined}>Build Your Package <ArrowRight className="size-5" /></BookNowLink>
            </Button>
          </div>
        </div>
      </section>

      {/* 1. Full Detail (Inside & Out) */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Full Service</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{sd.name}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{sd.description}</p>
              <p className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
                <Clock className="size-4 text-gold" /> {sd.duration}
              </p>
              <ul className="space-y-2 mb-6">
                {sd.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Button className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold" asChild>
                <BookNowLink href={config.bookingUrlFullDetail || undefined}>Book Full Detail <ArrowRight className="size-4" /></BookNowLink>
              </Button>
            </div>
            <CmsImg slot="services-standard" fallback="/images/full-insideout.jpg" alt="Ferrari Roma full inside & out detail by ProWorx with van on-site" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-xl" />
          </div>
        </div>
      </section>

      {/* 2. Standard Interior Only */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Interior Only</p>
          </div>
          <PackageSection
            pkg={si}
            bookLabel="Book Interior Detail"
            bookHref={config.bookingUrlInterior || undefined}
            photoSlot="services-interior"
            photoFallback="/images/rangerover-interior.jpg"
            imageAlt="Interior detail by ProWorx"
            imageFirst
          />
        </div>
      </section>

      {/* 3. Standard Exterior Only */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Exterior Only</p>
          </div>
          <PackageSection
            pkg={se}
            bookLabel="Book Exterior Detail"
            bookHref={config.bookingUrlExterior || undefined}
            photoSlot="services-exterior"
            photoFallback="/images/porsche-foam.jpg"
            imageAlt="White Porsche covered in foam — exterior detail by ProWorx"
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Interior add-ons: interiorPackages + interiorAddons combined */}
              <div className="rounded-2xl bg-card border border-border p-5">
                <p className="text-xs font-bold text-gold uppercase tracking-widest mb-4">Interior Add-ons</p>
                {[...interiorPackages, ...interiorAddons].map((s) => <ServiceRow key={s._id} service={s} />)}
              </div>
              {/* Exterior add-ons: exteriorPackages + exteriorAddons combined */}
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
                <BookNowLink href={config.bookingUrlAddOns || undefined}>Build Your Package <ArrowRight className="size-4" /></BookNowLink>
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

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">Not Sure What You Need?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">Call us for a free consultation. We'll recommend the perfect package for your vehicle.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
              <BookNowLink href={config.bookingUrlAddOns || undefined}>Build Your Package <ArrowRight className="size-5" /></BookNowLink>
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
