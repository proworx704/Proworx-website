import { ArrowRight, CheckCircle2, Clock, Droplets, Phone, Shield, Sparkles, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookNowLink } from "@/components/BookNowLink";
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

export function ServicesPage() {
  const { config } = useSiteConfig();
  const { services, standardDetail } = useServices();
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

  // Build membership plan display data
  const membershipPlans = (memberships ?? []).map((m) => ({
    ...m,
    icon: m.key === "clean" ? <Droplets className="size-6" /> : m.key === "shield" ? <Shield className="size-6" /> : <Sparkles className="size-6" />,
  }));

  return (
    <div className="flex-1 flex flex-col">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="/images/corvette-front.jpg" alt="Black Corvette ZR1 detailed by ProWorx" className="w-full h-full object-cover" />
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

      {/* 1. Full Detail */}
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
            <img src="/images/full-insideout.jpg" alt="Ferrari Roma full inside & out detail by ProWorx with van on-site" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-xl" />
          </div>
        </div>
      </section>

      {/* 2. Interior Only */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <img src="/images/rangerover-interior.jpg" alt="Range Rover interior detail — pristine white leather seats" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-xl" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Interior Only</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Interior Services</h2>
              <div className="rounded-2xl bg-card border border-border p-5">
                {interiorPackages.map((s) => <ServiceRow key={s._id} service={s} />)}
              </div>
              <div className="mt-6">
                <Button className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold" asChild>
                  <BookNowLink href={config.bookingUrlInterior || undefined}>Book Interior Detail <ArrowRight className="size-4" /></BookNowLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Exterior Only */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Exterior Only</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Exterior Services</h2>
              <div className="rounded-2xl bg-card border border-border p-5">
                {exteriorPackages.map((s) => <ServiceRow key={s._id} service={s} />)}
              </div>
              <div className="mt-6">
                <Button className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold" asChild>
                  <BookNowLink href={config.bookingUrlExterior || undefined}>Book Exterior Detail <ArrowRight className="size-4" /></BookNowLink>
                </Button>
              </div>
            </div>
            <img src="/images/porsche-foam.jpg" alt="White Porsche Boxster covered in foam — exterior detail by ProWorx" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-xl" />
          </div>
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
              <div className="rounded-2xl bg-card border border-border p-5">
                <p className="text-xs font-bold text-gold uppercase tracking-widest mb-4">Interior Add-ons</p>
                {interiorAddons.map((s) => <ServiceRow key={s._id} service={s} />)}
              </div>
              <div className="rounded-2xl bg-card border border-border p-5">
                <p className="text-xs font-bold text-gold uppercase tracking-widest mb-4">Exterior Add-ons</p>
                {exteriorAddons.map((s) => <ServiceRow key={s._id} service={s} />)}
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
              { icon: <Sparkles className="size-6" />, title: "Paint Correction", desc: "Remove swirls, scratches & oxidation", link: "/paint-correction", image: "/images/corvette-rear.jpg" },
              { icon: <Shield className="size-6" />, title: "Ceramic Coating", desc: "GYEON certified, up to 10-year protection", link: "/ceramic-coating", image: "/images/escalade-rear.jpg" },
              { icon: <Truck className="size-6" />, title: "Fleet Detailing", desc: "Volume pricing for business vehicles", link: "https://www.proworxdetailing.com/fleet-detailing-services", external: true, image: "/images/fleet-real.jpg" },
            ].map((s) => {
              const inner = (
                <div className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-gold/30 transition-all h-full">
                  <div className="relative h-40 overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
              );
              return s.external ? (
                <a key={s.title} href={s.link} target="_blank" rel="noopener noreferrer">{inner}</a>
              ) : (
                <Link key={s.title} to={s.link}>{inner}</Link>
              );
            })}
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
