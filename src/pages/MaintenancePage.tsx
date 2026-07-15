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
  type SubscriptionFrequency,
} from "@/lib/subscriptionUrls";

/* ── Billing Frequencies ── */
type Frequency = "biweekly" | "monthly" | "quarterly" | "annually";

const FREQUENCIES: { key: Frequency; label: string; suffix: string; badge?: string; description: string }[] = [
  { key: "biweekly", label: "Biweekly", suffix: "/visit", description: "Our best per-visit rate. Perfect for daily drivers and pristine upkeep. Billing starts the 1st of the month following signup." },
  { key: "monthly", label: "Monthly", suffix: "/visit", badge: "Most Popular", description: "The Sweet Spot. Keeps your vehicle consistently fresh and protected. Billing starts the 1st of the month following signup." },
  { key: "quarterly", label: "Quarterly", suffix: "/visit", description: "The Seasonal Refresh. A deep maintenance clean every 3 months to reset and protect your investment. Billing starts the 1st of the month following signup." },
  { key: "annually", label: "Annually", suffix: "/yr", badge: "Save 8%", description: "Our ultimate commitment to hassle-free care. Includes 12 monthly maintenance visits across the year, completely pre-paid. Plus, enjoy 10% off any specialty add-on services anytime." },
];

/* ── Vehicle Sizes ── */
type VehicleSize = "sedan" | "small-suv" | "large-suv" | "van";

const VEHICLE_SIZES: { key: VehicleSize; label: string }[] = [
  { key: "sedan", label: "Sedan" },
  { key: "small-suv", label: "Small SUV / Truck" },
  { key: "large-suv", label: "Large SUV / Off-Road" },
  { key: "van", label: "Van" },
];

/* ── Per-Visit Pricing by Plan Type & Vehicle Size ── */
type PricingTable = Record<VehicleSize, Record<Frequency, string>>;

const ALL_PRICING: Record<string, PricingTable> = {
  "inside-out": {
    sedan: { biweekly: "135", monthly: "166", quarterly: "227", annually: "1,823" },
    "small-suv": { biweekly: "155", monthly: "186", quarterly: "258", annually: "2,051" },
    "large-suv": { biweekly: "176", monthly: "207", quarterly: "289", annually: "2,278" },
    van: { biweekly: "196", monthly: "227", quarterly: "320", annually: "2,506" },
  },
  exterior: {
    sedan: { biweekly: "48", monthly: "64", quarterly: "120", annually: "697" },
    "small-suv": { biweekly: "58", monthly: "74", quarterly: "136", annually: "813" },
    "large-suv": { biweekly: "69", monthly: "84", quarterly: "151", annually: "929" },
    van: { biweekly: "79", monthly: "95", quarterly: "167", annually: "1,045" },
  },
  interior: {
    sedan: { biweekly: "80", monthly: "106", quarterly: "202", annually: "1,142" },
    "small-suv": { biweekly: "95", monthly: "126", quarterly: "233", annually: "1,369" },
    "large-suv": { biweekly: "111", monthly: "147", quarterly: "263", annually: "1,596" },
    van: { biweekly: "126", monthly: "168", quarterly: "294", annually: "1,823" },
  },
};

