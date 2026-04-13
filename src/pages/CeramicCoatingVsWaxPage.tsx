import { ArrowRight, CheckCircle2, Droplets, Phone, Shield, Sparkles, X } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";

const COMPARISON = [
  { feature: "Longevity", ceramic: "1–10 years", wax: "2–4 weeks", sealant: "3–6 months" },
  { feature: "Hardness", ceramic: "9H rated", wax: "None", sealant: "None" },
  { feature: "Scratch Resistance", ceramic: "Significant", wax: "None", sealant: "Minimal" },
  { feature: "UV Protection", ceramic: "Excellent — prevents oxidation", wax: "Moderate", sealant: "Moderate" },
  { feature: "Chemical Resistance", ceramic: "High — resists bird droppings, tree sap, acid rain", wax: "Low", sealant: "Low–Moderate" },
  { feature: "Hydrophobic Effect", ceramic: "Extreme water beading for years", wax: "Mild, fades quickly", sealant: "Moderate, fades in months" },
  { feature: "Gloss & Depth", ceramic: "Deep, mirror-like finish", wax: "Warm, natural glow", sealant: "Good shine" },
  { feature: "Maintenance", ceramic: "Easy — dirt slides off, less washing", wax: "Frequent reapplication needed", sealant: "Regular reapplication" },
  { feature: "Application", ceramic: "Professional — certified installer required", wax: "DIY or professional", sealant: "DIY or professional" },
  { feature: "Cost", ceramic: "$499–$1,599+ (professional)", wax: "$20–$50 (DIY) / $100–$200 (pro)", sealant: "$30–$80 (DIY) / $150–$300 (pro)" },
  { feature: "Warranty", ceramic: "Manufacturer warranty (GYEON)", wax: "None", sealant: "None" },
  { feature: "Resale Value", ceramic: "Preserves paint — increases resale value", wax: "Minimal impact", sealant: "Minimal impact" },
];

const WHEN_CERAMIC = [
  "You plan to keep your vehicle 2+ years",
  "You drive a luxury, exotic, or high-value vehicle",
  "You want to reduce washing frequency and maintenance time",
  "You park outdoors or in harsh conditions (sun, tree sap, bird droppings)",
  "You want long-term paint protection with a manufacturer warranty",
  "You're buying a new car and want to protect the factory paint",
];

const WHEN_WAX = [
  "You're on a tight budget and prefer DIY",
  "You enjoy the process of hand-waxing your car",
  "You have a lease vehicle you're returning in under a year",
  "You want a quick, temporary boost in shine before an event",
];

