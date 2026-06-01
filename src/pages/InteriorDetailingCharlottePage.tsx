import { ArrowRight, Car, CheckCircle2, Clock, Droplets, MapPin, Phone, Shield, Sparkles, Star, Award, Sofa } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { BookNowLink } from "@/components/BookNowLink";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";
import { RelatedCharlotteServices } from "@/components/RelatedCharlotteServices";

const PACKAGES = [
  { name: "Standard Interior", price: "From $163", features: ["Full interior vacuum", "Dashboard & console wipe-down", "Door panels & jambs", "Glass cleaning inside", "Light stain treatment"], best: "Regular maintenance \u2014 keeps your cabin fresh and clean" },
  { name: "Premium Interior", price: "From $268", features: ["Everything in Standard", "Leather conditioning & UV protection", "Steam cleaning all surfaces", "Air vent deep clean", "Odor elimination treatment", "Air freshener"], popular: true, best: "Deep clean \u2014 leather care, steam, and odor removal" },
  { name: "Elite Interior", price: "From $349", features: ["Everything in Premium", "GYEON LeatherShield protection", "Fabric & carpet extraction", "Headliner spot cleaning", "Plastic & trim ceramic coating", "Pet hair removal"], best: "Total restoration \u2014 brings neglected interiors back to life" },
];

