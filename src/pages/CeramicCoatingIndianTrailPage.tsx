import { ArrowRight, CheckCircle2, MapPin, Phone, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { BookNowLink } from "@/components/BookNowLink";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";

const COATING_TIERS = [
  { name: "1-Year Coating", price: "From $499", features: ["GYEON MOHS 1-year ceramic coating", "Light paint decontamination", "Single-layer application", "Hydrophobic water beading"], best: "Lease returns, budget-conscious protection" },
  { name: "3-Year Coating", price: "From $799", features: ["IGL Premier 3-year ceramic coating", "Full paint decontamination + clay", "1-step enhancement polish", "2 layers for deeper gloss", "Annual maintenance included"], popular: true, best: "Daily drivers — best value protection" },
  { name: "5-Year Coating", price: "From $1,299", features: ["IGL Kenzo 5-year ceramic coating", "Full decontamination + clay", "2-step paint correction", "3 layers for maximum protection", "Annual maintenance + touch-ups", "Hardness: 10H rated"], best: "Long-term vehicle owners & enthusiasts" },
];

const NEARBY = [
  { name: "Indian Trail", time: "~15 min" },
  { name: "Stallings", time: "~15 min" },
  { name: "Monroe", time: "~15 min" },
  { name: "Weddington", time: "~10 min" },
  { name: "Wesley Chapel", time: "~10 min" },
  { name: "Marvin", time: "~5 min" },
  { name: "Matthews", time: "~20 min" },
  { name: "Mint Hill", time: "~25 min" },
];

export function CeramicCoatingIndianTrailPage() {
  const { config } = useSiteConfig();

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Ceramic Coating Indian Trail NC — GYEON & IGL Certified"
        description="Professional ceramic coating in Indian Trail, NC. GYEON & IGL certified installer. 1-10 year protection packages. Paint correction + coating combo. Free quote."
        keywords="ceramic coating Indian Trail NC, ceramic coating near me, car ceramic coating Indian Trail, paint protection Indian Trail NC, GYEON ceramic coating Indian Trail, IGL ceramic coating Indian Trail, ceramic coating Stallings NC, ceramic coating Monroe NC, ceramic coating Matthews NC, auto ceramic coating near Indian Trail"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Ceramic Coating", "item": "https://www.proworxdetailing.com/ceramic-coating" },
                { "@type": "ListItem", "position": 3, "name": "Indian Trail NC", "item": "https://www.proworxdetailing.com/ceramic-coating-indian-trail-nc" }
              ]
            },
            {
              "@type": "Service",
              "serviceType": "Ceramic Coating",
              "provider": {
                "@type": "AutoRepair",
                "name": "ProWorx Mobile Detailing",
                "address": { "@type": "PostalAddress", "addressLocality": "Waxhaw", "addressRegion": "NC", "postalCode": "28173" },
                "telephone": "(980) 272-1903",
                "url": "https://www.proworxdetailing.com",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "53" }
              },
              "areaServed": [
                { "@type": "City", "name": "Indian Trail" },
                { "@type": "City", "name": "Stallings" },
                { "@type": "City", "name": "Monroe" },
                { "@type": "City", "name": "Wesley Chapel" },
                { "@type": "City", "name": "Weddington" },
                { "@type": "City", "name": "Matthews" }
              ],
              "description": "Professional GYEON and IGL certified ceramic coating installation for vehicles in Indian Trail, NC and surrounding Union County areas.",
              "offers": { "@type": "Offer", "priceRange": "$499-$2500+", "priceCurrency": "USD" }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "How much does ceramic coating cost in Indian Trail, NC?", "acceptedAnswer": { "@type": "Answer", "text": "Ceramic coating in Indian Trail starts at $499 for a 1-year GYEON coating and goes up to $2,500+ for a 10-year IGL Kenzo package with full multi-stage paint correction. The 3-year IGL Premier package at $799 is our most popular option, including paint decontamination, enhancement polish, and annual maintenance." }},
                { "@type": "Question", "name": "Where is ProWorx located near Indian Trail?", "acceptedAnswer": { "@type": "Answer", "text": "ProWorx is located in Waxhaw, NC — just 15 minutes from Indian Trail. Our professional detailing facility has climate-controlled bays with hex LED lighting for precise coating application. We serve Indian Trail, Stallings, Monroe, Wesley Chapel, Weddington, Matthews, and all surrounding areas." }},
                { "@type": "Question", "name": "Is ceramic coating worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, especially for Indian Trail drivers dealing with NC sun, pollen, and tree sap. Ceramic coating provides a permanent hydrophobic barrier that protects against UV damage, chemical staining, and light scratches. It makes washing dramatically easier and preserves your paint's appearance and resale value for years." }},
                { "@type": "Question", "name": "How long does ceramic coating last?", "acceptedAnswer": { "@type": "Answer", "text": "Depending on the package, ceramic coating lasts 1 to 10 years. Our 1-year GYEON MOHS coating is great for lease vehicles, the 3-year IGL Premier is ideal for daily drivers, and the 5-10 year IGL Kenzo packages are best for long-term owners and enthusiasts. All professional coatings come with a manufacturer warranty." }}
              ]
            }
          ]
        }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="ceramic-indian-trail-hero" fallback="/images/ceramic-tesla-front.jpg" alt="Ceramic coated Tesla near Indian Trail NC" className="w-full h-full object-cover" loading="eager" focalY={30} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6 backdrop-blur-sm">
              <Shield className="size-3.5" />
              GYEON & IGL Certified Installer
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Ceramic Coating in{" "}
              <span className="text-gradient-gold">Indian Trail, NC</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Professional ceramic coating just 15 minutes from Indian Trail. GYEON & IGL certified with climate-controlled application bays and hex LED lighting for flawless results. 1 to 10-year protection packages.
            </p>
            <div className="flex items-center gap-2 text-sm text-gold mb-8">
              <Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" />
              <span className="text-muted-foreground">5.0 on Google (53+ reviews)</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <BookNowLink href={config["widgetUrl:ceramic-coating-cta"] || config.bookingUrlCeramic || undefined}>Get a Free Quote <ArrowRight className="size-5" /></BookNowLink>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> {config.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is ceramic coating */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Why Indian Trail Drivers Choose Ceramic Coating</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                North Carolina's sun, pollen, tree sap, and unpredictable weather are brutal on your paint. Traditional wax lasts weeks. Ceramic coating lasts <strong>years</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A professional ceramic coating bonds to your clear coat at the molecular level, creating a permanent hydrophobic barrier that repels water, dirt, UV rays, and chemical contaminants. The result: a car that stays cleaner longer, washes easier, and looks showroom-fresh for years.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Permanent hydrophobic protection", "UV & oxidation defense", "Chemical stain resistance", "Self-cleaning effect", "Enhanced gloss & depth", "Preserves resale value"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-gold shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <CmsImg slot="ceramic-indian-trail-beading" fallback="/images/ceramic-escalade-rear.jpg" alt="Hydrophobic ceramic coating beading water on Escalade" className="rounded-2xl w-full aspect-[3/4] object-cover shadow-xl" />
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ceramic Coating Packages</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              GYEON & IGL certified coatings — professionally applied in a controlled environment for maximum durability.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {COATING_TIERS.map((tier) => (
              <div key={tier.name} className={`rounded-2xl bg-card border p-7 flex flex-col relative ${tier.popular ? "border-gold shadow-lg shadow-gold/10" : "border-border"}`}>
                {tier.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-full">Most Popular</div>}
                <h3 className="font-bold text-xl mb-1">{tier.name}</h3>
                <p className="text-2xl font-black mb-2">{tier.price}</p>
                <p className="text-xs text-muted-foreground mb-4"><strong>Best for:</strong> {tier.best}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className={tier.popular ? "bg-gold text-gold-foreground hover:bg-gold/90 font-bold" : "bg-muted text-foreground hover:bg-muted/80 font-semibold"} asChild>
                  <BookNowLink href={config["widgetUrl:ceramic-coating-cta"] || config.bookingUrlCeramic || undefined}>Book Now <ArrowRight className="size-4" /></BookNowLink>
                </Button>
              </div>
            ))}
          </div>
          <p className="text-center mt-4 text-sm text-muted-foreground">
            Also available: <Link to="/ceramic-coating" className="text-gold underline underline-offset-2">7-Year and 10-Year packages with full multi-stage paint correction</Link>
          </p>
        </div>
      </section>

      {/* Our Facility */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <CmsImg slot="ceramic-indian-trail-facility" fallback="/images/ceramic-bay-hex.jpg" alt="ProWorx ceramic coating facility with hex LED lighting" className="rounded-2xl w-full aspect-[3/4] object-cover shadow-xl" />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Professional Facility, 15 Min From Indian Trail</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ceramic coating requires a controlled environment for proper bonding. Our Waxhaw facility — just 15 minutes from Indian Trail — features climate-controlled bays with hex LED lighting that reveals every imperfection for flawless prep and application.
              </p>
              <div className="space-y-3">
                {[
                  "Climate-controlled application bays",
                  "Hex LED lighting for perfect paint inspection",
                  "Dust-free environment for coating cure",
                  "Professional Rupes polishing equipment",
                  "Paint thickness gauge for safe correction",
                  "Convenient drop-off & pick-up",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-gold shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Serving Indian Trail & All of Union County</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Located in Waxhaw — convenient to Indian Trail and all surrounding Union County and South Charlotte communities.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {NEARBY.map((area) => (
                <div key={area.name} className="rounded-xl bg-card border border-border p-4 text-center">
                  <MapPin className="size-4 text-gold mx-auto mb-1" />
                  <p className="font-semibold text-sm">{area.name}</p>
                  <p className="text-xs text-muted-foreground">{area.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">Ceramic Coating FAQ — Indian Trail, NC</h2>
            <div className="space-y-6">
              {[
                { q: "How much does ceramic coating cost near Indian Trail?", a: "Ceramic coating near Indian Trail starts at $499 for a 1-year GYEON coating up to $2,500+ for a 10-year package with full paint correction. Our most popular 3-year IGL Premier package is $799 and includes paint decontamination, enhancement polish, and annual maintenance." },
                { q: "Where is ProWorx located near Indian Trail?", a: "ProWorx is in Waxhaw, NC — just 15 minutes from Indian Trail via NC-84 or US-74. Our professional facility has climate-controlled bays with hex LED lighting for precise coating application. Easy drop-off with flexible scheduling." },
                { q: "Is ceramic coating worth it in North Carolina?", a: "Absolutely — NC's intense sun, pollen seasons, tree sap, and humidity make ceramic coating one of the best investments for your vehicle. It provides year-round UV protection, chemical resistance, and hydrophobic properties that make pollen and sap wash off effortlessly." },
                { q: "How long does ceramic coating installation take?", a: "Most coating installations take 1-3 days depending on the package. This includes paint decontamination, correction/polish, coating application, and initial cure time. We'll coordinate drop-off and pick-up timing that works with your schedule." },
                { q: "Do you need to do paint correction before ceramic coating?", a: "We recommend it. Ceramic coating locks in whatever condition your paint is in — so correcting swirls and scratches first means you're protecting a flawless finish. Our 3-year and higher packages include paint correction. The 1-year package includes a light decontamination." },
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

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="ceramic-indian-trail-cta" fallback="/images/ceramic-audi-front.jpg" alt="Audi e-tron GT ceramic coated by ProWorx near Indian Trail" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Protect Your Paint for{" "}
            <span className="text-gradient-gold">Years to Come</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Book a free consultation or call for an instant quote. Just 15 minutes from Indian Trail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
              <BookNowLink href={config["widgetUrl:ceramic-coating-cta"] || config.bookingUrlCeramic || undefined}>Get a Free Quote <ArrowRight className="size-5" /></BookNowLink>
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
