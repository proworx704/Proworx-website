import { ArrowRight, Car, CheckCircle2, Clock, MapPin, Phone, Shield, Sparkles, Star, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { BookNowLink } from "@/components/BookNowLink";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";
import { RelatedCharlotteServices } from "@/components/RelatedCharlotteServices";

const PACKAGES = [
  { name: "Standard Detail", price: "From $258", features: ["Exterior hand wash & dry", "Tire & wheel cleaning", "Interior vacuum & wipe-down", "Glass cleaning inside & out", "Dashboard & console detail"], best: "Regular maintenance — keeps your car clean and fresh" },
  { name: "Elite Ceramic Detail", price: "From $581", features: ["Everything in Standard", "Fabric protection & GYEON leather shield", "Ceramic tire dressing", "Plastic & trim ceramic coating", "12-month ceramic wax"], popular: true, best: "Ultimate protection — ceramic shield for the entire vehicle" },
];

const SERVICE_AREAS = [
  { name: "Ballantyne", time: "~20 min" },
  { name: "SouthPark", time: "~25 min" },
  { name: "Myers Park", time: "~30 min" },
  { name: "Uptown Charlotte", time: "~35 min" },
  { name: "Dilworth", time: "~30 min" },
  { name: "South End", time: "~30 min" },
  { name: "Weddington", time: "~10 min" },
  { name: "Marvin", time: "~5 min" },
  { name: "Indian Trail", time: "~15 min" },
  { name: "Fort Mill, SC", time: "~20 min" },
  { name: "Tega Cay, SC", time: "~25 min" },
  { name: "Lake Wylie, SC", time: "~30 min" },
];

export function MobileDetailingCharlottePage() {
  const { config } = useSiteConfig();

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Mobile Detailing Charlotte NC — We Come to You"
        description="Professional mobile car detailing in Charlotte, NC. Full interior & exterior detail at your home or office. 5-star rated, 12+ years experience. Book today."
        keywords="mobile detailing Charlotte NC, mobile car detailing Charlotte, car detailing Charlotte NC, auto detailing Charlotte, mobile car wash Charlotte NC, car cleaning Charlotte, interior detailing Charlotte, exterior detailing Charlotte NC, mobile detailing near me, best car detailing Charlotte NC"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.proworxdetailing.com/services" },
                { "@type": "ListItem", "position": 3, "name": "Mobile Detailing Charlotte NC", "item": "https://www.proworxdetailing.com/mobile-detailing-charlotte-nc" }
              ]
            },
            {
              "@type": "Service",
              "serviceType": "Mobile Auto Detailing",
              "provider": {
                "@type": "AutoRepair",
                "name": "ProWorx Mobile Detailing",
                "address": { "@type": "PostalAddress", "addressLocality": "Waxhaw", "addressRegion": "NC", "postalCode": "28173" },
                "telephone": "(980) 272-1903",
                "url": "https://www.proworxdetailing.com",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "57" },
                "priceRange": "$$"
              },
              "areaServed": [
                { "@type": "City", "name": "Charlotte", "sameAs": "https://en.wikipedia.org/wiki/Charlotte,_North_Carolina" },
                { "@type": "City", "name": "Waxhaw" },
                { "@type": "City", "name": "Weddington" },
                { "@type": "City", "name": "Indian Trail" },
                { "@type": "City", "name": "Fort Mill" },
                { "@type": "City", "name": "Ballantyne" }
              ],
              "description": "Professional mobile auto detailing service in Charlotte, NC. Interior and exterior detailing, paint correction, and ceramic coating brought to your home or office.",
              "offers": { "@type": "Offer", "priceRange": "$258-$735", "priceCurrency": "USD" }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "How much does mobile detailing cost in Charlotte?", "acceptedAnswer": { "@type": "Answer", "text": "Mobile detailing in Charlotte starts at $258 for a Standard Detail (sedan, full inside & out) up to $735 for an Elite Ceramic Detail (van). We offer Standard and Ceramic tiers with add-on options. SUVs and trucks are priced by size. ProWorx offers free quotes based on your vehicle's size and condition." }},
                { "@type": "Question", "name": "Do you bring your own water and supplies?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! ProWorx is a fully self-contained mobile detailing unit. We bring our own water, power, professional-grade products, and equipment. All we need is access to your vehicle and a parking spot. We're 100% eco-friendly with water reclamation." }},
                { "@type": "Question", "name": "How long does a mobile detail take?", "acceptedAnswer": { "@type": "Answer", "text": "A Standard Detail takes 1.5–4 hours and an Elite Ceramic Detail takes 5–7 hours depending on vehicle size and condition. Add-ons increase time accordingly. We work by appointment only to ensure dedicated attention to your vehicle." }},
                { "@type": "Question", "name": "What areas in Charlotte do you service?", "acceptedAnswer": { "@type": "Answer", "text": "We're based in Waxhaw and service all of Charlotte and surrounding areas including Ballantyne, SouthPark, Myers Park, Uptown, Dilworth, South End, Weddington, Marvin, Indian Trail, Fort Mill SC, and Tega Cay SC. Most Charlotte locations are within 20-35 minutes." }}
              ]
            }
          ]
        }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="mobile-detailing-clt-hero" fallback="/images/mobile-tent.jpg" alt="ProWorx mobile detailing setup in Charlotte NC" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6 backdrop-blur-sm">
              <Truck className="size-3.5" />
              Fully Mobile — We Come to You
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Mobile Car Detailing in{" "}
              <span className="text-gradient-gold">Charlotte, NC</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Professional detailing brought to your home, office, or anywhere in the Charlotte area. We're a fully self-contained, eco-friendly detail shop on wheels — 12+ years experience and 57+ five-star reviews.
            </p>
            <div className="flex items-center gap-2 text-sm text-gold mb-8">
              <Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" />
              <span className="text-muted-foreground">5.0 on Google (57+ reviews)</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <BookNowLink>Book Mobile Detail <ArrowRight className="size-5" /></BookNowLink>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> {config.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mobile */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">Why Charlotte Chooses ProWorx</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Truck className="size-6" />, title: "Fully Self-Contained", desc: "We bring everything — water, power, professional products. No hose or outlet needed from you." },
                { icon: <Clock className="size-6" />, title: "Your Schedule", desc: "We work around your calendar. Get detailed at home while you work, or at the office during your meeting." },
                { icon: <Shield className="size-6" />, title: "12+ Years Experience", desc: "Not a side hustle. We've been perfecting our craft since 2013 in the Charlotte area." },
                { icon: <Sparkles className="size-6" />, title: "Eco-Friendly", desc: "Water reclamation system, biodegradable products, and responsible waste disposal. Green and clean." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-card border border-border p-6 text-center">
                  <div className="size-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold mx-auto mb-3">{item.icon}</div>
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Mobile Detailing Packages</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Three tiers to fit every need and budget. All packages include full exterior and interior service.
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
          <p className="text-xs text-muted-foreground text-center mt-4">Prices shown for sedans. SUVs, trucks, and larger vehicles priced individually.</p>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Beyond Detailing</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We're not just a car wash — we're a complete automotive care solution for Charlotte. From paint correction to ceramic coating, we handle everything that makes your vehicle look and stay perfect.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Ceramic Coating", desc: "GYEON & IGL certified — 1 to 10-year protection from $499", link: "/ceramic-coating" },
                  { title: "Paint Correction", desc: "Multi-stage machine polishing to remove swirls & scratches", link: "/paint-correction" },
                  { title: "Boat Detailing", desc: "Full boat detail for Lake Norman & Lake Wylie boats", link: "/boat-detailing" },
                  { title: "Maintenance Plans", desc: "Biweekly, monthly, or quarterly subscriptions", link: "/maintenance" },
                ].map((svc) => (
                  <Link key={svc.title} to={svc.link} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-gold/50 transition-colors">
                    <Car className="size-5 text-gold shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{svc.title}</h3>
                      <p className="text-xs text-muted-foreground">{svc.desc}</p>
                    </div>
                    <ArrowRight className="size-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>
            <CmsImg slot="mobile-detailing-clt-services" fallback="/images/ceramic-escalade-front.jpg" alt="Cadillac Escalade after ProWorx mobile detail in Charlotte" className="rounded-2xl w-full aspect-[3/4] object-cover shadow-xl" />
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Mobile Detailing Across Charlotte</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Based in Waxhaw — we service all of Charlotte and surrounding communities. Your home, your office, your convenience.
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
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">Mobile Detailing FAQ — Charlotte, NC</h2>
            <div className="space-y-6">
              {[
                { q: "How much does mobile detailing cost in Charlotte?", a: "Mobile detailing in Charlotte starts at $258 for a Standard Detail (sedan, full inside & out) up to $735 for an Elite Ceramic Detail (van). We offer Standard and Ceramic tiers — ceramic packages bundle protection products at 15% off. Final pricing depends on vehicle size and condition. We offer free quotes — call or book online." },
                { q: "Do you bring your own water and supplies?", a: "Yes! ProWorx is a fully self-contained mobile detailing unit. We bring our own water supply, power, professional-grade products, and all equipment. All we need is access to your vehicle and a parking spot. We're 100% eco-friendly with full water reclamation." },
                { q: "How long does a mobile detail take?", a: "Standard Detail: 1.5–4 hours depending on vehicle size and service type. Elite Ceramic Detail: 5–7 hours. Add-ons increase time accordingly. We work by appointment only to ensure your vehicle gets dedicated, unrushed attention." },
                { q: "What areas of Charlotte do you service?", a: "We service all of Charlotte and surrounding areas including Ballantyne, SouthPark, Myers Park, Uptown, Dilworth, South End, Weddington, Marvin, Indian Trail, Fort Mill SC, Tega Cay SC, and Lake Wylie. Most Charlotte locations are 20-35 minutes from our base." },
                { q: "Can you detail my car at my office?", a: "Absolutely — office details are one of our most popular services. We'll detail your car in the parking lot while you work. Many Charlotte professionals book regular maintenance plans so their car stays perfect without ever taking time out of their day." },
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
      <RelatedCharlotteServices currentPath="/mobile-detailing-charlotte-nc" />
      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="mobile-clt-cta" fallback="/images/porsche-van.jpg" alt="ProWorx mobile detailing van with Porsche" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Book Your <span className="text-gradient-gold">Mobile Detail</span> Today
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Professional detailing at your doorstep. No driving, no waiting, no hassle. Just a perfectly clean car.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
              <BookNowLink>Book Mobile Detail <ArrowRight className="size-5" /></BookNowLink>
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
