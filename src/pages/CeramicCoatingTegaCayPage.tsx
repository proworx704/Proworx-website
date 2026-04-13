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
  { name: "Tega Cay, SC", distance: "~25 min" },
  { name: "Fort Mill, SC", distance: "~20 min" },
  { name: "Lake Wylie, SC", distance: "~25 min" },
  { name: "Waxhaw", distance: "Home base" },
  { name: "Marvin", distance: "~5 min" },
  { name: "Ballantyne", distance: "~20 min" },
];

export function CeramicCoatingTegaCayPage() {
  const { config } = useSiteConfig();

  const getDepositUrl = (configKey: string) => {
    const url = config[configKey];
    return url || config.ceramicDepositUrl;
  };

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Ceramic Coating Tega Cay SC"
        description="Ceramic coating in Tega Cay, SC by GYEON & IGL certified installers. 1-10 year protection from $499. Mobile or drop-off. 5-star rated."
        keywords="ceramic coating Tega Cay SC, auto detailing Tega Cay, paint correction Tega Cay SC, car detailing Tega Cay South Carolina, ceramic coating Lake Wylie, GYEON ceramic coating Tega Cay, mobile detailing Tega Cay SC, boat ceramic coating Tega Cay"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Ceramic Coating", "item": "https://www.proworxdetailing.com/ceramic-coating" },
                { "@type": "ListItem", "position": 3, "name": "Tega Cay SC", "item": "https://www.proworxdetailing.com/ceramic-coating-tega-cay-sc" }
              ]
            },
            {
              "@type": "LocalBusiness",
              "name": "ProWorx Detailing",
              "description": "GYEON & IGL certified ceramic coating and auto detailing serving Tega Cay, SC. Mobile service and drop-off available.",
              "url": "https://www.proworxdetailing.com/ceramic-coating-tega-cay-sc",
              "telephone": "+19802721903",
              "address": { "@type": "PostalAddress", "streetAddress": "3008 Collaroy Rd", "addressLocality": "Waxhaw", "addressRegion": "NC", "postalCode": "28173", "addressCountry": "US" },
              "areaServed": { "@type": "City", "name": "Tega Cay", "containedInPlace": { "@type": "State", "name": "South Carolina" } },
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "52" },
              "priceRange": "$499 - $1,599+"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "Is there a ceramic coating installer near Tega Cay SC?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. ProWorx Detailing is located in Waxhaw, ~25 min from our Waxhaw location. We offer mobile service (we come to your Tega Cay home) and drop-off at our Waxhaw location. GYEON & IGL certified with 52 five-star Google reviews." } },
                { "@type": "Question", "name": "How much does ceramic coating cost in Tega Cay?", "acceptedAnswer": { "@type": "Answer", "text": "Professional ceramic coating in Tega Cay starts at $499 for 1-year protection (GYEON Q² One EVO), $899 for 3-year (Q² Pure EVO), and $1,599 for 10-year (Q² Flash EVO). Price varies by vehicle size. All packages include prep wash, decontamination, and prep polish." } },
                { "@type": "Question", "name": "Does ProWorx offer mobile ceramic coating in Tega Cay?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer both mobile service and drop-off. For ceramic coating, drop-off is recommended for best results, but we accommodate mobile installations. Call (980) 272-1903 to discuss options." } }
              ]
            }
          ]
        }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="tega-cay-hero" fallback="/images/tesla-bay.jpg" alt="Professional ceramic coating near Tega Cay SC" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6">
              <MapPin className="size-3.5" />
              Serving Tega Cay, SC & Surrounding Areas
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Ceramic Coating{" "}
              <span className="text-gradient-gold">Tega Cay, SC</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
              Professional ceramic coating for Tega Cay residents. GYEON &amp; IGL certified installers with 12+ years experience and 52 five-star reviews. Mobile service or convenient drop-off — ~25 min from our Waxhaw location.
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
              {["GYEON & IGL Certified", "Mobile & Drop-Off", "5.0 Stars (52 Reviews)", "~25 min from Tega Cay"].map((item) => (
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
              <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Tega Cay, SC</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Why Tega Cay Residents Choose ProWorx
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tega Cay is Lake Wylie's most exclusive lakefront community — a small city with big homes, pristine landscapes, and residents who invest in protecting what they own. Between the lake breeze, pollen, and sun exposure, vehicles here face constant environmental challenges that ceramic coating is designed to combat.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Lakefront living means your vehicle battles UV, pollen, humidity, and water minerals daily. Ceramic coating provides the hydrophobic, UV-resistant barrier your paint needs — especially important for boats and vehicles stored near the water.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Shield className="size-5" />, label: "Certified Installers", sub: "GYEON & IGL" },
                  { icon: <Truck className="size-5" />, label: "Mobile Service", sub: "We come to Tega Cay" },
                  { icon: <Star className="size-5" />, label: "5.0 Stars", sub: "52 Google Reviews" },
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
            <CmsImg slot="tega-cay-about" fallback="/images/porsche-van.jpg" alt="ProWorx mobile detailing serving Tega Cay SC" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Packages</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ceramic Coating Packages for Tega Cay</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">All Services Available in Tega Cay</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Service Areas Near Tega Cay</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We serve Tega Cay and the entire South Charlotte metro area.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-8">
            {NEARBY.map((area) => (
              <div key={area.name} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border text-sm">
                <MapPin className="size-3.5 text-gold" />
                <span className="font-medium">{area.name}</span>
                <span className="text-muted-foreground text-xs">({area.distance})</span>
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

      {/* FAQ (visible) */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3 text-center">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">Common Questions — Tega Cay</h2>
            <div className="space-y-6">
              {[
                { q: "Do you offer ceramic coating in Tega Cay?", a: "Yes! ProWorx Detailing serves Tega Cay with both mobile service (we come to your home or office) and drop-off at our Waxhaw location, ~25 min from our Waxhaw location. We're GYEON & IGL certified with 52 five-star Google reviews." },
                { q: "How much does ceramic coating cost in Tega Cay?", a: "Professional ceramic coating in Tega Cay starts at $499 for 1-year protection (GYEON Q² One EVO), $899 for 3-year protection (Q² Pure EVO), and $1,599 for 10-year protection (Q² Flash EVO). Pricing varies by vehicle size. We require a 30% deposit to book." },
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
              Book a ceramic coating consultation with Charlotte's certified specialists. Mobile service to your Tega Cay home or drop-off at our Waxhaw facility.
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
