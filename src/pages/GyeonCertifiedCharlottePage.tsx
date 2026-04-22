import { ArrowRight, Award, CheckCircle2, Phone, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";
import { RelatedCharlotteServices } from "@/components/RelatedCharlotteServices";

const GYEON_PRODUCTS = [
  {
    name: "GYEON Q² One EVO",
    protection: "1 Year",
    price: "From $499",
    description: "Entry-level professional ceramic coating. Perfect for daily drivers or those wanting to experience ceramic protection before committing to a longer term.",
    features: ["Single-layer application", "1-year manufacturer warranty", "Hydrophobic protection & UV shield", "Enhanced gloss & depth"],
    configKey: "ceramicDeposit1yr",
  },
  {
    name: "GYEON Q² Pure EVO",
    protection: "3 Years",
    price: "From $899",
    popular: true,
    description: "Our most popular package. Professional-grade coating with superior chemical resistance and extreme hydrophobic properties. Best value for most vehicle owners.",
    features: ["Professional multi-layer coating", "3-year manufacturer warranty", "Superior chemical & UV resistance", "Extreme hydrophobic properties", "Annual inspection included"],
    configKey: "ceramicDeposit3yr",
  },
  {
    name: "GYEON Q² Flash EVO",
    protection: "10 Years",
    price: "From $1,599",
    description: "GYEON's flagship coating — the ultimate in paint protection. Maximum hardness, self-cleaning effect, and a decade of warranty-backed protection.",
    features: ["Top-tier multi-layer coating", "10-year manufacturer warranty", "Maximum 9H hardness & scratch resistance", "Self-cleaning hydrophobic effect", "Annual inspection & maintenance included"],
    configKey: "ceramicDeposit10yr",
  },
];

const CERT_BENEFITS = [
  { title: "Factory-Trained", desc: "ProWorx installers are trained and certified directly by GYEON on proper surface preparation, application technique, and curing protocols." },
  { title: "Genuine Products", desc: "Only certified installers receive genuine GYEON professional-grade coatings. Consumer versions sold online are different (and inferior) products." },
  { title: "Manufacturer Warranty", desc: "GYEON backs every certified installation with a manufacturer warranty — 1, 3, or 10 years depending on the coating tier. Non-certified work has no warranty." },
  { title: "Proper Equipment", desc: "Certified installation requires LED inspection lighting, controlled environment, paint thickness gauges, and IR curing — not a garage with a shop light." },
  { title: "Annual Inspections", desc: "Your GYEON warranty includes annual coating inspections to ensure protection is performing as expected and to catch any issues early." },
  { title: "Paint Correction Expertise", desc: "Ceramic coating is only as good as the paint underneath. Certified installers are trained in multi-stage paint correction to ensure a flawless base before coating." },
];

const WHY_CERTIFIED = [
  { bad: "Uncertified installer uses consumer-grade product", good: "Certified installer uses professional-grade GYEON Q² EVO series" },
  { bad: "No surface prep — coating applied over swirls and defects", good: "Full decontamination, clay bar, and prep polish before coating" },
  { bad: "No warranty — you're on your own if it fails", good: "GYEON manufacturer warranty up to 10 years" },
  { bad: "Applied in a dusty garage or driveway", good: "Controlled environment with LED inspection lighting" },
  { bad: "Single quick layer — done in 2 hours", good: "Multi-layer application with proper cure time between coats" },
];

export function GyeonCertifiedCharlottePage() {
  const { config } = useSiteConfig();

  const getDepositUrl = (configKey: string) => {
    const url = config[configKey];
    return url || config.ceramicDepositUrl;
  };

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="GYEON Certified Installer Charlotte NC"
        description="Charlotte's GYEON & IGL certified ceramic coating installer. Factory-trained, genuine products, warranty up to 10 years."
        keywords="GYEON certified installer Charlotte, GYEON ceramic coating Charlotte NC, certified ceramic coating installer near me, IGL certified installer Charlotte, GYEON Q2 Pure EVO, GYEON Q2 Flash EVO, professional ceramic coating Charlotte"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Ceramic Coating", "item": "https://www.proworxdetailing.com/ceramic-coating" },
                { "@type": "ListItem", "position": 3, "name": "GYEON Certified Installer", "item": "https://www.proworxdetailing.com/gyeon-certified-installer-charlotte" }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "Is ProWorx a certified GYEON installer?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. ProWorx Detailing is a GYEON and IGL certified ceramic coating installer in Charlotte, NC. Our installers are factory-trained and use only genuine professional-grade GYEON Q² EVO series coatings backed by manufacturer warranty." }},
                { "@type": "Question", "name": "Why does GYEON certification matter?", "acceptedAnswer": { "@type": "Answer", "text": "Certified installers receive proper training, access to professional-grade products (not available to consumers), and can offer manufacturer warranties. Non-certified installers may use consumer-grade products, skip proper prep work, and cannot provide a GYEON warranty." }},
                { "@type": "Question", "name": "What GYEON products does ProWorx use?", "acceptedAnswer": { "@type": "Answer", "text": "ProWorx installs the GYEON Q² EVO professional series: Q² One EVO (1-year, from $499), Q² Pure EVO (3-year, from $899), and Q² Flash EVO (10-year, from $1,599). All include prep wash, decontamination, and light prep polish." }},
                { "@type": "Question", "name": "Does GYEON ceramic coating come with a warranty?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, when installed by a certified installer like ProWorx. GYEON provides manufacturer warranties: 1 year for Q² One EVO, 3 years for Q² Pure EVO, and 10 years for Q² Flash EVO. The warranty covers coating performance and includes annual inspections." }}
              ]
            }
          ]
        }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg
            slot="gyeon-hero"
            fallback="/images/corvette-front.jpg"
            alt="GYEON certified ceramic coating by ProWorx Detailing Charlotte NC"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6">
              <Award className="size-3.5" />
              Factory-Trained & Certified
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              GYEON <span className="text-gradient-gold">Certified Installer</span>{" "}
              in Charlotte, NC
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
              ProWorx Detailing is Charlotte's GYEON &amp; IGL certified ceramic coating specialist. Factory-trained installers, genuine professional-grade products, and manufacturer warranty up to 10 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <Link to="/ceramic-coating">View Ceramic Packages <ArrowRight className="size-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> Call {config.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Certification Means */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Why Certification Matters</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What GYEON Certification Actually Means</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Not all ceramic coating installations are equal. Here's what you get from a certified installer that you won't get elsewhere.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {CERT_BENEFITS.map((item, i) => (
              <div key={i} className="rounded-2xl bg-card border border-border p-6">
                <div className="size-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-4">
                  <CheckCircle2 className="size-5" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certified vs Non-Certified */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Certified vs Non-Certified Installation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The difference isn't just the product — it's the entire process.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {WHY_CERTIFIED.map((item, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-3">
                <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-4 flex items-start gap-3">
                  <div className="size-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-red-500 text-xs font-bold">✗</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.bad}</p>
                </div>
                <div className="rounded-xl bg-gold/5 border border-gold/20 p-4 flex items-start gap-3">
                  <div className="size-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="size-3 text-gold" />
                  </div>
                  <p className="text-sm text-foreground font-medium">{item.good}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GYEON Product Lineup */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">GYEON Q² EVO Series</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Ceramic Coating Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Three tiers of professional protection — all backed by GYEON's manufacturer warranty.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {GYEON_PRODUCTS.map((pkg, i) => (
              <div key={i} className={`rounded-2xl p-6 flex flex-col ${pkg.popular ? "bg-gold/5 border-2 border-gold/30 relative" : "bg-card border border-border"}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="size-4 text-gold" />
                  <span className="text-sm font-semibold text-gold">{pkg.protection} Protection</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-2xl font-black text-gold mb-3">{pkg.price}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{pkg.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="size-3.5 text-gold mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full font-bold ${pkg.popular ? "bg-gold text-gold-foreground hover:bg-gold/90" : "bg-gold/10 text-gold hover:bg-gold/20"}`} asChild>
                  <a href={getDepositUrl(pkg.configKey)} target="_blank" rel="noopener noreferrer">
                    Book — 30% Deposit <ArrowRight className="size-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-5 fill-gold text-gold" />)}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">5.0 Stars — 56 Google Reviews</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Charlotte's highest-rated ceramic coating installer. See what our customers say about their ProWorx experience.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {[
                { name: "Corey Wilde", text: "Tyler and his team are best in class. They service all our vehicles (including an old classic) with such care and professionalism. He's always punctual for appointments and very up front on pricing and service options." },
                { name: "John", text: "Been using Tyler's detail membership service for a few years now. Tyler details both of my cars each month. Excellent attention to detail as you would expect. Highly recommend!" },
              ].map((review, i) => (
                <div key={i} className="rounded-xl bg-card border border-border p-5">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, j) => <Star key={j} className="size-3.5 fill-gold text-gold" />)}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">"{review.text}"</p>
                  <p className="font-semibold text-sm">{review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <RelatedCharlotteServices currentPath="/gyeon-certified-installer-charlotte" />
      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="size-10 text-gold mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Get <span className="text-gradient-gold">Certified Protection</span> for Your Vehicle
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Don't trust your vehicle's paint to an uncertified installer. Book with Charlotte's GYEON & IGL certified specialists and get the warranty-backed protection your car deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <Link to="/ceramic-coating">Book Your Coating <ArrowRight className="size-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> Call {config.phone}</a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground mt-8">
              {["GYEON Certified", "IGL Certified", "12+ Years Experience", "Mobile & Drop-Off"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-gold" /><span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
