import { useEffect } from "react";
import {
  ArrowRight,
  Award,
  CalendarCheck,
  CheckCircle2,
  Droplets,
  Gift,
  Hourglass,
  Phone,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Truck,
  Wind,
} from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";
import { trackPhoneClick, trackSubscribeClick, trackViewContent } from "@/lib/tracking";

/* Annual prepaid Inside & Out membership with a free GYEON Q2 One EVO coating.
   Separate from the month-to-month plans on /maintenance (those are cancel anytime; this is not).
   Payments run through QuickBooks, so "Claim My Spot" is call/text. No em dashes in page copy. */

const COATING_VALUE = "$499";

const ANNUAL_PRICING = [
  { key: "sedan", label: "Coupes & Sedans", year: "$1,512", month: "$126" },
  { key: "small-suv", label: "Small SUVs / Crossovers", year: "$1,764", month: "$147" },
  { key: "large-suv", label: "Large SUVs / Trucks", year: "$2,016", month: "$168" },
  { key: "van", label: "Vans / Minivans", year: "$2,520", month: "$210" },
];

const OFFER_ITEMS = [
  {
    icon: <Gift className="size-6" />,
    title: "Free GYEON Q² One EVO ceramic coating",
    desc: `A ${COATING_VALUE} value, applied in your first month.`,
  },
  {
    icon: <CalendarCheck className="size-6" />,
    title: "12 monthly Inside & Out visits",
    desc: "At your home or office.",
  },
];

const WHY_CERAMIC = [
  { icon: <Droplets className="size-5" />, text: "Water and dirt slide right off" },
  { icon: <Sparkles className="size-5" />, text: "Deep gloss that lasts" },
  { icon: <Wind className="size-5" />, text: "Easier, faster washes" },
  { icon: <Snowflake className="size-5" />, text: "Protection through winter salt and spring pollen" },
];

const WHY_PROWORX = [
  { icon: <ShieldCheck className="size-5" />, text: "Certified GYEON detailer" },
  { icon: <Award className="size-5" />, text: "11 years of experience" },
  { icon: <Truck className="size-5" />, text: "Fully self-contained vans, no water or power needed from you" },
  { icon: <CheckCircle2 className="size-5" />, text: "Ceramic-safe maintenance products made for coated vehicles" },
];

const STEPS = [
  "Choose your vehicle size",
  "Join the annual plan",
  "We schedule your ceramic coating visit",
  "Monthly visits start from there",
];

