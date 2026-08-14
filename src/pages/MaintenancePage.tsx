import { ArrowRight, CalendarCheck, CheckCircle2, Clock, Phone, Shield, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";
import { trackSubscribeClick, trackViewContent } from "@/lib/tracking";
import {
  SUBSCRIPTION_PLANS,
  PLAN_TYPE_ORDER,
  getCheckoutUrl,
  type SubscriptionPlanType,
} from "@/lib/subscriptionUrls";

/* ── Vehicle Size Tiers per Plan Type ──
   Inside-Out keeps Van as its own tier (interior size matters).
   Exterior-Only merges Van into the Large SUV/Truck tier. */
type VehicleTier = { key: string; label: string; price: number };

const PLAN_TIERS: Record<SubscriptionPlanType, VehicleTier[]> = {
  "inside-out": [
    { key: "sedan", label: "Coupes & Sedans", price: 126 },
    { key: "small-suv", label: "Small SUVs / Crossovers", price: 147 },
    { key: "large-suv", label: "Large SUVs / Trucks", price: 168 },
    { key: "van", label: "Vans / Minivans", price: 210 },
  ],
  exterior: [
    { key: "sedan", label: "Coupes & Sedans", price: 63 },
    { key: "small-suv", label: "Small SUVs / Crossovers", price: 95 },
    { key: "large-suv-van", label: "Large SUVs, Trucks & Vans", price: 126 },
  ],
};

/* ── What's included in each plan type ── */
const PLAN_FEATURES: Record<SubscriptionPlanType, string[]> = {
  "inside-out": [
    "Full interior vacuum (carpets, seats, crevices)",
    "Wipe-down of all interior surfaces",
    "Interior glass cleaning",
    "Hand wash with foam pre-treatment",
    "Wheels & tires cleaned and dressed",
    "Exterior glass cleaned",
    "Light spray wax & tire shine",
  ],
  exterior: [
    "Gentle foam pre-wash",
    "2-bucket contact wash",
    "Wheel face & tire scrub",
    "Streak-free blow dry",
    "Spray sealant gloss boost",
    "Tire dressing",
    "Crystal-clear exterior glass",
  ],
};

const WHO_ITS_FOR = [
  { icon: <Star className="size-5" />, title: "Existing Clients", desc: "You've had a full detail or ceramic coating — now keep it maintained professionally every month." },
  { icon: <CalendarCheck className="size-5" />, title: "Busy Professionals", desc: "No time to wash and detail yourself? We come to you on a set schedule — one less thing to think about." },
  { icon: <Shield className="size-5" />, title: "Ceramic Coating Owners", desc: "Ceramic coatings need proper maintenance. All our plans use ceramic-safe products on coated vehicles — no separate tier needed." },
  { icon: <Clock className="size-5" />, title: "Anyone Who Hates Car Washes", desc: "Automated car washes damage your paint. Our hand wash and professional products keep your finish safe." },
];

export function MaintenancePage() {
  const { config } = useSiteConfig();
  const [planType, setPlanType] = useState<SubscriptionPlanType>("inside-out");
  const tiers = PLAN_TIERS[planType] || PLAN_TIERS["inside-out"];
  const [vehicleKey, setVehicleKey] = useState<string>(tiers[0].key);
  const currentPlan = SUBSCRIPTION_PLANS[planType];
  const features = PLAN_FEATURES[planType] || PLAN_FEATURES["inside-out"];
  const activeTier = tiers.find((t) => t.key === vehicleKey) || tiers[0];
  const checkoutUrl = getCheckoutUrl(planType);

  useEffect(() => {
    trackViewContent("Maintenance Plans", "Membership");
  }, []);

  function selectPlan(pt: SubscriptionPlanType) {
    setPlanType(pt);
    const newTiers = PLAN_TIERS[pt] || PLAN_TIERS["inside-out"];
    if (!newTiers.some((t) => t.key === vehicleKey)) {
      setVehicleKey(newTiers[0].key);
    }
  }

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Detailing Maintenance Plans — Charlotte, NC"
        description="Monthly auto detailing plans in Charlotte, NC from $63/month. 2 plans: Exterior Only and Full Inside & Out. Mobile service, cancel anytime. First-time customers save 10%."
        keywords="monthly car detailing Charlotte NC, car maintenance plan, auto detailing subscription, mobile car wash membership, car detailing membership near me"
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
                { "@type": "Question", "name": "What are ProWorx maintenance plans?", "acceptedAnswer": { "@type": "Answer", "text": "ProWorx offers two monthly maintenance plans: Exterior Only (from $63/month) and Full Inside & Out (from $126/month). Both include mobile service and can be canceled anytime. Ceramic-coated vehicles use the same plans — we simply use ceramic-safe products." }},
                { "@type": "Question", "name": "Can I cancel my maintenance plan anytime?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! All ProWorx maintenance plans have no long-term contracts. Cancel anytime with no penalty. Billing starts the 1st of the month following signup, so you're never charged twice in your first month." }},
                { "@type": "Question", "name": "Do I need an initial detail before starting a plan?", "acceptedAnswer": { "@type": "Answer", "text": "No — there is no mandatory initial detail requirement. Initial detail results may vary based on vehicle condition. You can add additional labor time if more is needed, or the job is completed within the included labor, scope, and process." }},
                { "@type": "Question", "name": "How often do you service my vehicle?", "acceptedAnswer": { "@type": "Answer", "text": "Maintenance plans are billed and serviced monthly. We come to your home or office in Charlotte, Waxhaw, and surrounding areas on a recurring monthly schedule." }}
              ]
            },
            {
              "@type": "Service",
              "name": "ProWorx Maintenance Plans",
              "provider": { "@type": "LocalBusiness", "name": "ProWorx Mobile Detailing", "url": "https://www.proworxdetailing.com" },
              "areaServed": { "@type": "City", "name": "Charlotte", "addressRegion": "NC" },
              "description": "Monthly mobile detailing maintenance plans — 2 core services from $63/month. Professional hand wash or full inside & out. Ceramic vehicles welcome at the same price.",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Maintenance Plans",
                "itemListElement": [
                  { "@type": "Offer", "name": "Exterior Only", "price": "62", "priceCurrency": "USD", "description": "Foam pre-wash, 2-bucket contact wash, wheel & tire scrub, blow dry, spray sealant, tire dressing, exterior glass" },
                  { "@type": "Offer", "name": "Full Inside & Out", "price": "124", "priceCurrency": "USD", "description": "Complete interior and exterior detail every visit — our most popular plan" }
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
              Professional mobile detailing on a schedule that works for you. Choose from 2 core plans — Exterior Only or Full Inside & Out — and we'll show up every month to keep your vehicle clean, protected, and looking like it just left the shop. Cancel anytime. First-time customers save 10% on their first detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold-dark text-gold-foreground hover:bg-gold-dark/90 h-13 px-8 text-base font-bold" asChild>
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
              <Button className="bg-gold-dark text-gold-foreground hover:bg-gold-dark/90 font-bold shrink-0" size="lg" asChild>
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
                { title: "Ceramic Vehicles Welcome", desc: "Ceramic-coated vehicles use the same plans — we simply use ceramic-safe products during your visit. No separate tier or price." },
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

      {/* ── Maintenance Plans — Plan Type + Vehicle Size ── */}
      <section id="plans" className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Maintenance Plans</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{currentPlan.shortName} — Monthly</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Choose your plan type and vehicle size. Billed monthly, cancel anytime.
            </p>
          </div>

          {/* ── Plan Type Selector ── */}
          <div className="mb-8 max-w-3xl mx-auto">
            <div className="rounded-2xl border-2 border-gold/30 bg-gradient-to-b from-gold/5 to-transparent p-6 md:p-8">
              <div className="text-center mb-4">
                <h3 className="text-lg md:text-xl font-bold mb-1">Select Your Plan Type</h3>
                <p className="text-sm text-muted-foreground">Tap a plan below to see pricing and options</p>
              </div>
              {/* Desktop: button tabs */}
              <div className="hidden md:flex flex-wrap justify-center gap-3">
                {PLAN_TYPE_ORDER.map((pt) => {
                  const plan = SUBSCRIPTION_PLANS[pt];
                  return (
                    <button
                      key={pt}
                      onClick={() => selectPlan(pt)}
                      className={`px-5 py-3 rounded-xl text-sm font-bold transition-all ${
                        planType === pt
                          ? "bg-gold-dark text-gold-foreground shadow-md shadow-gold/20 ring-2 ring-gold/50 scale-105"
                          : "bg-card border-2 border-border text-muted-foreground hover:text-foreground hover:border-gold/40 hover:bg-gold/5"
                      }`}
                    >
                      {plan.shortName}
                    </button>
                  );
                })}
              </div>
              {/* Mobile: larger dropdown */}
              <div className="md:hidden flex justify-center">
                <select
                  value={planType}
                  onChange={(e) => selectPlan(e.target.value as SubscriptionPlanType)}
                  className="w-full max-w-sm px-4 py-3.5 rounded-xl bg-card border-2 border-gold/30 text-foreground text-base font-bold appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%239ca3af%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5rem] bg-[right_0.75rem_center] bg-no-repeat pr-10"
                >
                  {PLAN_TYPE_ORDER.map((pt) => (
                    <option key={pt} value={pt}>{SUBSCRIPTION_PLANS[pt].shortName}</option>
                  ))}
                </select>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4 max-w-xl mx-auto">{currentPlan.description}</p>
            </div>
          </div>

          {/* ── Vehicle Size Selector ── */}
          {/* Desktop: button tabs */}
          <div className="hidden md:flex flex-wrap justify-center gap-2 mb-8">
            {tiers.map((t) => (
              <button
                key={t.key}
                onClick={() => setVehicleKey(t.key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  vehicleKey === t.key
                    ? "bg-gold-dark text-gold-foreground shadow-sm"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-gold/30"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          {/* Mobile: dropdown select */}
          <div className="md:hidden flex justify-center mb-6">
            <select
              value={vehicleKey}
              onChange={(e) => setVehicleKey(e.target.value)}
              className="w-full max-w-sm px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm font-semibold appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%239ca3af%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10"
            >
              {tiers.map((t) => (
                <option key={t.key} value={t.key}>{t.label}</option>
              ))}
            </select>
          </div>

          {/* ── Monthly Price Card ── */}
          <div className="max-w-md mx-auto">
            <div className="rounded-2xl bg-card border-2 border-gold shadow-lg shadow-gold/10 p-7 flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-full">Billed Monthly</div>
              <h3 className="font-bold text-xl mb-1">{activeTier.label}</h3>
              <p className="text-3xl font-black mb-2">
                ${activeTier.price}
                <span className="text-sm font-normal text-muted-foreground">/month</span>
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">Billing starts the 1st of the month following signup — you're never charged twice in your first month.</p>
              <ul className="space-y-2.5 flex-1 mb-6">
                {features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feat}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-gold-dark text-gold-foreground hover:bg-gold-dark/90 font-bold" asChild>
                <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackSubscribeClick(`${currentPlan.shortName} Monthly`, checkoutUrl)}>Subscribe Now <ArrowRight className="size-4" /></a>
              </Button>
            </div>
          </div>

          {/* ── Full Pricing Table ── */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="rounded-2xl bg-card border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left p-4 font-semibold">Vehicle Size</th>
                      <th className="p-4 font-semibold text-center bg-gold/5">Monthly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tiers.map((t) => (
                      <tr key={t.key} className="border-b border-border/50 last:border-0">
                        <td className="p-4 font-medium">{t.label}</td>
                        <td className="p-4 text-center tabular-nums font-bold text-gold bg-gold/5">${t.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
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
            <CmsImg slot="maintenance-visit" fallback="/images/porsche-van.jpg" alt="ProWorx mobile detailing setup at customer location" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-xl" />
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

      {/* ── New Customer Discount ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="rounded-2xl border-2 border-gold/30 bg-gradient-to-b from-gold/5 to-transparent p-8 md:p-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-4">
                <Star className="size-3.5" />
                New Customer Offer
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">First-Time Customers Save 10%</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                New to ProWorx? Enjoy 10% off your first detail — whether it's a one-time package or your initial maintenance visit. Applied at checkout.
              </p>
              <Button size="lg" className="bg-gold-dark text-gold-foreground hover:bg-gold-dark/90 h-13 px-8 text-base font-bold" asChild>
                <a href="#plans">View Plans <ArrowRight className="size-5" /></a>
              </Button>
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
            <Button size="lg" className="bg-gold-dark text-gold-foreground hover:bg-gold-dark/90 h-13 px-8 text-base font-bold" asChild>
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