const INTERIOR_SERVICES = [
  { icon: <Sofa className="size-5" />, title: "Leather Care", desc: "Clean, condition, and protect leather seats with GYEON LeatherShield" },
  { icon: <Droplets className="size-5" />, title: "Steam Cleaning", desc: "Chemical-free deep sanitization of every surface and crevice" },
  { icon: <Sparkles className="size-5" />, title: "Stain Removal", desc: "Professional extraction for food, drink, ink, and pet stains" },
  { icon: <Shield className="size-5" />, title: "Odor Elimination", desc: "Ozone treatment and enzymatic cleaning for smoke, mildew, and pet odors" },
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

export function InteriorDetailingCharlottePage() {
  const { config } = useSiteConfig();

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Interior Detailing Charlotte NC \u2014 Mobile Service"
        description="Professional interior detailing in Charlotte, NC. Deep cleaning, leather care, steam cleaning, stain & odor removal. Mobile service. 5.0\u2605 rated with 63+ reviews. Book today."
        keywords="interior detailing charlotte nc, interior car detailing charlotte, interior auto detailing charlotte nc, car interior cleaning charlotte nc, interior detail charlotte, leather cleaning charlotte nc, steam cleaning car interior charlotte, car upholstery cleaning charlotte nc, interior detailing near me charlotte, best interior detailing charlotte nc, mobile interior detailing charlotte"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.proworxdetailing.com/services" },
                { "@type": "ListItem", "position": 3, "name": "Interior Detailing Charlotte NC", "item": "https://www.proworxdetailing.com/interior-detailing-charlotte-nc" }
              ]
            },
            {
              "@type": "Service",
              "name": "Interior Detailing Charlotte NC",
              "description": "Professional interior car detailing in Charlotte, NC. Full vacuum, dashboard and console detail, leather conditioning, steam cleaning, stain and odor removal. Mobile service available.",
              "provider": {
                "@type": "AutoRepair",
                "name": "ProWorx Mobile Detailing",
                "telephone": "(980) 272-1903",
                "url": "https://www.proworxdetailing.com",
                "address": { "@type": "PostalAddress", "streetAddress": "3008 Collaroy Rd", "addressLocality": "Waxhaw", "addressRegion": "NC", "postalCode": "28173", "addressCountry": "US" },
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "63" }
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
                "name": "Interior Detailing Packages",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Standard Interior Detail" }, "price": "163", "priceCurrency": "USD" },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Premium Interior Detail" }, "price": "268", "priceCurrency": "USD" },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Elite Interior Detail" }, "price": "349", "priceCurrency": "USD" }
                ]
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "How much does interior detailing cost in Charlotte NC?", "acceptedAnswer": { "@type": "Answer", "text": "Interior detailing in Charlotte starts at $163 for a Standard Interior (sedan). Premium packages with leather care and steam cleaning start at $268. Elite packages with full extraction and ceramic protection start at $349. Prices vary by vehicle size and condition." }},
                { "@type": "Question", "name": "What is included in an interior detail?", "acceptedAnswer": { "@type": "Answer", "text": "A standard interior detail includes full vacuum, dashboard and console wipe-down, door panels and jambs, interior glass cleaning, and light stain treatment. Premium adds leather conditioning, steam cleaning, air vent deep clean, and odor elimination. Elite adds GYEON LeatherShield, fabric extraction, headliner cleaning, and ceramic trim protection." }},
                { "@type": "Question", "name": "Can you remove pet hair and odors from my car?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our Elite Interior package includes professional pet hair removal using specialized tools and compressed air. For odors, we use enzymatic cleaners and ozone treatment to eliminate pet, smoke, mildew, and food odors at the source \u2014 not just mask them." }},
                { "@type": "Question", "name": "Do you offer mobile interior detailing in Charlotte?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! ProWorx is fully mobile. We bring all equipment, water, and professional-grade products to your home or office anywhere in the Charlotte metro area. Interior details typically take 1.5\u20133 hours depending on vehicle size and package." }},
                { "@type": "Question", "name": "How often should I get my car interior detailed?", "acceptedAnswer": { "@type": "Answer", "text": "We recommend interior detailing every 4\u20138 weeks for daily drivers, especially in Charlotte\u2019s climate where pollen, humidity, and dust accumulate quickly. Families with kids or pets benefit from more frequent visits. Our maintenance plans start at $59/month." }}
              ]
            }
          ]
        }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="interior-detailing-clt-hero" fallback="/images/escalade-front.jpg" alt="Professional interior detailing in Charlotte NC by ProWorx" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6 backdrop-blur-sm">
              <Award className="size-3.5" />
              Charlotte's Top-Rated Interior Detailing
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Interior Detailing in{" "}
              <span className="text-gradient-gold">Charlotte, NC</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Deep cleaning, leather care, steam sanitization, and stain removal for every surface inside your vehicle. Mobile service to your door or drop-off available. 12+ years experience, 63+ five-star Google reviews.
            </p>
            <div className="flex items-center gap-2 text-sm text-gold mb-8">
              <Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" />
              <span className="text-muted-foreground">5.0 on Google (63+ reviews)</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <BookNowLink>Book Interior Detail <ArrowRight className="size-5" /></BookNowLink>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> {config.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Clean */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">What Goes Into a Professional Interior Detail</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Every interior detail is thorough, systematic, and tailored to your vehicle. Here is what we focus on.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {INTERIOR_SERVICES.map((item) => (
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">Why Charlotte Chooses ProWorx for Interior Detailing</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Not all interior details are created equal. Here is what sets us apart.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Star className="size-6" />, title: "63+ Five-Star Reviews", desc: "Perfect 5.0 Google rating. Our interior work is consistently praised for attention to detail and thoroughness." },
                { icon: <Droplets className="size-6" />, title: "Professional Steam Cleaning", desc: "Chemical-free steam sanitizes leather, vinyl, fabric, and hard surfaces. Kills 99% of bacteria without harsh chemicals." },
                { icon: <Shield className="size-6" />, title: "GYEON Product Line", desc: "We use GYEON LeatherShield and fabric protectants \u2014 professional-grade products that last months, not days." },
                { icon: <Car className="size-6" />, title: "All Vehicle Types", desc: "From compact sedans to full-size SUVs, trucks, vans, and luxury vehicles. We know every interior layout." },
                { icon: <Sparkles className="size-6" />, title: "Stain Specialists", desc: "Coffee, food, ink, pet accidents, mildew \u2014 we have the tools and chemistry to tackle the toughest stains." },
                { icon: <Clock className="size-6" />, title: "Mobile Convenience", desc: "We come to your home or office with everything we need. Your vehicle never leaves your sight." },
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Interior Detailing Packages \u2014 Charlotte, NC</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transparent pricing. Every package is designed to bring your vehicle's cabin back to like-new condition.
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Interior Detailing Across the Charlotte Metro</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Based in Waxhaw, we bring professional interior detailing to all of Charlotte and the surrounding communities.
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">Interior Detailing FAQ \u2014 Charlotte, NC</h2>
            <div className="space-y-6">
              {[
                { q: "How much does interior detailing cost in Charlotte NC?", a: "Interior detailing in Charlotte starts at $163 for a Standard Interior (sedan). Premium packages with leather conditioning and steam cleaning start at $268. Elite packages with full extraction, GYEON protection, and ceramic trim coating start at $349. Pricing depends on vehicle size and condition \u2014 we offer free quotes." },
                { q: "What is included in an interior detail?", a: "Our Standard Interior includes full vacuum, dashboard and console wipe-down, door panel and jamb cleaning, interior glass, and light stain treatment. Premium adds leather conditioning, steam cleaning, air vent deep cleaning, and odor elimination. Elite adds GYEON LeatherShield, carpet and fabric extraction, headliner cleaning, and pet hair removal." },
                { q: "Can you remove tough stains and pet hair?", a: "Absolutely. Our Elite Interior package includes professional-grade hot water extraction for fabric and carpet stains, specialized pet hair removal tools, and enzymatic cleaners for biological stains. We handle coffee, food, ink, pet accidents, mildew, and more. If the stain is above the surface, we can almost always remove it." },
                { q: "Do you offer mobile interior detailing in Charlotte?", a: "Yes! ProWorx is fully mobile. We bring all equipment \u2014 water, power, steam cleaner, extractor, and professional products \u2014 directly to your home or office anywhere in the Charlotte metro. Interior details typically take 1.5\u20133 hours depending on vehicle size and package." },
                { q: "How do you handle leather seats?", a: "We use a multi-step process: gentle pH-balanced cleaner to remove dirt and oils, followed by GYEON LeatherShield conditioning that nourishes and protects the leather with UV resistance. This prevents cracking, fading, and premature aging. We treat every leather surface including the steering wheel and shift knob." },
                { q: "How often should I get my car interior detailed?", a: "In Charlotte's climate, we recommend every 4\u20138 weeks for daily drivers. Families with kids or pets benefit from biweekly or monthly visits. Our maintenance plans start at $59/month and include regular interior care so your vehicle always feels fresh." },
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

      <RelatedCharlotteServices currentPath="/interior-detailing-charlotte-nc" />

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="interior-detailing-clt-cta" fallback="/images/corvette-rear.jpg" alt="ProWorx interior detailing results Charlotte NC" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Ready for a <span className="text-gradient-gold">Showroom-Clean Interior</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Professional results, transparent pricing, and a perfect 5-star reputation. Book your interior detail online or call for a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
              <BookNowLink>Book Interior Detail <ArrowRight className="size-5" /></BookNowLink>
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
