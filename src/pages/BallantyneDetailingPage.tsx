import { ArrowRight, CheckCircle2, MapPin, Phone, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { BookNowLink } from "@/components/BookNowLink";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";
import { RelatedCharlotteServices } from "@/components/RelatedCharlotteServices";

const NEIGHBORHOODS = [
  { name: "Ballantyne", desc: "Full-service mobile detailing throughout the Ballantyne community and corporate center." },
  { name: "SouthPark", desc: "Premium detailing for SouthPark residents and surrounding luxury neighborhoods." },
  { name: "Myers Park", desc: "Charlotte\u2019s premier neighborhood \u2014 we bring showroom-quality detailing to your door." },
  { name: "Providence", desc: "Serving Providence Plantation, Providence Country Club, and the Providence Road corridor." },
  { name: "Rea Road / Blakeney", desc: "Convenient mobile service for the Rea Road corridor and Blakeney shopping area." },
  { name: "Ardrey Kell", desc: "Professional detailing for the Ardrey Kell community and surrounding South Charlotte estates." },
];

const SERVICES_OVERVIEW = [
  { name: "Full Detail (Inside & Out)", price: "From $258", desc: "Complete interior + exterior detail with spray wax protection." },
  { name: "Elite Ceramic Inside & Out", price: "From $581", desc: "Standard detail plus ceramic protection products bundled at 15% off." },
  { name: "Exterior Detail", price: "From $129", desc: "Hand wash, wheel cleaning, tire dressing & spray wax." },
  { name: "Interior Detail", price: "From $181", desc: "Full vacuum, surface wipe-down, glass cleaning & stain treatment." },
  { name: "Ceramic Coating", price: "From $499", desc: "GYEON certified 1-year, 3-year & lifetime ceramic coating packages." },
  { name: "Paint Correction", price: "From $618", desc: "Swirl removal, scratch repair & oxidation correction." },
];

export function BallantyneDetailingPage() {
  const { config } = useSiteConfig();

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Mobile Detailing in Ballantyne, Charlotte NC"
        description="ProWorx Mobile Detailing serves Ballantyne, SouthPark, Myers Park & South Charlotte. 5-star rated, GYEON certified. Ceramic coating, paint correction & full detailing \u2014 we come to you!"
        keywords="Ballantyne mobile detailing, car detailing Ballantyne NC, auto detailing SouthPark Charlotte, Myers Park car detailing, mobile car wash Ballantyne, ceramic coating Ballantyne, South Charlotte detailing, Ballantyne auto detail"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": "https://www.proworxdetailing.com/mobile-detailing-ballantyne-nc#business",
              "name": "ProWorx Mobile Detailing \u2014 Ballantyne",
              "description": "Professional mobile auto detailing, ceramic coating & paint correction in Ballantyne, SouthPark, Myers Park & South Charlotte, NC.",
              "url": "https://www.proworxdetailing.com/mobile-detailing-ballantyne-nc",
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
                "latitude": 35.0527,
                "longitude": -80.8468
              },
              "areaServed": [
                { "@type": "Place", "name": "Ballantyne, Charlotte, NC" },
                { "@type": "Place", "name": "SouthPark, Charlotte, NC" },
                { "@type": "Place", "name": "Myers Park, Charlotte, NC" },
                { "@type": "Place", "name": "Providence, Charlotte, NC" }
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
                "reviewCount": "63",
                "bestRating": "5"
              }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.proworxdetailing.com/areas" },
                { "@type": "ListItem", "position": 3, "name": "Ballantyne", "item": "https://www.proworxdetailing.com/mobile-detailing-ballantyne-nc" }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "Does ProWorx serve Ballantyne, Charlotte NC?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! ProWorx Mobile Detailing serves all of Ballantyne and South Charlotte including SouthPark, Myers Park, Providence, Rea Road, Blakeney, and Ardrey Kell. We bring our fully equipped mobile setup directly to your home or office." }},
                { "@type": "Question", "name": "How much does mobile detailing cost in Ballantyne?", "acceptedAnswer": { "@type": "Answer", "text": "Standard Inside & Out detailing starts at $258 for sedans. Elite Ceramic packages start at $581 with ceramic protection products bundled at 15% off. Exterior-only starts at $129. Ceramic coating packages range from $499 to $2,199+." }},
                { "@type": "Question", "name": "Can I get ceramic coating in Ballantyne?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. ProWorx is a certified GYEON and IGL ceramic coating installer. We offer 1-year ($499+), 3-year ($899+), and lifetime GYEON Infinite packages ($1,799+/$2,199+) with manufacturer warranties. Mobile application is available, or drop-off at our Waxhaw facility." }},
                { "@type": "Question", "name": "Do I need to bring my car somewhere?", "acceptedAnswer": { "@type": "Answer", "text": "No! We come to you. ProWorx is a fully mobile detailing service. We arrive at your Ballantyne home, office, or parking spot with everything we need \u2014 water, power, and professional-grade products." }},
                { "@type": "Question", "name": "How long does a full detail take?", "acceptedAnswer": { "@type": "Answer", "text": "A standard Inside & Out detail takes 2\u20133 hours depending on vehicle size and condition. Paint correction and ceramic coating services may take 4\u20138 hours. We\u2019ll give you an accurate time estimate when you book." }}
              ]
            }
          ]
        }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="ballantyne-hero" fallback="/images/porsche-van.jpg" alt="ProWorx mobile detailing van in Ballantyne Charlotte NC" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6 backdrop-blur-sm">
              <MapPin className="size-3.5" />
              Serving Ballantyne & South Charlotte
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Mobile Detailing in{" "}
              <span className="text-gradient-gold">Ballantyne</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              ProWorx brings premium mobile auto detailing directly to your Ballantyne home or office. From SouthPark to Myers Park, Providence to Rea Road {"\u2014"} we cover all of South Charlotte with 5-star, white-glove service.
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Ballantyne Chooses ProWorx</h2>
            <p className="text-muted-foreground text-lg">
              Trusted by hundreds of Charlotte-area vehicle owners for premium detailing, ceramic coating, and paint correction.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: <Star className="size-5" />, title: "63+ Five-Star Reviews", desc: "Perfect 5.0 rating from real Charlotte-area customers on Google." },
              { icon: <Shield className="size-5" />, title: "Certified Installer", desc: "GYEON & IGL certified for professional ceramic coatings with warranties." },
              { icon: <MapPin className="size-5" />, title: "Fully Mobile", desc: "We come to your Ballantyne home or office with water, power & all equipment." },
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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ballantyne Detailing Services & Pricing</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Full-service mobile detailing for Ballantyne and all South Charlotte neighborhoods. Sedan pricing shown {"\u2014"} SUVs and trucks may vary.
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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">South Charlotte Neighborhoods We Serve</h2>
              <p className="text-muted-foreground text-lg">
                We bring our fully mobile setup to every corner of Ballantyne and South Charlotte.
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

      {/* Ceramic Coating in Ballantyne */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <CmsImg slot="ballantyne-ceramic" fallback="/images/escalade-rear.jpg" alt="Ceramic coated vehicle in Ballantyne Charlotte NC" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-xl" />
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-medium mb-4">
                <Shield className="size-3" />
                GYEON Certified Installer
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ceramic Coating in Ballantyne</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Protect your investment with professional ceramic coating from a certified GYEON and IGL installer. Our coatings include proper paint decontamination, prep polish, and come with a manufacturer warranty {"\u2014"} perfect for Ballantyne{"\u2019"}s luxury and performance vehicles.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { label: "1-Year Protection", price: "$499+", name: "GYEON Q\u00B2 One EVO" },
                  { label: "3-Year Protection", price: "$899+", name: "GYEON Q\u00B2 Pure EVO" },
                  { label: "Lifetime Protection*", price: "$1,799+", name: "GYEON Infinite Type 1" },
                  { label: "Ultimate Lifetime*", price: "$2,199+", name: "GYEON Infinite Type 1 + 2" },
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">Ballantyne Detailing FAQs</h2>
            <div className="space-y-6">
              {[
                { q: "Does ProWorx serve Ballantyne?", a: "Yes! We serve all of Ballantyne, SouthPark, Myers Park, Providence, Rea Road, Blakeney, Ardrey Kell, and every South Charlotte neighborhood. We bring our fully equipped mobile setup directly to your home or office." },
                { q: "How does mobile detailing work in Ballantyne?", a: "We arrive at your Ballantyne location with everything we need \u2014 water, power, professional-grade products, and equipment. You don\u2019t need to provide anything. Just give us access to your vehicle, and we handle the rest in your driveway or parking spot." },
                { q: "Do I need to be home during the detail?", a: "Nope! Many of our Ballantyne and SouthPark customers leave their keys and go about their day. We\u2019ll text you before, during, and after so you always know what\u2019s happening." },
                { q: "Can you detail luxury or exotic cars?", a: "Absolutely. We regularly detail luxury vehicles including Mercedes, BMW, Porsche, Audi, Tesla, Range Rover, and more. Our GYEON-certified products and techniques are designed for high-end finishes." },
                { q: "How far in advance should I book?", a: "We recommend booking 2\u20133 days in advance, especially for weekends. Same-day availability is sometimes possible \u2014 give us a call to check!" },
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

      <RelatedCharlotteServices currentPath="/mobile-detailing-ballantyne-nc" />

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="ballantyne-cta" fallback="/images/ferrari-side.jpg" alt="ProWorx mobile detailing in Ballantyne Charlotte NC" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Ready for a <span className="text-gradient-gold">Showroom Finish</span> in Ballantyne?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Book online or call us today. We{"\u2019"}ll come to your Ballantyne home or office with everything we need.
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
