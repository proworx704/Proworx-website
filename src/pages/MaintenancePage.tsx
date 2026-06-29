import { ArrowRight, CalendarCheck, CheckCircle2, Clock, Phone, Shield, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";
import { trackSubscribeClick, trackViewContent } from "@/lib/tracking";

/* ── Billing Frequencies ── */
type Frequency = "biweekly" | "monthly" | "quarterly";

const FREQUENCIES: { key: Frequency; label: string; suffix: string; badge?: string; description: string }[] = [
  { key: "biweekly", label: "Biweekly", suffix: "/visit", description: "Our best per-visit rate. Perfect for daily drivers and pristine upkeep. (Requires an initial Standard Reset Detail to qualify)." },
  { key: "monthly", label: "Monthly", suffix: "/visit", badge: "Most Popular", description: "The Sweet Spot. Keeps your vehicle consistently fresh and protected. (Requires an initial Standard Reset Detail to qualify)." },
  { key: "quarterly", label: "Quarterly", suffix: "/visit", description: "The Seasonal Refresh. A deep maintenance clean every 3 months to reset and protect your investment." },
];

/* ── Vehicle Sizes ── */
type VehicleSize = "sedan" | "small-suv" | "large-suv" | "van";

const VEHICLE_SIZES: { key: VehicleSize; label: string }[] = [
  { key: "sedan", label: "Sedan" },
  { key: "small-suv", label: "Small SUV / Truck" },
  { key: "large-suv", label: "Large SUV / Off-Road" },
  { key: "van", label: "Van" },
];

/* ── Per-Visit Pricing by Vehicle Size ── */
const MAINTENANCE_PRICING: Record<VehicleSize, Record<Frequency, string>> = {
  sedan: { biweekly: "134.19", monthly: "165.09", quarterly: "226.88" },
  "small-suv": { biweekly: "154.79", monthly: "185.68", quarterly: "257.78" },
  "large-suv": { biweekly: "175.39", monthly: "206.28", quarterly: "288.67" },
  van: { biweekly: "195.98", monthly: "226.88", quarterly: "319.57" },
};

/* ── What's included in every maintenance visit ── */
const MAINTENANCE_FEATURES = [
  "Full interior vacuum (carpets, seats, crevices)",
  "Wipe-down of all interior surfaces",
  "Interior glass cleaning",
  "Hand wash with foam pre-treatment",
  "Wheels & tires cleaned and dressed",
  "Exterior glass cleaned",
  "Light spray wax & tire shine",
];

const WHO_ITS_FOR = [
  { icon: <Star className="size-5" />, title: "Existing Clients", desc: "You've had a full detail or ceramic coating — now keep it maintained professionally every month." },
  { icon: <CalendarCheck className="size-5" />, title: "Busy Professionals", desc: "No time to wash and detail yourself? We come to you on a set schedule — one less thing to think about." },
  { icon: <Shield className="size-5" />, title: "Ceramic Coating Owners", desc: "Ceramic coatings need proper maintenance. Our Full Inside & Out plan includes a ceramic top-up every visit." },
  { icon: <Clock className="size-5" />, title: "Anyone Who Hates Car Washes", desc: "Automated car washes damage your paint. Our hand wash and professional products keep your finish safe." },
];

export function MaintenancePage() {
  const { config } = useSiteConfig();
  const [vehicleSize, setVehicleSize] = useState<VehicleSize>("sedan");
  const prices = MAINTENANCE_PRICING[vehicleSize];
  const subFull = config["subscribeUrl:membership-full"] || "https://square.link/u/kuw5LL99";

  useEffect(() => {
    trackViewContent("Maintenance Plans", "Membership");
  }, []);

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Detailing Maintenance Plans — Charlotte, NC"
        description="Monthly auto detailing plans in Charlotte, NC from $59/mo. 5 tiers: exterior, interior, full I&O, ceramic exterior, ceramic I&O. Mobile service, cancel anytime."
        keywords="monthly car detailing Charlotte NC, car maintenance plan, auto detailing subscription, mobile car wash membership, car detailing membership near me, ceramic coating maintenance plan"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Maintenance Plans", "item": "https://www.proworxdetailing.com/maintenance" }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What are ProWorx maintenance plans?", "acceptedAnswer": { "@type": "Answer", "text": "ProWorx offers five monthly detailing plans: Exterior Only ($59/mo), Interior Only ($99/mo), Full Inside & Out ($159/mo with ceramic wet-coat protection), Ceramic Exterior ($109/mo), and Ceramic Inside & Out ($184.76/mo with GYEON ceramic top-coat refresh and iron decontamination). All plans include mobile service, multiple billing frequencies, and can be canceled anytime." }},
                { "@type": "Question", "name": "Can I cancel my maintenance plan anytime?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! All ProWorx maintenance plans are billed monthly with no long-term contracts. Cancel anytime with no penalty." }},
                { "@type": "Question", "name": "What is the ceramic maintenance membership?", "acceptedAnswer": { "@type": "Answer", "text": "ProWorx offers two ceramic maintenance tiers for ceramic coating owners: Ceramic Exterior ($109/mo) for exterior-focused care with GYEON ceramic top-coat refresh, and Ceramic Inside & Out ($184.76/mo) for full interior and exterior detail with iron decontamination and ceramic trim care. Both include professional ceramic maintenance to maximize your coating's lifespan." }},
                { "@type": "Question", "name": "How often do you service my vehicle?", "acceptedAnswer": { "@type": "Answer", "text": "All maintenance plans include service on your chosen frequency — biweekly, monthly, or quarterly. We come to your home or office in Charlotte, Waxhaw, and surrounding areas on a recurring schedule." }}
              ]
            },
            {
              "@type": "Service",
              "name": "ProWorx Maintenance Plans",
              "provider": { "@type": "LocalBusiness", "name": "ProWorx Mobile Detailing", "url": "https://www.proworxdetailing.com" },
              "areaServed": { "@type": "City", "name": "Charlotte", "addressRegion": "NC" },
              "description": "Monthly mobile detailing maintenance plans with 5 tiers from $59/mo to $184.76/mo. Professional hand wash, interior detail, ceramic coating maintenance, and more.",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Maintenance Plans",
                "itemListElement": [
                  { "@type": "Offer", "name": "Exterior Only", "price": "59", "priceCurrency": "USD", "description": "Monthly exterior hand wash, tire & wheel cleaning, door jambs, tire shine" },
                  { "@type": "Offer", "name": "Interior Only", "price": "99", "priceCurrency": "USD", "description": "Monthly full interior detail, dashboard & console, leather conditioning, air freshener" },
                  { "@type": "Offer", "name": "Full Inside & Out", "price": "159", "priceCurrency": "USD", "description": "Monthly complete interior and exterior detail with ceramic wet-coat protection and 10% off add-ons" },
                  { "@type": "Offer", "name": "Ceramic Exterior", "price": "109", "priceCurrency": "USD", "description": "Monthly professional exterior detail with GYEON ceramic top-coat refresh for ceramic coating owners" },
                  { "@type": "Offer", "name": "Ceramic Inside & Out", "price": "184.76", "priceCurrency": "USD", "description": "Monthly full I&O detail with GYEON ceramic top-coat refresh, iron decontamination, and 15% off add-ons" }
                ]
              }
            }
          ]
        }}
      />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="maintenance-hero" fallback="/images/porsche-foam.jpg" alt="ProWorx monthly maintenance detailing" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6 backdrop-blur-sm">
              <CalendarCheck className="size-3.5" />
              Monthly Maintenance Plans
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Keep Your Vehicle <span className="text-gradient-gold">Looking Its Best</span> — Every Month
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Professional mobile detailing on a schedule that works for you. Choose your plan, and we'll show up every month to keep your vehicle clean, protected, and looking like it just left the shop. Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <a href="#plans">
                  View Plans <ArrowRight className="size-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> {config.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Already a Member Banner ── */}
      <section className="py-0">
        <div className="container">
          <div className="-mt-8 mb-0 relative z-10 max-w-3xl mx-auto rounded-2xl border-2 border-gold/40 bg-gradient-to-r from-card to-card/80 backdrop-blur p-6 shadow-lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="size-12 rounded-xl bg-gold/20 text-gold flex items-center justify-center shrink-0">
                  <CalendarCheck className="size-6" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">Already a member?</h2>
                  <p className="text-sm text-muted-foreground">
                    Book your monthly maintenance visit — no charge, it's included in your plan.
                  </p>
                </div>
              </div>
              <Button className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold shrink-0" size="lg" asChild>
                <a href={config["widgetUrl:maintenance-booking"] || "https://book.proworxdetailing.com/book?category=membership"}>
                  Book Here <ArrowRight className="size-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Maintenance ── */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why a Maintenance Plan?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                A single detail looks amazing — but regular maintenance is what keeps your vehicle looking amazing all year long.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Protect Your Investment", desc: "Regular professional care prevents paint damage, interior wear, and UV degradation — preserving your vehicle's value." },
                { title: "Always Presentable", desc: "No more scrambling before road trips or client meetings. Your vehicle is always clean and ready to go." },
                { title: "Save vs. One-Off Details", desc: "Monthly plans cost significantly less than booking individual details. Consistent care at a better price." },
                { title: "We Come to You", desc: "Mobile service at your home or office. No drop-offs, no waiting rooms — just a clean car when you get back." },
                { title: "Extend Coating Life", desc: "Ceramic coatings last longer with proper maintenance. Our Full Inside & Out plan includes a ceramic top-up every visit." },
                { title: "Cancel Anytime", desc: "No contracts, no commitments. Keep your plan as long as it makes sense for you." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-card border border-border p-5">
                  <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Maintenance Plans — Vehicle Size First ── */}
      <section id="plans" className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Maintenance Plans</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Full Inside & Out Subscriptions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Choose your vehicle size, then pick the frequency that fits your schedule. All rates are per visit.
            </p>
          </div>

          {/* ── Vehicle Size Selector ── */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {VEHICLE_SIZES.map((s) => (
              <button
                key={s.key}
                onClick={() => setVehicleSize(s.key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  vehicleSize === s.key
                    ? "bg-gold text-gold-foreground shadow-sm"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-gold/30"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* ── Frequency Cards ── */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {FREQUENCIES.map((f) => (
              <div key={f.key} className={`rounded-2xl bg-card border p-7 flex flex-col relative ${f.badge ? "border-gold shadow-lg shadow-gold/10" : "border-border"}`}>
                {f.badge && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-full">{f.badge}</div>}
                <h3 className="font-bold text-xl mb-1">{f.label}</h3>
                <p className="text-3xl font-black mb-2">
                  ${prices[f.key]}
                  <span className="text-sm font-normal text-muted-foreground">/visit</span>
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{f.description}</p>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {MAINTENANCE_FEATURES.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feat}</span>
                    </li>
                  ))}
                </ul>
                <Button className={f.badge ? "bg-gold text-gold-foreground hover:bg-gold/90 font-bold" : "bg-muted text-foreground hover:bg-muted/80 font-semibold"} asChild>
                  <a href={subFull} target="_blank" rel="noopener noreferrer" onClick={() => trackSubscribeClick(`Maintenance ${f.label}`, subFull)}>Subscribe Now <ArrowRight className="size-4" /></a>
                </Button>
              </div>
            ))}
          </div>

          {/* ── Full Pricing Table ── */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="rounded-2xl bg-card border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left p-4 font-semibold">Vehicle Size</th>
                      <th className="p-4 font-semibold text-center">Biweekly</th>
                      <th className="p-4 font-semibold text-center bg-gold/5">Monthly</th>
                      <th className="p-4 font-semibold text-center">Quarterly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {VEHICLE_SIZES.map((s) => (
                      <tr key={s.key} className="border-b border-border/50 last:border-0">
                        <td className="p-4 font-medium">{s.label}</td>
                        <td className="p-4 text-center tabular-nums">${MAINTENANCE_PRICING[s.key].biweekly}</td>
                        <td className="p-4 text-center tabular-nums font-bold text-gold bg-gold/5">${MAINTENANCE_PRICING[s.key].monthly}</td>
                        <td className="p-4 text-center tabular-nums">${MAINTENANCE_PRICING[s.key].quarterly}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">All rates are per visit. All recurring maintenance plans require a vehicle to have received a Standard Reset Detail from us within the last 30 days to qualify for maintenance pricing.</p>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            No long-term contracts — cancel anytime with no penalty.
          </p>
        </div>
      </section>

      {/* ── What Each Visit Looks Like ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <CmsImg slot="maintenance-visit" fallback="/images/mobile-tent.jpg" alt="ProWorx mobile detailing setup at customer location" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-xl" />
            <div>
              <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Your Monthly Visit</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">What to Expect</h2>
              <div className="space-y-4">
                {[
                  { title: "Scheduled Appointment", desc: "We coordinate a recurring time that works for you — same day each month, same quality every time." },
                  { title: "Fully Self-Contained", desc: "Our mobile unit brings its own water, power, and professional equipment. No hookups needed at your location." },
                  { title: "Thorough Detail", desc: "Every service in your plan is completed with the same care and attention as a one-off appointment." },
                  { title: "Walk-Around Inspection", desc: "We check for new damage, paint issues, or areas that need extra attention and let you know." },
                  { title: "Same Team, Same Standard", desc: "Consistency matters. You'll work with the same team who knows your vehicle and your preferences." },
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
            </div>
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Who Are Maintenance Plans For?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {WHO_ITS_FOR.map((item) => (
              <div key={item.title} className="rounded-xl bg-card border border-border p-5 text-center flex flex-col items-center">
                <div className="size-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-3">{item.icon}</div>
                <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing at a Glance ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">All Maintenance Pricing at a Glance</h2>
              <p className="text-muted-foreground">Full Inside & Out — per-visit rates by vehicle size and frequency.</p>
            </div>
            <div className="rounded-2xl bg-card border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left p-4 font-semibold">Vehicle Size</th>
                      <th className="p-4 font-semibold text-center">Biweekly</th>
                      <th className="p-4 font-semibold text-center bg-gold/5">Monthly</th>
                      <th className="p-4 font-semibold text-center">Quarterly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {VEHICLE_SIZES.map((s) => (
                      <tr key={s.key} className="border-b border-border/50 last:border-0">
                        <td className="p-4 font-medium">{s.label}</td>
                        <td className="p-4 text-center tabular-nums">${MAINTENANCE_PRICING[s.key].biweekly}</td>
                        <td className="p-4 text-center tabular-nums font-bold text-gold bg-gold/5">${MAINTENANCE_PRICING[s.key].monthly}</td>
                        <td className="p-4 text-center tabular-nums">${MAINTENANCE_PRICING[s.key].quarterly}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="maintenance-cta" fallback="/images/aston-front.jpg" alt="Detailed Aston Martin by ProWorx" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Start Your Maintenance Plan <span className="text-gradient-gold">Today</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Pick a plan, set your schedule, and we'll handle the rest. Your vehicle deserves consistent professional care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
              <a href="#plans">View Plans <ArrowRight className="size-5" /></a>
            </Button>
            <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
              <a href={config.phoneLink}><Phone className="size-5" /> Call for Questions</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