export function AnnualCeramicOfferPage() {
  const { config } = useSiteConfig();

  useEffect(() => {
    window.scrollTo(0, 0);
    trackViewContent("Annual Ceramic Membership Offer", "Promo");
  }, []);

  const claim = (where: string) => {
    trackSubscribeClick(`Annual Ceramic Offer: ${where}`, config.phoneLink);
    trackPhoneClick();
  };

  const ClaimButton = ({ where }: { where: string }) => (
    <Button
      size="lg"
      className="w-full sm:w-auto bg-gold-dark text-gold-foreground hover:bg-gold-dark/90 h-14 px-10 text-lg font-bold"
      asChild
    >
      <a href={config.phoneLink} onClick={() => claim(where)}>
        Claim My Spot <ArrowRight className="size-5" />
      </a>
    </Button>
  );

  const CallLine = () => (
    <p className="mt-3 text-sm text-muted-foreground">
      <a href={config.phoneLink} onClick={() => trackPhoneClick()} className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
        <Phone className="size-4" /> Call or text {config.phone}
      </a>
    </p>
  );

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Free Ceramic Coating with Annual Membership, Charlotte NC"
        description="Get a $499 GYEON ceramic coating free when you join the ProWorx annual Inside & Out membership. 12 monthly mobile details at your home or office in Charlotte, NC."
        keywords="free ceramic coating Charlotte NC, annual detailing membership, GYEON ceramic coating, mobile detailing membership Charlotte"
        ogImage="https://www.proworxdetailing.com/images/ceramic-tesla-front.jpg"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", "position": 2, "name": "Free Ceramic Coating with Annual Membership", "item": "https://www.proworxdetailing.com/free-ceramic-coating" },
              ],
            },
            {
              "@type": "Service",
              "name": "Annual Inside & Out Membership with Free Ceramic Coating",
              "provider": { "@type": "LocalBusiness", "name": "ProWorx Mobile Detailing", "url": "https://www.proworxdetailing.com" },
              "areaServed": { "@type": "City", "name": "Charlotte", "addressRegion": "NC" },
              "description": "Annual prepaid Inside & Out membership: 12 monthly mobile details plus a free GYEON Q2 One EVO ceramic coating ($499 value) applied in the first month.",
              "offers": ANNUAL_PRICING.map((t) => ({
                "@type": "Offer",
                "name": `Annual membership: ${t.label}`,
                "price": t.year.replace(/[$,]/g, ""),
                "priceCurrency": "USD",
              })),
            },
          ],
        }}
      />

      {/* ── 1. Hero ── */}
      <section className="relative py-16 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg
            slot="annual-ceramic-hero"
            fallback="/images/ceramic-tesla-front.jpg"
            alt="Red Tesla with a fresh GYEON ceramic coating reflecting the shop lights"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background via-background/90 to-background/40" />
        </div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6 backdrop-blur-sm">
              <Gift className="size-3.5" />
              Annual Membership Offer
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Get a <span className="text-gradient-gold">$499 ceramic coating</span> free.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Join our annual Inside &amp; Out membership. We coat your car this month, then keep it spotless all year, right at your door.
            </p>
            <ClaimButton where="hero" />
            <CallLine />
          </div>
        </div>
      </section>

      {/* ── 2. The offer ── */}
      <section className="py-14 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">The Offer</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What you get</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {OFFER_ITEMS.map((item) => (
                <div key={item.title} className="rounded-2xl border-2 border-gold/30 bg-gradient-to-b from-gold/5 to-transparent p-6">
                  <div className="size-12 rounded-xl bg-gold/20 text-gold flex items-center justify-center mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Why ceramic / 4. Why ProWorx ── */}
      <section className="py-14 md:py-20 bg-card/50">
        <div className="container">
          <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
            {[
              { heading: "Why ceramic", items: WHY_CERAMIC },
              { heading: "Why ProWorx", items: WHY_PROWORX },
            ].map((col) => (
              <div key={col.heading}>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">{col.heading}</h2>
                <ul className="space-y-3">
                  {col.items.map((it) => (
                    <li key={it.text} className="flex items-start gap-4 rounded-xl bg-card border border-border p-4">
                      <span className="size-10 rounded-lg bg-gold/15 text-gold flex items-center justify-center shrink-0">{it.icon}</span>
                      <span className="font-medium pt-2">{it.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Limited spots ── */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="max-w-3xl mx-auto rounded-2xl border-2 border-gold/40 bg-gradient-to-r from-card to-card/80 p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="size-12 rounded-xl bg-gold/20 text-gold flex items-center justify-center shrink-0">
              <Hourglass className="size-6" />
            </div>
            <div>
              <h2 className="font-bold text-xl mb-1">Limited spots</h2>
              <p className="text-muted-foreground">We only coat a few cars each week, so spots are limited through December.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. How it works ── */}
      <section className="py-14 md:py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-10">How it works</h2>
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step, i) => (
                <li key={step} className="rounded-xl bg-card border border-border p-5 flex sm:flex-col items-center sm:items-start gap-4">
                  <span className="size-10 rounded-full bg-gold-dark text-gold-foreground font-black text-lg flex items-center justify-center shrink-0">{i + 1}</span>
                  <span className="font-semibold">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── 7. Pricing ── */}
      <section id="pricing" className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Annual membership</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Includes your {COATING_VALUE} ceramic coating free.
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ANNUAL_PRICING.map((t) => (
              <div key={t.key} className="rounded-2xl bg-card border border-border p-6 text-center flex flex-col">
                <h3 className="font-bold mb-4">{t.label}</h3>
                <p className="text-4xl font-black tracking-tight">
                  {t.year}
                  <span className="text-base font-semibold text-muted-foreground">/year</span>
                </p>
                <p className="text-sm text-gold font-semibold mt-2">Works out to {t.month}/month</p>
                <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1.5">
                  <Gift className="size-3.5 text-gold" /> {COATING_VALUE} coating included
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">Plus applicable sales tax.</p>
          <div className="text-center mt-8">
            <ClaimButton where="pricing" />
          </div>
        </div>
      </section>

      {/* ── 8. Fine print ── */}
      <section className="py-10">
        <div className="container">
          <div className="max-w-3xl mx-auto rounded-xl border border-border p-5 md:p-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Fine print</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Annual plan is paid in full upfront. Free ceramic coating is applied in your first month. The annual fee is non-refundable once the coating is applied. This offer is separate from our month-to-month membership.
            </p>
          </div>
        </div>
      </section>

      {/* ── 9. Final CTA ── */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto rounded-3xl border-2 border-gold/30 bg-gradient-to-b from-gold/10 to-card p-8 md:p-12 text-center">
            <Sparkles className="size-10 text-gold mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8">Ready for a car that stays clean all year?</h2>
            <ClaimButton where="final" />
            <CallLine />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AnnualCeramicOfferPage;
