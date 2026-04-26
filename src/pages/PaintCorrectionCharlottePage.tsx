import { ArrowRight, CheckCircle2, MapPin, Phone, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { BookNowLink } from "@/components/BookNowLink";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";
import { RelatedCharlotteServices } from "@/components/RelatedCharlotteServices";

const STAGES = [
  { title: "1-Step Enhancement Polish", price: "From $618", improvement: "~60-70% defect removal", best: "Daily drivers with light swirl marks or minor hazing" },
  { title: "2-Step Paint Correction", price: "From $1,030", improvement: "~85-95% defect removal", best: "Moderate swirls, water spots & scratches — our most popular option", popular: true },
  { title: "Multi-Stage Correction", price: "From $1,700", improvement: "~95-99% defect removal", best: "Severely neglected paint, deep scratches, oxidation" },
];

const CHARLOTTE_AREAS = [
  { name: "Ballantyne", distance: "~20 min" },
  { name: "SouthPark", distance: "~25 min" },
  { name: "Myers Park", distance: "~30 min" },
  { name: "Uptown Charlotte", distance: "~35 min" },
  { name: "Weddington", distance: "~10 min" },
  { name: "Marvin", distance: "~5 min" },
  { name: "Indian Trail", distance: "~15 min" },
  { name: "Fort Mill, SC", distance: "~20 min" },
];

export function PaintCorrectionCharlottePage() {
  const { config } = useSiteConfig();

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Paint Correction Charlotte NC — Swirl & Scratch Removal"
        description="Professional paint correction in Charlotte, NC. Remove swirls, scratches & oxidation with multi-stage machine polishing. 12+ years experience. Free paint assessment."
        keywords="paint correction Charlotte NC, swirl removal Charlotte, scratch removal Charlotte NC, paint polishing Charlotte, paint restoration near me, multi-stage paint correction Charlotte, car paint correction south Charlotte, paint correction Waxhaw NC, paint correction near me"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Paint Correction", "item": "https://www.proworxdetailing.com/paint-correction" },
                { "@type": "ListItem", "position": 3, "name": "Charlotte NC", "item": "https://www.proworxdetailing.com/paint-correction-charlotte-nc" }
              ]
            },
            {
              "@type": "Service",
              "serviceType": "Paint Correction",
              "provider": {
                "@type": "AutoRepair",
                "name": "ProWorx Mobile Detailing",
                "address": { "@type": "PostalAddress", "addressLocality": "Waxhaw", "addressRegion": "NC", "postalCode": "28173" },
                "telephone": "(980) 272-1903",
                "url": "https://www.proworxdetailing.com",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "57" }
              },
              "areaServed": [
                { "@type": "City", "name": "Charlotte", "sameAs": "https://en.wikipedia.org/wiki/Charlotte,_North_Carolina" },
                { "@type": "City", "name": "Waxhaw" },
                { "@type": "City", "name": "Weddington" },
                { "@type": "City", "name": "Indian Trail" }
              ],
              "description": "Multi-stage paint correction and polishing for vehicles in Charlotte, NC and surrounding areas. Swirl removal, scratch removal, water spot removal, and oxidation correction.",
              "offers": { "@type": "Offer", "priceRange": "$618-$1,030+", "priceCurrency": "USD" }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "How much does paint correction cost in Charlotte, NC?", "acceptedAnswer": { "@type": "Answer", "text": "Paint correction in Charlotte typically costs $618–$1,030+ depending on the severity of defects and vehicle size. A 1-step enhancement polish starts at $618, 2-step correction from $1,030, and multi-stage correction from $1,700. ProWorx offers free paint assessments to recommend the right level." }},
                { "@type": "Question", "name": "Is paint correction worth it before ceramic coating?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Ceramic coating locks in whatever condition your paint is in — so correcting swirls, scratches, and imperfections first means you're protecting a flawless finish. Most detailers recommend at least a 1-step polish before coating, and ProWorx includes a light prep polish with every ceramic package." }},
                { "@type": "Question", "name": "How long does paint correction last?", "acceptedAnswer": { "@type": "Answer", "text": "Paint correction results are permanent — the defects are physically removed from the clear coat. However, new swirls can develop over time from improper washing. To preserve results, we recommend ceramic coating after correction and using proper wash techniques. ProWorx offers maintenance plans to keep your paint looking perfect." }},
                { "@type": "Question", "name": "Can you do paint correction on a new car?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, and it's surprisingly common. New cars often pick up swirl marks during dealer prep, transport, and PDI (pre-delivery inspection). A light 1-step polish followed by ceramic coating is the ideal new car treatment to lock in a perfect finish from day one." }},
                { "@type": "Question", "name": "Does ProWorx offer mobile paint correction in Charlotte?", "acceptedAnswer": { "@type": "Answer", "text": "Paint correction is best performed in a controlled environment with proper lighting. We offer drop-off service at our Waxhaw facility (convenient to South Charlotte, Ballantyne, Weddington, and Indian Trail), which ensures the best results. We also offer mobile service for light correction work." }}
              ]
            }
          ]
        }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="paint-correction-charlotte-hero" fallback="/images/ceramic-audi-front.jpg" alt="Paint correction on white Audi e-tron GT in Charlotte NC" className="w-full h-full object-cover" loading="eager" focalY={30} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="size-3.5" />
              Charlotte's Paint Correction Specialists
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Paint Correction in{" "}
              <span className="text-gradient-gold">Charlotte, NC</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Remove swirl marks, scratches, water spots, and oxidation with professional multi-stage machine polishing. Restore your vehicle's showroom finish — backed by 12+ years of experience and 57+ five-star reviews.
            </p>
            <div className="flex items-center gap-2 text-sm text-gold mb-8">
              <Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" />
              <span className="text-muted-foreground">5.0 on Google (57+ reviews)</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <BookNowLink href={config.bookingUrlPaintCorrection || undefined}>Free Paint Assessment <ArrowRight className="size-5" /></BookNowLink>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> {config.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is paint correction */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">What Is Paint Correction?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Paint correction is a professional machine polishing process that physically removes imperfections from your vehicle's clear coat. Unlike wax or sealant that temporarily fills scratches, paint correction <strong>permanently eliminates</strong> swirl marks, light scratches, water spots, and oxidation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Using Rupes precision polishers and professional-grade compounds, we measure paint depth, carefully remove the thinnest possible layer of clear coat, and restore a mirror-like finish. The result is paint that looks better than showroom new.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Swirl mark removal", "Scratch correction", "Water spot removal", "Oxidation restoration", "Clear coat leveling", "Mirror-like finish"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-gold shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <CmsImg slot="paint-correction-clt-before" fallback="/images/ceramic-audi-rear.jpg" alt="Audi e-tron GT after paint correction by ProWorx in Charlotte" className="rounded-2xl w-full aspect-[3/4] object-cover shadow-xl" />
          </div>
        </div>
      </section>

      {/* Correction Packages */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Paint Correction Packages</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every vehicle is different. We assess your paint's condition and recommend the right level of correction for your Charlotte vehicle.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {STAGES.map((stage) => (
              <div key={stage.title} className={`rounded-2xl bg-card border p-7 flex flex-col relative ${stage.popular ? "border-gold shadow-lg shadow-gold/10" : "border-border"}`}>
                {stage.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-full">Most Popular</div>}
                <h3 className="font-bold text-lg mb-1 text-gold">{stage.title}</h3>
                <p className="text-2xl font-black mb-1">{stage.price}</p>
                <p className="text-sm text-muted-foreground mb-4">{stage.improvement}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  <span className="font-semibold text-foreground">Best for:</span> {stage.best}
                </p>
                <Button className={stage.popular ? "bg-gold text-gold-foreground hover:bg-gold/90 font-bold" : "bg-muted text-foreground hover:bg-muted/80 font-semibold"} asChild>
                  <BookNowLink href={config.bookingUrlPaintCorrection || undefined}>Book Now <ArrowRight className="size-4" /></BookNowLink>
                </Button>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">Prices shown for sedan-size vehicles. SUVs, trucks, and larger vehicles priced higher.</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">Our Paint Correction Process</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Every correction follows our proven process — no shortcuts, no compromises.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { step: "1", title: "Paint Inspection & Measurement", desc: "We inspect your paint under LED lighting and measure clear coat thickness with a paint depth gauge. This determines the safest correction approach." },
                { step: "2", title: "Decontamination & Clay Bar", desc: "Full wash, iron removal, tar removal, and clay bar treatment to strip all bonded contaminants from the paint surface." },
                { step: "3", title: "Machine Polishing", desc: "Using Rupes precision polishers, we systematically correct each panel. Compound stage removes defects, polish stage refines to a mirror finish." },
                { step: "4", title: "IPA Wipe & Final Inspection", desc: "Isopropyl alcohol wipe reveals the true finish without fillers. Final panel-by-panel inspection under LED ensures perfection." },
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

      {/* Why Pair with Ceramic Coating */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <CmsImg slot="paint-correction-clt-coating" fallback="/images/ceramic-bmw-x3m.jpg" alt="BMW X3 M after paint correction and ceramic coating" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-xl" />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Paint Correction + Ceramic Coating</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The best time to apply ceramic coating is immediately after paint correction. You're locking in a <strong>flawless, swirl-free finish</strong> under years of protection. It's the most cost-effective way to keep your car looking perfect long-term.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Corrected paint + coating = showroom finish for years",
                  "Hydrophobic protection repels water, dirt & contaminants",
                  "UV protection prevents future oxidation",
                  "Dramatically reduces maintenance time",
                  "Preserves and increases resale value",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold" asChild>
                <Link to="/ceramic-coating">View Ceramic Coating Packages <ArrowRight className="size-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Paint Correction Near You</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Based in Waxhaw, NC — serving Charlotte and all surrounding communities. Drop-off service at our facility with professional lighting and climate control for the best correction results.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {CHARLOTTE_AREAS.map((area) => (
                <div key={area.name} className="rounded-xl bg-card border border-border p-4 text-center">
                  <MapPin className="size-4 text-gold mx-auto mb-1" />
                  <p className="font-semibold text-sm">{area.name}</p>
                  <p className="text-xs text-muted-foreground">{area.distance}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">Paint Correction FAQ — Charlotte, NC</h2>
            <div className="space-y-6">
              {[
                { q: "How much does paint correction cost in Charlotte, NC?", a: "Paint correction in Charlotte typically costs $618–$1,030+ depending on the severity of defects and vehicle size. A 1-step enhancement polish starts at $618, 2-step correction from $1,030, and multi-stage correction from $1,700. We offer free paint assessments to recommend the right level for your vehicle." },
                { q: "Is paint correction worth it before ceramic coating?", a: "Absolutely. Ceramic coating locks in whatever condition your paint is in — so correcting swirls, scratches, and imperfections first means you're protecting a flawless finish. Every ProWorx ceramic coating package includes a light prep polish, but deeper correction may be needed for older or neglected paint." },
                { q: "How long does paint correction last?", a: "Paint correction results are permanent — the defects are physically removed from the clear coat. However, new swirls can develop over time from improper washing. To preserve results, we recommend ceramic coating and proper wash techniques. ProWorx offers maintenance plans to keep your paint looking perfect." },
                { q: "Can you remove deep scratches with paint correction?", a: "Paint correction removes defects within the clear coat layer. If a scratch has penetrated through the clear coat into the base coat or primer, it cannot be fully removed by polishing alone. During our free paint assessment, we'll identify which defects can be corrected and set realistic expectations." },
                { q: "Do you offer mobile paint correction in Charlotte?", a: "Paint correction is best performed in a controlled environment with proper lighting. We offer convenient drop-off service at our Waxhaw facility — just minutes from South Charlotte, Ballantyne, Weddington, and Indian Trail. The controlled environment ensures the best possible results." },
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
      <RelatedCharlotteServices currentPath="/paint-correction-charlotte-nc" />
      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="paint-correction-clt-cta" fallback="/images/ceramic-bay-hex.jpg" alt="ProWorx detailing facility with hex LED lighting" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Ready for a <span className="text-gradient-gold">Flawless Finish</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Book a free paint assessment. We'll inspect your vehicle under LED lighting and recommend the perfect correction package for your Charlotte ride.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
              <BookNowLink href={config.bookingUrlPaintCorrection || undefined}>Book Paint Correction <ArrowRight className="size-5" /></BookNowLink>
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
