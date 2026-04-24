import { ArrowRight, CheckCircle2, Clock, MapPin, Phone, Shield, Star, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";

const PACKAGES = [
  { name: "GYEON Q² One EVO", protection: "1-Year", price: "From $499", configKey: "ceramicDeposit1yr" },
  { name: "GYEON Q² Pure EVO", protection: "3-Year", price: "From $899", popular: true, configKey: "ceramicDeposit3yr" },
  { name: "GYEON Q² Flash EVO", protection: "10-Year", price: "From $1,599", configKey: "ceramicDeposit10yr" },
];

const SERVICES = [
  { title: "Ceramic Coating", desc: "GYEON & IGL certified — 1 to 10-year protection packages", link: "/ceramic-coating" },
  { title: "Paint Correction", desc: "Multi-stage correction to remove swirls, scratches & oxidation", link: "/paint-correction" },
  { title: "Full Detailing", desc: "Standard, Premium & Elite interior and exterior packages", link: "/services" },
  { title: "Maintenance Plans", desc: "Biweekly, monthly or quarterly membership plans", link: "/maintenance" },
];

const NEARBY = [
  { name: "Harrisburg", distance: "~35 min" },
  { name: "Concord", distance: "~30 min" },
  { name: "Charlotte", distance: "~25 min" },
  { name: "Mint Hill", distance: "~20 min" },
  { name: "Matthews", distance: "~25 min" },
  { name: "Huntersville", distance: "~30 min" }
];

export function CeramicCoatingHarrisburgPage() {
  const { config } = useSiteConfig();

  const getDepositUrl = (configKey: string) => {
    const url = config[configKey];
    return url || config.ceramicDepositUrl;
  };

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Ceramic Coating Harrisburg, NC"
        description="Ceramic coating in Harrisburg, NC by GYEON & IGL certified installers. 1-10 year protection from $499. Mobile or drop-off. 5-star rated."
        keywords="ceramic coating Harrisburg NC, auto detailing Harrisburg, paint correction Harrisburg Charlotte, car detailing Harrisburg NC, mobile detailing Harrisburg NC, GYEON ceramic coating Harrisburg"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Ceramic Coating", "item": "https://www.proworxdetailing.com/ceramic-coating" },
                { "@type": "ListItem", "position": 3, "name": "Harrisburg, NC", "item": "https://www.proworxdetailing.com/ceramic-coating-harrisburg-nc" }
              ]
            },
            {
              "@type": "LocalBusiness",
              "name": "ProWorx Detailing",
              "description": "GYEON & IGL certified ceramic coating and auto detailing serving Harrisburg, NC. Mobile service and drop-off available.",
              "url": "https://www.proworxdetailing.com/ceramic-coating-harrisburg-nc",
              "telephone": "+19802721903",
              "address": { "@type": "PostalAddress", "streetAddress": "3008 Collaroy Rd", "addressLocality": "Waxhaw", "addressRegion": "NC", "postalCode": "28173", "addressCountry": "US" },
              "areaServed": { "@type": "City", "name": "Harrisburg", "containedInPlace": { "@type": "State", "name": "North Carolina" } },
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "55" },
              "priceRange": "$499 - $1,599+"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "Is there a ceramic coating installer near Harrisburg, NC?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. ProWorx Detailing is ~35 min from Harrisburg. We offer mobile service (we come to your Harrisburg home) and drop-off at our Waxhaw location. GYEON & IGL certified with 55+ five-star Google reviews." } },
                { "@type": "Question", "name": "How much does ceramic coating cost in Harrisburg?", "acceptedAnswer": { "@type": "Answer", "text": "Professional ceramic coating in Harrisburg starts at $499 for 1-year protection (GYEON Q² One EVO), $899 for 3-year (Q² Pure EVO), and $1,599 for 10-year (Q² Flash EVO). Price varies by vehicle size. All packages include prep wash, decontamination, and prep polish." } },
                { "@type": "Question", "name": "Does ProWorx offer mobile ceramic coating in Harrisburg?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer both mobile service and drop-off. For ceramic coating, drop-off is recommended for best results, but we accommodate mobile installations. Call (980) 272-1903 to discuss options." } }
              ]
            }
          ]
        }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="harrisburg-hero" fallback="/images/tesla-bay.jpg" alt="Professional ceramic coating near Harrisburg, NC" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6">
              <MapPin className="size-3.5" />
              Serving Harrisburg, NC & Surrounding Areas
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Ceramic Coating{" "}
              <span className="text-gradient-gold">Harrisburg, NC</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
              Professional ceramic coating for Harrisburg residents. GYEON &amp; IGL certified installers with 12+ years experience and 55+ five-star reviews. Mobile service or convenient drop-off — ~35 min from our Waxhaw location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <Link to="/ceramic-coating">View Ceramic Packages <ArrowRight className="size-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> Call {config.phone}</a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {["GYEON & IGL Certified", "Mobile & Drop-Off", "5.0 Stars (55+ Reviews)", "~35 min from Harrisburg"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-gold" /><span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Harrisburg, NC</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Why Harrisburg Residents Choose ProWorx
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Harrisburg is one of the Charlotte area's fastest-growing communities — where new executive neighborhoods and spacious lots attract families who take pride in their homes and vehicles. From brand-new trucks in the Rocky River Crossing lot to luxury SUVs along Highway 49, Harrisburg residents know the value of protection.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Harrisburg's growing community of professionals and families wants their vehicles looking their best. ProWorx delivers certified ceramic coating that stands up to North Carolina's elements and keeps your car pristine.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Shield className="size-5" />, label: "Certified Installers", sub: "GYEON & IGL" },
                  { icon: <Truck className="size-5" />, label: "Mobile Service", sub: "We come to Harrisburg" },
                  { icon: <Star className="size-5" />, label: "5.0 Stars", sub: "55+ Google Reviews" },
                  { icon: <Clock className="size-5" />, label: "12+ Years", sub: "Experience" },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
                    <div className="size-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-sm">{item.label}</h3>
                      <p className="text-xs text-muted-foreground">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <CmsImg slot="harrisburg-about" fallback="/images/porsche-van.jpg" alt="ProWorx mobile detailing serving Harrisburg, NC" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Packages</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ceramic Coating Packages for Harrisburg</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              All packages include prep wash, clay bar decontamination, and light prep polish. 30% deposit to book.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {PACKAGES.map((pkg, i) => (
              <div key={i} className={`rounded-2xl p-6 text-center ${pkg.popular ? "bg-gold/5 border-2 border-gold/30 relative" : "bg-card border border-border"}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <Shield className="size-8 text-gold mx-auto mb-3" />
                <p className="text-sm font-semibold text-gold mb-1">{pkg.protection} Protection</p>
                <h3 className="text-lg font-bold mb-1">{pkg.name}</h3>
                <p className="text-2xl font-black text-gold mb-4">{pkg.price}</p>
                <Button className={`w-full font-bold ${pkg.popular ? "bg-gold text-gold-foreground hover:bg-gold/90" : "bg-gold/10 text-gold hover:bg-gold/20"}`} asChild>
                  <a href={getDepositUrl(pkg.configKey)} target="_blank" rel="noopener noreferrer">
                    Book Now <ArrowRight className="size-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10" asChild>
              <Link to="/ceramic-coating">View Full Package Details <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">All Services Available in Harrisburg</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {SERVICES.map((svc, i) => (
              <Link key={i} to={svc.link} className="group rounded-2xl bg-card border border-border p-6 hover:border-gold/30 transition-colors">
                <h3 className="font-bold text-lg mb-2 group-hover:text-gold transition-colors">{svc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="size-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Service Areas Near Harrisburg</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We serve Harrisburg and the entire Charlotte metro area.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-8">
            {NEARBY.map((a) => (
              <div key={a.name} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border text-sm">
                <MapPin className="size-3.5 text-gold" />
                <span className="font-medium">{a.name}</span>
                <span className="text-muted-foreground text-xs">({a.distance})</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10" asChild>
              <Link to="/areas">View All Service Areas <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3 text-center">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">Common Questions — Harrisburg</h2>
            <div className="space-y-6">
              {[
                { q: "Do you offer ceramic coating in Harrisburg?", a: "Yes! ProWorx Detailing serves Harrisburg with both mobile service (we come to your home or office) and drop-off at our Waxhaw location, ~35 min from Harrisburg. We're GYEON & IGL certified with 55+ five-star Google reviews." },
                { q: "How much does ceramic coating cost in Harrisburg?", a: "Professional ceramic coating in Harrisburg starts at $499 for 1-year protection (GYEON Q² One EVO), $899 for 3-year protection (Q² Pure EVO), and $1,599 for 10-year protection (Q² Flash EVO). Pricing varies by vehicle size. We require a 30% deposit to book." },
                { q: "What's included in your ceramic coating service?", a: "Every package includes a thorough prep wash, clay bar decontamination, iron decontamination, and a light prep polish before coating application. The coating is hand-applied panel by panel under LED inspection lighting. Higher-tier packages include annual inspections and maintenance." },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-card border border-border p-6">
                  <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to <span className="text-gradient-gold">Protect Your Vehicle</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Book a ceramic coating consultation with Charlotte's certified specialists. Mobile service to your Harrisburg home or drop-off at our Waxhaw facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <Link to="/ceramic-coating">Book Your Coating <ArrowRight className="size-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> Call {config.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
