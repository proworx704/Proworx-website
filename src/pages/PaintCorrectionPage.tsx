import { ArrowRight, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { BookNowLink } from "@/components/BookNowLink";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";

const STAGES = [
  {
    title: "1-Step Enhancement Polish",
    slug: "1-step-enhancement-polish",
    description: "Removes light swirls and minor imperfections. Restores depth and gloss for vehicles in good condition needing a refresh.",
    ideal: "Daily drivers with light swirl marks",
    improvement: "~60-70% defect removal",
  },
  {
    title: "2-Step Paint Correction",
    slug: "2-step-paint-correction",
    description: "A compounding stage to remove deeper scratches and heavy swirl marks, followed by a fine polishing stage for a mirror-like finish.",
    ideal: "Vehicles with moderate paint damage",
    improvement: "~85-95% defect removal",
  },
  {
    title: "Multi-Stage Correction",
    slug: "multi-stage-correction",
    description: "Our most thorough correction process with multiple cutting and polishing stages. Transforms neglected paint to showroom-quality perfection.",
    ideal: "Severely damaged or neglected paint",
    improvement: "~95-99% defect removal",
  },
];

export function PaintCorrectionPage() {
  const { config } = useSiteConfig();
  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Paint Correction"
        description="Professional multi-stage paint correction in Charlotte, NC. Remove swirls, scratches & oxidation. Restore your vehicle's showroom finish. Mobile service available."
        keywords="paint correction Charlotte NC, swirl removal, scratch removal Charlotte, paint restoration, multi-stage paint correction near me"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Paint Correction", "item": "https://www.proworxdetailing.com/paint-correction" }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is paint correction?", "acceptedAnswer": { "@type": "Answer", "text": "Paint correction is a multi-stage machine polishing process that removes surface imperfections like swirl marks, light scratches, water spots, and oxidation from your vehicle's clear coat. It restores the paint to a smooth, glossy, showroom-like finish." }},
                { "@type": "Question", "name": "What are the different levels of paint correction?", "acceptedAnswer": { "@type": "Answer", "text": "ProWorx offers three levels: 1-Step Enhancement Polish (60-70% defect removal for light swirls), 2-Step Paint Correction (85-95% removal for moderate damage), and Multi-Stage Correction (95-99% removal for severely damaged paint)." }},
                { "@type": "Question", "name": "Should I get paint correction before ceramic coating?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, if your paint has swirls, scratches, or oxidation, paint correction before ceramic coating ensures the best results. Ceramic coating locks in whatever the paint looks like — so correcting first means you're protecting a flawless finish." }}
              ]
            }
          ]
        }}
      />
      {/* Hero with image */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="paint-hero" fallback="/images/tesla-bay.jpg" alt="Tesla in ProWorx detailing bay for paint correction" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="size-3.5" />
              Paint Correction Specialist
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Professional <span className="text-gradient-gold">Paint Correction</span> in Charlotte, NC
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Remove swirl marks, scratches, water spots, and oxidation. Our multi-stage machine polishing process restores your vehicle's paint to a flawless, mirror-like finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <BookNowLink href={config.bookingUrlPaintCorrection || undefined}>Get a Quote <ArrowRight className="size-5" /></BookNowLink>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> {config.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Correction Stages with image */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Correction Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Every vehicle is different. We assess your paint's condition and recommend the right level of correction.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {STAGES.map((stage) => {
              const widgetUrl = config[`widgetUrl:${stage.slug}`];
              const bookUrl = widgetUrl || config.bookingUrlPaintCorrection || undefined;
              return (
                <div key={stage.title} className="rounded-2xl bg-card border border-border p-7 flex flex-col">
                  <h3 className="font-bold text-lg mb-3 text-gold">{stage.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{stage.description}</p>
                  <div className="space-y-2 text-sm mb-5">
                    <div className="flex items-start gap-2"><CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" /><span><strong>Ideal for:</strong> {stage.ideal}</span></div>
                    <div className="flex items-start gap-2"><CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" /><span><strong>Result:</strong> {stage.improvement}</span></div>
                  </div>
                  <Button size="sm" className="bg-gold text-gold-foreground hover:bg-gold/90 font-semibold mt-auto" asChild>
                    <BookNowLink href={bookUrl}>Book Now <ArrowRight className="size-4" /></BookNowLink>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included with side image */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">What's Included</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Full paint decontamination & clay bar",
                  "Iron & tar removal",
                  "Machine polish with Rupes tools",
                  "Paint depth measurements",
                  "IPA wipe-down for true finish evaluation",
                  "Final sealant or wax protection",
                  "Panel-by-panel inspection",
                  "Before & after documentation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border">
                    <CheckCircle2 className="size-4 text-gold shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <CmsImg slot="paint-results" fallback="/images/corvette-front.jpg" alt="Corvette ZR1 mirror finish after paint correction by ProWorx" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-xl" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Ready for a <span className="text-gradient-gold">Flawless Finish</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Contact us for a free paint assessment. We'll recommend the right level of correction for your vehicle.
          </p>
          <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
            <BookNowLink href={config["widgetUrl:paint-correction-cta"] || config.bookingUrlPaintCorrection || undefined}>Book Your Correction <ArrowRight className="size-5" /></BookNowLink>
          </Button>
        </div>
      </section>
    </div>
  );
}
