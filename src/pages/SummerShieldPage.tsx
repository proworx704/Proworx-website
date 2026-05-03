import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Zap,
} from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { CmsImg } from "@/components/CmsImg";
import { trackPhoneClick, trackBookNowConversion } from "@/lib/tracking";
import { PHONE, PHONE_LINK } from "@/lib/constants";

/* ──────────────────────── DATA ──────────────────────── */

const PACKAGES = [
  {
    name: "Q² One EVO",
    tag: "1-Year Protection",
    price: "$399",
    originalPrice: "$499",
    savings: "Save $100",
    paymentLink: "https://square.link/u/xY6RS6br",
    features: [
      "Full paint decontamination wash",
      "Clay bar treatment",
      "Prep spray wipe down for bonding",
      "Single-layer GYEON Q² One EVO",
      "Hydrophobic protection & UV shield",
      "1-year GYEON manufacturer warranty",
    ],
    popular: false,
    accent: "from-blue-500 to-cyan-500",
    badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  {
    name: "Q² Pure EVO",
    tag: "3-Year Protection",
    price: "$699",
    originalPrice: "$899",
    savings: "Save $200",
    paymentLink: "https://square.link/u/0SgnpmXW",
    features: [
      "Full paint decontamination wash",
      "Clay bar treatment",
      "Prep spray wipe down for bonding",
      "GYEON Q² Pure EVO professional coating",
      "Superior chemical & UV resistance",
      "Extreme hydrophobic properties",
      "3-year GYEON manufacturer warranty",
      "Annual inspection included",
    ],
    popular: true,
    accent: "from-gold to-amber-400",
    badge: "bg-gold/20 text-gold border-gold/30",
  },
  {
    name: "Q² Flash EVO",
    tag: "10-Year Protection",
    price: "$1,299",
    originalPrice: "$1,599",
    savings: "Save $300",
    paymentLink: "https://square.link/u/JO0Ml2tZ",
    features: [
      "Full paint decontamination wash",
      "Clay bar treatment",
      "Prep spray wipe down for bonding",
      "GYEON Q² Flash EVO top-tier coating",
      "Maximum hardness & scratch resistance",
      "Self-cleaning hydrophobic effect",
      "10-year GYEON manufacturer warranty",
      "Annual inspection & maintenance",
    ],
    popular: false,
    accent: "from-purple-500 to-pink-500",
    badge: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  },
];

const REVIEWS = [
  {
    name: "Corey W.",
    text: "Tyler and his team are best in class. They service all our vehicles with such care and professionalism. He's always punctual and very up front on pricing.",
    stars: 5,
  },
  {
    name: "John",
    text: "Been using Tyler's service for a few years now. Tyler details both of my cars each month. Excellent attention to detail as you would expect. Highly recommend!",
    stars: 5,
  },
  {
    name: "Misti M.",
    text: "On time, great attention to detail and excellent customer service! I feel like I have a new car! Highly recommend!",
    stars: 5,
  },
];

const URGENCY_ITEMS = [
  { icon: Sun, text: "UV damage accelerates every day without protection" },
  { icon: Clock, text: "Limited spots available — coatings take 1–2 full days" },
  { icon: Zap, text: "Promo pricing ends May 31 — don't miss out" },
];

/* ──────────────────────── COMPONENTS ──────────────────────── */

function StarRating({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
      ))}
    </span>
  );
}

/* ──────────────────────── PAGE ──────────────────────── */

