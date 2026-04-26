import { ArrowRight, Car, CheckCircle2, Clock, MapPin, Phone, Shield, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { BookNowLink } from "@/components/BookNowLink";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";
import { RelatedCharlotteServices } from "@/components/RelatedCharlotteServices";

const SERVICES = [
  { title: "Full Detailing", desc: "Standard & Ceramic interior + exterior packages from $258", link: "/services", icon: <Car className="size-5" /> },
  { title: "Ceramic Coating", desc: "GYEON & IGL certified — 1 to 10-year paint protection from $499", link: "/ceramic-coating", icon: <Shield className="size-5" /> },
  { title: "Paint Correction", desc: "Multi-stage machine polishing — remove swirls, scratches & oxidation", link: "/paint-correction", icon: <Sparkles className="size-5" /> },
  { title: "Maintenance Plans", desc: "Biweekly, monthly, or quarterly subscription detailing", link: "/maintenance", icon: <Clock className="size-5" /> },
];

const WHY_PROWORX = [
  { title: "12+ Years of Experience", desc: "Serving Charlotte since 2013. We've detailed thousands of vehicles from daily drivers to exotics." },
  { title: "57+ Five-Star Reviews", desc: "Perfect 5.0 Google rating. Our results speak for themselves — and so do our customers." },
  { title: "Certified Coating Installer", desc: "GYEON & IGL certified. Professional-grade products only available through authorized installers." },
  { title: "Fully Mobile Service", desc: "We come to your home or office with our self-contained mobile unit. No need to drop off anywhere." },
  { title: "Eco-Friendly Operations", desc: "Full water reclamation, biodegradable products, responsible waste disposal. Great results, zero guilt." },
  { title: "Transparent Pricing", desc: "No surprise charges. Clear packages, honest assessments, and free consultations before every job." },
];

const AREAS = [
  "Ballantyne", "SouthPark", "Myers Park", "Uptown Charlotte", "Dilworth",
  "South End", "NoDa", "Plaza Midwood", "Weddington", "Marvin",
  "Indian Trail", "Waxhaw", "Fort Mill, SC", "Tega Cay, SC",
];

export function CarDetailingCharlottePage() {
  const { config } = useSiteConfig();

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Car Detailing Charlotte NC — ProWorx Mobile Detailing"
        description="Professional car detailing in Charlotte, NC. Interior & exterior detail, paint correction, ceramic coating. Mobile or drop-off. 5.0★ rated, 12+ years experience."
        keywords="car detailing Charlotte NC, auto detailing Charlotte, best car detailing Charlotte NC, car detailing near me, professional car detailing Charlotte, interior car detailing Charlotte, exterior car detailing Charlotte NC, luxury car detailing Charlotte, car cleaning Charlotte NC, auto detail Charlotte NC"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Car Detailing Charlotte NC", "item": "https://www.proworxdetailing.com/car-detailing-charlotte-nc" }
              ]
            },
            {
              "@type": "AutoRepair",
              "name": "ProWorx Mobile Detailing",
              "description": "Professional car detailing, paint correction, and ceramic coating in Charlotte, NC and surrounding areas.",
              "address": { "@type": "PostalAddress", "streetAddress": "4321 Overbecks Ln", "addressLocality": "Waxhaw", "addressRegion": "NC", "postalCode": "28173" },
              "telephone": "(980) 272-1903",
              "url": "https://www.proworxdetailing.com",
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "57" },
              "priceRange": "$$",
              "openingHoursSpecification": [
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday"], "opens": "09:30", "closes": "18:00" }
              ],
              "areaServed": [
                { "@type": "City", "name": "Charlotte" },
                { "@type": "City", "name": "Waxhaw" },
                { "@type": "City", "name": "Ballantyne" },
                { "@type": "City", "name": "Weddington" },
                { "@type": "City", "name": "Indian Trail" },
                { "@type": "City", "name": "Fort Mill" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Car Detailing Services",
                "itemListElement": [
                  { "@type": "OfferCatalog", "name": "Mobile Detailing", "itemListElement": [{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Standard Detail" }, "price": "179", "priceCurrency": "USD" }] },
                  { "@type": "OfferCatalog", "name": "Ceramic Coating", "itemListElement": [{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "1-Year Ceramic Coating" }, "price": "499", "priceCurrency": "USD" }] },
                  { "@type": "OfferCatalog", "name": "Paint Correction", "itemListElement": [{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "1-Step Enhancement Polish" }, "price": "350", "priceCurrency": "USD" }] }
                ]
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is the best car detailing service in Charlotte, NC?", "acceptedAnswer": { "@type": "Answer", "text": "ProWorx Mobile Detailing is consistently rated the top car detailing service in the Charlotte area with a perfect 5.0 Google rating across 57+ reviews. As a GYEON & IGL certified installer with 12+ years of experience, ProWorx offers everything from basic details to professional ceramic coating and multi-stage paint correction." }},
                { "@type": "Question", "name": "How much does car detailing cost in Charlotte?", "acceptedAnswer": { "@type": "Answer", "text": "Car detailing in Charlotte ranges from $258 for a Standard Detail (full inside & out) to $735 for an Elite Ceramic Detail (van). Ceramic coating packages start at $499. Prices vary by vehicle size — SUVs and trucks are typically higher." }},
                { "@type": "Question", "name": "Does ProWorx come to my location in Charlotte?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! ProWorx is a fully mobile, self-contained detailing service. We come to your home, office, or any location in Charlotte and surrounding areas with our own water, power, and professional equipment. We also offer drop-off service at our Waxhaw facility for paint correction and ceramic coating work." }},
                { "@type": "Question", "name": "How often should I get my car detailed?", "acceptedAnswer": { "@type": "Answer", "text": "For most Charlotte drivers, we recommend a full detail every 3-6 months, with regular maintenance washes in between. If you park outside, have pets, or drive frequently, monthly detailing keeps your vehicle in top condition. ProWorx offers maintenance subscriptions (biweekly, monthly, quarterly) for the best value." }}
              ]
            }
          ]
        }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="car-detailing-clt-hero" fallback="/images/ferrari-van.jpg" alt="Professional car detailing in Charlotte NC by ProWorx" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6 backdrop-blur-sm">
              <Star className="size-3.5 fill-gold" />
              5.0 Stars — 57+ Google Reviews
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Car Detailing in{" "}
              <span className="text-gradient-gold">Charlotte, NC</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              From a quick refresh to a full showroom restoration — ProWorx Mobile Detailing has been Charlotte's trusted choice for over 12 years. Mobile service at your location or drop-off at our professional facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <BookNowLink>Book Your Detail <ArrowRight className="size-5" /></BookNowLink>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> {config.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">Our Detailing Services</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Everything your vehicle needs — from routine care to professional paint protection.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {SERVICES.map((svc) => (
                <Link key={svc.title} to={svc.link} className="rounded-xl bg-card border border-border p-6 hover:border-gold/50 transition-colors flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">{svc.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base mb-1">{svc.title}</h3>
                    <p className="text-sm text-muted-foreground">{svc.desc}</p>
                  </div>
                  <ArrowRight className="size-4 text-muted-foreground mt-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery / Social Proof */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">Recent Work</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Real results from Charlotte vehicles — ceramic coatings, paint corrections, and full details.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { slot: "gallery-audi-front", src: "/images/ceramic-audi-front.jpg", alt: "Audi e-tron GT ceramic coated" },
              { slot: "gallery-escalade-rear", src: "/images/ceramic-escalade-rear.jpg", alt: "Cadillac Escalade detailed" },
              { slot: "gallery-tesla-front", src: "/images/ceramic-tesla-front.jpg", alt: "Tesla Model S ceramic coating" },
              { slot: "gallery-bmw-x3m", src: "/images/ceramic-bmw-x3m.jpg", alt: "BMW X3 M paint correction" },
              { slot: "gallery-audi-rear", src: "/images/ceramic-audi-rear.jpg", alt: "Audi e-tron GT rear detail" },
              { slot: "gallery-escalade-front", src: "/images/ceramic-escalade-front.jpg", alt: "Escalade front detail" },
              { slot: "gallery-tesla-rear", src: "/images/ceramic-tesla-rear.jpg", alt: "Tesla Model S rear" },
              { slot: "gallery-bay-hex", src: "/images/ceramic-bay-hex.jpg", alt: "ProWorx detailing facility" },
            ].map((img) => (
              <CmsImg key={img.src} slot={img.slot} fallback={img.src} alt={img.alt} className="rounded-xl w-full aspect-[3/4] object-cover" />
            ))}
          </div>
        </div>
      </section>

      {/* Why ProWorx */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">Why Charlotte Trusts ProWorx</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_PROWORX.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Car Detailing Near You in Charlotte</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Based in Waxhaw, NC — serving all of Charlotte and surrounding communities with mobile and drop-off service.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {AREAS.map((area) => (
                <div key={area} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border text-sm">
                  <MapPin className="size-3 text-gold" />
                  {area}
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">Car Detailing FAQ — Charlotte, NC</h2>
            <div className="space-y-6">
              {[
                { q: "What is the best car detailing service in Charlotte, NC?", a: "ProWorx Mobile Detailing is consistently rated among the top detailing services in Charlotte with a perfect 5.0 Google rating across 57+ reviews. As a GYEON & IGL certified installer with 12+ years of experience, we handle everything from basic details to ceramic coating and multi-stage paint correction — for daily drivers and exotics alike." },
                { q: "How much does car detailing cost in Charlotte?", a: "Car detailing in Charlotte ranges from $258 for a Standard Detail to $735 for an Elite Ceramic Detail (van). Ceramic packages bundle protection products at 15% off. Ceramic coating starts at $499. Paint correction from $618. Prices vary by vehicle size — SUVs and trucks are typically higher. We offer free quotes." },
                { q: "Does ProWorx come to my location in Charlotte?", a: "Yes! We're a fully mobile, self-contained detailing service — we bring our own water, power, and professional equipment to your home, office, or any Charlotte location. For paint correction and ceramic coating, we also offer drop-off at our professional facility in Waxhaw." },
                { q: "How often should I get my car detailed?", a: "For most Charlotte drivers, a full detail every 3-6 months with maintenance washes in between keeps your vehicle in top condition. If you park outside, have pets, or drive frequently, monthly detailing is ideal. Our maintenance subscriptions (biweekly, monthly, quarterly) offer the best value for regular care." },
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
      <RelatedCharlotteServices currentPath="/car-detailing-charlotte-nc" />
      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="car-detailing-clt-cta" fallback="/images/ceramic-tesla-front.jpg" alt="Tesla Model S ceramic coated by ProWorx Charlotte" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Your Car Deserves{" "}
            <span className="text-gradient-gold">Charlotte's Best</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Book online in 60 seconds or call for a free consultation. Mobile or drop-off — we make it easy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
              <BookNowLink>Book Your Detail <ArrowRight className="size-5" /></BookNowLink>
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
