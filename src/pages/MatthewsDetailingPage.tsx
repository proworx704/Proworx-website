import { ArrowRight, CheckCircle2, MapPin, Phone, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { BookNowLink } from "@/components/BookNowLink";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";
import { RelatedCharlotteServices } from "@/components/RelatedCharlotteServices";

const NEIGHBORHOODS = [
  { name: "Matthews", desc: "Full-service mobile detailing throughout Matthews and downtown." },
  { name: "Indian Trail", desc: "Premium detailing service for the growing Indian Trail community." },
  { name: "Stallings", desc: "Convenient mobile service for all Stallings neighborhoods." },
  { name: "Mint Hill", desc: "Serving Mint Hill and eastern Mecklenburg with pro-grade detailing." },
  { name: "Idlewild", desc: "Professional detailing for Idlewild and surrounding neighborhoods." },
  { name: "Hemby Bridge", desc: "Mobile detailing available throughout Hemby Bridge and southeast Union County." },
];

const SERVICES_OVERVIEW = [
  { name: "Full Detail (Inside & Out)", price: "From $258", desc: "Complete interior + exterior detail with spray wax protection." },
  { name: "Elite Ceramic Inside & Out", price: "From $581", desc: "Standard detail plus ceramic protection products bundled at 15% off." },
  { name: "Exterior Detail", price: "From $129", desc: "Hand wash, wheel cleaning, tire dressing & spray wax." },
  { name: "Interior Detail", price: "From $181", desc: "Full vacuum, surface wipe-down, glass cleaning & stain treatment." },
  { name: "Ceramic Coating", price: "From $499", desc: "GYEON certified 1-year, 3-year & 10-year ceramic coating packages." },
  { name: "Paint Correction", price: "From $618", desc: "Swirl removal, scratch repair & oxidation correction." },
];

export function MatthewsDetailingPage() {
  const { config } = useSiteConfig();

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Mobile Detailing in Matthews, NC | Indian Trail & Stallings"
        description="ProWorx Mobile Detailing serves Matthews, Indian Trail, Stallings & Mint Hill. 5-star rated, GYEON certified. Full detailing, ceramic coating & paint correction \u2014 we come to you!"
        keywords="Matthews NC mobile detailing, car detailing Matthews NC, auto detailing Indian Trail NC, Stallings car detailing, mobile car wash Matthews, ceramic coating Matthews NC, Mint Hill detailing, mobile detailing near me Matthews"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": "https://www.proworxdetailing.com/mobile-detailing-matthews-nc#business",
              "name": "ProWorx Mobile Detailing \u2014 Matthews",
              "description": "Professional mobile auto detailing, ceramic coating & paint correction in Matthews, Indian Trail, Stallings & Mint Hill, NC.",
              "url": "https://www.proworxdetailing.com/mobile-detailing-matthews-nc",
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
                "latitude": 35.1168,
                "longitude": -80.7237
              },
              "areaServed": [
                { "@type": "City", "name": "Matthews", "sameAs": "https://en.wikipedia.org/wiki/Matthews,_North_Carolina" },
                { "@type": "City", "name": "Indian Trail" },
                { "@type": "City", "name": "Stallings" },
                { "@type": "City", "name": "Mint Hill" }
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
                "reviewCount": "57",
                "bestRating": "5"
              }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.proworxdetailing.com/areas" },
                { "@type": "ListItem", "position": 3, "name": "Matthews, NC", "item": "https://www.proworxdetailing.com/mobile-detailing-matthews-nc" }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "Does ProWorx serve Matthews, NC?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! ProWorx Mobile Detailing serves all of Matthews and surrounding areas including Indian Trail, Stallings, Mint Hill, Idlewild, and Hemby Bridge. We bring our fully equipped mobile setup directly to your home or office." }},
                { "@type": "Question", "name": "How much does mobile detailing cost in Matthews?", "acceptedAnswer": { "@type": "Answer", "text": "Standard Inside & Out detailing starts at $258 for sedans. Elite Ceramic packages start at $581 with ceramic protection products bundled at 15% off. Exterior-only starts at $129. Ceramic coating packages range from $499 to $1,599+." }},
                { "@type": "Question", "name": "Can I get ceramic coating in Matthews, NC?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. ProWorx is a certified GYEON and IGL ceramic coating installer. We offer 1-year ($499+), 3-year ($899+), and 10-year ($1,599+) professional ceramic coating packages with manufacturer warranties." }},
                { "@type": "Question", "name": "How far is ProWorx from Matthews?", "acceptedAnswer": { "@type": "Answer", "text": "We're based in Waxhaw, NC \u2014 just 15\u201320 minutes from Matthews. As a mobile service, we come to your location with everything we need. No trip to the shop required!" }}
              ]
            }
          ]
        }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="matthews-hero" fallback="/images/porsche-van.jpg" alt="ProWorx mobile detailing van in Matthews NC" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6 backdrop-blur-sm">
              <MapPin className="size-3.5" />
              Serving Matthews, Indian Trail & Stallings
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Mobile Detailing in{" "}
              <span className="text-gradient-gold">Matthews, NC</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              ProWorx brings premium mobile auto detailing to Matthews, Indian Trail, Stallings, and Mint Hill. We bring water, power, and professional-grade products directly to your driveway {"\u2014"} no drop-off required.
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

      {/* Trust signals */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Matthews Trusts ProWorx</h2>
            <p className="text-muted-foreground text-lg">
              Just 15 minutes away in Waxhaw, we{"\u2019"}re the most trusted mobile detailing team in the area.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: <Star className="size-5" />, title: "57+ Five-Star Reviews", desc: "Perfect 5.0 rating from real Charlotte-area customers on Google." },
              { icon: <Shield className="size-5" />, title: "Certified Installer", desc: "GYEON & IGL certified for professional ceramic coatings with warranties." },
              { icon: <MapPin className="size-5" />, title: "15 Min from Matthews", desc: "Based in Waxhaw \u2014 close enough for fast, convenient mobile service." },
              { icon: <CheckCircle2 className="size-5" />, title: "12+ Years Experience", desc: "Over a decade of professional auto detailing in the Charlotte metro." },
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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Matthews Detailing Services & Pricing</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Full-service mobile detailing for Matthews and surrounding communities. Sedan pricing shown {"\u2014"} SUVs and trucks may vary.
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

      {/* Neighborhoods */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Neighborhoods We Serve Near Matthews</h2>
              <p className="text-muted-foreground text-lg">
                We bring our fully mobile setup to Matthews and every surrounding community.
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

      {/* Ceramic Coating */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <CmsImg slot="matthews-ceramic" fallback="/images/escalade-rear.jpg" alt="Ceramic coated vehicle in Matthews NC" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-xl" />
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-medium mb-4">
                <Shield className="size-3" />
                GYEON Certified Installer
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ceramic Coating in Matthews</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Protect your vehicle with professional ceramic coating from a certified GYEON and IGL installer. Our coatings include proper paint decontamination, prep polish, and come with a manufacturer warranty. Mobile application available or drop-off at our Waxhaw facility.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { label: "1-Year Protection", price: "$499+", name: "GYEON Q\u00B2 One EVO" },
                  { label: "3-Year Protection", price: "$899+", name: "GYEON Q\u00B2 Pure EVO" },
                  { label: "10-Year Protection", price: "$1,599+", name: "GYEON Q\u00B2 Flash EVO" },
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">Matthews Detailing FAQs</h2>
            <div className="space-y-6">
              {[
                { q: "Does ProWorx serve Matthews, NC?", a: "Yes! We serve all of Matthews and surrounding areas including Indian Trail, Stallings, Mint Hill, Idlewild, and Hemby Bridge. We\u2019re based in Waxhaw, just 15\u201320 minutes away, and bring everything to your location." },
                { q: "How does mobile detailing work?", a: "We arrive at your Matthews location with everything we need \u2014 water, power, professional-grade products, and equipment. You don\u2019t need to provide anything. Just give us access to your vehicle, and we handle the rest." },
                { q: "Do I need to be home during the detail?", a: "Nope! Many of our customers leave their keys and go about their day. We\u2019ll text you before, during, and after so you always know what\u2019s happening." },
                { q: "What makes ProWorx different from other detailers?", a: "We\u2019re a certified GYEON and IGL installer with 12+ years of experience and a perfect 5-star rating on Google. We use only professional-grade products and provide white-glove service for every vehicle \u2014 from daily drivers to luxury and exotic cars." },
                { q: "Do you detail boats and RVs?", a: "Yes! We offer full boat detailing, RV detailing, and fleet services throughout the Charlotte metro area. Contact us for a custom quote." },
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

      <RelatedCharlotteServices currentPath="/mobile-detailing-matthews-nc" />

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="matthews-cta" fallback="/images/ferrari-side.jpg" alt="ProWorx mobile detailing in Matthews NC" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Ready for a <span className="text-gradient-gold">Showroom Finish</span> in Matthews?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Book online or call us today. We{"\u2019"}ll come to your Matthews home or office with everything we need.
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
