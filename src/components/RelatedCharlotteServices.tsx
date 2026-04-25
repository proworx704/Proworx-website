import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const CHARLOTTE_SERVICES = [
  { label: "Car Detailing Charlotte", href: "/car-detailing-charlotte-nc", desc: "Full interior & exterior detailing from $258" },
  { label: "Mobile Detailing Charlotte", href: "/mobile-detailing-charlotte-nc", desc: "Professional detailing at your home or office" },
  { label: "Ceramic Coating Charlotte", href: "/ceramic-coating-charlotte-nc", desc: "GYEON certified — 1 to 10-year protection" },
  { label: "Paint Correction Charlotte", href: "/paint-correction-charlotte-nc", desc: "Multi-stage swirl & scratch removal" },
  { label: "Boat Detailing Charlotte", href: "/boat-detailing-charlotte-nc", desc: "Lake Norman & Lake Wylie boat care" },
  { label: "GYEON Certified Installer", href: "/gyeon-certified-installer-charlotte", desc: "Charlotte's certified coating specialist" },
];

const NEIGHBORHOOD_PAGES = [
  { label: "Ceramic Coating South Charlotte", href: "/ceramic-coating-south-charlotte-nc" },
  { label: "Ceramic Coating Charlotte", href: "/ceramic-coating-charlotte-nc" },
  { label: "Detailing in Waxhaw", href: "/waxhaw" },
];

interface Props {
  currentPath: string;
}

export function RelatedCharlotteServices({ currentPath }: Props) {
  const services = CHARLOTTE_SERVICES.filter((s) => s.href !== currentPath);
  const neighborhoods = NEIGHBORHOOD_PAGES.filter((n) => n.href !== currentPath);

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">
            More Services in Charlotte
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Explore all of our professional detailing services available in the Charlotte, NC area.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {services.map((svc) => (
              <Link
                key={svc.href}
                to={svc.href}
                className="rounded-xl bg-card border border-border p-5 hover:border-gold/50 transition-colors flex items-start gap-3"
              >
                <MapPin className="size-4 text-gold mt-0.5 shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm mb-1">{svc.label}</h3>
                  <p className="text-xs text-muted-foreground">{svc.desc}</p>
                </div>
                <ArrowRight className="size-4 text-muted-foreground mt-0.5 shrink-0" />
              </Link>
            ))}
          </div>
          {neighborhoods.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3">
              {neighborhoods.map((n) => (
                <Link
                  key={n.href}
                  to={n.href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm hover:border-gold/50 transition-colors"
                >
                  <MapPin className="size-3 text-gold" />
                  {n.label}
                </Link>
              ))}
              <Link
                to="/areas"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-sm text-gold font-medium hover:bg-gold/20 transition-colors"
              >
                View All Areas →
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
