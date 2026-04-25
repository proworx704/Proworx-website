import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { BookNowLink } from "@/components/BookNowLink";
import { useSiteConfig } from "@/hooks/useCms";

const AREAS = [
  { name: "Charlotte", state: "NC", description: "Our primary service area — covering all Charlotte neighborhoods including Ballantyne, SouthPark, Myers Park, Dilworth, NoDa, and uptown.", pages: [
    { label: "Ceramic Coating", href: "/ceramic-coating-charlotte-nc" },
    { label: "Paint Correction", href: "/paint-correction-charlotte-nc" },
    { label: "Car Detailing", href: "/car-detailing-charlotte-nc" },
    { label: "Mobile Detailing", href: "/mobile-detailing-charlotte-nc" },
    { label: "Boat Detailing", href: "/boat-detailing-charlotte-nc" },
  ]},
  { name: "South Charlotte", state: "NC", description: "Serving Ballantyne, Myers Park, SouthPark, Providence, Rea Road, Arboretum, Weddington, Marvin, and all South Charlotte neighborhoods.", pages: [
    { label: "Ceramic Coating", href: "/ceramic-coating-south-charlotte-nc" },
  ]},
  { name: "Waxhaw", state: "NC", description: "Our home base. Fast, convenient service for all Waxhaw residents and surrounding communities.", pages: [
    { label: "Local Services", href: "/waxhaw" },
  ]},
  { name: "Fort Mill", state: "SC", description: "Cross-border service for our Fort Mill, SC neighbors including Tega Cay and Indian Land.", pages: [] },
  { name: "Matthews", state: "NC", description: "Full mobile detailing services throughout Matthews, Indian Trail, Mint Hill, and Stallings.", pages: [] },
  { name: "Lake Norman", state: "NC", description: "Serving Huntersville, Cornelius, Davidson, and the greater Lake Norman area.", pages: [] },
  { name: "Harrisburg", state: "NC", description: "Serving Harrisburg and northeast Charlotte with full mobile detailing.", pages: [] },
  { name: "Pineville", state: "NC", description: "Mobile detailing available throughout Pineville and the Carolina Place area.", pages: [] },
  { name: "Monroe", state: "NC", description: "Serving Monroe and greater Union County with full mobile detailing.", pages: [] },
];

export function AreasPage() {
  const { config } = useSiteConfig();
  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Mobile Detailing Service Areas — Charlotte, NC"
        description="ProWorx serves Charlotte, Ballantyne, Myers Park, South Charlotte, Fort Mill, Matthews, Davidson, Huntersville & all surrounding areas. Premium mobile detailing & ceramic coating — we come to you!"
        keywords="mobile detailing near me, auto detailing Charlotte NC, car detailing Ballantyne NC, Myers Park detailing, South Charlotte auto detail, Fort Mill detailing, Matthews car detailing, ceramic coating near me Charlotte, Lake Norman auto detailing"
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
                {area.pages && area.pages.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-border">
                    {area.pages.map((page) => (
                      <Link
                        key={page.href}
                        to={page.href}
                        className="text-xs text-gold hover:text-gold/80 transition-colors font-medium"
                      >
                        {page.label} →
                      </Link>
                    ))}
                  </div>
                )}
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
