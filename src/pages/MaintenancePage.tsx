import { ArrowRight, CalendarCheck, CheckCircle2, Clock, Droplets, Phone, Shield, Sparkles, Star } from "lucide-react";
import { useState } from "react";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";

/* ── Billing Frequencies ── */
type Frequency = "biweekly" | "monthly" | "quarterly" | "annually";

const FREQUENCIES: { key: Frequency; label: string; suffix: string; badge?: string }[] = [
  { key: "biweekly", label: "Biweekly", suffix: "/2 wks" },
  { key: "monthly", label: "Monthly", suffix: "/mo" },
  { key: "quarterly", label: "Quarterly", suffix: "/qtr" },
  { key: "annually", label: "Annually", suffix: "/yr", badge: "Save 4%" },
];

/* ── Membership Tiers ── */
const MEMBERSHIP_PLANS = [
  {
    key: "clean",
    name: "Exterior Only",
    pricing: { biweekly: "30", monthly: "59", quarterly: "177", annually: "679" },
    icon: <Droplets className="size-6" />,
    tagline: "Exterior care on your schedule",
    description: "A regular exterior refresh to keep your vehicle looking sharp between full details.",
    features: [
      "Exterior hand wash",
      "Tire & wheel cleaning",
      "Exterior windows",
      "Door jambs cleaned",
      "Tire shine & dressing",
    ],
    ideal: "Drivers who want a consistently clean exterior without the full detail commitment.",
    popular: false,
    subscribeUrl: "https://square.link/u/CP1LxyXc",
    configKey: "subscribeUrl:membership-exterior",
  },
  {
    key: "shield",
    name: "Interior Only",
    pricing: { biweekly: "50", monthly: "99", quarterly: "297", annually: "1,139" },
    icon: <Shield className="size-6" />,
    tagline: "Interior care on your schedule",
    description: "A thorough interior detail on your chosen schedule to keep your cabin fresh and clean.",
    features: [
      "Full interior detail",
      "Full vacuum & wipe-down",
      "Dashboard & console detail",
      "Leather / vinyl conditioning",
      "Interior windows",
      "Air freshener",
    ],
    ideal: "Daily drivers and families who want a fresh, clean interior.",
    popular: false,
    subscribeUrl: "https://square.link/u/ZIRVEmaf",
    configKey: "subscribeUrl:membership-interior",
  },
  {
    key: "armor",
    name: "Full Inside & Out",
    pricing: { biweekly: "80", monthly: "159", quarterly: "477", annually: "1,829" },
    icon: <Sparkles className="size-6" />,
    tagline: "Complete detail + ceramic protection",
    description: "The complete package — full interior and exterior detail with ceramic wet-coat protection and tire shine. Includes 10% off all add-on services.",
    features: [
      "Full inside & out detail",
      "Everything in Exterior + Interior",
      "Ceramic wet-coat protection",
      "Tire shine & trim dressing",
      "10% off on add-on services",
    ],
    ideal: "Enthusiasts and luxury vehicle owners who want the ultimate care with ceramic protection.",
    popular: true,
    subscribeUrl: "https://square.link/u/kuw5LL99",
    configKey: "subscribeUrl:membership-full",
  },
  {
    key: "ceramic",
    name: "Ceramic Maintenance",
    pricing: { biweekly: "100", monthly: "199", quarterly: "597", annually: "2,289" },
    icon: <Shield className="size-6" />,
    tagline: "Premium ceramic care",
    description: "Designed for ceramic coating owners — everything in Full I&O plus GYEON ceramic top-coat refresh, iron decontamination, and ceramic trim care. Includes 15% off all add-on services.",
    features: [
      "Full inside & out detail",
      "Everything in Full I&O plan",
      "GYEON ceramic top-coat refresh",
      "Iron decontamination",
      "Ceramic trim & plastic refresh",
      "15% off on add-on services",
    ],
    ideal: "Ceramic coating owners who want professional-grade maintenance to maximize their coating's lifespan and performance.",
    popular: false,
    subscribeUrl: "",
    configKey: "subscribeUrl:membership-ceramic",
  },
];

