import { useEffect, useCallback } from "react";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE, PHONE_LINK } from "@/lib/constants";
import { trackPhoneClick, trackBookNowConversion } from "@/lib/tracking";

/* ── Square links ── */
const SQUARE_BOOKING_URL =
  "https://book.squareup.com/appointments/3462dsfn0cvfuh/location/9VRKFJAZZM3HG/services";
const SQUARE_WIDGET_URL =
  "https://app.squareup.com/appointments/buyer/widget/m9mhndj2r9ryyq/9VRKFJAZZM3HG";
/* Membership checkout (kept for reference): https://checkout.square.site/merchant/KAXAX104TMA6W/checkout/HDT3KCUF2VOY34QRVE27JKFL */
const COATING_LINKS = {
  oneEvo: "https://square.link/u/gH4gRlzU",
  pureEvo: "https://square.link/u/ApNI3tJ3",
  infiniteType1: "https://square.link/u/hgB1fzUS",
  infiniteType1And2: "https://square.link/u/FRgXnw1m",
};

/* ── Data ── */

const OFFERS = [
  {
    id: "membership",
    badge: "Featured Offer",
    title: "FREE 3-Year Ceramic Coating",
    subtitle: "Join any Annual Membership Maintenance Plan and receive:",
    highlight: "FREE 3-Year Ceramic Coating Protection",
    highlightSub: "$899+ Value",
    features: [
      "Q² Pure EVO professional ceramic coating included",
      "Any Annual Membership Plan qualifies — from $679/year",
      "We come to you — home or office",
      "Cancel-anytime flexibility",
      "Year-round professional maintenance",
    ],
    extraHighlight: "PLUS 15% OFF all ceramic add-ons",
    extraFeatures: [
      "Windshield Glass Ceramic",
      "Wheel & Caliper Ceramic",
      "Trim & Plastic Ceramic",
      "Leather Shield · Fabric Coat",
    ],
    cta: "Get Your Free Coating",
    link: "/maintenance",
    accent: "amber",
    tagLabel: "Best Value",
  },
  {
    id: "addons",
    badge: "Offer 2",
    title: "The Ultimate Add-On Upgrade",
    subtitle: "Book any Core Standard Detail Service and receive:",
    highlight: "15% OFF",
    highlightSub: "All add-on services",
    features: [
      "Engine bay detail",
      "Pet hair removal",
      "Headlight restoration & more",
    ],
    extraHighlight: null,
    extraFeatures: null,
    cta: "Book & Save 15%",
    link: SQUARE_BOOKING_URL,
    accent: "red",
    tagLabel: null,
  },
  {
    id: "summer-freedom",
    badge: "Offer 3",
    title: '"Summer Freedom" Detail Package',
    subtitle:
      "A premium, limited-run bundle to bulletproof your ride against sun, bugs, and salt:",
    highlight: null,
    highlightSub: null,
    features: [
      "Standard Inside/Out Detail",
      "GYEON CanCoat Pro EVO exterior paint protection",
      "Wheel WetCoat hydrophobic protection",
      "Tire Ceramic Coating (deep satin finish)",
      "Leather Ceramic OR Fabric Ceramic Protection",
      "Premium Fragrance of your choice",
    ],
    extraHighlight: null,
    extraFeatures: null,
    cta: "Book Summer Freedom",
    link: "widget",
    accent: "blue",
    tagLabel: "Limited Run",
  },
];

