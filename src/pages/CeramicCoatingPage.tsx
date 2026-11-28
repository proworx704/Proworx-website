import { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  Droplets,
  MapPin,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  User,
  Warehouse,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";
import { trackPhoneClick, trackBookNowConversion, trackViewContent } from "@/lib/tracking";
import { PriceLabel } from "@/components/PricingDisclaimer";

/* ──────────────────────── DATA ──────────────────────── */

type ChoiceOption = { id: string; label: string; title: string; desc: string };

/** Infinite Base choice (shown on both Lifetime cards). */
const BASE_OPTIONS: ChoiceOption[] = [
  {
    id: "base-1",
    label: "Type 1",
    title: "Toughest",
    desc: "Extreme chemical resistance and heavy contamination repellency, with a crisp, glassy shine. Works in every climate.",
  },
  {
    id: "base-2",
    label: "Type 2",
    title: "Deepest gloss",
    desc: "Thick quartz layer that darkens color and resists water spots. A great fit for NC heat and humidity.",
  },
];

/** Infinite TopCoat choice (Ultimate Lifetime only). */
const TOPCOAT_OPTIONS: ChoiceOption[] = [
  {
    id: "top-1",
    label: "TopCoat Type 1",
    title: "Longest beading",
    desc: "Maximizes the durability of the water beading. Best for daily drivers exposed to the elements.",
  },
  {
    id: "top-2",
    label: "TopCoat Type 2",
    title: "Slickest feel",
    desc: "Extreme slickness and contamination release. Best for garaged or carefully washed cars.",
  },
];

type CeramicPackage = {
  name: string;
  tag: string;
  priceFrom: string;
  priceNum: number;
  deposit: string;
  configKey: string;
  features: string[];
  chooseIf: string;
  popular?: boolean;
  badge?: string;
  subBadge?: string;
  chooseBase?: boolean;
  chooseTopcoat?: boolean;
};

const PACKAGES: CeramicPackage[] = [
  {
    name: "GYEON Q² One EVO",
    tag: "1-Year Protection",
    priceFrom: "$499",
    priceNum: 499,
    deposit: "$150",
    configKey: "ceramicDeposit1yr",
    features: [
      "Decontamination wash, dry & prep spray",
      "Panel prep spray for coating bond",
      "Single-layer GYEON Q² One EVO",
      "Hydrophobic protection & UV shield",
      "Enhanced gloss & depth",
      "1-year GYEON manufacturer warranty",
    ],
    chooseIf: "Choose it if you lease, plan to sell soon, or want to try ceramic before committing to more.",
  },
  {
    name: "GYEON Q² Pure EVO",
    tag: "3-Year Protection",
    priceFrom: "$749",
    priceNum: 749,
    deposit: "$225",
    configKey: "ceramicDeposit3yr",
    features: [
      "Decontamination wash, dry & prep spray",
      "Panel prep spray for coating bond",
      "GYEON Q² Pure EVO professional coating",
      "Superior chemical & UV resistance",
      "Extreme hydrophobic properties",
      "3-year GYEON manufacturer warranty",
      "Annual inspection included",
    ],
    chooseIf: "Choose it if you will keep the car three years or more and want the lowest cost per year of rated protection.",
    popular: true,
    subBadge: "Best value per year",
  },
  {
    name: "GYEON Q² Syncro EVO",
    tag: "5-Year Class Protection",
    priceFrom: "$1,149",
    priceNum: 1149,
    deposit: "$345",
    configKey: "ceramicDeposit5yr",
    features: [
      "Decontamination wash, dry & prep spray",
      "Panel prep spray for coating bond",
      "Two-layer system: hard base coat plus gloss topcoat",
      "Rated up to 50 months by GYEON",
      "Extra depth, gloss & slickness, especially on dark paint",
    ],
    chooseIf: "Choose it if you are keeping the car for the long haul and want multi-year protection with more depth than a single layer.",
    badge: "New",
  },
  {
    name: "GYEON Infinite Base",
    tag: "Lifetime Protection*",
    priceFrom: "$1,799",
    priceNum: 1799,
    deposit: "$540",
    configKey: "ceramicDepositInfinite1",
    features: [
      "Decontamination wash, dry & prep spray",
      "Panel prep spray for coating bond",
      "One layer of GYEON Infinite Base, your choice of type",
      "Lifetime GYEON Infinite Warranty*",
      "Biennial maintenance inspection included",
    ],
    chooseIf: "Choose it if you want to do it once, backed by a warranty, on a car you plan to keep.",
    chooseBase: true,
  },
  {
    name: "GYEON Infinite Base + TopCoat",
    tag: "Ultimate Lifetime Protection*",
    priceFrom: "$2,199",
    priceNum: 2199,
    deposit: "$660",
    configKey: "ceramicDepositInfinite2",
    features: [
      "Decontamination wash, dry & prep spray",
      "Panel prep spray for coating bond",
      "Dual-layer system: Infinite Base plus Infinite TopCoat",
      "Lifetime GYEON Infinite Warranty*",
      "Biennial maintenance inspection included",
    ],
    chooseIf: "Choose it if the car is your pride and you want to tailor the finish and the protection, with a lifetime warranty.",
    chooseBase: true,
    chooseTopcoat: true,
  },
];

const COMPARE_ROWS = [
  { option: "1 Year", price: "$499", coating: "Q² One EVO", protection: "1 year", layers: "Single" },
  { option: "3 Year", price: "$749", coating: "Q² Pure EVO", protection: "Up to 36 months", layers: "Single" },
  { option: "5 Year Class", price: "$1,149", coating: "Q² Syncro EVO", protection: "Up to 50 months", layers: "Two" },
  { option: "Lifetime", price: "$1,799", coating: "Infinite Base (Type 1 or 2)", protection: "Lifetime warranty", layers: "Single" },
  { option: "Ultimate Lifetime", price: "$2,199", coating: "Infinite Base + TopCoat", protection: "Lifetime warranty", layers: "Dual" },
];

const CORRECTION_PRICES = [
  { level: "1-Step", compact: "$618", sedan: "$824", suv: "$1,030" },
  { level: "2-Step", compact: "$1,030", sedan: "$1,236", suv: "$1,442" },
  { level: "Multi-Stage", compact: "$1,700", sedan: "$2,060", suv: "$2,472" },
];

/* Garage photos (no readable plates). Admin can override each through its CMS slot. */
const GARAGE_PHOTOS = {
  meet: { slot: "ceramic-meet-tyler", src: "/images/garage-range-rover.jpg", alt: "Black Range Rover Sport with a fresh ceramic coating under hex lighting in Tyler's Waxhaw detailing shop" },
  lift: { slot: "ceramic-garage-lift", src: "/images/garage-lotus-lift.jpg", alt: "Orange Lotus Elise raised on a lift in the ProWorx Waxhaw shop for wheel and lower panel work" },
  bay: { slot: "ceramic-garage-bay", src: "/images/garage-aston-front.jpg", alt: "Satin blue Aston Martin Vantage inside the clean, organized ProWorx detailing shop in Waxhaw, NC" },
  owner: { slot: "ceramic-owner-tyler", src: "/images/tyler-owner.jpg", alt: "Tyler York, owner of ProWorx Detailing, in a black ProWorx polo" },
};

const REVIEWS = [
  {
    name: "Corey W.",
    text: "Tyler and his team are best in class. They service all our vehicles (including an old classic) with such care and professionalism. He's always punctual and very up front on pricing.",
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
  {
    name: "Frank T.",
    text: "Great job on 2019 Volvo. Looks like new inside and outside. Great experience.",
    stars: 5,
  },
];

/* GALLERY_ITEMS — hidden until better images are ready
const GALLERY_ITEMS = [
  { image: "/images/escalade-rear.jpg", slot: "ceramic-gallery-1", alt: "Cadillac Escalade ceramic coating — deep gloss under hex lights", label: "Escalade — GYEON Q² Pure" },
  { image: "/images/aston-front.jpg", slot: "ceramic-gallery-2", alt: "Aston Martin ceramic coated by ProWorx", label: "Aston Martin — GYEON Infinite" },
  { image: "/images/corvette-front.jpg", slot: "ceramic-gallery-3", alt: "Corvette ceramic coating with mirror finish", label: "Corvette — Paint Correction + Ceramic" },
  { image: "/images/ferrari-side.jpg", slot: "ceramic-gallery-4", alt: "Ferrari Roma ceramic coated by ProWorx", label: "Ferrari Roma — GYEON Q² Pure" },
  { image: "/images/audi-front.jpg", slot: "ceramic-gallery-5", alt: "Audi ceramic coating showroom finish", label: "Audi — GYEON Q² One" },
  { image: "/images/rangerover-front.jpg", slot: "ceramic-gallery-6", alt: "Range Rover ceramic protection by ProWorx", label: "Range Rover — GYEON Q² Pure" },
];
*/

const PRO_VS_CONSUMER = [
  { feature: "Coating Type", pro: "SiO₂ professional-grade (GYEON / IGL)", consumer: "Spray-on sealant" },
  { feature: "Longevity", pro: "1 year to lifetime", consumer: "1 to 3 months" },
  { feature: "Surface Prep", pro: "Decontamination pre-wash & panel prep spray", consumer: "Basic wash" },
  { feature: "Hardness", pro: "True 9H hardness rating", consumer: "No measurable hardness" },
  { feature: "Warranty", pro: "GYEON manufacturer warranty", consumer: "None" },
  { feature: "Hydrophobic", pro: "Extreme water beading for years", consumer: "Fades in weeks" },
];

const FAQ_ITEMS = [
  {
    q: "What is ceramic coating?",
    a: "Ceramic coating is a liquid polymer applied to your vehicle's exterior that creates a semi-permanent bond with the paint. It provides hydrophobic protection, UV resistance, chemical resistance, and enhanced gloss that lasts years, not weeks like wax or sealant.",
  },
  {
    q: "How much does ceramic coating cost in Charlotte?",
    a: "1 Year starting at $499, 3 Year starting at $749, 5 Year Class starting at $1,149, Lifetime starting at $1,799, and Ultimate Lifetime starting at $2,199. These starting prices assume standard paint condition. Your final price, including sales tax, is confirmed before we start, and a 30% deposit books your spot.",
  },
  {
    q: "Is this a drop-off or mobile service?",
    a: "Drop-off only for ceramic coating and paint correction, done in my Waxhaw shop. Regular detailing and maintenance are still available as mobile services.",
  },
  {
    q: "Who applies the coating?",
    a: "I do. Tyler, the owner, personally does every ceramic coating and every paint correction.",
  },
  {
    q: "How long does ceramic coating last?",
    a: "It depends on the coating. 1 Year (Q² One EVO) gives one year of protection. 3 Year (Q² Pure EVO) is rated up to 36 months. 5 Year Class (Q² Syncro EVO) is a two-layer system rated up to 50 months by GYEON. Lifetime and Ultimate Lifetime (GYEON Infinite) carry the Lifetime GYEON Infinite Warranty with a biennial maintenance inspection.",
  },
  {
    q: "Do I need paint correction before ceramic coating?",
    a: "Not necessarily. Every package includes a decontamination wash and a prep wipe so the coating bonds properly, but no polishing. If your paint has swirl marks, scratches, or oxidation, adding a paint correction service first will give you the best possible result under the coating.",
  },
  {
    q: "Is ProWorx a certified installer?",
    a: "Yes. I am a GYEON Certified Detailer, IGL certified and STEK certified, with 12+ years of experience.",
  },
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

/* GalleryCarousel — hidden until better images are ready
function GalleryCarousel() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? GALLERY_ITEMS.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === GALLERY_ITEMS.length - 1 ? 0 : i + 1));
  const item = GALLERY_ITEMS[idx];

  return (
    <div className="relative">
      <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-muted">
        <CmsImg
          slot={item.slot}
          fallback={item.image}
          alt={item.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent pt-12 pb-4 px-5">
          <p className="text-white font-semibold text-sm">{item.label}</p>
        </div>
        <button
          type="button"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
      <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-hide">
        {GALLERY_ITEMS.map((g, i) => (
          <button
            key={g.slot}
            type="button"
            onClick={() => setIdx(i)}
            className={`shrink-0 rounded-lg overflow-hidden border-2 transition-all ${i === idx ? "border-gold ring-1 ring-gold/40" : "border-transparent opacity-60 hover:opacity-100"}`}
            aria-label={`View ${g.label}`}
          >
            <CmsImg
              slot={g.slot}
              fallback={g.image}
              alt={g.alt}
              className="w-20 h-14 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
*/

function ChoiceSelector({
  heading,
  options,
  value,
  onChange,
}: {
  heading: string;
  options: ChoiceOption[];
  value: string;
  onChange: (id: string) => void;
}) {
  const selected = options.find((o) => o.id === value) ?? options[0];
  return (
    <div className="mb-4">
      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">{heading}</p>
      <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label={heading}>
        {options.map((o) => {
          const active = o.id === selected.id;
          return (
            <button
              key={o.id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(o.id)}
              className={`rounded-lg border px-2.5 py-2 text-left transition-colors ${
                active ? "border-gold bg-gold/10 ring-1 ring-gold/30" : "border-border hover:border-gold/40"
              }`}
            >
              <span className={`block text-xs font-bold ${active ? "text-gold" : "text-foreground"}`}>{o.label}</span>
              <span className="block text-[11px] text-muted-foreground leading-tight">{o.title}</span>
            </button>
          );
        })}
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed mt-2">{selected.desc}</p>
    </div>
  );
}

function PackageCard({
  pkg,
  depositUrl,
}: {
  pkg: CeramicPackage;
  depositUrl: string;
}) {
  const [base, setBase] = useState(BASE_OPTIONS[0].id);
  const [topcoat, setTopcoat] = useState(TOPCOAT_OPTIONS[0].id);
  const baseLabel = BASE_OPTIONS.find((o) => o.id === base)?.label;
  const topLabel = TOPCOAT_OPTIONS.find((o) => o.id === topcoat)?.label;
  const pick = pkg.chooseBase
    ? `Infinite Base ${baseLabel}${pkg.chooseTopcoat ? ` + ${topLabel}` : ""}`
    : null;

  return (
    <div
      className={`relative w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] rounded-2xl bg-card border p-6 flex flex-col transition-shadow hover:shadow-lg ${
        pkg.popular ? "border-gold shadow-lg shadow-gold/10 ring-1 ring-gold/20" : "border-border"
      }`}
    >
      {(pkg.popular || pkg.badge) && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-gold-foreground text-xs font-bold rounded-full whitespace-nowrap">
          {pkg.popular ? "Most Popular" : pkg.badge}
        </div>
      )}
      <div className="mb-4">
        <p className="text-gold text-xs font-bold uppercase tracking-wider mb-1">{pkg.tag}</p>
        <h3 className="font-bold text-lg leading-tight">{pkg.name}</h3>
        {pkg.subBadge && (
          <span className="inline-block mt-2 px-2 py-0.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-[11px] font-semibold">
            {pkg.subBadge}
          </span>
        )}
      </div>
      <div className="mb-5">
        <span className="text-3xl font-black"><PriceLabel price={pkg.priceFrom} /></span>
        <p className="text-xs text-muted-foreground mt-1">30% deposit ({pkg.deposit}) to reserve</p>
      </div>

      {pkg.chooseBase && (
        <ChoiceSelector heading="Choose your base" options={BASE_OPTIONS} value={base} onChange={setBase} />
      )}
      {pkg.chooseTopcoat && (
        <>
          <ChoiceSelector heading="Choose your topcoat" options={TOPCOAT_OPTIONS} value={topcoat} onChange={setTopcoat} />
          <p className="text-[11px] text-muted-foreground leading-relaxed -mt-1 mb-4">
            Any base pairs with any topcoat, all at $2,199. Driven daily and parked outside: Base 1 + TopCoat 1.
            Best-looking finish for a garaged car: Base 2 + TopCoat 2.
          </p>
        </>
      )}

      <ul className="space-y-2 flex-1 mb-4">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />
            <span className="text-muted-foreground">{f}</span>
          </li>
        ))}
      </ul>

      <p className="text-xs text-foreground/80 leading-relaxed border-t border-border pt-3 mb-5">{pkg.chooseIf}</p>

      {pick && (
        <p className="text-[11px] text-muted-foreground mb-2 text-center">
          Your pick: <span className="text-gold font-semibold">{pick}</span>. Mention it when you book.
        </p>
      )}
      <Button
        className={`w-full font-bold ${
          pkg.popular ? "bg-gold-dark text-gold-foreground hover:bg-gold-dark/90" : "bg-muted text-foreground hover:bg-muted/80"
        }`}
        asChild
      >
        <a href={depositUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackBookNowConversion(depositUrl)}>
          Reserve Now <ArrowRight className="size-4" />
        </a>
      </Button>
      <p className="mt-3 text-center text-xs text-blue-300">
        💳 Pay over time: choose <span className="font-semibold text-white">Affirm</span> at checkout
      </p>
    </div>
  );
}

