import { ArrowRight, Car, CheckCircle2, Clock, MapPin, Phone, Shield, Sparkles, Star, Award, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { BookNowLink } from "@/components/BookNowLink";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";
import { RelatedCharlotteServices } from "@/components/RelatedCharlotteServices";

const PACKAGES = [
  { name: "Standard Detail", price: "From $258", features: ["Exterior hand wash & dry", "Tire & wheel cleaning", "Interior vacuum & wipe-down", "Glass cleaning inside & out", "Dashboard & console detail"], best: "Regular maintenance — keeps your vehicle clean and fresh" },
  { name: "Elite Ceramic Detail", price: "From $581", features: ["Everything in Standard", "Fabric protection & GYEON leather shield", "Ceramic tire dressing", "Plastic & trim ceramic coating", "12-month ceramic wax"], popular: true, best: "Ultimate protection — ceramic shield for the entire vehicle" },
];

const SERVICES = [
  { icon: <Car className="size-5" />, title: "Full Detailing", desc: "Complete interior & exterior detail packages from $258", link: "/services" },
  { icon: <Shield className="size-5" />, title: "Ceramic Coating", desc: "GYEON & IGL certified — 1-year to lifetime paint protection from $499", link: "/ceramic-coating-charlotte-nc" },
  { icon: <Sparkles className="size-5" />, title: "Paint Correction", desc: "Multi-stage machine polishing — remove swirls, scratches & oxidation", link: "/paint-correction-charlotte-nc" },
  { icon: <Clock className="size-5" />, title: "Maintenance Plans", desc: "Biweekly, monthly, or quarterly subscription detailing from $59/mo", link: "/maintenance" },
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

export function AutoDetailingCharlottePage() {
  const { config } = useSiteConfig();

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Auto Detailing Charlotte NC — Full Service Mobile"
        description="Professional auto detailing in Charlotte, NC. Interior & exterior detail, paint correction, ceramic coating. Mobile or drop-off. 5.0★ rated with 63+ reviews, 12+ years experience. Book today."
        keywords="auto detailing charlotte nc, auto detailing charlotte, auto detail charlotte nc, auto detailing in charlotte nc, auto detailing in charlotte, professional auto detailing charlotte, best auto detailing charlotte nc, car detailing charlotte nc, mobile auto detailing charlotte nc, auto detailing near me charlotte, interior auto detailing charlotte nc, exterior auto detailing charlotte, ceramic coating charlotte nc"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Auto Detailing Charlotte NC", "item": "https://www.proworxdetailing.com/auto-detailing-charlotte-nc" }
              ]
            },
            {
              "@type": "AutoRepair",
              "name": "ProWorx Mobile Detailing — Auto Detailing Charlotte NC",
              "description": "Professional auto detailing, paint correction, and ceramic coating in Charlotte, NC and surrounding areas. Mobile service and drop-off available. GYEON & IGL certified.",
              "address": { "@type": "PostalAddress", "streetAddress": "3008 Collaroy Rd", "addressLocality": "Waxhaw", "addressRegion": "NC", "postalCode": "28173", "addressCountry": "US" },
              "telephone": "(980) 272-1903",
              "url": "https://www.proworxdetailing.com",
              "image": "https://www.proworxdetailing.com/images/escalade-front.jpg",
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "63" },
              "priceRange": "$$",
              "openingHoursSpecification": [
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "09:30", "closes": "18:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:30", "closes": "15:00" }
              ],
              "areaServed": [
                { "@type": "City", "name": "Charlotte", "sameAs": "https://en.wikipedia.org/wiki/Charlotte,_North_Carolina" },
                { "@type": "City", "name": "Waxhaw" },
                { "@type": "City", "name": "Ballantyne" },
                { "@type": "City", "name": "SouthPark" },
                { "@type": "City", "name": "Weddington" },
                { "@type": "City", "name": "Indian Trail" },
                { "@type": "City", "name": "Fort Mill" },
                { "@type": "City", "name": "Marvin" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Auto Detailing Services",
                "itemListElement": [
                  { "@type": "OfferCatalog", "name": "Auto Detailing", "itemListElement": [{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Standard Auto Detail" }, "price": "258", "priceCurrency": "USD" }] },
                  { "@type": "OfferCatalog", "name": "Ceramic Coating", "itemListElement": [{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "1-Year Ceramic Coating" }, "price": "499", "priceCurrency": "USD" }] },
                  { "@type": "OfferCatalog", "name": "Paint Correction", "itemListElement": [{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "1-Step Enhancement Polish" }, "price": "350", "priceCurrency": "USD" }] }
                ]
              },
              "sameAs": [
                "https://www.facebook.com/ProWorxDetailing",
                "https://www.instagram.com/proworxdetailing"
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "How much does auto detailing cost in Charlotte NC?", "acceptedAnswer": { "@type": "Answer", "text": "Auto detailing in Charlotte starts at $258 for a Standard Detail (sedan, full interior and exterior) and goes up to $735 for an Elite Ceramic Detail on larger vehicles. Pricing depends on vehicle size and condition. ProWorx offers free quotes — call or book online." }},
                { "@type": "Question", "name": "What's included in a full auto detail?", "acceptedAnswer": { "@type": "Answer", "text": "A full auto detail at ProWorx includes exterior hand wash and dry, tire and wheel cleaning, interior vacuum and wipe-down, glass cleaning inside and out, dashboard and console detail. Ceramic packages add fabric protection, leather shield, ceramic tire dressing, trim coating, and 12-month ceramic wax." }},
                { "@type": "Question", "name": "Do you offer mobile auto detailing in Charlotte?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! ProWorx is a fully mobile auto detailing service. We bring everything — water, power, professional-grade products, and equipment — directly to your home or office anywhere in the Charlotte metro area. We also offer drop-off for services like ceramic coating and paint correction." }},
                { "@type": "Question", "name": "How often should I get my car detailed in Charlotte?", "acceptedAnswer": { "@type": "Answer", "text": "In Charlotte's climate with pollen, humidity, and road debris, we recommend a full auto detail every 4-8 weeks. For ceramic-coated vehicles, every 8-12 weeks is sufficient. ProWorx offers maintenance plans starting at $59/month so you never have to think about scheduling." }},
                { "@type": "Question", "name": "What areas near Charlotte do you serve?", "acceptedAnswer": { "@type": "Answer", "text": "ProWorx serves all of Charlotte and surrounding areas including Ballantyne, SouthPark, Myers Park, Uptown, Dilworth, South End, NoDa, Weddington, Marvin, Indian Trail, Fort Mill SC, Tega Cay SC, and Waxhaw. Most Charlotte locations are 20-35 minutes from our base." }}
              ]
            }
          ]
        }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="auto-detailing-clt-hero" fallback="/images/escalade-front.jpg" alt="Professional auto detailing in Charlotte NC by ProWorx" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6 backdrop-blur-sm">
              <Award className="size-3.5" />
              Charlotte's 5-Star Auto Detailing
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Auto Detailing in{" "}
              <span className="text-gradient-gold">Charlotte, NC</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Professional auto detailing for Charlotte and surrounding areas. Interior &amp; exterior detail, paint correction, and ceramic coating — mobile or drop-off. 12+ years experience and 63+ five-star Google reviews.
            </p>
            <div className="flex items-center gap-2 text-sm text-gold mb-8">
              <Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" />
              <span className="text-muted-foreground">5.0 on Google (63+ reviews)</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <BookNowLink>Get Your Free Quote <ArrowRight className="size-5" /></BookNowLink>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> {config.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why ProWorx */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">Why Charlotte Trusts ProWorx for Auto Detailing</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Not every auto detailer is the same. Here's what sets ProWorx apart from the competition in Charlotte, NC.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Star className="size-6" />, title: "63+ Five-Star Reviews", desc: "Perfect 5.0 Google rating. Charlotte's highest-rated auto detailing service with 100% positive reviews." },
                { icon: <Award className="size-6" />, title: "12+ Years Experience", desc: "Serving Charlotte since 2013. We've detailed thousands of vehicles from daily drivers to luxury exotics." },
                { icon: <Shield className="size-6" />, title: "GYEON & IGL Certified", desc: "Authorized ceramic coating installer. Professional-grade products only available through certified detailers." },
                { icon: <Truck className="size-6" />, title: "Fully Mobile Service", desc: "We come to your home or office with our self-contained unit. No need to drop off your vehicle anywhere." },
                { icon: <Sparkles className="size-6" />, title: "Eco-Friendly Products", desc: "Water reclamation, biodegradable products, and responsible waste disposal. Professional results, green approach." },
                { icon: <Clock className="size-6" />, title: "Flexible Scheduling", desc: "Same-week availability. Book online 24/7 or call us during business hours for a free consultation." },
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
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Auto Detailing Packages — Charlotte, NC</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transparent pricing for Charlotte auto detailing. Every package includes full interior and exterior service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
          <p className="text-xs text-muted-foreground text-center mt-4">Prices shown for sedans. SUVs, trucks, and larger vehicles priced individually. <Link to="/services" className="text-gold hover:underline">View all packages →</Link></p>
        </div>
      </section>

      {/* Full Services */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Complete Auto Care in Charlotte</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We're not just an auto detailer — we're a complete automotive appearance solution. From a quick maintenance wash to full paint correction and ceramic coating, ProWorx handles everything that makes your vehicle look its absolute best.
              </p>
              <div className="space-y-4">
                {SERVICES.map((svc) => (
                  <Link key={svc.title} to={svc.link} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-gold/50 transition-colors">
                    <div className="size-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">{svc.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{svc.title}</h3>
                      <p className="text-xs text-muted-foreground">{svc.desc}</p>
                    </div>
                    <ArrowRight className="size-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>
            <CmsImg slot="auto-detailing-clt-services" fallback="/images/ceramic-audi-front.jpg" alt="Audi after professional auto detailing by ProWorx Charlotte" className="rounded-2xl w-full aspect-[3/4] object-cover shadow-xl" />
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Auto Detailing Across the Charlotte Metro</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Based in Waxhaw, we bring professional auto detailing to all of Charlotte and the surrounding communities. Mobile service at your home or office.
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
              Don't see your area? <a href={config.phoneLink} className="text-gold hover:underline">Give us a call</a> — we likely cover it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">Auto Detailing FAQ — Charlotte, NC</h2>
            <div className="space-y-6">
              {[
                { q: "How much does auto detailing cost in Charlotte NC?", a: "Auto detailing in Charlotte starts at $258 for a Standard Detail (sedan, full interior and exterior). Elite Ceramic Detail packages start at $581 and include 12-month ceramic protection. Pricing depends on vehicle size and condition — SUVs, trucks, and vans cost more. We offer free quotes on every job." },
                { q: "What's included in a full auto detail?", a: "A full auto detail includes exterior hand wash and dry, clay bar decontamination, tire & wheel deep cleaning, full interior vacuum and wipe-down, leather/vinyl conditioning, glass cleaning inside and out, dashboard & console detailing, and door jamb cleaning. Ceramic packages add fabric protection, GYEON leather shield, ceramic tire dressing, trim coating, and a 12-month ceramic wax layer." },
                { q: "Do you offer mobile auto detailing in Charlotte?", a: "Yes! ProWorx is a fully mobile auto detailing service. We bring our own water, power, and professional-grade products to your home or office anywhere in the Charlotte metro. We're fully self-contained and eco-friendly. We also offer drop-off service for ceramic coating and paint correction." },
                { q: "How often should I get my car detailed?", a: "In Charlotte's climate — with heavy pollen season, summer humidity, and road debris — we recommend a full auto detail every 4-8 weeks for unprotected vehicles. Ceramic-coated vehicles can go 8-12 weeks between details. Our maintenance plans start at $59/month and take the guesswork out of scheduling." },
                { q: "What areas near Charlotte do you service?", a: "We service all of Charlotte and surrounding areas including Ballantyne, SouthPark, Myers Park, Uptown, Dilworth, South End, NoDa, Weddington, Marvin, Indian Trail, Fort Mill SC, Tega Cay SC, and Waxhaw. Most Charlotte-area locations are within 20-35 minutes of our base." },
                { q: "Is ProWorx the best auto detailing in Charlotte?", a: "With 63+ five-star Google reviews, a perfect 5.0 rating, 12+ years of experience, and GYEON & IGL ceramic coating certifications, ProWorx is Charlotte's highest-rated professional auto detailing service. We detail everything from daily drivers to luxury and exotic vehicles." },
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

      <RelatedCharlotteServices currentPath="/auto-detailing-charlotte-nc" />

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="auto-detailing-clt-cta" fallback="/images/corvette-rear.jpg" alt="ProWorx auto detailing results on Corvette Charlotte NC" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Ready for Charlotte's Best <span className="text-gradient-gold">Auto Detailing</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Professional results, transparent pricing, and a perfect 5-star reputation. Book your auto detail online or call for a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
              <BookNowLink>Book Auto Detail <ArrowRight className="size-5" /></BookNowLink>
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
