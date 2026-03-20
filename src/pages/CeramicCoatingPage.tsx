import { ArrowRight, CheckCircle2, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteConfig } from "@/hooks/useCms";

const PACKAGES = [
  {
    name: "Ceramic Wax",
    protection: "12 Months",
    priceFrom: "$540",
    features: [
      "Single-layer ceramic wax application",
      "Hydrophobic protection",
      "UV protection",
      "Enhanced gloss & depth",
      "Easier maintenance washing",
    ],
    popular: false,
  },
  {
    name: "Q² Flash Coating",
    protection: "3 Years",
    priceFrom: "$1,200",
    features: [
      "GYEON Q² Flash professional coating",
      "1-step paint enhancement polish included",
      "Superior chemical resistance",
      "Extreme hydrophobic properties",
      "3-year manufacturer warranty",
      "Annual inspection included",
    ],
    popular: true,
  },
  {
    name: "Q² Flash EVO",
    protection: "10 Years",
    priceFrom: "$2,370",
    features: [
      "GYEON Q² Flash EVO top-tier coating",
      "Multi-stage paint correction included",
      "Maximum hardness & scratch resistance",
      "Self-cleaning hydrophobic effect",
      "10-year manufacturer warranty",
      "Annual inspection & maintenance included",
    ],
    popular: false,
  },
];

export function CeramicCoatingPage() {
  const { config } = useSiteConfig();
  return (
    <div className="flex-1 flex flex-col">
      {/* Hero with image */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="/images/escalade-rear.jpg" alt="Cadillac Escalade ceramic coating reflections under hex lights" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6 backdrop-blur-sm">
              <Shield className="size-3.5" />
              Gyeon & IGL Certified Installer
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Professional <span className="text-gradient-gold">Ceramic Coating</span> in Charlotte, NC
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Protect your investment with professional-grade GYEON ceramic coatings. Up to 10 years of protection with a brilliant, self-cleaning finish. We're a certified installer — your coating comes with a manufacturer warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <a href={config.ceramicDepositUrl} target="_blank" rel="noopener noreferrer">
                  Reserve with $100 Deposit <ArrowRight className="size-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> {config.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Coating Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              All products are professional-grade GYEON. Pricing varies by vehicle size.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PACKAGES.map((pkg) => (
              <div key={pkg.name} className={`rounded-2xl bg-card border p-7 flex flex-col relative ${pkg.popular ? "border-gold shadow-lg shadow-gold/10" : "border-border"}`}>
                {pkg.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-full">Most Popular</div>}
                <h3 className="font-bold text-xl mb-1">{pkg.name}</h3>
                <p className="text-gold text-sm font-medium mb-2">{pkg.protection} Protection</p>
                <p className="text-2xl font-black mb-5">{pkg.priceFrom}<span className="text-sm font-normal text-muted-foreground">+</span></p>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className={pkg.popular ? "bg-gold text-gold-foreground hover:bg-gold/90 font-bold" : "bg-muted text-foreground hover:bg-muted/80 font-semibold"} asChild>
                  <a href={config.ceramicDepositUrl} target="_blank" rel="noopener noreferrer">Reserve Now <ArrowRight className="size-4" /></a>
                </Button>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            $100 deposit required to book. Deposit is applied to your final service total.
          </p>
        </div>
      </section>

      {/* What you get with image */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <img src="/images/aston-front.jpg" alt="Ceramic coated Aston Martin by ProWorx" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-xl" />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Why Ceramic Coating?</h2>
              <div className="space-y-4">
                {[
                  { title: "Extreme Hydrophobic Protection", desc: "Water, dirt, and contaminants slide right off the surface." },
                  { title: "UV & Chemical Resistance", desc: "Protects against sun damage, bird droppings, tree sap, and road grime." },
                  { title: "Enhanced Gloss & Depth", desc: "Deepens your paint's color and adds a candy-like wet look." },
                  { title: "Easier Maintenance", desc: "Drastically reduces wash time. Your car stays cleaner, longer." },
                  { title: "Manufacturer Warranty", desc: "GYEON-backed warranty with annual inspections from a certified installer." },
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
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto rounded-2xl bg-blue-600/10 border border-blue-600/20 p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Buy Now, Pay Later</h2>
            <p className="text-muted-foreground mb-6">
              Prequalify for the Wisetack credit option with no impact to your credit score.
              Loans from $50–$15,000. Subject to eligibility. Terms apply.
            </p>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 font-bold" asChild>
              <a href={config.wisetackUrl} target="_blank" rel="noopener noreferrer">Prequalify Now <ArrowRight className="size-4" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="/images/ferrari-side.jpg" alt="Ferrari Roma ceramic coated by ProWorx" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Protect Your Vehicle for <span className="text-gradient-gold">Years to Come</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Schedule a free consultation. We'll inspect your paint and recommend the ideal ceramic coating package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
              <a href={config.ceramicDepositUrl} target="_blank" rel="noopener noreferrer">Reserve with $100 Deposit <ArrowRight className="size-5" /></a>
            </Button>
            <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
              <a href={config.phoneLink}><Phone className="size-5" /> Call for a Free Consultation</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
