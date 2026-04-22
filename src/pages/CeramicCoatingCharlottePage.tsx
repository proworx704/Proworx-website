import { ArrowRight, CheckCircle2, Clock, Phone, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";
import { RelatedCharlotteServices } from "@/components/RelatedCharlotteServices";

const COST_BREAKDOWN = [
  { tier: "1-Year Protection", product: "GYEON Q² One EVO", price: "$499+", deposit: "~$150", best: "Daily drivers, lease vehicles, budget-conscious owners" },
  { tier: "3-Year Protection", product: "GYEON Q² Pure EVO", price: "$899+", deposit: "~$270", best: "Most popular — ideal balance of protection and value" },
  { tier: "10-Year Protection", product: "GYEON Q² Flash EVO", price: "$1,599+", deposit: "~$480", best: "Enthusiasts, luxury vehicles, maximum long-term protection" },
];

export function CeramicCoatingCharlottePage() {
  const { config } = useSiteConfig();

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Ceramic Coating Cost in Charlotte, NC"
        description="How much does ceramic coating cost in Charlotte, NC? GYEON certified from $499–$1,599+. See pricing, warranty info & what's included."
        keywords="ceramic coating cost Charlotte NC, how much is ceramic coating Charlotte, ceramic coating price Charlotte NC, GYEON ceramic coating Charlotte, professional ceramic coating near me, ceramic coating Charlotte reviews"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Ceramic Coating", "item": "https://www.proworxdetailing.com/ceramic-coating" },
                { "@type": "ListItem", "position": 3, "name": "Charlotte NC Cost Guide", "item": "https://www.proworxdetailing.com/ceramic-coating-charlotte-nc" }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "How much does ceramic coating cost in Charlotte, NC?", "acceptedAnswer": { "@type": "Answer", "text": "Professional ceramic coating in Charlotte typically costs $499–$1,599+ depending on the coating tier and vehicle size. ProWorx offers GYEON certified packages: 1-Year Q² One EVO ($499+), 3-Year Q² Pure EVO ($899+), and 10-Year Q² Flash EVO ($1,599+). All include prep wash, decontamination, and light prep polish." }},
                { "@type": "Question", "name": "Is ceramic coating worth the cost?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for most vehicle owners. Professional ceramic coating protects your paint from UV damage, chemical etching, and environmental contaminants for years — far longer than wax or sealant. It also reduces maintenance time, keeps your vehicle cleaner between washes, and maintains resale value. The 3-Year package at $899 is the best balance of value and protection." }},
                { "@type": "Question", "name": "What's the difference between a $50 ceramic coating and a $900 one?", "acceptedAnswer": { "@type": "Answer", "text": "Consumer spray-on coatings ($30-$80) last weeks to months and offer minimal protection. Professional coatings from a certified installer ($499-$1,599+) involve paint decontamination, machine prep polish, and hand-applied professional-grade ceramic that bonds permanently to your paint. They last 1-10 years with manufacturer warranty." }},
                { "@type": "Question", "name": "Do I need paint correction before ceramic coating?", "acceptedAnswer": { "@type": "Answer", "text": "Not always. Every ProWorx ceramic coating package includes a light prep polish. However, if your paint has swirls, scratches, or oxidation, adding paint correction ($350+) before coating locks in a flawless finish under the ceramic layer. We'll inspect your paint and recommend the best approach." }},
                { "@type": "Question", "name": "Does ProWorx offer financing for ceramic coating?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer Wisetack financing (buy now, pay later) with no impact to your credit score for prequalification. We also only require a 30% deposit to reserve your coating appointment, with the balance due at completion." }}
              ]
            }
          ]
        }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="ceramic-charlotte-hero" fallback="/images/escalade-front.jpg" alt="Professional ceramic coating application in Charlotte NC" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6 backdrop-blur-sm">
              <Shield className="size-3.5" />
              GYEON Certified Installer
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Ceramic Coating Cost in{" "}
              <span className="text-gradient-gold">Charlotte, NC</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Wondering how much ceramic coating costs in Charlotte? Professional GYEON ceramic coating packages start at $499 — with a manufacturer warranty, prep work included, and just 30% down to reserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <a href="#pricing">See Pricing <ArrowRight className="size-5" /></a>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> Free Consultation</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Breakdown */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ceramic Coating Pricing</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                All packages include prep wash, clay bar decontamination, and light prep polish. Pricing shown is for sedans — SUVs, trucks, and larger vehicles may be higher.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {COST_BREAKDOWN.map((pkg, i) => (
                <div key={pkg.tier} className={`rounded-2xl bg-card border p-7 flex flex-col relative ${i === 1 ? "border-gold shadow-lg shadow-gold/10" : "border-border"}`}>
                  {i === 1 && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-full">Most Popular</div>}
                  <h3 className="font-bold text-xl mb-1">{pkg.tier}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{pkg.product}</p>
                  <p className="text-3xl font-black mb-1">{pkg.price}</p>
                  <p className="text-xs text-muted-foreground mb-4">30% deposit ({pkg.deposit}) to reserve</p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                    <span className="font-semibold text-foreground">Best for:</span> {pkg.best}
                  </p>
                  <Button className={i === 1 ? "bg-gold text-gold-foreground hover:bg-gold/90 font-bold" : "bg-muted text-foreground hover:bg-muted/80 font-semibold"} asChild>
                    <Link to="/ceramic-coating">View Full Details <ArrowRight className="size-4" /></Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">What's Included in Every Package</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Unlike budget shops that skip prep work, every ProWorx ceramic coating includes the full professional process.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { step: "1", title: "Prep Wash & Decontamination", desc: "Full exterior wash, clay bar treatment, and iron removal to strip all contaminants from the paint surface." },
                { step: "2", title: "Light Prep Polish", desc: "Single-step machine polish to create the ideal bonding surface for the ceramic coating. Removes light marring." },
                { step: "3", title: "Ceramic Coating Application", desc: "Professional hand-applied GYEON ceramic coating. Each panel is coated and inspected under LED lighting for full coverage." },
                { step: "4", title: "Cure & Inspection", desc: "Proper cure time is observed. Final full-vehicle inspection ensures even coverage and maximum bonding." },
              ].map((item) => (
                <div key={item.step} className="rounded-xl bg-card border border-border p-6 flex gap-4">
                  <div className="size-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold font-bold shrink-0">{item.step}</div>
                  <div>
                    <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Charlotte Market Pricing Context */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">Charlotte Ceramic Coating Pricing Guide</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              How does ProWorx compare? Here's what you can expect in the Charlotte market.
            </p>
            <div className="rounded-2xl bg-card border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left p-4 font-bold">Coating Type</th>
                      <th className="text-left p-4 font-bold">Charlotte Range</th>
                      <th className="text-left p-4 font-bold">ProWorx Price</th>
                      <th className="text-left p-4 font-bold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="p-4 text-muted-foreground">Consumer spray-on</td>
                      <td className="p-4 text-muted-foreground">$30–$80 (DIY)</td>
                      <td className="p-4 text-muted-foreground">—</td>
                      <td className="p-4 text-muted-foreground flex items-center gap-1"><Clock className="size-3" /> 1–3 months</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 text-muted-foreground">Entry-level professional</td>
                      <td className="p-4 text-muted-foreground">$300–$600</td>
                      <td className="p-4 font-semibold text-gold">$499+</td>
                      <td className="p-4 text-muted-foreground flex items-center gap-1"><Clock className="size-3" /> 1 year</td>
                    </tr>
                    <tr className="border-b border-border/50 bg-gold/5">
                      <td className="p-4 font-semibold">Mid-tier professional</td>
                      <td className="p-4 text-muted-foreground">$700–$1,200</td>
                      <td className="p-4 font-bold text-gold">$899+</td>
                      <td className="p-4 text-muted-foreground flex items-center gap-1"><Clock className="size-3" /> 3 years</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-muted-foreground">Premium long-term</td>
                      <td className="p-4 text-muted-foreground">$1,200–$2,500</td>
                      <td className="p-4 font-semibold text-gold">$1,599+</td>
                      <td className="p-4 text-muted-foreground flex items-center gap-1"><Clock className="size-3" /> 10 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">Prices based on sedan-size vehicles. Larger vehicles may be priced higher.</p>
          </div>
        </div>
      </section>

      {/* Why ProWorx */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Why Choose ProWorx for Ceramic Coating</h2>
              <div className="space-y-4">
                {[
                  { title: "Certified GYEON & IGL Installer", desc: "Not all coatings are equal. We use professional-grade products only available to certified installers." },
                  { title: "Manufacturer Warranty", desc: "Every package comes with a GYEON manufacturer warranty — not just our word, but the product maker's guarantee." },
                  { title: "Proper Prep = Better Results", desc: "We never skip the decontamination and polish steps. Coating over dirty or damaged paint is a waste of money." },
                  { title: "12+ Years of Experience", desc: "We've been detailing vehicles in Charlotte since 2013. Your car is in experienced hands." },
                  { title: "Financing Available", desc: "Prequalify with Wisetack — no impact to your credit score. Pay over time for any package." },
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
            <CmsImg slot="ceramic-charlotte-why" fallback="/images/aston-front.jpg" alt="Ceramic coated Aston Martin by ProWorx in Charlotte NC" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-xl" />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "Is ceramic coating worth the money?", a: "For most vehicle owners, yes. A professional ceramic coating protects your paint from UV damage, chemical etching, bird droppings, and tree sap for years. It dramatically reduces wash time, keeps your car cleaner between washes, and preserves resale value. Even the 1-year package pays for itself in reduced maintenance." },
                { q: "How long does ceramic coating last?", a: "ProWorx offers three tiers: 1-year (GYEON Q² One EVO), 3-year (Q² Pure EVO), and 10-year (Q² Flash EVO). Longevity depends on proper maintenance — washing with pH-neutral soap, avoiding automatic car washes, and annual inspections for 3-year and 10-year packages." },
                { q: "Can ceramic coating be applied to a new car?", a: "Absolutely — and it's the ideal time. New paint is typically in perfect condition, so you may not need paint correction. This saves money and locks in that factory-fresh finish from day one." },
                { q: "Do you offer mobile ceramic coating?", a: "Ceramic coating can be done mobile, but drop-off is preferred for the best results — especially if paint correction is needed. The controlled environment ensures proper curing and inspection." },
                { q: "What payment options are available?", a: "We require just 30% down to reserve your appointment, with the balance due at completion. We also offer Wisetack financing (buy now, pay later) with no credit impact for prequalification." },
              ].map((faq) => (
                <div key={faq.q} className="rounded-xl bg-card border border-border p-6">
                  <h3 className="font-bold text-base mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <RelatedCharlotteServices currentPath="/ceramic-coating-charlotte-nc" />
      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="ceramic-charlotte-cta" fallback="/images/ferrari-rear.jpg" alt="Ceramic coated Ferrari by ProWorx Charlotte NC" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Protect Your Investment with <span className="text-gradient-gold">Professional Ceramic Coating</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Reserve with just 30% down. Free consultation available — we'll inspect your paint and recommend the ideal package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
              <Link to="/ceramic-coating">View Packages & Reserve <ArrowRight className="size-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
              <a href={config.phoneLink}><Phone className="size-5" /> Free Consultation</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