function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {FAQ_ITEMS.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl border border-border bg-card overflow-hidden"
        >
          <button
            type="button"
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            aria-expanded={openIdx === i}
          >
            <span className="font-semibold text-sm">{faq.q}</span>
            <ChevronDown
              className={`size-4 shrink-0 text-muted-foreground transition-transform ${openIdx === i ? "rotate-180" : ""}`}
            />
          </button>
          {openIdx === i && (
            <div className="px-5 pb-4">
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ──────────────────────── PAGE ──────────────────────── */

export function CeramicCoatingPage() {
  const { config } = useSiteConfig();

  useEffect(() => {
    trackViewContent("Ceramic Coating", "Services");
  }, []);

  const getDepositUrl = (configKey: string) => {
    const url = config[configKey];
    return url || config.ceramicDepositUrl;
  };

  const bookingUrl = config["widgetUrl:header-book-now"] || config.bookingUrl || "https://ops.proworxdetailing.com/schedule";

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="GYEON Certified Ceramic Coating Charlotte NC"
        description="GYEON Certified, owner-installed ceramic coating in Charlotte, NC. 1-year, 3-year, 5-year and lifetime packages starting at $499. Drop-off at our Waxhaw shop. 30% down."
        keywords="ceramic coating Charlotte NC, GYEON Certified ceramic coating, owner-installed ceramic coating, 5-year ceramic coating, Gyeon ceramic coating, IGL ceramic coating, paint protection Charlotte, ceramic coat near me, car ceramic coating cost, best ceramic coating Charlotte, professional ceramic coating"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.proworxdetailing.com/" },
                { "@type": "ListItem", position: 2, name: "Ceramic Coating", item: "https://www.proworxdetailing.com/ceramic-coating" },
              ],
            },
            {
              "@type": "Service",
              name: "Professional Ceramic Coating",
              provider: {
                "@type": "LocalBusiness",
                name: "ProWorx Mobile Detailing",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "3008 Collaroy Rd",
                  addressLocality: "Waxhaw",
                  addressRegion: "NC",
                  postalCode: "28173",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5",
                  reviewCount: "63",
                },
              },
              areaServed: "Charlotte, NC",
              description: "GYEON Certified, owner-installed ceramic coating with 1-year, 3-year, 5-year and lifetime protection packages. Drop-off only at our Waxhaw, NC shop.",
              offers: {
                "@type": "AggregateOffer",
                lowPrice: "499",
                highPrice: "2199",
                priceCurrency: "USD",
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: FAQ_ITEMS.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            },
          ],
        }}
      />

      {/* ═══════════ HERO with background video ═══════════ */}
      <section className="relative flex items-center min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/ceramic-hero-poster.webp"
            className="w-full h-full object-cover"
          >
            <source src="/videos/ceramic-hero-bg.mp4" type="video/mp4" />
            <track kind="captions" />
          </video>
          <div className="absolute inset-0 bg-black/70 md:bg-transparent md:bg-gradient-to-r md:from-black/85 md:via-black/60 md:to-black/25" />
        </div>
        <div className="container py-20 md:py-28">
          <div className="max-w-3xl">
            {/* Trust pills */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-semibold backdrop-blur-sm">
                <Shield className="size-3" />
                GYEON Certified Detailer
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-semibold backdrop-blur-sm">
                <Shield className="size-3" />
                IGL Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-semibold backdrop-blur-sm">
                <Shield className="size-3" />
                STEK Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-semibold backdrop-blur-sm">
                <User className="size-3" />
                Owner-installed
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 text-xs font-semibold backdrop-blur-sm">
                <Star className="size-3 fill-current" />
                5.0 Stars · 63+ Reviews
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-5">
              Professional <span className="text-gradient-gold">Ceramic Coating</span> in Charlotte, NC
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-4 [text-shadow:0_1px_4px_rgba(0,0,0,0.85)]">
              Not wax. Not sealant. Real ceramic protection that lasts <strong className="text-white">up to a lifetime</strong>, backed by a GYEON manufacturer warranty. Applied personally by Tyler, a GYEON and IGL certified installer with 12+ years of experience.
            </p>
            <p className="text-base text-gold font-semibold mb-8 [text-shadow:0_1px_4px_rgba(0,0,0,0.9)]">
              Starting at $499 · Reserve with just 30% down
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-gold-dark text-gold-foreground hover:bg-gold-dark/90 h-13 px-8 text-base font-bold"
                asChild
              >
                <a href="#packages">
                  View Packages & Book <ArrowRight className="size-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10"
                asChild
              >
                <a href={config.phoneLink} onClick={trackPhoneClick}>
                  <Phone className="size-5" /> {config.phone}
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2 mt-6 text-sm text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.85)]">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-gold shrink-0" /> Drop-off only, at my Waxhaw shop
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-gold shrink-0" /> Decontamination wash and prep wipe included
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TRUST BAR ═══════════ */}
      <section className="border-y border-border bg-card/60 backdrop-blur-sm">
        <div className="container py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: <Award className="size-5 text-gold" />, label: "12+ Years", sub: "Professional Experience" },
              { icon: <Star className="size-5 text-amber-400 fill-amber-400" />, label: "5.0 Stars", sub: "63+ Verified Reviews" },
              { icon: <ShieldCheck className="size-5 text-gold" />, label: "GYEON, IGL & STEK", sub: "Certified Installer" },
              { icon: <Calendar className="size-5 text-gold" />, label: "Up to Lifetime", sub: "Manufacturer Warranty" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="shrink-0 size-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div>
                  <p className="font-bold text-sm leading-tight">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ MEET TYLER ═══════════ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
            <CmsImg
              slot={GARAGE_PHOTOS.meet.slot}
              fallback={GARAGE_PHOTOS.meet.src}
              alt={GARAGE_PHOTOS.meet.alt}
              className="rounded-2xl w-full max-w-md mx-auto aspect-[4/5] object-cover shadow-xl"
            />
            <div>
              <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Meet Tyler</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
                Your paint is only touched by <span className="text-gradient-gold">the owner.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I built ProWorx from the ground up, and I personally do every ceramic coating and every paint correction. No handoffs and no rotating crew.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your car comes to my shop. I inspect the paint under proper lighting and tell you what I see before any work starts. Your car stays here, under my eyes, until it is done. When it is ready, you pick it up from the person who did it.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <CmsImg
                  slot={GARAGE_PHOTOS.owner.slot}
                  fallback={GARAGE_PHOTOS.owner.src}
                  alt={GARAGE_PHOTOS.owner.alt}
                  width={960}
                  height={1200}
                  sizes="112px"
                  focalY={0}
                  className="w-20 h-24 md:w-24 md:h-[7.5rem] rounded-xl object-cover ring-2 ring-gold/40 shadow-lg shrink-0"
                />
                <div>
                  <p className="font-display italic text-xl text-foreground">Tyler York, Owner</p>
                  <p className="text-sm text-muted-foreground">Owner-installer, ProWorx Detailing</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["GYEON Certified Detailer", "IGL Certified", "STEK Certified", "12+ years of experience"].map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-semibold"
                  >
                    <ShieldCheck className="size-3" /> {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ GALLERY — hidden until better images are ready ═══════════ */}
      {/*
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Our <span className="text-gradient-gold">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Real results from real customers in Charlotte. Every vehicle below received a professional GYEON ceramic coating by ProWorx.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <GalleryCarousel />
          </div>
        </div>
      </section>
      */}

      {/* ═══════════ PACKAGES ═══════════ */}
      <section id="packages" className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Ceramic Coating <span className="text-gradient-gold">Packages</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional-grade GYEON ceramic coatings applied by a certified installer. Every package includes a decontamination pre-wash & panel prep spray. Polishing is not included; paint correction is a separate service. Pricing varies by vehicle size.{" "}
              <span className="text-foreground font-medium">Ceramic coating and paint correction are drop-off only, at my Waxhaw shop.</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {PACKAGES.map((pkg) => (
              <PackageCard
                key={pkg.name}
                pkg={pkg}
                depositUrl={getDepositUrl(pkg.configKey)}
              />
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto leading-relaxed">
            *Every Infinite option includes the Lifetime GYEON Infinite Warranty. Infinite coatings are available only through GYEON Certified Detailers.
          </p>

          <p className="text-center text-sm text-muted-foreground mt-8 max-w-lg mx-auto">
            30% deposit is applied to your final service total. Want to pay over time? Choose{" "}
            <span className="font-semibold text-foreground">Affirm</span> at checkout when you pay your invoice. Subject to approval.
          </p>

          {/* Side by side */}
          <div className="max-w-4xl mx-auto mt-14">
            <h3 className="text-2xl font-bold tracking-tight mb-5 text-center">
              Side by <span className="text-gradient-gold">side</span>
            </h3>
            <div className="rounded-2xl bg-card border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[560px]">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      {["Option", "Price", "Coating", "Protection", "Layers"].map((h) => (
                        <th key={h} className="text-left p-3 md:p-4 font-bold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARE_ROWS.map((r) => (
                      <tr key={r.option} className="border-b border-border/50 last:border-0">
                        <td className="p-3 md:p-4 font-semibold">{r.option}</td>
                        <td className="p-3 md:p-4 font-bold text-gold"><PriceLabel price={r.price} /></td>
                        <td className="p-3 md:p-4 text-muted-foreground">{r.coating}</td>
                        <td className="p-3 md:p-4 text-muted-foreground">{r.protection}</td>
                        <td className="p-3 md:p-4 text-muted-foreground">{r.layers}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">Starting prices. Pricing varies by vehicle size.</p>
          </div>

          {/* STEK (by request) */}
          <div className="max-w-3xl mx-auto mt-12 rounded-xl border border-border bg-card p-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">Also available by request</p>
              <h3 className="font-bold text-sm mb-1">STEK certified: paint protection film and ceramic</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I am STEK certified for both paint protection film and ceramic coating. Want rock chip protection on the front of your car? Ask about STEK film for front ends, or STEK ceramic coating, installed in my shop. Drop-off only.
              </p>
            </div>
            <Button variant="outline" className="shrink-0 font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
              <a href={config.phoneLink} onClick={trackPhoneClick}>
                Ask about STEK
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT'S INCLUDED ═══════════ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                What's Included in <span className="text-gradient-gold">Every Package</span>
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: <Droplets className="size-5" />,
                    title: "Prep Wash & Decontamination",
                    desc: "Full decontamination wash and dry, followed by a dedicated prep spray to ensure a perfectly clean, oil-free surface before coating.",
                  },
                  {
                    icon: <Sparkles className="size-5" />,
                    title: "Panel Prep Spray",
                    desc: "A dedicated prep spray removes oils and residue so the ceramic bonds to the paint. No polishing is included; paint correction is booked separately.",
                  },
                  {
                    icon: <Shield className="size-5" />,
                    title: "Ceramic Coating Application",
                    desc: "Professional hand-applied GYEON ceramic coating, panel by panel, inspected under LED lighting for full coverage.",
                  },
                  {
                    icon: <Clock className="size-5" />,
                    title: "Proper Cure Time",
                    desc: "Every coating is given the full manufacturer-recommended cure time. No shortcuts.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="shrink-0 size-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-0.5">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Paint correction callout */}
              <div className="mt-6 rounded-xl bg-gold/5 border border-gold/20 p-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Need paint correction?</span>{" "}
                  If your vehicle has swirl marks, scratches, or oxidation, add a{" "}
                  <a href="/paint-correction" className="text-gold hover:underline font-medium">
                    paint correction
                  </a>{" "}
                  before your coating for the best result. It is a separate service, also drop-off only.
                </p>
              </div>

              {/* Paint correction pricing */}
              <div className="mt-4 rounded-xl border border-border bg-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="text-left p-3 font-bold">Paint correction</th>
                        <th className="text-left p-3 font-bold">Compact 2-door</th>
                        <th className="text-left p-3 font-bold">Midsize sedan</th>
                        <th className="text-left p-3 font-bold">SUV / truck</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CORRECTION_PRICES.map((r) => (
                        <tr key={r.level} className="border-b border-border/50 last:border-0">
                          <td className="p-3 font-semibold">{r.level}</td>
                          <td className="p-3 text-muted-foreground"><PriceLabel price={r.compact} /></td>
                          <td className="p-3 text-muted-foreground"><PriceLabel price={r.sedan} /></td>
                          <td className="p-3 text-muted-foreground"><PriceLabel price={r.suv} /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground px-3 py-2.5 border-t border-border">
                  Add-ons: wheels and calipers ceramic coating starting at $400 · GYEON View windshield coating starting at $120
                </p>
              </div>
            </div>

            <CmsImg
              slot="ceramic-process"
              fallback="/images/aston-rear.jpg"
              alt="ProWorx applying ceramic coating to an Aston Martin"
              className="rounded-2xl w-full aspect-[4/3] object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICE DELIVERY ═══════════ */}
      <section className="py-12 md:py-16 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-gold/20 bg-gold/5 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="size-5 text-gold" />
                  <h3 className="font-bold text-sm">Ceramic Coating Only</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-medium">Drop-off only</span> at my Waxhaw shop, so the coating is applied and cured in a controlled space.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="size-5 text-gold" />
                  <h3 className="font-bold text-sm">Paint Correction + Ceramic</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-medium">Drop-off only</span>. Paint correction needs proper lighting and a controlled environment for the best finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ GARAGE ═══════════ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3 inline-flex items-center gap-2">
                <Warehouse className="size-4" /> Waxhaw, NC
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                Where your car <span className="text-gradient-gold">stays</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A dedicated detailing shop built for paint work: bright inspection lighting, a lift for wheels and lower panels, and a clean, organized workspace.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
              {[GARAGE_PHOTOS.lift, GARAGE_PHOTOS.bay].map((p) => (
                <CmsImg
                  key={p.slot}
                  slot={p.slot}
                  fallback={p.src}
                  alt={p.alt}
                  className="rounded-2xl w-full aspect-[4/5] object-cover shadow-xl"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ WHY CERAMIC COATING ═══════════ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <CmsImg
              slot="ceramic-why"
              fallback="/images/aston-front.jpg"
              alt="Ceramic coated Aston Martin showing extreme gloss"
              className="rounded-2xl w-full aspect-[4/3] object-cover shadow-xl order-2 lg:order-1"
            />
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Why <span className="text-gradient-gold">Ceramic Coating?</span>
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  { title: "Extreme Hydrophobic Protection", desc: "Water, dirt, and contaminants bead up and slide right off the surface." },
                  { title: "UV & Chemical Resistance", desc: "Shields against sun damage, bird droppings, tree sap, and road grime." },
                  { title: "Showroom Gloss & Depth", desc: "Deepens your paint color and adds a candy-like wet look that lasts." },
                  { title: "Easier Maintenance", desc: "Cuts wash time in half. Your car stays cleaner, longer between washes." },
                  { title: "GYEON Manufacturer Warranty", desc: "A real warranty from GYEON, not a detailer promise. Inspections keep it valid." },
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
              <Button
                className="bg-gold-dark text-gold-foreground hover:bg-gold-dark/90 font-bold"
                asChild
              >
                <a href="#packages">
                  View Packages <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PRO VS CONSUMER ═══════════ */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                Professional vs. <span className="text-gradient-gold">DIY Ceramic</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Not all ceramic coatings are equal. Here's how professional-grade GYEON compares to the spray-on products at auto parts stores.
              </p>
            </div>
            <div className="rounded-2xl bg-card border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-bold bg-muted/50 w-[30%]">Feature</th>
                      <th className="text-left p-4 font-bold bg-gold/10 text-gold w-[35%]">
                        <div className="flex items-center gap-2">
                          <Shield className="size-4" />
                          ProWorx (Professional)
                        </div>
                      </th>
                      <th className="text-left p-4 font-bold bg-muted/50 w-[35%]">Consumer Spray-On</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRO_VS_CONSUMER.map((row) => (
                      <tr key={row.feature} className="border-b border-border/50">
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 bg-gold/5">
                          <span className="flex items-start gap-2">
                            <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />
                            {row.pro}
                          </span>
                        </td>
                        <td className="p-4 text-muted-foreground">
                          <span className="flex items-start gap-2">
                            <X className="size-4 text-muted-foreground/50 mt-0.5 shrink-0" />
                            {row.consumer}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ REVIEWS ═══════════ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              What Our <span className="text-gradient-gold">Customers Say</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <StarRating count={5} />
              <span className="text-sm font-semibold">5.0</span>
              <span className="text-sm text-muted-foreground">from 63+ reviews</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="rounded-xl border border-border bg-card p-5 flex flex-col"
              >
                <StarRating count={review.stars} />
                <p className="text-sm text-muted-foreground leading-relaxed mt-3 flex-1">
                  "{review.text}"
                </p>
                <p className="font-semibold text-sm mt-3">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CERTIFICATION BADGES ═══════════ */}
      <section className="py-12 md:py-16 bg-card/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Certified Professional Installer</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* GYEON Badge */}
              <div className="flex items-center gap-4 rounded-xl border border-gold/20 bg-gold/5 px-6 py-4">
                <div className="size-14 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center">
                  <Shield className="size-7 text-gold" />
                </div>
                <div className="text-left">
                  <p className="font-black text-lg leading-tight">GYEON</p>
                  <p className="text-xs text-muted-foreground">Certified Installer</p>
                  <p className="text-xs text-gold font-medium">Q² Professional Line</p>
                </div>
              </div>
              {/* IGL Badge */}
              <div className="flex items-center gap-4 rounded-xl border border-gold/20 bg-gold/5 px-6 py-4">
                <div className="size-14 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center">
                  <ShieldCheck className="size-7 text-gold" />
                </div>
                <div className="text-left">
                  <p className="font-black text-lg leading-tight">IGL Coatings</p>
                  <p className="text-xs text-muted-foreground">Certified Installer</p>
                  <p className="text-xs text-gold font-medium">Professional Grade</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-5 max-w-md mx-auto">
              Tyler is trained, tested, and certified by both GYEON and IGL Coatings, and personally applies every coating to manufacturer standards.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* ═══════════ FINANCING ═══════════ */}
      <section id="financing" className="py-12 md:py-16 bg-card/50 scroll-mt-24">
        <div className="container">
          <div className="max-w-3xl mx-auto rounded-2xl bg-blue-600/10 border border-blue-600/20 p-7 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Buy Now, Pay Later</h2>
            <p className="text-muted-foreground mb-5 text-sm">
              Split any ceramic coating or paint correction into monthly payments. When you pay your invoice,
              just choose <span className="font-semibold text-foreground">Affirm</span> at checkout. No separate application or link needed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 font-bold" asChild>
                <a href="#packages">
                  View Packages <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Affirm is offered at checkout on your ProWorx invoice. Subject to approval by Affirm.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICE AREAS ═══════════ */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-center">Ceramic Coating Near You</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">We offer professional ceramic coating services across the greater Charlotte metro area.</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              { label: "Ceramic Coating Charlotte", href: "/ceramic-coating-charlotte-nc" },
              { label: "Ceramic Coating South Charlotte", href: "/ceramic-coating-south-charlotte-nc" },
              { label: "Ceramic Coating Waxhaw", href: "/waxhaw" },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:border-gold/40 hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-4 max-w-3xl mx-auto">
            {[
              { label: "Paint Correction Charlotte", href: "/paint-correction-charlotte-nc" },
              { label: "Auto Detailing Charlotte", href: "/auto-detailing-charlotte-nc" },
              { label: "Mobile Detailing Charlotte", href: "/mobile-detailing-charlotte-nc" },
              { label: "Boat Detailing Charlotte", href: "/boat-detailing-charlotte-nc" },
              { label: "GYEON Certified Installer", href: "/gyeon-certified-installer-charlotte" },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:border-gold/40 hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg
            slot="ceramic-cta"
            fallback="/images/ferrari-side.jpg"
            alt="Ferrari Roma ceramic coated by ProWorx"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-1.5 mb-5">
              <StarRating count={5} />
              <span className="text-sm text-muted-foreground ml-1">63+ 5-star reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to Protect Your Vehicle for <span className="text-gradient-gold">Years to Come?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Reserve your spot with just 30% down. Free consultation available. I'll inspect your paint and recommend the ideal package.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-gold-dark text-gold-foreground hover:bg-gold-dark/90 h-13 px-8 text-base font-bold"
                asChild
              >
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackBookNowConversion(bookingUrl)}
                >
                  Book Now <ArrowRight className="size-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10"
                asChild
              >
                <a href={config.phoneLink} onClick={trackPhoneClick}>
                  <Phone className="size-5" /> Free Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
