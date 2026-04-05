import { ArrowRight, MapPin, Phone } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { BookNowLink } from "@/components/BookNowLink";
import { useSiteConfig } from "@/hooks/useCms";

const AREAS = [
  { name: "Charlotte", state: "NC", description: "Our primary service area — covering all Charlotte neighborhoods including Ballantyne, SouthPark, Myers Park, Dilworth, NoDa, and uptown." },
  { name: "Waxhaw", state: "NC", description: "Our home base. Fast, convenient service for all Waxhaw residents and surrounding communities." },
  { name: "Matthews", state: "NC", description: "Full mobile detailing services throughout Matthews and the Stallings area." },
  { name: "Indian Trail", state: "NC", description: "Serving Indian Trail, Sun Valley, and the surrounding Union County neighborhoods." },
  { name: "Mint Hill", state: "NC", description: "Professional detailing services for Mint Hill and eastern Mecklenburg County." },
  { name: "Pineville", state: "NC", description: "Mobile detailing available throughout Pineville and the Carolina Place area." },
  { name: "Ballantyne", state: "NC", description: "Premium detailing services for the Ballantyne community and surrounding areas." },
  { name: "Monroe", state: "NC", description: "Serving Monroe and greater Union County with full mobile detailing." },
  { name: "Fort Mill", state: "SC", description: "Cross-border service for our Fort Mill, SC neighbors. Full service lineup available." },
  { name: "Huntersville", state: "NC", description: "Serving Huntersville, Cornelius, and the Lake Norman area." },
  { name: "Tega Cay", state: "SC", description: "Mobile detailing services available for Tega Cay and the surrounding lakeside communities." },
  { name: "Stallings", state: "NC", description: "Full detailing services for Stallings residents and nearby communities." },
];

export function AreasPage() {
  const { config } = useSiteConfig();
  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Mobile Detailing Service Areas — Charlotte, NC"
        description="ProWorx serves Charlotte, Waxhaw, Matthews, Indian Trail, Mint Hill, Pineville, Monroe & Fort Mill. Premium mobile detailing — we come to you!"
        keywords="mobile detailing near me, auto detailing Waxhaw NC, car detailing Matthews NC, Indian Trail detailing, Mint Hill car wash, Pineville auto detail, Charlotte mobile car wash"
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
            { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.proworxdetailing.com/areas" }
          ]
        }}
      />
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Mobile Detailing in{" "}
              <span className="text-gradient-gold">Charlotte, NC</span>{" "}
              & Surrounding Areas
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              We bring our fully equipped mobile setup to your home or office. No need to drop off your car — we come to you, wherever you are in the Charlotte metro area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {AREAS.map((area) => (
              <div key={area.name} className="rounded-2xl bg-card border border-border p-6 hover:border-gold/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="size-4 text-gold" />
                  <h2 className="font-bold text-lg">{area.name}, {area.state}</h2>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card/50">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">Don't See Your Area?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">Give us a call — we may be able to accommodate locations beyond our standard service area.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
              <BookNowLink href={config.bookingUrlHomeCta || undefined}>Book Your Detail <ArrowRight className="size-5" /></BookNowLink>
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