const COATINGS = [
  {
    name: "Q² One EVO",
    term: "1-Year Protection",
    price: "$399",
    originalPrice: "$499",
    savings: "$100",
    link: COATING_LINKS.oneEvo,
    accent: "from-blue-500 to-cyan-500",
    btnClass: "bg-slate-800 hover:bg-slate-900",
    features: [
      "Full paint decontamination wash",
      "Clay bar treatment",
      "Prep spray wipe down",
      "Single-layer GYEON Q² One EVO",
      "Hydrophobic protection & UV shield",
      "1-year GYEON manufacturer warranty",
    ],
    popular: false,
    footnote: null,
  },
  {
    name: "Q² Pure EVO",
    term: "3-Year Protection",
    price: "$699",
    originalPrice: "$899",
    savings: "$200",
    link: COATING_LINKS.pureEvo,
    accent: "from-amber-400 to-orange-500",
    btnClass: "bg-blue-700 hover:bg-blue-800",
    features: [
      "Full paint decontamination wash",
      "Clay bar treatment",
      "Prep spray wipe down",
      "GYEON Q² Pure EVO professional coating",
      "Superior chemical & UV resistance",
      "Extreme hydrophobic properties",
      "3-year GYEON manufacturer warranty",
      "Annual inspection included",
    ],
    popular: true,
    footnote: "FREE with any Annual Membership Plan!",
  },
  {
    name: "GYEON Infinite Type 1",
    term: "Lifetime Protection*",
    price: "$1,499",
    originalPrice: "$1,799",
    savings: "$300",
    link: COATING_LINKS.infiniteType1,
    accent: "from-red-500 to-amber-500",
    btnClass:
      "bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700",
    features: [
      "Full paint decontamination wash",
      "Clay bar treatment",
      "Prep spray wipe down",
      "GYEON Infinite Type 1 premium coating",
      "Maximum hardness & scratch resistance",
      "Self-cleaning hydrophobic effect",
      "Lifetime warranty with biennial maintenance",
      "5-year base warranty without maintenance",
    ],
    popular: false,
    footnote: null,
  },
  {
    name: "GYEON Infinite Type 1 + 2",
    term: "Lifetime Protection*",
    price: "$1,799",
    originalPrice: "$2,199",
    savings: "$400",
    link: COATING_LINKS.infiniteType1And2,
    accent: "from-red-500 to-blue-500",
    btnClass:
      "bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700",
    features: [
      "Full paint decontamination wash",
      "Clay bar treatment & prep spray",
      "GYEON Infinite Type 1 base coat",
      "GYEON Infinite Type 2 top coat",
      "Ultimate depth, gloss & protection",
      "Self-cleaning hydrophobic effect",
      "Lifetime warranty with biennial maintenance",
      "5-year base warranty without maintenance",
    ],
    popular: false,
    footnote: null,
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

/* ── Page ── */

export function July4thSalePage() {
  useEffect(() => {
    document.title =
      "4th of July Sale — FREE Ceramic Coating + Save Up to $400 | ProWorx Detailing";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "ProWorx Detailing 4th of July Summer Sale. FREE 3-year ceramic coating ($899 value) with Annual Membership, save up to $400 on GYEON Infinite lifetime coatings, 15% off add-ons, and the limited-run Summer Freedom package. Charlotte NC."
      );
    }
  }, []);

  const openWidget = useCallback(() => {
    window.open(SQUARE_WIDGET_URL, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      {/* ─── Sticky Header ─── */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur text-white border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-lg sm:text-xl font-black tracking-tight whitespace-nowrap">
              ProWorx
            </span>
            <span className="hidden sm:inline text-sm text-slate-400">
              Detailing
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 text-xs sm:text-sm px-2 sm:px-3"
            >
              <a
                href={PHONE_LINK}
                onClick={() => trackPhoneClick()}
              >
                <Phone className="size-3.5 mr-1.5" />
                <span className="hidden sm:inline">{PHONE}</span>
                <span className="sm:hidden">Call</span>
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm px-3 sm:px-4"
            >
              <a href="#offers">
                View Offers
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-red-950 text-white">
        {/* Decorative dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          {[
            "top-[8%] left-[5%] size-1.5 bg-white/60",
            "top-[12%] right-[8%] size-2 bg-red-400/50",
            "top-[22%] left-[28%] size-1 bg-blue-300/40",
            "top-[6%] right-[32%] size-1.5 bg-white/50",
            "top-[18%] left-[58%] size-1 bg-red-300/40",
            "top-[10%] left-[78%] size-2 bg-blue-400/30",
            "top-[28%] right-[18%] size-1 bg-white/50",
          ].map((cls, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-pulse ${cls}`}
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(239,68,68,0.12),transparent_60%)]" />

        <div className="relative max-w-4xl mx-auto px-4 py-14 sm:py-20 lg:py-28 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 text-red-300 text-sm font-medium mb-5 border border-red-500/25">
            <Sparkles className="size-4" />
            Limited Time · Ends July 31st
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-3 tracking-tight leading-[1.1]">
            <span className="text-red-400">Red,</span>{" "}
            <span className="text-white">White,</span>{" "}
            <span className="text-blue-400">& SHINE</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 mb-3">
            🇺🇸 4th of July Specials
          </p>
          <p className="text-base sm:text-lg text-amber-300 font-semibold mb-2">
            FREE 3-Year Ceramic Coating with Annual Membership
          </p>
          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our biggest savings of the year — save up to $400 on ceramic
            coatings, get a free 3-year ceramic coating with membership,
            and experience our limited-edition summer package.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg px-8 py-6 shadow-lg shadow-red-900/30"
            >
              <a href="#offers">
                View All Offers
                <ArrowRight className="size-5 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 text-base sm:text-lg px-8 py-6"
            >
              <a href="#book">
                <CalendarCheck className="size-5 mr-2" />
                Book Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Urgency Bar ─── */}
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-blue-600 text-white py-3 px-4">
        <p className="text-center text-sm sm:text-base font-semibold flex items-center justify-center gap-2">
          <Clock className="size-4 shrink-0 animate-pulse" />
          <span>
            Holiday slots are filling fast — book before July 4th for priority
            scheduling!
          </span>
        </p>
      </div>

      {/* ─── Offers Section ─── */}
      <section id="offers" className="scroll-mt-16 py-12 sm:py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
              Holiday Offers
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
              Four ways to save big this summer. All offers valid through July
              31st.
            </p>
          </div>

          {/* Offer Cards */}
          <div className="grid gap-5 sm:gap-6 lg:grid-cols-3 max-w-5xl mx-auto mb-10">
            {OFFERS.map((offer) => {
              const accentBg =
                offer.accent === "red"
                  ? "from-red-500 to-red-600"
                  : offer.accent === "amber"
                    ? "from-amber-400 to-amber-600"
                    : "from-blue-500 to-blue-600";
              const accentText =
                offer.accent === "red"
                  ? "text-red-600 dark:text-red-400"
                  : offer.accent === "amber"
                    ? "text-amber-600 dark:text-amber-400"
                    : "text-blue-600 dark:text-blue-400";
              const accentBorder =
                offer.accent === "red"
                  ? "border-red-200 dark:border-red-800/50"
                  : offer.accent === "amber"
                    ? "border-amber-300 dark:border-amber-700/50 ring-2 ring-amber-400/20"
                    : "border-blue-200 dark:border-blue-800/50";
              const btnColor =
                offer.accent === "red"
                  ? "bg-red-600 hover:bg-red-700"
                  : offer.accent === "amber"
                    ? "bg-amber-600 hover:bg-amber-700"
                    : "bg-blue-600 hover:bg-blue-700";

              return (
                <div
                  key={offer.id}
                  className={`relative rounded-2xl border bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-shadow ${accentBorder}`}
                >
                  {/* Top accent */}
                  <div
                    className={`h-1 bg-gradient-to-r ${accentBg}`}
                  />

                  {/* Tag */}
                  {offer.tagLabel && (
                    <div className="absolute top-3 right-3">
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold text-white ${
                          offer.accent === "amber"
                            ? "bg-amber-500"
                            : "bg-blue-600"
                        }`}
                      >
                        {offer.tagLabel}
                      </span>
                    </div>
                  )}

                  <div className="p-5 sm:p-6">
                    <span
                      className={`inline-block text-xs font-semibold rounded-full border px-2.5 py-0.5 mb-3 ${accentText} border-current/30`}
                    >
                      {offer.badge}
                    </span>
                    <h3 className="text-lg font-bold mb-2 leading-tight">
                      {offer.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                      {offer.subtitle}
                    </p>

                    {/* Highlight */}
                    {offer.highlight && (
                      <div
                        className={`rounded-xl p-3 mb-4 ${
                          offer.accent === "red"
                            ? "bg-red-50 dark:bg-red-950/30"
                            : offer.accent === "amber"
                              ? "bg-amber-50 dark:bg-amber-950/30"
                              : "bg-blue-50 dark:bg-blue-950/30"
                        }`}
                      >
                        <p className={`text-xl sm:text-2xl font-black ${accentText}`}>
                          {offer.highlight}
                        </p>
                        {offer.highlightSub && (
                          <p className="text-sm text-slate-500 dark:text-slate-400 line-through">
                            {offer.highlightSub}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Features */}
                    <ul className="space-y-1.5 mb-4">
                      {offer.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                        >
                          <CheckCircle2 className="size-4 shrink-0 mt-0.5 text-green-500" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Extra highlight (membership promo bonus) */}
                    {offer.extraHighlight && (
                      <div className="rounded-lg border border-amber-400/30 bg-amber-50 dark:bg-amber-950/20 p-3 mb-4">
                        <p className="text-sm font-bold text-amber-700 dark:text-amber-400 mb-2">
                          {offer.extraHighlight}
                        </p>
                        {offer.extraFeatures && (
                          <ul className="space-y-1">
                            {offer.extraFeatures.map((ef: string) => (
                              <li key={ef} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                                <CheckCircle2 className="size-3 shrink-0 text-amber-500" />
                                <span>{ef}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                    {/* CTA */}
                    {offer.link === "widget" ? (
                      <Button
                        onClick={openWidget}
                        className={`w-full text-white cursor-pointer ${btnColor}`}
                      >
                        {offer.cta}
                        <ArrowRight className="size-4 ml-1.5" />
                      </Button>
                    ) : offer.link.startsWith("/") ? (
                      <Button
                        asChild
                        className={`w-full text-white cursor-pointer ${btnColor}`}
                      >
                        <a
                          href={offer.link}
                          onClick={() => trackBookNowConversion(offer.link)}
                        >
                          {offer.cta}
                          <ArrowRight className="size-4 ml-1.5" />
                        </a>
                      </Button>
                    ) : (
                      <Button
                        asChild
                        className={`w-full text-white cursor-pointer ${btnColor}`}
                      >
                        <a
                          href={offer.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackBookNowConversion(offer.link)}
                        >
                          {offer.cta}
                          <ArrowRight className="size-4 ml-1.5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Ceramic Coating Cards ─── */}
      <section
        id="coatings"
        className="scroll-mt-16 py-12 sm:py-16 bg-white dark:bg-slate-950"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-semibold mb-3">
              <Zap className="size-3.5" />
              OFFER 4 — BIGGEST SAVINGS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
              Summer Shield Ceramic Coating
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Professional GYEON ceramic protection at the biggest discounts
              of the year. From 1-year protection to our new Lifetime GYEON
              Infinite line — full decon wash, clay bar & prep included.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {COATINGS.map((coating) => (
              <div
                key={coating.name}
                className={`relative rounded-2xl border overflow-hidden bg-white dark:bg-slate-900 transition-transform hover:scale-[1.02] ${
                  coating.popular
                    ? "border-amber-400 dark:border-amber-500 shadow-lg shadow-amber-500/10 ring-1 ring-amber-400/20"
                    : "border-slate-200 dark:border-slate-700 shadow-sm"
                }`}
              >
                {/* Top accent */}
                <div
                  className={`h-1.5 bg-gradient-to-r ${coating.accent}`}
                />

                {/* Popular badge */}
                {coating.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-600/40 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-400">
                      <Sparkles className="size-3" /> MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="p-5 sm:p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-0.5">
                      <ShieldCheck className="size-5 text-amber-500" />
                      <h3 className="text-lg font-bold">{coating.name}</h3>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {coating.term}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight">
                        {coating.price}
                      </span>
                      <span className="text-base text-slate-400 line-through">
                        {coating.originalPrice}
                      </span>
                    </div>
                    <span className="inline-block mt-1.5 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700/40 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:text-green-400">
                      Save {coating.savings}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {coating.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <CheckCircle2 className="size-4 shrink-0 mt-0.5 text-green-500" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footnote (e.g. "FREE with membership") */}
                  {coating.footnote && (
                    <div className="mb-3 rounded-lg bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-600/40 px-3 py-2 text-center">
                      <span className="text-xs font-bold text-amber-700 dark:text-amber-400">
                        {coating.footnote}
                      </span>
                    </div>
                  )}

                  {/* CTA */}
                  <Button
                    asChild
                    size="lg"
                    className={`w-full text-white cursor-pointer ${coating.btnClass}`}
                  >
                    <a
                      href={coating.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackBookNowConversion(coating.link)}
                    >
                      Get {coating.name.length > 16 ? coating.name.replace("GYEON ", "") : coating.name} — {coating.price}
                      <ArrowRight className="size-4 ml-1.5" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 mt-5">
            Paint correction & polish available as add-ons. Prices shown are for
            sedans/coupes — larger vehicles may vary. *Lifetime warranty
            requires biennial maintenance every 24 months; 5-year base warranty
            without maintenance.
          </p>
        </div>
      </section>

      {/* ─── Reviews ─── */}
      <section className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-1">
              63+ Five-Star Reviews
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Charlotte's trusted detailing professional — 12+ years experience
            </p>
          </div>
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-3">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  "{r.text}"
                </p>
                <p className="text-sm font-semibold">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Book Now CTA ─── */}
      <section
        id="book"
        className="scroll-mt-16 py-14 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white"
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <CalendarCheck className="size-10 sm:size-12 mx-auto mb-4 text-blue-400" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            Book Your July 4th Detail
          </h2>
          <p className="text-slate-300 mb-8 max-w-lg mx-auto leading-relaxed">
            Slots during the holiday week fill up fast. Secure your spot now to
            lock in these exclusive savings.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              onClick={openWidget}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg px-8 py-6 shadow-lg shadow-red-900/40 cursor-pointer"
            >
              Book Your Detail Now
              <ArrowRight className="size-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 text-base sm:text-lg px-8 py-6"
            >
              <a
                href={PHONE_LINK}
                onClick={() => trackPhoneClick()}
              >
                <Phone className="size-5 mr-2" />
                {PHONE}
              </a>
            </Button>
          </div>
          <p className="text-slate-400 text-sm mt-4">
            Or call/text to claim your offer directly.
          </p>
        </div>
      </section>

      {/* ─── Terms ─── */}
      <section className="py-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs text-slate-400">
            <strong>Terms & Conditions:</strong> Offers valid through July 31,
            2026. Cannot be combined with other discounts or promotions.
            Appointments must be scheduled or membership activated before the
            expiration date. All prices are subject to vehicle size and
            condition.
          </p>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 text-center text-sm text-slate-500">
          <p className="font-semibold text-slate-700 dark:text-slate-200 mb-0.5">
            ProWorx Detailing
          </p>
          <p>Charlotte, NC & Surrounding Areas</p>
          <p className="mt-1">
            <a
              href={PHONE_LINK}
              className="hover:text-blue-600"
              onClick={() => trackPhoneClick()}
            >
              {PHONE}
            </a>
          </p>
          <p className="mt-2 text-xs text-slate-400">
            © {new Date().getFullYear()} ProWorx Detailing. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default July4thSalePage;