const WHO_ITS_FOR = [
  { icon: <Star className="size-5" />, title: "Existing Clients", desc: "You've had a full detail or ceramic coating — now keep it maintained professionally every month." },
  { icon: <CalendarCheck className="size-5" />, title: "Busy Professionals", desc: "No time to wash and detail yourself? We come to you on a set schedule — one less thing to think about." },
  { icon: <Shield className="size-5" />, title: "Ceramic Coating Owners", desc: "Ceramic coatings need proper maintenance. Our Full Inside & Out plan includes a ceramic top-up every visit." },
  { icon: <Clock className="size-5" />, title: "Anyone Who Hates Car Washes", desc: "Automated car washes damage your paint. Our hand wash and professional products keep your finish safe." },
];

export function MaintenancePage() {
  const { config } = useSiteConfig();
  const [frequency, setFrequency] = useState<Frequency>("monthly");
  const freq = FREQUENCIES.find((f) => f.key === frequency)!;

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Detailing Maintenance Plans — Charlotte, NC"
        description="Monthly auto detailing plans in Charlotte, NC from $59/mo. 4 tiers: exterior, interior, full I&O, ceramic maintenance. Mobile service, cancel anytime."
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
                { "@type": "Question", "name": "What are ProWorx maintenance plans?", "acceptedAnswer": { "@type": "Answer", "text": "ProWorx offers four monthly detailing plans: Exterior Only ($59/mo), Interior Only ($99/mo), Full Inside & Out ($159/mo with ceramic wet-coat protection), and Ceramic Maintenance ($199/mo with GYEON ceramic top-coat refresh and iron decontamination). All plans include mobile service, multiple billing frequencies, and can be canceled anytime." }},
                { "@type": "Question", "name": "Can I cancel my maintenance plan anytime?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! All ProWorx maintenance plans are billed monthly with no long-term contracts. Cancel anytime with no penalty." }}
              ]
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

      {/* ── Regular Membership Plans (3 tiers) ── */}
      <section id="plans" className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Memberships</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Detailing Plans</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Three tiers to match your needs and budget. Every plan includes mobile service — we come to you.
            </p>
          </div>

          {/* ── Frequency Toggle ── */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center rounded-xl bg-card border border-border p-1 gap-0.5">
              {FREQUENCIES.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFrequency(f.key)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    frequency === f.key
                      ? "bg-gold text-gold-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f.label}
                  {f.badge && (
                    <span className={`absolute -top-2.5 -right-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold leading-none ${
                      frequency === f.key ? "bg-emerald-500 text-white" : "bg-emerald-500/20 text-emerald-400"
                    }`}>
                      {f.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {MEMBERSHIP_PLANS.filter((p) => p.key !== "ceramic").map((plan) => (
              <div key={plan.key} className={`rounded-2xl bg-card border p-7 flex flex-col relative ${plan.popular ? "border-gold shadow-lg shadow-gold/10" : "border-border"}`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-full">Most Popular</div>}
                <div className="size-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-4">{plan.icon}</div>
                <h3 className="font-bold text-xl mb-0.5">{plan.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{plan.tagline}</p>
                <p className="text-3xl font-black mb-2">
                  ${plan.pricing[frequency]}
                  <span className="text-sm font-normal text-muted-foreground">{freq.suffix}</span>
                </p>
                {frequency === "annually" && (
                  <p className="text-xs text-emerald-400 font-medium -mt-1 mb-2">Save vs. monthly billing</p>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{plan.description}</p>
                <ul className="space-y-2.5 flex-1 mb-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-lg bg-gold/5 border border-gold/20 px-3 py-2 mb-5">
                  <p className="text-xs text-muted-foreground"><span className="font-semibold text-foreground">Best for:</span> {plan.ideal}</p>
                </div>
                <Button className={plan.popular ? "bg-gold text-gold-foreground hover:bg-gold/90 font-bold" : "bg-muted text-foreground hover:bg-muted/80 font-semibold"} asChild>
                  <a href={config[plan.configKey] || plan.subscribeUrl || "#plans"} target="_blank" rel="noopener noreferrer">Subscribe Now <ArrowRight className="size-4" /></a>
                </Button>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            All plans can be billed biweekly, monthly, quarterly, or annually. No long-term contracts — cancel anytime with no penalty.
          </p>
        </div>
      </section>

      {/* ── Ceramic Maintenance Membership (premium tier) ── */}
      {(() => {
        const ceramic = MEMBERSHIP_PLANS.find((p) => p.key === "ceramic")!;
        return (
          <section id="ceramic-membership" className="py-20 md:py-28">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">For Ceramic Coating Owners</p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ceramic Maintenance Membership</h2>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Professional-grade care designed specifically for ceramic-coated vehicles. Keep your coating performing at its best.
                  </p>
                </div>
                <div className="rounded-2xl bg-card border border-gold/30 shadow-lg shadow-gold/5 p-8 md:p-10">
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="size-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">{ceramic.icon}</div>
                        <div>
                          <h3 className="font-bold text-2xl">{ceramic.name}</h3>
                          <p className="text-sm text-muted-foreground">{ceramic.tagline}</p>
                        </div>
                      </div>
                      <p className="text-4xl font-black mb-1">${ceramic.pricing[frequency]}<span className="text-sm font-normal text-muted-foreground">{freq.suffix}</span></p>
                      {frequency === "annually" && (
                        <p className="text-xs text-emerald-400 font-medium mb-3">Save vs. monthly billing</p>
                      )}
                      <p className="text-muted-foreground leading-relaxed mb-6">{ceramic.description}</p>
                      <div className="rounded-lg bg-gold/5 border border-gold/20 px-4 py-3 mb-6">
                        <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Best for:</span> {ceramic.ideal}</p>
                      </div>
                      <Button className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold w-full md:w-auto" asChild>
                        <a href={config[ceramic.configKey] || ceramic.subscribeUrl || "#ceramic-membership"} target="_blank" rel="noopener noreferrer">Subscribe Now <ArrowRight className="size-4" /></a>
                      </Button>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">What's Included</h4>
                      <ul className="space-y-3">
                        {ceramic.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <CheckCircle2 className="size-5 text-gold mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })()}

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

      {/* ── Plan Comparison ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Compare Plans at a Glance</h2>
            </div>
            <div className="rounded-2xl bg-card border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-semibold">Feature</th>
                      {MEMBERSHIP_PLANS.map((plan) => (
                        <th key={plan.key} className={`p-4 font-semibold text-center ${plan.popular ? "bg-gold/5" : ""}`}>
                          {plan.name}<br/><span className="text-gold font-normal text-xs">${plan.pricing[frequency]}{freq.suffix}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Monthly exterior wash", clean: true, shield: false, armor: true, ceramic: true },
                      { feature: "Tire & wheel cleaning", clean: true, shield: false, armor: true, ceramic: true },
                      { feature: "Exterior windows", clean: true, shield: false, armor: true, ceramic: true },
                      { feature: "Door jambs", clean: true, shield: false, armor: true, ceramic: true },
                      { feature: "Tire shine & dressing", clean: true, shield: false, armor: true, ceramic: true },
                      { feature: "Full interior detail", clean: false, shield: true, armor: true, ceramic: true },
                      { feature: "Dashboard & console detail", clean: false, shield: true, armor: true, ceramic: true },
                      { feature: "Leather / vinyl conditioning", clean: false, shield: true, armor: true, ceramic: true },
                      { feature: "Interior windows", clean: false, shield: true, armor: true, ceramic: true },
                      { feature: "Air freshener", clean: false, shield: true, armor: true, ceramic: true },
                      { feature: "Ceramic wet-coat protection", clean: false, shield: false, armor: true, ceramic: true },
                      { feature: "GYEON ceramic top-coat refresh", clean: false, shield: false, armor: false, ceramic: true },
                      { feature: "Iron decontamination", clean: false, shield: false, armor: false, ceramic: true },
                      { feature: "Ceramic trim & plastic refresh", clean: false, shield: false, armor: false, ceramic: true },
                      { feature: "10% off on add-on services", clean: false, shield: false, armor: true, ceramic: false },
                      { feature: "15% off on add-on services", clean: false, shield: false, armor: false, ceramic: true },
                    ].map((row) => (
                      <tr key={row.feature} className="border-b border-border/50 last:border-0">
                        <td className="p-4 text-muted-foreground">{row.feature}</td>
                        <td className="p-4 text-center">{row.clean ? <CheckCircle2 className="size-4 text-gold mx-auto" /> : <span className="text-muted-foreground/30">—</span>}</td>
                        <td className="p-4 text-center">{row.shield ? <CheckCircle2 className="size-4 text-gold mx-auto" /> : <span className="text-muted-foreground/30">—</span>}</td>
                        <td className="p-4 text-center bg-gold/5">{row.armor ? <CheckCircle2 className="size-4 text-gold mx-auto" /> : <span className="text-muted-foreground/30">—</span>}</td>
                        <td className="p-4 text-center">{row.ceramic ? <CheckCircle2 className="size-4 text-gold mx-auto" /> : <span className="text-muted-foreground/30">—</span>}</td>
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