export function SummerShieldPage() {
  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Summer Shield Special — Save up to $300 on Ceramic Coating | ProWorx Detailing"
        description="Limited-time Summer Shield Special on GYEON Q² ceramic coating. 1-Year from $399, 3-Year from $699, 10-Year from $1,299. Includes full decon wash, clay bar & prep spray. Charlotte & Waxhaw NC."
        keywords="ceramic coating special Charlotte NC, GYEON ceramic coating deal, ceramic coating discount, paint protection Charlotte, summer ceramic coating sale, ProWorx detailing promo"
      />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <CmsImg
            slot="summer-shield-hero"
            fallback="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=2000&auto=format"
            alt="Ceramic coated vehicle with deep gloss"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 pt-20 pb-16 text-center">
          {/* Promo badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm text-gold mb-6">
            <Shield className="size-4" />
            <span className="font-semibold tracking-wide">LIMITED-TIME SPECIAL — ENDS MAY 31</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-4">
            Summer Shield
          </h1>
          <p className="text-xl sm:text-2xl text-gold font-semibold mb-3">
            Ceramic Coating Special — Save Up to $300
          </p>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Professional GYEON Q² ceramic protection. Full decontamination wash,
            clay bar treatment & prep spray included with every package.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="text-base px-8">
              <a href="#packages">
                View Packages <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 border-white/20 hover:bg-white/10"
            >
              <a href={PHONE_LINK} onClick={() => trackPhoneClick()}>
                <Phone className="mr-2 size-4" /> {PHONE}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── URGENCY BAR ─── */}
      <section className="border-y border-gold/20 bg-gold/5">
        <div className="max-w-5xl mx-auto px-4 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {URGENCY_ITEMS.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-sm text-muted-foreground">
                <Icon className="size-5 text-gold shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING PACKAGES ─── */}
      <section id="packages" className="scroll-mt-20 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3">
              Choose Your Protection Level
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every package includes full paint decontamination, clay bar treatment,
              prep spray wipe down, and professional GYEON Q² ceramic application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl border bg-card overflow-hidden transition-transform hover:scale-[1.02] ${
                  pkg.popular
                    ? "border-gold shadow-lg shadow-gold/10 ring-1 ring-gold/20"
                    : "border-border"
                }`}
              >
                {/* Top accent bar */}
                <div className={`h-1.5 bg-gradient-to-r ${pkg.accent}`} />

                {/* Popular badge */}
                {pkg.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gold/20 border border-gold/30 px-3 py-1 text-xs font-semibold text-gold">
                      <Sparkles className="size-3" /> MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  {/* Package header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <ShieldCheck className="size-5 text-gold" />
                      <h3 className="text-lg font-bold">{pkg.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{pkg.tag}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-bold tracking-tight">{pkg.price}</span>
                      <span className="text-lg text-muted-foreground line-through">
                        {pkg.originalPrice}
                      </span>
                    </div>
                    <span
                      className={`inline-block mt-2 rounded-full border px-3 py-0.5 text-xs font-semibold ${pkg.badge}`}
                    >
                      {pkg.savings}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-sm">
                        <CheckCircle2 className="size-4 shrink-0 mt-0.5 text-emerald-400" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    asChild
                    className={`w-full text-base ${pkg.popular ? "" : "variant-outline"}`}
                    size="lg"
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    <a
                      href={pkg.paymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackBookNowConversion(pkg.paymentLink)}
                    >
                      Book Now — {pkg.price}
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Paint correction &amp; polish available as add-ons. Prices shown are for sedans/coupes — larger vehicles may vary.
            <br />
            <span className="text-gold">Offer valid through May 31, 2026.</span>
          </p>
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED ─── */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-10">
            What's Included in Every Package
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Full Paint Decontamination Wash",
                desc: "Thorough wash to remove all surface contaminants, road film, and debris before coating.",
              },
              {
                icon: Shield,
                title: "Clay Bar Treatment",
                desc: "Removes embedded fallout, tree sap, and industrial contamination for a glass-smooth surface.",
              },
              {
                icon: Zap,
                title: "Prep Spray Wipe Down",
                desc: "IPA/prep spray wipe ensures zero residue on the paint for maximum ceramic bond strength.",
              },
              {
                icon: ShieldCheck,
                title: "Professional GYEON Q² Application",
                desc: "Certified professional application of your chosen GYEON Q² ceramic coating tier.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                  <Icon className="size-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-2">
            57+ Five-Star Reviews
          </h2>
          <p className="text-muted-foreground mb-10">
            Charlotte's trusted detailing professional — 12+ years experience
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="rounded-xl border border-border bg-card p-5 text-left"
              >
                <StarRating count={r.stars} />
                <p className="text-sm text-muted-foreground leading-relaxed mt-3 mb-3">
                  "{r.text}"
                </p>
                <p className="text-sm font-semibold">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-16 border-t border-gold/20 bg-gradient-to-b from-gold/5 to-transparent">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Shield className="size-12 text-gold mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3">
            Don't Wait Until the Damage Is Done
          </h2>
          <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
            Every day without ceramic protection, UV rays, heat, pollen, and road grime
            are eating away at your clear coat. Lock in Summer Shield pricing now.
          </p>
          <p className="text-gold font-semibold text-sm mb-8">
            ⏰ Offer expires May 31, 2026
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="text-base px-8">
              <a href="#packages">
                Choose Your Shield <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8"
            >
              <a href={PHONE_LINK} onClick={() => trackPhoneClick()}>
                <Phone className="mr-2 size-4" /> Call {PHONE}
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            ProWorx Detailing · Charlotte &amp; Waxhaw, NC · GYEON Certified Professional
          </p>
        </div>
      </section>
    </div>
  );
}

export default SummerShieldPage;