/* ── What's included in each plan type ── */
const PLAN_FEATURES: Record<string, string[]> = {
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
    "Hand wash with foam pre-treatment",
    "Wheels & tires cleaned and dressed",
    "Door jambs wiped down",
    "Exterior glass cleaned",
    "Light spray wax & tire shine",
  ],
  interior: [
    "Full interior vacuum (carpets, seats, crevices)",
    "Wipe-down of all interior surfaces",
    "Door panels, cupholders, center console & vents",
    "Interior glass cleaning",
    "Light stain treatment (as applicable)",
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
  const [vehicleSize, setVehicleSize] = useState<VehicleSize>("sedan");
  const [planType, setPlanType] = useState<SubscriptionPlanType>("inside-out");
  const pricingTable = ALL_PRICING[planType] || ALL_PRICING["inside-out"];
  const prices = pricingTable[vehicleSize];
  const currentPlan = SUBSCRIPTION_PLANS[planType];
  const features = PLAN_FEATURES[planType] || PLAN_FEATURES["inside-out"];

  useEffect(() => {
    trackViewContent("Maintenance Plans", "Membership");
  }, []);

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Detailing Maintenance Plans — Charlotte, NC"
        description="Monthly auto detailing plans in Charlotte, NC from $48/visit. 3 plans: Exterior Only, Interior Only, and Full Inside & Out. Mobile service, cancel anytime. First-time customers save 10%."
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
                { "@type": "Question", "name": "What are ProWorx maintenance plans?", "acceptedAnswer": { "@type": "Answer", "text": "ProWorx offers three core maintenance plans: Exterior Only (from $48/visit), Interior Only (from $80/visit), and Full Inside & Out (from $135/visit). Each is available in biweekly, monthly, quarterly, or annual pre-pay cadences. All plans include mobile service and can be canceled anytime. Ceramic-coated vehicles use the same plans — we simply use ceramic-safe products." }},
                { "@type": "Question", "name": "Can I cancel my maintenance plan anytime?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! All ProWorx maintenance plans have no long-term contracts. Cancel anytime with no penalty. Billing starts the 1st of the month following signup, so you're never charged twice in your first month." }},
                { "@type": "Question", "name": "Do I need an initial detail before starting a plan?", "acceptedAnswer": { "@type": "Answer", "text": "No — there is no mandatory initial detail requirement. Initial detail results may vary based on vehicle condition. You can add additional labor time if more is needed, or the job is completed within the included labor, scope, and process." }},
                { "@type": "Question", "name": "How often do you service my vehicle?", "acceptedAnswer": { "@type": "Answer", "text": "All maintenance plans include service on your chosen frequency — biweekly, monthly, quarterly, or annual pre-pay. We come to your home or office in Charlotte, Waxhaw, and surrounding areas on a recurring schedule." }}
              ]
            },
            {
              "@type": "Service",
              "name": "ProWorx Maintenance Plans",
              "provider": { "@type": "LocalBusiness", "name": "ProWorx Mobile Detailing", "url": "https://www.proworxdetailing.com" },
              "areaServed": { "@type": "City", "name": "Charlotte", "addressRegion": "NC" },
              "description": "Monthly mobile detailing maintenance plans — 3 core services from $48/visit. Professional hand wash, interior detail, and full inside & out. Ceramic vehicles welcome at the same price.",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Maintenance Plans",
                "itemListElement": [
                  { "@type": "Offer", "name": "Exterior Only", "price": "48", "priceCurrency": "USD", "description": "Professional hand wash, wheels & tires, door jambs, exterior glass, spray wax & tire shine" },
                  { "@type": "Offer", "name": "Interior Only", "price": "80", "priceCurrency": "USD", "description": "Full interior vacuum, surface wipe-down, door panels, console & vents, interior glass, light stain treatment" },
                  { "@type": "Offer", "name": "Full Inside & Out", "price": "135", "priceCurrency": "USD", "description": "Complete interior and exterior detail every visit — our most popular plan" }
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
              Professional mobile detailing on a schedule that works for you. Choose from 3 core plans — Exterior Only, Interior Only, or Full Inside & Out — and we'll show up to keep your vehicle clean, protected, and looking like it just left the shop. Cancel anytime. First-time customers save 10% on their first detail.
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{currentPlan.shortName} Subscriptions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Choose your plan type and vehicle size, then pick the frequency that fits your schedule.
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
                      onClick={() => setPlanType(pt)}
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
                  onChange={(e) => setPlanType(e.target.value as SubscriptionPlanType)}
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
            {VEHICLE_SIZES.map((s) => (
              <button
                key={s.key}
                onClick={() => setVehicleSize(s.key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  vehicleSize === s.key
                    ? "bg-gold-dark text-gold-foreground shadow-sm"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-gold/30"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
          {/* Mobile: dropdown select */}
          <div className="md:hidden flex justify-center mb-6">
            <select
              value={vehicleSize}
              onChange={(e) => setVehicleSize(e.target.value as VehicleSize)}
              className="w-full max-w-sm px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm font-semibold appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%239ca3af%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10"
            >
              {VEHICLE_SIZES.map((s) => (
                <option key={s.key} value={s.key}>{s.label}</option>
              ))}
            </select>
          </div>

          {/* ── Frequency Cards ── */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {FREQUENCIES.filter((f) => f.key !== "annually").map((f) => {
              const checkoutUrl = getCheckoutUrl(planType, f.key as SubscriptionFrequency);
              return (
                <div key={f.key} className={`rounded-2xl bg-card border p-7 flex flex-col relative ${f.badge ? "border-gold shadow-lg shadow-gold/10" : "border-border"}`}>
                  {f.badge && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-full">{f.badge}</div>}
                  <h3 className="font-bold text-xl mb-1">{f.label}</h3>
                  <p className="text-3xl font-black mb-2">
                    ${prices[f.key]}
                    <span className="text-sm font-normal text-muted-foreground">{f.suffix}</span>
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{f.description}</p>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={f.badge ? "bg-gold-dark text-gold-foreground hover:bg-gold-dark/90 font-bold" : "bg-muted text-foreground hover:bg-muted/80 font-semibold"} asChild>
                    <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackSubscribeClick(`${currentPlan.shortName} ${f.label}`, checkoutUrl)}>Subscribe Now <ArrowRight className="size-4" /></a>
                  </Button>
                </div>
              );
            })}
          </div>

          {/* ── Annual Pre-Pay Card ── */}
          {(() => {
            const annualUrl = getCheckoutUrl(planType, "annually");
            return (
              <div className="max-w-5xl mx-auto mt-8">
                <div className="rounded-2xl bg-card border border-emerald-500/40 shadow-lg shadow-emerald-500/10 p-8 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">Save 8%</div>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="font-bold text-2xl mb-2">Annual Pre-Pay</h3>
                      <p className="text-3xl font-black mb-1">
                        ${prices.annually}
                        <span className="text-sm font-normal text-muted-foreground">/yr</span>
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Our ultimate commitment to hassle-free care. 12 monthly {currentPlan.shortName.toLowerCase()} visits across the year, completely pre-paid. Plus, enjoy 10% off any specialty add-on services anytime.
                      </p>
                      <Button className="bg-emerald-500 text-white hover:bg-emerald-600 font-bold" asChild>
                        <a href={annualUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackSubscribeClick(`${currentPlan.shortName} Annual`, annualUrl)}>Pre-Pay Now <ArrowRight className="size-4" /></a>
                      </Button>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-3">What&rsquo;s included in every visit:</p>
                      <ul className="space-y-2">
                        {features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="size-4 text-emerald-500 mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* ── Full Pricing Table ── */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="rounded-2xl bg-card border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left p-4 font-semibold">Vehicle Size</th>
                      <th className="p-4 font-semibold text-center">Biweekly</th>
                      <th className="p-4 font-semibold text-center bg-gold/5">Monthly</th>
                      <th className="p-4 font-semibold text-center">Quarterly</th>
                      <th className="p-4 font-semibold text-center bg-emerald-500/5">Annually <span className="text-emerald-400 text-xs">(Save 8%)</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {VEHICLE_SIZES.map((s) => (
                      <tr key={s.key} className="border-b border-border/50 last:border-0">
                        <td className="p-4 font-medium">{s.label}</td>
                        <td className="p-4 text-center tabular-nums">${pricingTable[s.key].biweekly}</td>
                        <td className="p-4 text-center tabular-nums font-bold text-gold bg-gold/5">${pricingTable[s.key].monthly}</td>
                        <td className="p-4 text-center tabular-nums">${pricingTable[s.key].quarterly}</td>
                        <td className="p-4 text-center tabular-nums font-bold text-emerald-400 bg-emerald-500/5">${pricingTable[s.key].annually}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">Per-visit rates shown for Biweekly, Monthly, and Quarterly. Annual is a one-time pre-pay for 12 monthly visits. Billing starts the 1st of the month following signup — you're never charged twice in your first month.</p>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            No long-term contracts — cancel anytime with no penalty. Annual pre-pay plans include 10% off add-on services.
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
