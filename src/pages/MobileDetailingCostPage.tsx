import { ArrowRight, CheckCircle2, Clock, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { BookNowLink } from "@/components/BookNowLink";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";

export function MobileDetailingCostPage() {
  const { config } = useSiteConfig();

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Mobile Detailing Cost in Charlotte, NC"
        description="How much does mobile detailing cost in Charlotte, NC? Interior from $181, exterior from $129, full details from $258. See all packages & pricing."
        keywords="how much does detailing cost Charlotte, mobile detailing cost Charlotte NC, car detailing prices Charlotte, auto detailing cost near me, mobile car wash pricing Charlotte, interior detailing cost, exterior detailing price"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Services & Pricing", "item": "https://www.proworxdetailing.com/services" },
                { "@type": "ListItem", "position": 3, "name": "Detailing Cost Guide", "item": "https://www.proworxdetailing.com/mobile-detailing-cost" }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "How much does mobile detailing cost in Charlotte?", "acceptedAnswer": { "@type": "Answer", "text": "Mobile detailing in Charlotte ranges from $129 for a standard exterior detail (sedan) to $937+ for an elite full inside & out detail (van). ProWorx offers Standard, Premium, and Elite tiers. Standard Inside & Out starts at $258, Premium at $392, and Elite at $783 for sedans. Pricing varies by vehicle size." }},
                { "@type": "Question", "name": "How much does an interior detail cost?", "acceptedAnswer": { "@type": "Answer", "text": "Interior detailing starts at $181 for a Standard Interior (sedan) which includes full vacuum, surface wipe-down, and interior glass cleaning. Premium Interior starts at $315 and adds leather conditioning, steam cleaning, and UV protection." }},
                { "@type": "Question", "name": "Is mobile detailing more expensive than going to a shop?", "acceptedAnswer": { "@type": "Answer", "text": "Not necessarily. Mobile detailing saves you the time and hassle of driving to a shop and waiting. ProWorx brings professional-grade equipment and products directly to your location. Our pricing is competitive with Charlotte-area detail shops, plus you get the convenience of service at your home or office." }},
                { "@type": "Question", "name": "Do I need to tip my mobile detailer?", "acceptedAnswer": { "@type": "Answer", "text": "Tipping is not required but always appreciated. If you're happy with the service, 15-20% is a common tip for auto detailing services. You can also leave a Google review — that helps us just as much!" }},
                { "@type": "Question", "name": "What factors affect detailing cost?", "acceptedAnswer": { "@type": "Answer", "text": "The main factors are: (1) Vehicle size — sedans cost less than SUVs, trucks, and vans. (2) Service tier — Standard, Premium, or Elite. (3) Vehicle condition — heavily soiled or neglected vehicles may require additional time. (4) Add-on services like hot water extraction ($100), ceramic wax, or pet hair removal." }},
                { "@type": "Question", "name": "Does ProWorx charge extra for large vehicles?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, pricing scales by vehicle size. For example, Standard Inside & Out is $258 (sedan), $309 (small SUV/truck), $361 (large SUV/truck), and $412 (van). This reflects the additional time and materials needed for larger vehicles." }}
              ]
            }
          ]
        }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="cost-hero" fallback="/images/ferrari-van.jpg" alt="ProWorx mobile detailing van with professional equipment" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              How Much Does{" "}
              <span className="text-gradient-gold">Mobile Detailing</span>{" "}
              Cost?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Transparent pricing for professional mobile detailing in Charlotte, NC. No hidden fees, no upselling — just honest pricing for quality work. Starting at $129 for exterior and $181 for interior.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <a href="#pricing">See All Pricing <ArrowRight className="size-5" /></a>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> {config.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Price Reference */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Quick Price Reference</h2>
            <p className="text-muted-foreground text-lg">
              Sedan pricing shown. SUVs, trucks, and vans are priced slightly higher to account for additional time and materials.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { label: "Exterior Detail", from: "$129", time: "1 hr 15 min", tier: "Standard" },
              { label: "Interior Detail", from: "$181", time: "1 hr 45 min", tier: "Standard" },
              { label: "Full Inside & Out", from: "$258", time: "2 hr 30 min", tier: "Standard" },
              { label: "Premium Full Detail", from: "$392", time: "4 hrs", tier: "Premium" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-card border border-border p-6 text-center hover:border-gold/30 transition-colors">
                <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">{item.tier}</p>
                <h3 className="font-bold text-base mb-1">{item.label}</h3>
                <p className="text-2xl font-black text-gold mb-1">{item.from}<span className="text-sm font-normal text-muted-foreground">+</span></p>
                <p className="text-xs text-muted-foreground flex items-center gap-1 justify-center"><Clock className="size-3" /> {item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Pricing Tables */}
      <section id="pricing" className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">Full Pricing by Service</h2>

            {/* Inside & Out */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="size-5 text-gold" /> Inside & Out (Full Detail)
              </h3>
              <div className="rounded-2xl bg-card border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="text-left p-4 font-bold">Vehicle Size</th>
                        <th className="text-left p-4 font-bold">Standard</th>
                        <th className="text-left p-4 font-bold">Premium</th>
                        <th className="text-left p-4 font-bold">Elite</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { size: "Sedan", standard: "$258", premium: "$392", elite: "$783" },
                        { size: "Small SUV / Small Truck", standard: "$309", premium: "$444", elite: "$835" },
                        { size: "Large SUV / Off-Road Truck", standard: "$361", premium: "$495", elite: "$886" },
                        { size: "Van", standard: "$412", premium: "$547", elite: "$937" },
                      ].map((row) => (
                        <tr key={row.size} className="border-b border-border/50">
                          <td className="p-4 font-medium">{row.size}</td>
                          <td className="p-4 text-muted-foreground">{row.standard}</td>
                          <td className="p-4 font-semibold text-gold">{row.premium}</td>
                          <td className="p-4 text-muted-foreground">{row.elite}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Interior Only */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="size-5 text-gold" /> Interior Only
              </h3>
              <div className="rounded-2xl bg-card border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="text-left p-4 font-bold">Vehicle Size</th>
                        <th className="text-left p-4 font-bold">Standard</th>
                        <th className="text-left p-4 font-bold">Premium</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { size: "Sedan", standard: "$181", premium: "$315" },
                        { size: "Small SUV / Small Truck", standard: "$206", premium: "$341" },
                        { size: "Large SUV / Off-Road Truck", standard: "$258", premium: "$392" },
                        { size: "Van", standard: "$309", premium: "$444" },
                      ].map((row) => (
                        <tr key={row.size} className="border-b border-border/50">
                          <td className="p-4 font-medium">{row.size}</td>
                          <td className="p-4 text-muted-foreground">{row.standard}</td>
                          <td className="p-4 font-semibold text-gold">{row.premium}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Exterior Only */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="size-5 text-gold" /> Exterior Only
              </h3>
              <div className="rounded-2xl bg-card border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="text-left p-4 font-bold">Vehicle Size</th>
                        <th className="text-left p-4 font-bold">Standard</th>
                        <th className="text-left p-4 font-bold">Premium</th>
                        <th className="text-left p-4 font-bold">Elite</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { size: "Sedan", standard: "$129", premium: "$407", elite: "$462" },
                        { size: "Small SUV / Small Truck", standard: "$155", premium: "$433", elite: "$487" },
                        { size: "Large SUV / Off-Road Truck", standard: "$181", premium: "$459", elite: "$513" },
                        { size: "Van", standard: "$206", premium: "$484", elite: "$539" },
                      ].map((row) => (
                        <tr key={row.size} className="border-b border-border/50">
                          <td className="p-4 font-medium">{row.size}</td>
                          <td className="p-4 text-muted-foreground">{row.standard}</td>
                          <td className="p-4 font-semibold text-gold">{row.premium}</td>
                          <td className="p-4 text-muted-foreground">{row.elite}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Specialty */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="size-5 text-gold" /> Specialty Services
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { name: "Ceramic Coating", price: "From $499", desc: "1-year, 3-year & 10-year GYEON packages", link: "/ceramic-coating" },
                  { name: "Paint Correction", price: "From $618", desc: "Stage 1, 2 & 3 correction packages", link: "/paint-correction" },
                  { name: "Hot Water Extraction", price: "$100", desc: "Deep clean seats & carpeted areas", link: "/services" },
                ].map((svc) => (
                  <Link key={svc.name} to={svc.link}>
                    <div className="rounded-2xl bg-card border border-border p-6 hover:border-gold/30 transition-colors h-full">
                      <h4 className="font-bold text-base mb-1">{svc.name}</h4>
                      <p className="text-gold font-bold text-lg mb-2">{svc.price}</p>
                      <p className="text-sm text-muted-foreground">{svc.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Affects Cost */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">What Affects Detailing Cost?</h2>
              <div className="space-y-4">
                {[
                  { title: "Vehicle Size", desc: "Sedans are the base price. SUVs, trucks, and vans require more time and materials, so pricing increases by $25–$155 depending on the service." },
                  { title: "Service Tier", desc: "Standard covers the essentials. Premium adds leather conditioning, steam cleaning & 6-month sealant. Elite includes clay bar, iron decontamination & 12-month ceramic wax." },
                  { title: "Vehicle Condition", desc: "Heavily soiled, pet hair, or neglected interiors may require extra time, charged at the base hourly rate. We'll always discuss this before starting." },
                  { title: "Add-On Services", desc: "Hot water extraction ($100), ceramic add-ons, headlight restoration, and other enhancements can be added to any base package." },
                  { title: "No Hidden Fees", desc: "Our pricing is transparent — what you see is what you pay. No trip charges, no surprise upcharges. We quote before we start." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-sm">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <CmsImg slot="cost-factors" fallback="/images/porsche-foam.jpg" alt="ProWorx mobile detailing foam wash on Porsche" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-xl" />
          </div>
        </div>
      </section>

      {/* Monthly Plans Teaser */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Save with Monthly Plans</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Get regular detailing at a lower per-visit cost. Our membership plans include scheduled monthly visits — cancel anytime.
            </p>
            <div className="grid sm:grid-cols-3 gap-5 mb-8">
              {[
                { name: "Exterior Only", price: "$59/mo", desc: "Monthly hand wash, wheels, tires & exterior windows" },
                { name: "Interior Only", price: "$99/mo", desc: "Monthly full interior detail with conditioning" },
                { name: "Full Inside & Out", price: "$159/mo", desc: "Complete detail + ceramic wet-coat protection" },
              ].map((plan) => (
                <div key={plan.name} className="rounded-2xl bg-card border border-border p-6">
                  <h3 className="font-bold text-base mb-1">{plan.name}</h3>
                  <p className="text-2xl font-black text-gold mb-2">{plan.price}</p>
                  <p className="text-xs text-muted-foreground">{plan.desc}</p>
                </div>
              ))}
            </div>
            <Button className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold" asChild>
              <Link to="/maintenance">View Membership Plans <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">Pricing FAQs</h2>
            <div className="space-y-6">
              {[
                { q: "Is there a trip fee for mobile detailing?", a: "No trip fee for locations within our standard service area (Charlotte metro, Waxhaw, Matthews, Indian Trail, Ballantyne, etc.). For locations outside our area, give us a call — we may still be able to accommodate." },
                { q: "Do I need to provide water or electricity?", a: "Nope! We're fully self-reliant. Our mobile setup includes our own water supply, power, and professional-grade equipment. All you need is a parking spot." },
                { q: "How do I pay?", a: "We accept all major credit/debit cards, Apple Pay, Google Pay, and cash. Payment is collected at the end of service via Square. We also offer Wisetack financing for larger services like ceramic coating." },
                { q: "Can I combine services for a discount?", a: "Our Inside & Out packages already bundle interior and exterior at a better value than booking separately. For additional savings, check out our monthly membership plans starting at $59/mo." },
                { q: "What if my car is really dirty?", a: "No judgment here — we've seen it all! Heavily soiled vehicles may require additional time, which we'll discuss before starting. Pet hair removal and extreme conditions are charged at our base hourly rate. We always provide a clear quote upfront." },
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

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="cost-cta" fallback="/images/corvette-front.jpg" alt="ProWorx professional mobile detailing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Ready to Book Your <span className="text-gradient-gold">Mobile Detail</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Book online in 60 seconds or call for a free quote. We come to you — no drop-off needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
              <BookNowLink>Book Now <ArrowRight className="size-5" /></BookNowLink>
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
