import { ArrowRight, Building2, Car, CheckCircle2, Clock, Phone, Shield, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";

const FLEET_TIERS = [
  {
    name: "Small Fleet",
    vehicles: "2–5 Vehicles",
    discount: "10% Off",
    perVehicle: "Per-vehicle pricing",
    features: [
      "10% volume discount on all services",
      "Flexible scheduling (weekly, biweekly, or monthly)",
      "On-site mobile service at your location",
      "Dedicated account representative",
      "Custom service packages available",
    ],
    popular: false,
  },
  {
    name: "Mid-Size Fleet",
    vehicles: "6–15 Vehicles",
    discount: "15% Off",
    perVehicle: "Per-vehicle pricing",
    features: [
      "15% volume discount on all services",
      "Priority scheduling & route optimization",
      "On-site mobile service at your location",
      "Dedicated account representative",
      "Monthly reporting & vehicle tracking",
      "Custom service packages available",
    ],
    popular: true,
  },
  {
    name: "Large Fleet",
    vehicles: "16–30 Vehicles",
    discount: "20% Off",
    perVehicle: "Per-vehicle pricing",
    features: [
      "20% volume discount on all services",
      "Priority same-day scheduling",
      "On-site mobile service at your location",
      "Dedicated account manager",
      "Monthly reporting & vehicle tracking",
      "Custom service packages available",
      "Emergency detail service available",
    ],
    popular: false,
  },
];

const FLEET_SERVICES = [
  {
    name: "Exterior Wash",
    description: "Hand wash, dry, tire & wheel cleaning, and exterior windows. Perfect for keeping fleet vehicles presentable between full details.",
    ideal: "Weekly or biweekly maintenance",
  },
  {
    name: "Interior + Exterior",
    description: "Complete detail including interior vacuum, surface wipe down, exterior hand wash, tire dressing, and glass cleaning.",
    ideal: "Monthly maintenance for customer-facing vehicles",
  },
  {
    name: "Full Detail",
    description: "Comprehensive interior deep clean, exterior wash & decontamination, and paint protection. The works for your fleet.",
    ideal: "Quarterly deep clean or vehicle turnover prep",
  },
  {
    name: "Ceramic Protection",
    description: "Professional ceramic coating application for long-term paint protection. Reduces ongoing maintenance costs and keeps vehicles looking new.",
    ideal: "New fleet vehicles or annual refresh",
  },
];

const INDUSTRIES = [
  { icon: <Car className="size-5" />, label: "Car Dealerships" },
  { icon: <Truck className="size-5" />, label: "Delivery & Logistics" },
  { icon: <Building2 className="size-5" />, label: "Corporate Fleets" },
  { icon: <Users className="size-5" />, label: "Sales Teams" },
  { icon: <Shield className="size-5" />, label: "Rental Companies" },
  { icon: <Clock className="size-5" />, label: "Property Management" },
];

export function FleetPage() {
  const { config } = useSiteConfig();

  return (
    <div className="flex-1 flex flex-col">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="fleet-hero" fallback="/images/fleet-real.jpg" alt="ProWorx fleet detailing on-site service" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6 backdrop-blur-sm">
              <Truck className="size-3.5" />
              Volume Pricing Available
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Professional <span className="text-gradient-gold">Fleet Detailing</span> in Charlotte, NC
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Keep your business vehicles clean, professional, and representing your brand well. Tier-based volume pricing with on-site mobile service — zero downtime for your fleet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <a href="#pricing">
                  View Fleet Pricing <ArrowRight className="size-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> {config.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fleet Detailing */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Fleet Detailing?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Your vehicles are a direct reflection of your brand. A clean fleet builds trust with customers and shows you take pride in your business.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Zero Downtime", desc: "We come to your lot and detail vehicles on-site. No need to drop off or pick up — your fleet stays operational." },
                { title: "Volume Savings", desc: "The more vehicles you have, the more you save. Tier-based pricing rewards larger fleets with bigger discounts." },
                { title: "Consistent Quality", desc: "Every vehicle gets the same ProWorx standard of care — no shortcuts, no missed details." },
                { title: "Flexible Scheduling", desc: "Weekly, biweekly, or monthly service plans. We work around your fleet's schedule, not the other way around." },
                { title: "Brand Image", desc: "Clean vehicles make a strong first impression. Whether it's a sales team or delivery fleet, appearance matters." },
                { title: "Paint Protection", desc: "Regular detailing and optional ceramic coatings protect your investment and maintain resale value." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-card border border-border p-5">
                  <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tier Pricing */}
      <section id="pricing" className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Fleet Pricing Tiers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Volume discounts based on fleet size. All tiers include on-site mobile service. Pricing is per vehicle — contact us for a custom quote.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {FLEET_TIERS.map((tier) => (
              <div key={tier.name} className={`rounded-2xl bg-card border p-7 flex flex-col relative ${tier.popular ? "border-gold shadow-lg shadow-gold/10" : "border-border"}`}>
                {tier.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-full">Best Value</div>}
                <h3 className="font-bold text-xl mb-1">{tier.name}</h3>
                <p className="text-gold text-sm font-medium mb-2">{tier.vehicles}</p>
                <p className="text-2xl font-black text-gold mb-5">{tier.discount}</p>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className={tier.popular ? "bg-gold text-gold-foreground hover:bg-gold/90 font-bold" : "bg-muted text-foreground hover:bg-muted/80 font-semibold"} asChild>
                  <a href={config.phoneLink}>Get a Quote <ArrowRight className="size-4" /></a>
                </Button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 space-y-2">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">31+ vehicles?</span> Contact us for custom enterprise pricing with maximum savings.
            </p>
            <p className="text-xs text-muted-foreground">
              All discounts are applied to standard per-vehicle pricing. Pricing varies by vehicle size and service selected.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Service Packages */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Fleet Service Options</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Choose the level of care that fits your fleet's needs. Mix and match services across your vehicles.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {FLEET_SERVICES.map((svc) => (
              <div key={svc.name} className="rounded-2xl bg-card border border-border p-6 flex flex-col">
                <h3 className="font-bold text-lg mb-2">{svc.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-3">{svc.description}</p>
                <div className="rounded-lg bg-gold/5 border border-gold/20 px-3 py-2">
                  <p className="text-xs text-gold font-medium">Best for: {svc.ideal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From small business fleets to large corporate accounts — we've got you covered.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {INDUSTRIES.map((ind) => (
              <div key={ind.label} className="rounded-xl bg-card border border-border p-4 text-center flex flex-col items-center gap-2">
                <div className="size-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                  {ind.icon}
                </div>
                <p className="text-xs font-medium">{ind.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How Fleet Detailing Works</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Contact Us", desc: "Call or send us your fleet details — number of vehicles, types, and service needs." },
                { step: "2", title: "Custom Quote", desc: "We'll build a custom plan with tier pricing based on your fleet size and preferred schedule." },
                { step: "3", title: "On-Site Service", desc: "Our mobile team arrives at your lot and details vehicles without disrupting operations." },
                { step: "4", title: "Ongoing Care", desc: "Set a recurring schedule (weekly, biweekly, monthly) and we handle the rest." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="size-12 rounded-full bg-gold/10 flex items-center justify-center text-gold font-black text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="fleet-process" fallback="/images/mobile-tent.jpg" alt="ProWorx mobile detailing setup" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Ready to Keep Your Fleet <span className="text-gradient-gold">Looking Sharp</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Get a custom fleet quote today. We'll work with you to build the perfect plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
              <a href={config.phoneLink}>Get a Fleet Quote <Phone className="size-5" /></a>
            </Button>
            <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
              <a href={`mailto:${config.email}`}>Email Us <ArrowRight className="size-5" /></a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
