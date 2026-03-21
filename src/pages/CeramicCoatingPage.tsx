import { ArrowRight, CheckCircle2, Phone, Shield } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";

const PACKAGES = [
  {
    name: "GYEON Q² One EVO",
    protection: "1 Year",
    priceFrom: "$499",
    deposit: "~$150",
    configKey: "ceramicDeposit1yr",
    features: [
      "Prep wash & decontamination",
      "Light prep polish (paint preparation)",
      "Single-layer GYEON Q² One EVO application",
      "Hydrophobic protection & UV shield",
      "Enhanced gloss & depth",
      "1-year manufacturer warranty",
    ],
    popular: false,
  },
  {
    name: "GYEON Q² Pure EVO",
    protection: "3 Years",
    priceFrom: "$899",
    deposit: "~$270",
    configKey: "ceramicDeposit3yr",
    features: [
      "Prep wash & decontamination",
      "Light prep polish (paint preparation)",
      "GYEON Q² Pure EVO professional coating",
      "Superior chemical & UV resistance",
      "Extreme hydrophobic properties",
      "3-year manufacturer warranty",
      "Annual inspection included",
    ],
    popular: true,
  },
  {
    name: "GYEON Q² Flash EVO",
    protection: "10 Years",
    priceFrom: "$1,599",
    deposit: "~$480",
    configKey: "ceramicDeposit10yr",
    features: [
      "Prep wash & decontamination",
      "Light prep polish (paint preparation)",
      "GYEON Q² Flash EVO top-tier coating",
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

  const getDepositUrl = (configKey: string) => {
    const url = config[configKey];
    return url || config.ceramicDepositUrl;
  };

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Ceramic Coating"
        description="Gyeon & IGL certified ceramic coating in Charlotte, NC. 1-year, 3-year & 10-year protection packages. Professional paint correction included. Mobile service — we come to you."
        keywords="ceramic coating Charlotte NC, Gyeon ceramic coating, IGL ceramic coating, paint protection Charlotte, ceramic coat near me, car ceramic coating cost"
      />
      {/* Hero with image */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="ceramic-hero" fallback="/images/escalade-rear.jpg" alt="Cadillac Escalade ceramic coating reflections under hex lights" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6 backdrop-blur-sm">
              <Shield className="size-3.5" />
              Gyeon Certified Installer
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Professional <span className="text-gradient-gold">Ceramic Coating</span> in Charlotte, NC
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              True ceramic protection for your vehicle — not wax, not sealant. Professional-grade GYEON ceramic coatings with up to 10 years of protection and a manufacturer warranty. Reserve your spot with just 30% down.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <a href="#packages">
                  Reserve with 30% Down <ArrowRight className="size-5" />
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
      <section id="packages" className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ceramic Coating Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              All true ceramic coatings — professional-grade GYEON products applied by a certified installer. Each package includes a prep cleaning & light prep polish. Pricing varies by vehicle size.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PACKAGES.map((pkg) => (
              <div key={pkg.name} className={`rounded-2xl bg-card border p-7 flex flex-col relative ${pkg.popular ? "border-gold shadow-lg shadow-gold/10" : "border-border"}`}>
                {pkg.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-full">Most Popular</div>}
                <h3 className="font-bold text-xl mb-1">{pkg.name}</h3>
                <p className="text-gold text-sm font-medium mb-2">{pkg.protection} Protection</p>
                <p className="text-2xl font-black mb-1">{pkg.priceFrom}<span className="text-sm font-normal text-muted-foreground">+</span></p>
                <p className="text-xs text-muted-foreground mb-5">30% deposit ({pkg.deposit}) to reserve</p>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className={pkg.popular ? "bg-gold text-gold-foreground hover:bg-gold/90 font-bold" : "bg-muted text-foreground hover:bg-muted/80 font-semibold"} asChild>
                  <a href={getDepositUrl(pkg.configKey)} target="_blank" rel="noopener noreferrer">Reserve with 30% Down <ArrowRight className="size-4" /></a>
                </Button>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            30% deposit required to book. Deposit is applied to your final service total. Need paint correction? Add it from our <a href="/paint-correction" className="text-gold hover:underline">Paint Correction</a> page.
          </p>
        </div>
      </section>

      {/* What each package includes */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-center">What's Included in Every Package</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: "Prep Cleaning", desc: "Full exterior wash, clay bar decontamination, and iron removal to ensure a perfectly clean surface before coating." },
                { title: "Light Prep Polish", desc: "A single-step machine polish to prep the paint surface. This is not for correction — it creates the ideal bonding surface for the ceramic coating." },
                { title: "Ceramic Application", desc: "Professional hand-applied GYEON ceramic coating with proper cure time. Each layer is inspected under LED lighting for full coverage." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-card border border-border p-5">
                  <h3 className="font-bold text-sm text-gold mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-gold/5 border border-gold/20 p-5 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Need paint correction?</span> If your vehicle has swirl marks, scratches, or oxidation, add a paint correction service before your coating for the best results. Paint correction is available as a separate service — <a href="/paint-correction" className="text-gold hover:underline">view packages here</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ceramic Coating with image */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <CmsImg slot="ceramic-why" fallback="/images/aston-front.jpg" alt="Ceramic coated Aston Martin by ProWorx" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-xl" />
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
          <CmsImg slot="ceramic-process" fallback="/images/ferrari-side.jpg" alt="Ferrari Roma ceramic coated by ProWorx" className="w-full h-full object-cover" />
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
              <a href="#packages">Reserve with 30% Down <ArrowRight className="size-5" /></a>
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