export function CeramicCoatingVsWaxPage() {
  const { config } = useSiteConfig();

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Ceramic Coating vs Wax: Which Is Better for Your Car? | ProWorx Detailing"
        description="Ceramic coating vs wax — which protects your car better? Compare longevity, cost, scratch resistance, and more. Charlotte's GYEON certified experts explain."
        keywords="ceramic coating vs wax, ceramic coating or wax, is ceramic coating worth it, ceramic coating vs wax vs sealant, ceramic coating benefits, wax vs ceramic coating car, paint protection comparison"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Ceramic Coating", "item": "https://www.proworxdetailing.com/ceramic-coating" },
                { "@type": "ListItem", "position": 3, "name": "Ceramic Coating vs Wax", "item": "https://www.proworxdetailing.com/ceramic-coating-vs-wax" }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "Is ceramic coating better than wax?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for long-term protection. Professional ceramic coating lasts 1–10 years and provides superior scratch resistance, UV protection, and hydrophobic properties. Wax lasts only 2–4 weeks and offers minimal protection. However, ceramic coating costs more upfront ($499–$1,599+) compared to wax ($20–$50 DIY)." }},
                { "@type": "Question", "name": "How long does ceramic coating last vs wax?", "acceptedAnswer": { "@type": "Answer", "text": "Ceramic coating lasts 1–10 years depending on the product tier. GYEON Q² One EVO lasts 1 year, Q² Pure EVO lasts 3 years, and Q² Flash EVO lasts up to 10 years. Traditional carnauba wax lasts only 2–4 weeks before needing reapplication." }},
                { "@type": "Question", "name": "Can you wax over ceramic coating?", "acceptedAnswer": { "@type": "Answer", "text": "You shouldn't need to. Ceramic coating provides superior protection and gloss on its own. Applying wax over ceramic coating can actually reduce the hydrophobic properties. Instead, use a ceramic-safe maintenance spray (like GYEON Cure) to boost the coating between professional maintenance visits." }},
                { "@type": "Question", "name": "Is ceramic coating worth the money?", "acceptedAnswer": { "@type": "Answer", "text": "For most vehicle owners, yes. While the upfront cost is higher ($499–$1,599+), you save money over time by eliminating frequent waxing, reducing wash frequency, and protecting your paint from damage that would lower resale value. A 3-year ceramic coating at $899 costs roughly $25/month — less than monthly waxing." }},
                { "@type": "Question", "name": "What's the best paint protection: ceramic coating, wax, or sealant?", "acceptedAnswer": { "@type": "Answer", "text": "Ceramic coating offers the best overall protection. It's harder (9H rated), lasts longer (1–10 years), and provides superior resistance to scratches, chemicals, UV, and environmental contaminants. Sealants are a middle ground lasting 3–6 months, while wax is the shortest-lived at 2–4 weeks." }}
              ]
            }
          ]
        }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg
            slot="ceramic-vs-wax-hero"
            fallback="/images/escalade-front.jpg"
            alt="Vehicle paint with deep ceramic coating gloss and water beading"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6">
              <Shield className="size-3.5" />
              GYEON & IGL Certified Installers
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Ceramic Coating vs Wax:{" "}
              <span className="text-gradient-gold">Which Is Better?</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
              Should you ceramic coat your car or stick with wax? We break down the real differences in protection, longevity, cost, and results — from Charlotte's certified ceramic coating specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <Link to="/ceramic-coating">View Ceramic Coating Packages <ArrowRight className="size-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> Call {config.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl bg-gold/5 border border-gold/20 p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">The Short Answer</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                <strong className="text-foreground">Ceramic coating is better than wax in almost every measurable way</strong> — it lasts 50–250x longer, provides real scratch resistance, and actually protects your paint from chemical damage. The tradeoff is cost: professional ceramic coating starts at $499 vs $20–50 for DIY wax.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                However, if you break it down per month, a 3-year ceramic coating at $899 costs about <strong className="text-foreground">$25/month</strong> — and during that time you're spending zero on wax, less on car washes, and getting better protection. For most vehicle owners, ceramic coating is the smarter long-term investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Head-to-Head Comparison</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ceramic Coating vs Wax vs Sealant</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              How do the three main paint protection options compare? Here's the full breakdown.
            </p>
          </div>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-muted-foreground">Feature</th>
                  <th className="text-left py-4 px-4 font-bold text-gold">
                    <div className="flex items-center gap-2"><Shield className="size-4" /> Ceramic Coating</div>
                  </th>
                  <th className="text-left py-4 px-4 font-semibold">Carnauba Wax</th>
                  <th className="text-left py-4 px-4 font-semibold">Paint Sealant</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-card/30" : ""}`}>
                    <td className="py-3.5 px-4 font-medium">{row.feature}</td>
                    <td className="py-3.5 px-4 text-gold font-medium">{row.ceramic}</td>
                    <td className="py-3.5 px-4 text-muted-foreground">{row.wax}</td>
                    <td className="py-3.5 px-4 text-muted-foreground">{row.sealant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to Choose Each */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Ceramic */}
            <div className="rounded-2xl bg-card border-2 border-gold/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                  <Shield className="size-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Choose Ceramic Coating If…</h3>
                  <p className="text-sm text-gold font-medium">Best long-term value</p>
                </div>
              </div>
              <ul className="space-y-3">
                {WHEN_CERAMIC.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold mt-6 w-full" asChild>
                <Link to="/ceramic-coating">View Ceramic Packages <ArrowRight className="size-4" /></Link>
              </Button>
            </div>

            {/* Wax */}
            <div className="rounded-2xl bg-card border border-border p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground">
                  <Droplets className="size-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Wax Might Be OK If…</h3>
                  <p className="text-sm text-muted-foreground">Short-term, budget option</p>
                </div>
              </div>
              <ul className="space-y-3">
                {WHEN_WAX.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <X className="size-4 text-muted-foreground mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mt-6 p-3 bg-muted/50 rounded-lg">
                💡 Even if you've been waxing, switching to ceramic coating saves time and money long-term while providing dramatically better protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">True Cost Comparison</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Does It Actually Cost Over 3 Years?</h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              When you factor in reapplication frequency and paint damage prevention, ceramic coating is actually cheaper long-term.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              { label: "Wax (Every 2 Weeks)", total: "$1,800–$3,600", math: "75+ applications × $24–$48 each", perMonth: "$50–$100/mo", highlight: false },
              { label: "Sealant (Every 4 Months)", total: "$900–$2,700", math: "9 applications × $100–$300 each", perMonth: "$25–$75/mo", highlight: false },
              { label: "Ceramic Coating (3-Year)", total: "$899 one-time", math: "Single application, 3-year warranty", perMonth: "~$25/mo", highlight: true },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl p-6 text-center ${item.highlight ? "bg-gold/10 border-2 border-gold/30" : "bg-card border border-border"}`}>
                <h3 className={`font-bold text-lg mb-3 ${item.highlight ? "text-gold" : ""}`}>{item.label}</h3>
                <p className={`text-3xl font-black mb-2 ${item.highlight ? "text-gold" : ""}`}>{item.total}</p>
                <p className="text-sm text-muted-foreground mb-3">{item.math}</p>
                <p className={`text-sm font-semibold ${item.highlight ? "text-gold" : "text-muted-foreground"}`}>{item.perMonth}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - visible text */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3 text-center">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">Common Questions</h2>
            <div className="space-y-6">
              {[
                { q: "Is ceramic coating better than wax?", a: "Yes, in almost every way. Ceramic coating provides 9H hardness, lasts 1–10 years, and protects against UV, chemicals, and scratches. Wax lasts 2–4 weeks with no real protection. The only advantage of wax is lower upfront cost." },
                { q: "Can I apply ceramic coating myself?", a: "Consumer-grade spray coatings exist, but they last weeks not years and provide minimal protection. Professional ceramic coating requires paint decontamination, machine polishing, controlled application, and IR curing. Improper application can cause high spots, streaking, and uneven protection. For real results, use a certified installer." },
                { q: "How long does ceramic coating last vs wax?", a: "Professional ceramic coating: 1–10 years depending on tier. GYEON Q² One EVO (1 year), Q² Pure EVO (3 years), Q² Flash EVO (10 years). Traditional wax: 2–4 weeks. Paint sealant: 3–6 months." },
                { q: "Does ceramic coating prevent scratches?", a: "Ceramic coating provides significant scratch resistance (9H hardness) that wax cannot. It won't prevent damage from rock chips or key scratches, but it greatly reduces swirl marks, light scratches, and wash-related marring." },
                { q: "Can you wax over ceramic coating?", a: "You shouldn't. Wax can reduce the hydrophobic properties of ceramic coating. Instead, use a ceramic-safe maintenance product like GYEON Cure to maintain and boost the coating." },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-card border border-border p-6">
                  <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="size-10 text-gold mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to <span className="text-gradient-gold">Upgrade from Wax</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Get a free ceramic coating consultation from Charlotte's GYEON & IGL certified specialists. We'll inspect your paint and recommend the right package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <Link to="/ceramic-coating">View Packages & Book <ArrowRight className="size-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> Call {config.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
