import { Anchor, ArrowRight, Droplets, MapPin, Phone, Shield, Sparkles, Star, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { BookNowLink } from "@/components/BookNowLink";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";
import { RelatedCharlotteServices } from "@/components/RelatedCharlotteServices";

const BOAT_PACKAGES = [
  {
    name: "Basic Boat Wash",
    tiers: [
      { label: "Up to 20 ft", price: "$250" },
      { label: "21–25 ft", price: "$325" },
      { label: "26–30 ft", price: "$400" },
      { label: "31–35 ft", price: "$500" },
    ],
    desc: "Exterior hand wash, rinse, and dry. Ideal for routine upkeep between deep cleans.",
  },
  {
    name: "Full Boat Detail",
    tiers: [
      { label: "Up to 20 ft", price: "$600" },
      { label: "21–25 ft", price: "$775" },
      { label: "26–30 ft", price: "$950" },
      { label: "31–35 ft", price: "$1,150" },
    ],
    desc: "Comprehensive interior deep clean + exterior wash, decontamination, and wax. Top-to-bottom restoration.",
    popular: true,
  },
  {
    name: "Oxidation Removal",
    tiers: [
      { label: "Up to 20 ft", price: "$375" },
      { label: "21–25 ft", price: "$500" },
      { label: "26–30 ft", price: "$650" },
      { label: "31–35 ft", price: "$800" },
    ],
    desc: "Machine compound & polish to remove oxidation, chalking, and heavy water spots from gelcoat and fiberglass.",
  },
];

const LAKE_AREAS = [
  { name: "Lake Norman", details: "Cornelius, Huntersville, Mooresville, Davidson" },
  { name: "Lake Wylie", details: "Belmont, Lake Wylie, Tega Cay, Fort Mill" },
  { name: "Mountain Island Lake", details: "Mount Holly, Belmont" },
  { name: "South Charlotte", details: "Ballantyne, Waxhaw, Weddington, Indian Trail" },
];

export function BoatDetailingCharlottePage() {
  const { config } = useSiteConfig();

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Boat Detailing Charlotte NC — Lake Norman & Lake Wylie"
        description="Professional boat detailing in Charlotte, NC. Gelcoat restoration, oxidation removal, interior cleaning. Serving Lake Norman, Lake Wylie & all Charlotte-area lakes."
        keywords="boat detailing Charlotte NC, boat detailing near me, boat cleaning Charlotte, marine detailing Charlotte NC, boat detailing Lake Norman, boat detailing Lake Wylie, gelcoat restoration Charlotte, boat oxidation removal Charlotte, boat wax Charlotte NC, yacht detailing Charlotte"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Boat Detailing", "item": "https://www.proworxdetailing.com/boat-detailing" },
                { "@type": "ListItem", "position": 3, "name": "Charlotte NC", "item": "https://www.proworxdetailing.com/boat-detailing-charlotte-nc" }
              ]
            },
            {
              "@type": "Service",
              "serviceType": "Boat Detailing",
              "provider": {
                "@type": "AutoRepair",
                "name": "ProWorx Mobile Detailing",
                "address": { "@type": "PostalAddress", "addressLocality": "Waxhaw", "addressRegion": "NC", "postalCode": "28173" },
                "telephone": "(980) 272-1903",
                "url": "https://www.proworxdetailing.com",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "53" }
              },
              "areaServed": [
                { "@type": "City", "name": "Charlotte" },
                { "@type": "City", "name": "Cornelius" },
                { "@type": "City", "name": "Huntersville" },
                { "@type": "City", "name": "Mooresville" },
                { "@type": "City", "name": "Fort Mill" }
              ],
              "description": "Professional boat detailing, gelcoat restoration, oxidation removal, and marine ceramic coating for Charlotte-area lake boats.",
              "offers": { "@type": "Offer", "priceRange": "$250-$1150+", "priceCurrency": "USD" }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "How much does boat detailing cost in Charlotte?", "acceptedAnswer": { "@type": "Answer", "text": "Boat detailing in Charlotte ranges from $250 for a basic wash (up to 20ft) to $1,150+ for a full detail on larger vessels. Oxidation removal starts at $375. Pricing is based on boat length and condition. ProWorx offers free assessments and quotes." }},
                { "@type": "Question", "name": "Do you come to the marina or my home?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! ProWorx is fully mobile and can detail your boat at your marina, driveway, or storage facility anywhere in the Charlotte area, including Lake Norman, Lake Wylie, and Mountain Island Lake locations." }},
                { "@type": "Question", "name": "Can you remove oxidation from my boat's gelcoat?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Our oxidation removal service uses professional machine compounding and polishing to restore faded, chalky gelcoat to its original shine. We treat fiberglass and gelcoat surfaces, removing oxidation, water spots, and surface staining." }}
              ]
            }
          ]
        }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="boat-detailing-clt-hero" fallback="/images/ceramic-bay-hex.jpg" alt="Boat detailing service Charlotte NC" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6 backdrop-blur-sm">
              <Anchor className="size-3.5" />
              Lake Norman · Lake Wylie · All Charlotte Lakes
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Boat Detailing in{" "}
              <span className="text-gradient-gold">Charlotte, NC</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Professional marine detailing for Lake Norman, Lake Wylie, and all Charlotte-area boats. From basic washes to full gelcoat restoration — we bring the detail shop to your marina or driveway.
            </p>
            <div className="flex items-center gap-2 text-sm text-gold mb-8">
              <Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" /><Star className="size-4 fill-gold" />
              <span className="text-muted-foreground">5.0 on Google · 12+ years experience</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <BookNowLink>Get a Boat Detail Quote <ArrowRight className="size-5" /></BookNowLink>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> {config.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Boat Detailing */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">Charlotte Lake Life Demands Proper Care</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Sun, water, and algae take a toll on your boat's finish. Professional detailing protects your investment and keeps your vessel looking new.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Waves className="size-6" />, title: "Gelcoat Protection", desc: "Restore and protect fiberglass from UV damage, oxidation, and water staining." },
                { icon: <Droplets className="size-6" />, title: "Oxidation Removal", desc: "Machine compound & polish to bring faded, chalky gelcoat back to life." },
                { icon: <Shield className="size-6" />, title: "Marine Ceramic Coating", desc: "Long-lasting hydrophobic protection that makes cleaning a breeze." },
                { icon: <Sparkles className="size-6" />, title: "Interior Deep Clean", desc: "Seats, cushions, compartments, dash, and floor — restored to like-new." },
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Boat Detailing Packages</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Priced by length — from runabouts to cabin cruisers. All services available at your marina or home.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {BOAT_PACKAGES.map((pkg) => (
              <div key={pkg.name} className={`rounded-2xl bg-card border p-7 flex flex-col relative ${pkg.popular ? "border-gold shadow-lg shadow-gold/10" : "border-border"}`}>
                {pkg.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-full">Most Popular</div>}
                <h3 className="font-bold text-lg mb-2 text-gold">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{pkg.desc}</p>
                <div className="space-y-2 mb-6 flex-1">
                  {pkg.tiers.map((tier) => (
                    <div key={tier.label} className="flex items-center justify-between text-sm py-1 border-b border-border/50 last:border-0">
                      <span className="text-muted-foreground">{tier.label}</span>
                      <span className="font-bold">{tier.price}</span>
                    </div>
                  ))}
                </div>
                <Button className={pkg.popular ? "bg-gold text-gold-foreground hover:bg-gold/90 font-bold" : "bg-muted text-foreground hover:bg-muted/80 font-semibold"} asChild>
                  <BookNowLink>Book Now <ArrowRight className="size-4" /></BookNowLink>
                </Button>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-sm text-muted-foreground">
            Also available: <Link to="/boat-detailing" className="text-gold underline underline-offset-2">Interior Detail, Exterior Detail + Wax, and Ceramic Coating</Link>. See our full boat detailing page for all services.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">Boat Detailing Across Charlotte's Lakes</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              We travel to your marina, dock, driveway, or storage facility. Fully mobile and self-contained.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {LAKE_AREAS.map((area) => (
                <div key={area.name} className="rounded-xl bg-card border border-border p-6 flex items-start gap-4">
                  <MapPin className="size-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-base mb-1">{area.name}</h3>
                    <p className="text-sm text-muted-foreground">{area.details}</p>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">Boat Detailing FAQ — Charlotte, NC</h2>
            <div className="space-y-6">
              {[
                { q: "How much does boat detailing cost in Charlotte?", a: "Boat detailing in Charlotte ranges from $250 for a basic exterior wash (up to 20ft) to $1,150+ for a full interior/exterior detail on boats 31–35ft. Oxidation removal starts at $375. Pricing is based on boat length and condition — we provide free assessments and quotes." },
                { q: "Do you come to my marina or can I drop off?", a: "Both! We're fully mobile and can detail your boat at any marina, dock, driveway, or storage facility in the Charlotte area. We service Lake Norman, Lake Wylie, Mountain Island Lake, and all surrounding locations. We also accept drop-offs at our Waxhaw facility." },
                { q: "Can you remove oxidation from gelcoat?", a: "Absolutely. Our oxidation removal service uses professional machine compounding and polishing to restore faded, chalky gelcoat to its original shine. For severe cases, we recommend following up with marine ceramic coating to prevent future oxidation." },
                { q: "How often should I get my boat detailed?", a: "We recommend a full detail at least twice per season — once before the season starts (spring prep) and once after (winterization). Monthly wash & wax during active season keeps your boat looking great and protects the finish between full details." },
                { q: "Do you offer ceramic coating for boats?", a: "Yes! Marine ceramic coating provides long-lasting hydrophobic protection that makes cleaning dramatically easier. It protects against UV damage, oxidation, algae, and water staining. Contact us for a custom quote based on your boat's size and type." },
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
      <RelatedCharlotteServices currentPath="/boat-detailing-charlotte-nc" />
      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-card to-background" />
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Get Your Boat{" "}
            <span className="text-gradient-gold">Lake Ready</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Book a boat detail or request a free quote. We'll come to your marina, dock, or driveway anywhere in the Charlotte area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
              <BookNowLink>Book Boat Detail <ArrowRight className="size-5" /></BookNowLink>
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
