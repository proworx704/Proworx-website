import { ArrowRight, Car, CheckCircle2, Clock, Droplets, MapPin, Phone, Shield, Sparkles, Star, Award, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { BookNowLink } from "@/components/BookNowLink";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";
import { RelatedCharlotteServices } from "@/components/RelatedCharlotteServices";

const PACKAGES = [
  { name: "Standard Exterior", price: "From $138", features: ["Hand wash & dry", "Tire & wheel cleaning", "Tire dressing", "Exterior glass cleaning", "Door jamb wipe-down"], best: "Quick refresh \u2014 removes dirt, grime, and road film" },
  { name: "Premium Exterior", price: "From $258", features: ["Everything in Standard", "Clay bar decontamination", "1-step polish", "Paint sealant application", "Plastic & trim dressing", "Exhaust tip polishing"], popular: true, best: "Deep clean & protect \u2014 removes contaminants and seals paint" },
  { name: "Elite Exterior", price: "From $499", features: ["Everything in Premium", "Multi-step paint correction", "12-month ceramic wax", "Ceramic tire dressing", "Trim ceramic coating", "Water spot removal"], best: "Show-car finish \u2014 correction, ceramic, and long-term protection" },
];

const EXTERIOR_SERVICES = [
  { icon: <Droplets className="size-5" />, title: "Hand Wash & Dry", desc: "Gentle two-bucket method with pH-neutral foam \u2014 no swirl marks" },
  { icon: <Sparkles className="size-5" />, title: "Paint Correction", desc: "Multi-stage machine polishing to remove swirls, scratches, and oxidation" },
  { icon: <Shield className="size-5" />, title: "Ceramic Protection", desc: "GYEON & IGL certified coatings \u2014 1 to 10-year hydrophobic protection" },
  { icon: <Sun className="size-5" />, title: "Trim & Wheel Care", desc: "Restore faded plastics, dress tires, and deep-clean wheels and barrels" },
];

const SERVICE_AREAS = [
  { name: "Ballantyne", time: "~20 min" },
  { name: "SouthPark", time: "~25 min" },
  { name: "Myers Park", time: "~30 min" },
  { name: "Uptown Charlotte", time: "~35 min" },
  { name: "Dilworth", time: "~30 min" },
  { name: "South End", time: "~30 min" },
  { name: "NoDa", time: "~35 min" },
  { name: "Weddington", time: "~10 min" },
  { name: "Marvin", time: "~5 min" },
  { name: "Indian Trail", time: "~15 min" },
  { name: "Fort Mill, SC", time: "~20 min" },
  { name: "Tega Cay, SC", time: "~25 min" },
];

export function ExteriorDetailingCharlottePage() {
  const { config } = useSiteConfig();

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Exterior Detailing Charlotte NC \u2014 Mobile Service"
        description="Professional exterior detailing in Charlotte, NC. Hand wash, clay bar, paint correction, ceramic coating, and paint protection. Mobile service. 5.0\u2605 rated with 60+ reviews. Book today."
        keywords="exterior detailing charlotte nc, exterior car detailing charlotte, exterior auto detailing charlotte nc, car wash charlotte nc, hand car wash charlotte nc, paint correction charlotte nc, exterior detail charlotte, car exterior cleaning charlotte nc, exterior detailing near me charlotte, best exterior detailing charlotte nc, mobile exterior detailing charlotte, clay bar treatment charlotte nc"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.proworxdetailing.com/services" },
                { "@type": "ListItem", "position": 3, "name": "Exterior Detailing Charlotte NC", "item": "https://www.proworxdetailing.com/exterior-detailing-charlotte-nc" }
              ]
            },
            {
              "@type": "Service",
              "name": "Exterior Detailing Charlotte NC",
              "description": "Professional exterior car detailing in Charlotte, NC. Hand wash, clay bar decontamination, paint correction, ceramic coating, and paint protection. Mobile service available.",
              "provider": {
                "@type": "AutoRepair",
                "name": "ProWorx Mobile Detailing",
                "telephone": "(980) 272-1903",
                "url": "https://www.proworxdetailing.com",
                "address": { "@type": "PostalAddress", "streetAddress": "3008 Collaroy Rd", "addressLocality": "Waxhaw", "addressRegion": "NC", "postalCode": "28173", "addressCountry": "US" },
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "59" }
              },
              "areaServed": [
                { "@type": "City", "name": "Charlotte" },
                { "@type": "City", "name": "Ballantyne" },
                { "@type": "City", "name": "SouthPark" },
                { "@type": "City", "name": "Weddington" },
                { "@type": "City", "name": "Indian Trail" },
                { "@type": "City", "name": "Fort Mill" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Exterior Detailing Packages",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Standard Exterior Detail" }, "price": "138", "priceCurrency": "USD" },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Premium Exterior Detail" }, "price": "258", "priceCurrency": "USD" },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Elite Exterior Detail" }, "price": "499", "priceCurrency": "USD" }
                ]
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "How much does exterior detailing cost in Charlotte NC?", "acceptedAnswer": { "@type": "Answer", "text": "Exterior detailing in Charlotte starts at $138 for a Standard Exterior (sedan) which includes hand wash, tire and wheel cleaning, and glass. Premium packages with clay bar and polish start at $258. Elite packages with paint correction and ceramic protection start at $499. Prices vary by vehicle size." }},
                { "@type": "Question", "name": "What is the difference between a car wash and exterior detailing?", "acceptedAnswer": { "@type": "Answer", "text": "A car wash removes surface dirt. Exterior detailing goes much deeper: clay bar decontamination removes embedded particles, machine polishing corrects paint imperfections, and sealants or ceramic coatings provide lasting protection. Detailing restores and protects your paint; a wash just cleans it." }},
                { "@type": "Question", "name": "Do you offer paint correction in Charlotte?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. ProWorx offers single-stage and multi-stage paint correction. We use professional dual-action and rotary polishers with GYEON and Rupes compounds to safely remove swirl marks, light scratches, water spots, and oxidation. Results are dramatic and lasting, especially when followed by ceramic coating." }},
                { "@type": "Question", "name": "How long does exterior detailing take?", "acceptedAnswer": { "@type": "Answer", "text": "A Standard Exterior takes about 1\u20131.5 hours. Premium with clay bar and polish takes 2\u20133 hours. Elite with full paint correction and ceramic application can take 4\u20138 hours depending on paint condition. We take the time needed to do it right." }},
                { "@type": "Question", "name": "Will detailing remove scratches from my car?", "acceptedAnswer": { "@type": "Answer", "text": "Detailing with paint correction can remove or significantly reduce light scratches, swirl marks, water spots, and oxidation. Deep scratches that have gone through the clear coat may need touch-up paint first. During your free consultation, we will assess your paint and set realistic expectations." }}
              ]
            }
          ]
        }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="exterior-detailing-clt-hero" fallback="/images/ceramic-audi-front.jpg" alt="Professional exterior detailing in Charlotte NC by ProWorx" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6 backdrop-blur-sm">
              <Award className="size-3.5" />
              Charlotte's 5-Star Exterior Detailing
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Exterior Detailing in{" "}
              <span className="text-gradient-gold">Charlotte, NC</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Hand wash, clay bar, paint correction, and ceramic coating from Charlotte's highest-rated detailing service. Mobile to your door or drop-off available. 12+ years experience and 60+ five-star Google reviews.
            </p>
            <div className="flex items-center gap-2 text-sm text-gold mb-8">
              <Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" />
              <span className="text-muted-foreground">5.0 on Google (60+ reviews)</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <BookNowLink>Book Exterior Detail <ArrowRight className="size-5" /></BookNowLink>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> {config.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">Professional Exterior Care, Start to Finish</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Every exterior detail follows a systematic process to clean, correct, and protect your vehicle's paint and trim.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {EXTERIOR_SERVICES.map((item) => (
                <div key={item.title} className="rounded-xl bg-card border border-border p-6 text-center">
                  <div className="size-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-4 mx-auto">{item.icon}</div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why ProWorx */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">Why Charlotte Trusts ProWorx for Exterior Detailing</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Precision, products, and experience that make a visible difference.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Star className="size-6" />, title: "60+ Five-Star Reviews", desc: "Perfect 5.0 Google rating. Our exterior results speak for themselves in every review." },
                { icon: <Shield className="size-6" />, title: "GYEON & IGL Certified", desc: "Authorized ceramic coating installer. We use coatings and compounds only available through certified shops." },
                { icon: <Award className="size-6" />, title: "12+ Years Experience", desc: "Thousands of vehicles detailed since 2013. From daily drivers to exotic supercars and everything in between." },
                { icon: <Sparkles className="size-6" />, title: "Paint Correction Experts", desc: "Professional dual-action and rotary polishing. We remove swirls, scratches, and oxidation that others leave behind." },
                { icon: <Car className="size-6" />, title: "Trucks, SUVs & Exotics", desc: "We handle vehicles of all sizes. Specialized lifts for trucks, gentle techniques for soft paints on luxury vehicles." },
                { icon: <Clock className="size-6" />, title: "Mobile or Drop-Off", desc: "We come to you with our fully equipped mobile unit, or you can drop off for paint correction and ceramic coating." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-card border border-border p-6">
                  <div className="size-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-4">{item.icon}</div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Exterior Detailing Packages \u2014 Charlotte, NC</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transparent pricing for every level of exterior care. Choose the right package for your vehicle's needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PACKAGES.map((pkg) => (
              <div key={pkg.name} className={`rounded-2xl bg-card border p-7 flex flex-col relative ${pkg.popular ? "border-gold shadow-lg shadow-gold/10" : "border-border"}`}>
                {pkg.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-full">Most Popular</div>}
                <h3 className="font-bold text-xl mb-1">{pkg.name}</h3>
                <p className="text-2xl font-black mb-2">{pkg.price}</p>
                <p className="text-xs text-muted-foreground mb-4"><strong>Best for:</strong> {pkg.best}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className={pkg.popular ? "bg-gold text-gold-foreground hover:bg-gold/90 font-bold" : "bg-muted text-foreground hover:bg-muted/80 font-semibold"} asChild>
                  <BookNowLink>Book Now <ArrowRight className="size-4" /></BookNowLink>
                </Button>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">Prices shown for sedans. SUVs, trucks, and larger vehicles priced individually. <Link to="/services" className="text-gold hover:underline">View all packages \u2192</Link></p>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Exterior Detailing Across the Charlotte Metro</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Based in Waxhaw, we bring professional exterior detailing to all of Charlotte and the surrounding communities.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
              {SERVICE_AREAS.map((area) => (
                <div key={area.name} className="rounded-xl bg-card border border-border p-4 text-center">
                  <MapPin className="size-4 text-gold mx-auto mb-1" />
                  <p className="font-semibold text-sm">{area.name}</p>
                  <p className="text-xs text-muted-foreground">{area.time}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Don't see your area? <a href={config.phoneLink} className="text-gold hover:underline">Give us a call</a> \u2014 we likely cover it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">Exterior Detailing FAQ \u2014 Charlotte, NC</h2>
            <div className="space-y-6">
              {[
                { q: "How much does exterior detailing cost in Charlotte NC?", a: "Exterior detailing in Charlotte starts at $138 for a Standard Exterior (sedan), which includes hand wash, tire and wheel cleaning, and glass. Premium packages with clay bar and polish start at $258. Elite packages with paint correction and ceramic protection start at $499. Prices vary by vehicle size and condition." },
                { q: "What is the difference between a car wash and exterior detailing?", a: "A car wash removes surface dirt. Exterior detailing is a multi-step process: thorough hand wash, clay bar decontamination to remove bonded contaminants, machine polishing to correct paint imperfections, and sealant or ceramic coating for lasting protection. Detailing restores and protects; a wash just cleans." },
                { q: "Do you offer paint correction in Charlotte?", a: "Yes. ProWorx offers single-stage enhancement polishing and multi-stage paint correction. We use professional dual-action and rotary polishers with GYEON and Rupes compounds to safely remove swirl marks, light scratches, water spots, and oxidation. Correction is recommended before ceramic coating for the best results." },
                { q: "How long does exterior detailing take?", a: "A Standard Exterior takes about 1\u20131.5 hours. Premium with clay bar and polish runs 2\u20133 hours. Elite with full paint correction and ceramic application can take 4\u20138 hours depending on paint condition and vehicle size. We never rush \u2014 the finish is worth the time." },
                { q: "Will detailing remove scratches from my car?", a: "Paint correction can remove or significantly reduce light scratches, swirl marks, water spots, and oxidation. Deep scratches through the clear coat may need touch-up paint first. During your free consultation, we assess your paint condition and set realistic expectations." },
                { q: "How long does ceramic coating last?", a: "Our GYEON and IGL ceramic coatings last 1 to 10 years depending on the product chosen. Ceramic provides hydrophobic protection, UV resistance, chemical resistance, and makes maintenance washes easier. We offer 1-year, 3-year, 5-year, and 10-year options." },
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

      <RelatedCharlotteServices currentPath="/exterior-detailing-charlotte-nc" />

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="exterior-detailing-clt-cta" fallback="/images/escalade-front.jpg" alt="ProWorx exterior detailing results Charlotte NC" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Ready for a <span className="text-gradient-gold">Head-Turning Finish</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Professional results, transparent pricing, and a perfect 5-star reputation. Book your exterior detail online or call for a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
              <BookNowLink>Book Exterior Detail <ArrowRight className="size-5" /></BookNowLink>
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
