import { ArrowRight, CheckCircle2, MapPin, Phone, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { BookNowLink } from "@/components/BookNowLink";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";
import { RelatedCharlotteServices } from "@/components/RelatedCharlotteServices";

const NEIGHBORHOODS = [
  { name: "Waxhaw", desc: "Our home base — fast, same-day service for all Waxhaw residents." },
  { name: "Marvin", desc: "Premium mobile detailing for the Marvin community and surrounding estates." },
  { name: "Weddington", desc: "Serving Weddington neighborhoods with professional detailing at your doorstep." },
  { name: "Wesley Chapel", desc: "Full-service mobile detailing throughout Wesley Chapel and western Union County." },
  { name: "Providence Country Club", desc: "Trusted detailing provider for Providence Country Club homeowners." },
  { name: "Cureton", desc: "Convenient mobile service for the Cureton community — we come to you." },
];

const SERVICES_OVERVIEW = [
  { name: "Full Detail (Inside & Out)", price: "From $206", desc: "Complete interior + exterior detail with spray wax protection." },
  { name: "Premium Inside & Out", price: "From $288", desc: "Deep clean with leather conditioning, steam cleaning & 6-month sealant." },
  { name: "Exterior Detail", price: "From $103", desc: "Hand wash, wheel cleaning, tire dressing & spray wax." },
  { name: "Interior Detail", price: "From $144", desc: "Full vacuum, surface wipe-down, glass cleaning & stain treatment." },
  { name: "Ceramic Coating", price: "From $499", desc: "GYEON certified 1-year, 3-year & 10-year ceramic coating packages." },
  { name: "Paint Correction", price: "From $350", desc: "Swirl removal, scratch repair & oxidation correction." },
];

export function WaxhawPage() {
  const { config } = useSiteConfig();

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Mobile Detailing in Waxhaw, NC"
        description="ProWorx — Waxhaw's trusted auto detailer. Ceramic coating, paint correction & full detailing in Waxhaw, Marvin, Weddington & Wesley Chapel."
        keywords="Waxhaw mobile detailing, Waxhaw ceramic coating, car detailing Waxhaw NC, mobile car wash Waxhaw, auto detailing near Waxhaw, Marvin NC detailing, Weddington car detailing"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": "https://www.proworxdetailing.com/waxhaw#business",
              "name": "ProWorx Mobile Detailing — Waxhaw",
              "description": "Professional mobile auto detailing, ceramic coating & paint correction in Waxhaw, NC and surrounding areas including Marvin, Weddington & Wesley Chapel.",
              "url": "https://www.proworxdetailing.com/waxhaw",
              "telephone": "+19802721903",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3008 Collaroy Rd",
                "addressLocality": "Waxhaw",
                "addressRegion": "NC",
                "postalCode": "28173",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 34.9249,
                "longitude": -80.7434
              },
              "areaServed": [
                { "@type": "City", "name": "Waxhaw", "sameAs": "https://en.wikipedia.org/wiki/Waxhaw,_North_Carolina" },
                { "@type": "City", "name": "Marvin" },
                { "@type": "City", "name": "Weddington" },
                { "@type": "City", "name": "Wesley Chapel" }
              ],
              "openingHoursSpecification": [
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:30", "closes": "18:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:30", "closes": "15:00" }
              ],
              "priceRange": "$$",
              "image": "https://www.proworxdetailing.com/images/og-cover.jpg",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "50",
                "bestRating": "5"
              }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.proworxdetailing.com/areas" },
                { "@type": "ListItem", "position": 3, "name": "Waxhaw, NC", "item": "https://www.proworxdetailing.com/waxhaw" }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "Does ProWorx serve Waxhaw, NC?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! ProWorx Mobile Detailing is based in Waxhaw, NC at 3008 Collaroy Rd. We serve Waxhaw, Marvin, Weddington, Wesley Chapel, Providence Country Club, Cureton, and surrounding Union County neighborhoods." }},
                { "@type": "Question", "name": "How much does mobile detailing cost in Waxhaw?", "acceptedAnswer": { "@type": "Answer", "text": "Standard Inside & Out detailing starts at $206 for sedans. Premium packages start at $288 including leather conditioning and 6-month sealant. Exterior-only starts at $103. Ceramic coating packages range from $499 to $1,599+." }},
                { "@type": "Question", "name": "Can I get ceramic coating in Waxhaw, NC?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. ProWorx is a certified GYEON and IGL ceramic coating installer based in Waxhaw. We offer 1-year ($499+), 3-year ($899+), and 10-year ($1,599+) professional ceramic coating packages with manufacturer warranties." }}
              ]
            }
          ]
        }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="waxhaw-hero" fallback="/images/porsche-van.jpg" alt="ProWorx mobile detailing van servicing a vehicle in Waxhaw, NC" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6 backdrop-blur-sm">
              <MapPin className="size-3.5" />
              Based in Waxhaw, NC
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Mobile Detailing in{" "}
              <span className="text-gradient-gold">Waxhaw, NC</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              ProWorx is Waxhaw's hometown mobile detailer — based right here in Union County. From Marvin to Weddington, Providence Country Club to Cureton, we bring professional detailing directly to your driveway. No drop-off needed.
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

      {/* Why Waxhaw trusts ProWorx */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Waxhaw Trusts ProWorx</h2>
            <p className="text-muted-foreground text-lg">
              With 12+ years of experience and a 5-star rating, we're the most trusted detailing team in Union County.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: <MapPin className="size-5" />, title: "Based in Waxhaw", desc: "3008 Collaroy Rd — your neighbors, not a distant shop." },
              { icon: <Star className="size-5" />, title: "5-Star Rated", desc: "50+ five-star reviews from real Charlotte-area customers." },
              { icon: <Shield className="size-5" />, title: "Certified Installer", desc: "GYEON & IGL certified for professional ceramic coatings." },
              { icon: <CheckCircle2 className="size-5" />, title: "Fully Mobile", desc: "We bring water, power & pro-grade equipment to you." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-card border border-border p-6 text-center hover:border-gold/30 transition-colors">
                <div className="size-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold mx-auto mb-3">{item.icon}</div>
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Services & Pricing</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Full-service mobile detailing for Waxhaw and surrounding communities. All pricing is for sedans — SUVs and trucks may vary.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES_OVERVIEW.map((svc) => (
                <div key={svc.name} className="rounded-2xl bg-card border border-border p-6 hover:border-gold/30 transition-colors">
                  <h3 className="font-bold text-base mb-1">{svc.name}</h3>
                  <p className="text-gold font-bold text-lg mb-2">{svc.price}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold" asChild>
                <Link to="/services">View Full Pricing <ArrowRight className="size-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods We Serve */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Neighborhoods We Serve</h2>
              <p className="text-muted-foreground text-lg">
                We serve every corner of the Waxhaw area — including these popular communities.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {NEIGHBORHOODS.map((area) => (
                <div key={area.name} className="rounded-2xl bg-card border border-border p-6 hover:border-gold/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="size-4 text-gold" />
                    <h3 className="font-bold text-lg">{area.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ceramic Coating in Waxhaw */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <CmsImg slot="waxhaw-ceramic" fallback="/images/escalade-rear.jpg" alt="Ceramic coated vehicle in Waxhaw NC by ProWorx" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-xl" />
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-medium mb-4">
                <Shield className="size-3" />
                GYEON Certified Installer
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ceramic Coating in Waxhaw</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As a certified GYEON and IGL installer based right here in Waxhaw, we offer professional-grade ceramic coatings that last up to 10 years. Unlike consumer spray-ons, our coatings include proper paint decontamination, prep polish, and come with a manufacturer warranty.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { label: "1-Year Protection", price: "$499+", name: "GYEON Q² One EVO" },
                  { label: "3-Year Protection", price: "$899+", name: "GYEON Q² Pure EVO" },
                  { label: "10-Year Protection", price: "$1,599+", name: "GYEON Q² Flash EVO" },
                ].map((pkg) => (
                  <div key={pkg.label} className="flex items-center justify-between rounded-xl bg-card border border-border p-4">
                    <div>
                      <p className="font-semibold text-sm">{pkg.label}</p>
                      <p className="text-xs text-muted-foreground">{pkg.name}</p>
                    </div>
                    <p className="font-bold text-gold">{pkg.price}</p>
                  </div>
                ))}
              </div>
              <Button className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold" asChild>
                <Link to="/ceramic-coating">View Ceramic Packages <ArrowRight className="size-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">Waxhaw Detailing FAQs</h2>
            <div className="space-y-6">
              {[
                { q: "Where is ProWorx located?", a: "We're based at 3008 Collaroy Rd, Waxhaw, NC 28173 — right in the heart of Union County. As a mobile service, we come directly to your home or office in Waxhaw, Marvin, Weddington, Wesley Chapel, and throughout the Charlotte metro area." },
                { q: "How does mobile detailing work?", a: "We arrive at your location with everything we need — water, power, professional-grade products, and equipment. You don't need to provide anything. Just give us access to your vehicle, and we handle the rest in your driveway or parking spot." },
                { q: "Do I need to be home during the detail?", a: "Nope! Many of our Waxhaw customers leave their keys and go about their day. We'll text you before, during, and after so you always know what's happening." },
                { q: "What areas around Waxhaw do you serve?", a: "We serve all of Waxhaw and surrounding communities including Marvin, Weddington, Wesley Chapel, Providence Country Club, Cureton, Indian Trail, Stallings, Matthews, Monroe, and all of Charlotte." },
                { q: "Can you do ceramic coating at my home in Waxhaw?", a: "Ceramic coating can be done mobile, but drop-off is preferred for best results — especially if paint correction is needed. We're happy to discuss the best option for your vehicle. Give us a call!" },
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
      <RelatedCharlotteServices currentPath="/waxhaw" />
      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="waxhaw-cta" fallback="/images/ferrari-side.jpg" alt="ProWorx mobile detailing in Waxhaw NC" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Ready for a <span className="text-gradient-gold">Showroom Finish</span> in Waxhaw?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Book online or call us today. We'll come to your Waxhaw home or office with everything we need.
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
