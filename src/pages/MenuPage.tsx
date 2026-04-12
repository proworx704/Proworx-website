import { ArrowRight, CheckCircle2, Phone, Shield, Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";
import { PageSEO } from "@/components/PageSEO";
import { useSiteConfig } from "@/hooks/useCms";

/* ── helpers ─────────────────────────────────────────────────────────── */
function BookBtn({ href, children, variant = "gold" }: { href: string; children: React.ReactNode; variant?: "gold" | "outline" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all w-full sm:w-auto ${
        variant === "gold"
          ? "bg-gold text-gold-foreground hover:bg-gold/90"
          : "border border-gold/30 text-gold hover:bg-gold/10"
      }`}
    >
      {children}
    </a>
  );
}

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 py-10 md:py-14">
      {children}
    </section>
  );
}

function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <p className="text-xs font-bold text-gold uppercase tracking-[0.2em] mb-2">{label}</p>
      <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2">{title}</h2>
      {subtitle && <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{subtitle}</p>}
    </div>
  );
}

function TierCard({
  name,
  badge,
  description,
  features,
  prices,
  highlight,
  bookHref,
  bookLabel = "Book Now",
}: {
  name: string;
  badge?: string;
  description: string;
  features: string[];
  prices: { label: string; duration: string; price: string }[];
  highlight?: boolean;
  bookHref: string;
  bookLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl bg-card border p-5 relative ${highlight ? "border-gold shadow-lg shadow-gold/10" : "border-border"}`}>
      {badge && (
        <div className="absolute -top-2.5 left-4 px-3 py-0.5 bg-gold text-gold-foreground text-[10px] font-bold rounded-full uppercase tracking-wider">
          {badge}
        </div>
      )}
      <h3 className="font-bold text-base mt-1 mb-1">{name}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed mb-3">{description}</p>

      {/* Collapsible features */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-xs font-semibold text-gold mb-2 hover:text-gold/80 transition-colors"
      >
        {open ? "Hide" : "Show"} Details
        <ChevronDown className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="space-y-1.5 mb-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="size-3.5 text-gold mt-0.5 shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      )}

      {/* Price grid */}
      <div className="space-y-1 mb-4">
        {prices.map((p) => (
          <div key={p.label} className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{p.label}</span>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-muted-foreground/60">{p.duration}</span>
              <span className="font-bold tabular-nums">{p.price}</span>
            </div>
          </div>
        ))}
      </div>
      <BookBtn href={bookHref}>
        {bookLabel} <ArrowRight className="size-4" />
      </BookBtn>
    </div>
  );
}

/* ── main page ───────────────────────────────────────────────────────── */
export function MenuPage() {
  const { config } = useSiteConfig();

  /* Booking URLs */
  const bookMain = config["widgetUrl:homepage-cta"] || config.bookingUrlAddOns || "https://book.squareup.com/appointments/3462dsfn0cvfuh/location/9VRKFJAZZM3HG/services";
  const bookPaint = config["widgetUrl:paint-correction-cta"] || config.bookingUrlPaintCorrection || "https://book.squareup.com/appointments/14i1e4shwem0qb/location/9VRKFJAZZM3HG/services";
  const bookCeramic = config.ceramicDepositUrl || "https://square.link/u/NwnNJRm7";
  const subExterior = config["subscribeUrl:membership-exterior"] || "https://square.link/u/CP1LxyXc";
  const subInterior = config["subscribeUrl:membership-interior"] || "https://square.link/u/ZIRVEmaf";
  const subFull = config["subscribeUrl:membership-full"] || "https://square.link/u/kuw5LL99";
  const subCeramic = config["subscribeUrl:membership-ceramic"] || "";
  const phoneLink = config.phoneLink || "tel:+19803008093";

  const NAV = [
    { id: "inside-out", label: "Inside & Out" },
    { id: "interior", label: "Interior" },
    { id: "exterior", label: "Exterior" },
    { id: "addons", label: "Add-Ons" },
    { id: "paint", label: "Paint Correction" },
    { id: "ceramic", label: "Ceramic" },
    { id: "memberships", label: "Memberships" },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Service Menu & Pricing — ProWorx Mobile Detailing"
        description="Browse our full service menu with pricing. Interior, exterior, full detail, paint correction, ceramic coating & monthly plans. Book directly online."
        keywords="auto detailing pricing Charlotte NC, mobile detailing service menu, car detail prices, ceramic coating cost Charlotte"
      />

      {/* Hero — compact for mobile */}
      <div className="bg-gradient-to-b from-card to-background pt-8 pb-4 px-4">
        <div className="container max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-semibold mb-4">
            <Sparkles className="size-3" />
            GYEON & IGL Certified · 12+ Years · 5.0★
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
            Service Menu <span className="text-gradient-gold">& Pricing</span>
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            Charlotte, NC & surrounding areas · Fully mobile — we come to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <BookBtn href={bookMain}>Build Your Package <ArrowRight className="size-4" /></BookBtn>
            <BookBtn href={phoneLink} variant="outline"><Phone className="size-4" /> (980) 300-8093</BookBtn>
          </div>
        </div>
      </div>

      {/* Sticky nav */}
      <div className="sticky top-[64px] z-30 bg-background/95 backdrop-blur border-b border-border">
        <div className="container max-w-3xl">
          <nav className="flex overflow-x-auto gap-1 py-2 scrollbar-hide -mx-2 px-2">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold text-muted-foreground hover:text-gold hover:bg-gold/10 transition-colors whitespace-nowrap"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="container max-w-3xl px-4">

        {/* Vehicle size guide - compact */}
        <div className="mt-6 rounded-xl bg-card/50 border border-border p-4 text-xs text-muted-foreground">
          <p className="font-semibold text-foreground mb-1">Vehicle Size Guide</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
            <span><strong className="text-foreground">Sedan / Coupe:</strong> Camry, Civic, Model 3, Supra</span>
            <span><strong className="text-foreground">Sm SUV / Truck:</strong> RAV4, CR-V, Ranger, Model Y</span>
            <span><strong className="text-foreground">Lg SUV / Truck:</strong> Tahoe, Escalade, F-150, RAM</span>
            <span><strong className="text-foreground">Van:</strong> Odyssey, Sprinter, Transit, Sienna</span>
          </div>
        </div>

        {/* ═══ INSIDE & OUT ═══ */}
        <Section id="inside-out">
          <SectionHeader
            label="Full Service"
            title="Inside & Out"
            subtitle="Full-vehicle detail — interior + exterior combined. Choose your tier:"
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <TierCard
              name="Standard Inside & Out"
              badge="Best Value"
              description="Full interior vacuum & wipe-down, hand wash with foam, wheels & tires, glass, spray wax."
              features={[
                "Full interior vacuum & surface wipe-down",
                "Interior glass cleaning",
                "Hand wash with foam pre-treatment",
                "Wheels & tires cleaned and dressed",
                "Exterior glass cleaned",
                "Light spray wax for shine & protection",
              ]}
              prices={[
                { label: "Sedan", duration: "2h 30m", price: "$233" },
                { label: "Sm SUV/Truck", duration: "3h", price: "$279" },
                { label: "Lg SUV/Truck", duration: "3h 30m", price: "$325" },
                { label: "Van", duration: "4h", price: "$372" },
              ]}
              bookHref={bookMain}
            />
            <TierCard
              name="Premium — Interior Focus"
              badge="Interior Upgrade"
              highlight
              description="Standard + interior add-ons bundled at 10% off — leather care, steam, fragrance & UV."
              features={[
                "Everything in Standard, plus:",
                "Leather deep clean & conditioning",
                "Steam cleaning (vents, plastics, crevices)",
                "Premium long-lasting fragrance",
                "UV protection for dash & plastics",
              ]}
              prices={[
                { label: "Sedan", duration: "3h 30m", price: "$364" },
                { label: "Sm SUV/Truck", duration: "4h", price: "$410" },
                { label: "Lg SUV/Truck", duration: "4h 30m", price: "$456" },
                { label: "Van", duration: "5h", price: "$503" },
              ]}
              bookHref={bookMain}
            />
            <TierCard
              name="Premium — Exterior Focus"
              badge="Curb Appeal"
              description="Standard + exterior add-ons bundled at 10% off — clay bar, iron decon, sealant & trim."
              features={[
                "Everything in Standard, plus:",
                "Clay bar treatment",
                "Iron decontamination",
                "6-month paint sealant",
                "Trim restoration & protectant",
              ]}
              prices={[
                { label: "Sedan", duration: "3h 30m", price: "$503" },
                { label: "Sm SUV/Truck", duration: "4h", price: "$549" },
                { label: "Lg SUV/Truck", duration: "4h 30m", price: "$595" },
                { label: "Van", duration: "5h", price: "$642" },
              ]}
              bookHref={bookMain}
            />
            <TierCard
              name="Elite I&O — Ceramic"
              badge="Best Protection"
              description="The ultimate — all add-ons at 15% off with full ceramic upgrades throughout."
              features={[
                "Everything in Standard, plus:",
                "Steam cleaning + premium fragrance",
                "Clay bar + iron decontamination",
                "Fabric protection + GYEON leather shield",
                "Ceramic tire/trim dressing + 12-mo ceramic wax",
              ]}
              prices={[
                { label: "Sedan", duration: "5h 30m", price: "$726" },
                { label: "Sm SUV/Truck", duration: "6h", price: "$772" },
                { label: "Lg SUV/Truck", duration: "6h 30m", price: "$818" },
                { label: "Van", duration: "7h", price: "$865" },
              ]}
              bookHref={bookMain}
            />
          </div>
          <p className="text-[10px] text-muted-foreground/60 mt-3">Pet Hair Fee: Additional time charged at base rate. Condition surcharge may apply for neglected vehicles.</p>
        </Section>

        <div className="border-t border-border" />

        {/* ═══ INTERIOR ONLY ═══ */}
        <Section id="interior">
          <SectionHeader
            label="Interior Only"
            title="Interior Packages"
            subtitle="Comprehensive interior reset in three tiers:"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <TierCard
              name="Standard Interior"
              badge="Best Value"
              description="Full interior cleaning — vacuum, wipe-down, glass, light stain treatment."
              features={[
                "Full interior vacuum (carpets, seats, crevices)",
                "Wipe-down of all interior surfaces",
                "Door panels, cupholders, console & vents",
                "Interior glass cleaning",
                "Light stain treatment (as applicable)",
              ]}
              prices={[
                { label: "Sedan", duration: "1h 45m", price: "$163" },
                { label: "Sm SUV/Truck", duration: "2h", price: "$186" },
                { label: "Lg SUV/Truck", duration: "2h 30m", price: "$233" },
                { label: "Van", duration: "3h", price: "$279" },
              ]}
              bookHref={bookMain}
            />
            <TierCard
              name="Premium Interior"
              badge="Recommended"
              highlight
              description="Standard + bundled add-ons at 10% off — leather, steam, UV protection & fragrance."
              features={[
                "Everything in Standard, plus:",
                "Leather deep clean & conditioning",
                "Steam cleaning (vents, plastics, crevices)",
                "Premium long-lasting fragrance",
                "UV protection for dash & plastics",
              ]}
              prices={[
                { label: "Sedan", duration: "2h 45m", price: "$294" },
                { label: "Sm SUV/Truck", duration: "3h", price: "$317" },
                { label: "Lg SUV/Truck", duration: "3h 30m", price: "$364" },
                { label: "Van", duration: "4h", price: "$410" },
              ]}
              bookHref={bookMain}
            />
            <TierCard
              name="Elite Interior — Ceramic"
              badge="Best Protection"
              description="Standard + ceramic add-ons at 15% off — HWE, fabric & leather ceramic protection."
              features={[
                "Everything in Standard, plus:",
                "Hot water extraction / shampoo",
                "Steam cleaning (vents, plastics, crevices)",
                "Premium long-lasting fragrance",
                "Fabric protection / weather guard",
                "GYEON leather shield",
              ]}
              prices={[
                { label: "Sedan", duration: "3h 30m", price: "$350" },
                { label: "Sm SUV/Truck", duration: "3h 45m", price: "$373" },
                { label: "Lg SUV/Truck", duration: "4h 15m", price: "$420" },
                { label: "Van", duration: "4h 45m", price: "$466" },
              ]}
              bookHref={bookMain}
            />
          </div>
        </Section>

        <div className="border-t border-border" />

        {/* ═══ EXTERIOR ONLY ═══ */}
        <Section id="exterior">
          <SectionHeader
            label="Exterior Only"
            title="Exterior Packages"
            subtitle="Professional exterior care — all mobile at your location:"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <TierCard
              name="Standard Exterior"
              badge="Best Value"
              description="Professional exterior refresh for well-maintained vehicles."
              features={[
                "Hand wash with foam pre-treatment",
                "Wheels & tires cleaned and dressed",
                "Exterior glass cleaned",
                "Light spray wax for short-term protection",
              ]}
              prices={[
                { label: "Sedan", duration: "1h 15m", price: "$117" },
                { label: "Sm SUV/Truck", duration: "1h 30m", price: "$140" },
                { label: "Lg SUV/Truck", duration: "1h 45m", price: "$163" },
                { label: "Van", duration: "2h", price: "$186" },
              ]}
              bookHref={bookMain}
            />
            <TierCard
              name="Premium Exterior"
              badge="Most Popular"
              highlight
              description="Standard + bundled add-ons at 10% off — full decontamination, sealant & trim."
              features={[
                "Everything in Standard, plus:",
                "Clay bar treatment",
                "Iron decontamination",
                "6-month paint sealant",
                "Trim restoration & protectant",
              ]}
              prices={[
                { label: "Sedan", duration: "2h 30m", price: "$387" },
                { label: "Sm SUV/Truck", duration: "2h 45m", price: "$410" },
                { label: "Lg SUV/Truck", duration: "3h", price: "$433" },
                { label: "Van", duration: "3h 15m", price: "$456" },
              ]}
              bookHref={bookMain}
            />
            <TierCard
              name="Elite Exterior — Ceramic"
              badge="Best Protection"
              description="Standard + all add-ons at 15% off with ceramic upgrades for max protection."
              features={[
                "Everything in Standard, plus:",
                "Clay bar + iron decontamination",
                "Ceramic tire dressing",
                "Plastic & trim ceramic coating",
                "12-month ceramic wax",
              ]}
              prices={[
                { label: "Sedan", duration: "3h 15m", price: "$423" },
                { label: "Sm SUV/Truck", duration: "3h 30m", price: "$446" },
                { label: "Lg SUV/Truck", duration: "3h 45m", price: "$469" },
                { label: "Van", duration: "4h", price: "$492" },
              ]}
              bookHref={bookMain}
            />
          </div>
        </Section>

        <div className="border-t border-border" />

        {/* ═══ ADD-ONS ═══ */}
        <Section id="addons">
          <SectionHeader
            label="Customize"
            title="Add-On Services"
            subtitle="Enhance any detail. Already bundled at 10% off in Premium and 15% off in Elite tiers."
          />
          <AddOnGroup title="Interior Add-Ons" items={[
            { name: "Hot Water Extraction / Shampoo", price: "$100" },
            { name: "Pet Hair Removal", price: "$80" },
            { name: "Steam Cleaning", price: "$60" },
            { name: "Stain Removal (Targeted)", price: "$45" },
            { name: "Odor / Ozone Treatment", price: "$45" },
            { name: "UV Protection (Dash & Trim)", price: "$40" },
            { name: "Leather Deep Clean & Condition", price: "$25" },
            { name: "Premium Fragrance", price: "$20" },
          ]} />
          <AddOnGroup title="Exterior Add-Ons" items={[
            { name: "Headlight Restoration + UV Sealant", price: "$80" },
            { name: "Wheel Polishing & Protection", price: "$80" },
            { name: "Trim Restoration", price: "$80" },
            { name: "Glass Polishing", price: "$80" },
            { name: "Full Engine Bay Detail", price: "$80" },
            { name: "Basic Engine Bay", price: "$40" },
            { name: "Iron Decontamination (Wheels)", price: "$40" },
          ]} />
          <AddOnGroup title="Ceramic Add-Ons" items={[
            { name: "GYEON View — Windshield Ceramic", price: "$120" },
            { name: "Convertible Top Protection", price: "$100" },
            { name: "Fabric Protection / Weather Guard", price: "$80" },
            { name: "GYEON Leather Shield", price: "$60" },
            { name: "GYEON Fabric Coat", price: "$40" },
            { name: "Rain Repellent Glass Treatment", price: "$40" },
            { name: "Ceramic Tire Dressing", price: "$20" },
          ]} />
          <AddOnGroup title="Paint Protection Add-Ons" items={[
            { name: "Ceramic Wax (~12 months)", price: "$120" },
            { name: "Paint Sealant (~6 months)", price: "$80" },
            { name: "Carnauba Wax (~3 months)", price: "$60" },
          ]} />
          <div className="mt-4">
            <BookBtn href={bookMain}>Build Your Package <ArrowRight className="size-4" /></BookBtn>
          </div>
        </Section>

        <div className="border-t border-border" />

        {/* ═══ PAINT CORRECTION ═══ */}
        <Section id="paint">
          <SectionHeader
            label="Specialty"
            title="Paint Correction"
            subtitle="Multi-stage machine polishing to remove swirls, scratches & oxidation. Includes full decontamination, clay bar, iron removal, IPA wipe-down & documentation."
          />
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: "1-Step Enhancement",
                defect: "~60–70% Defect Removal",
                desc: "Light swirls & minor imperfections",
                prices: [
                  { label: "Compact 2-Door", price: "$550" },
                  { label: "Midsize Sedan", price: "$700" },
                  { label: "SUV / Truck", price: "$900" },
                ],
              },
              {
                name: "2-Step Correction",
                defect: "~85–95% Defect Removal",
                desc: "Moderate damage — deeper scratches & heavy swirls",
                prices: [
                  { label: "Compact 2-Door", price: "$1,000" },
                  { label: "Midsize Sedan", price: "$1,200" },
                  { label: "SUV / Truck", price: "$1,400" },
                ],
                popular: true,
              },
              {
                name: "Multi-Stage",
                defect: "~95–99% Defect Removal",
                desc: "Severely damaged or neglected paint → showroom quality",
                prices: [
                  { label: "Compact 2-Door", price: "$1,700" },
                  { label: "Midsize Sedan", price: "$2,000" },
                  { label: "SUV / Truck", price: "$2,400" },
                ],
              },
            ].map((pkg) => (
              <div key={pkg.name} className={`rounded-2xl bg-card border p-5 ${pkg.popular ? "border-gold" : "border-border"}`}>
                <h3 className="font-bold text-base mb-1">{pkg.name}</h3>
                <p className="text-xs font-semibold text-gold mb-2">{pkg.defect}</p>
                <p className="text-xs text-muted-foreground mb-4">{pkg.desc}</p>
                <div className="space-y-1 mb-4">
                  {pkg.prices.map((p) => (
                    <div key={p.label} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{p.label}</span>
                      <span className="font-bold">{p.price}</span>
                    </div>
                  ))}
                </div>
                <BookBtn href={bookPaint}>Book Now <ArrowRight className="size-4" /></BookBtn>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/60 mt-3">Drop-off required. Includes before & after documentation. Combo pricing available with ceramic coating — ask us!</p>
        </Section>

        <div className="border-t border-border" />

        {/* ═══ CERAMIC COATING ═══ */}
        <Section id="ceramic">
          <SectionHeader
            label="Certified Protection"
            title="Ceramic Coating"
            subtitle="Professional-grade GYEON ceramic coatings by a certified installer. Each includes prep wash, decontamination & light prep polish. Reserve with just 30% down."
          />
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: "Q² One EVO",
                protection: "1-Year",
                price: "$499",
                deposit: "~$150",
                features: [
                  "Prep wash & decontamination",
                  "Light prep polish",
                  "Single-layer GYEON Q² One EVO",
                  "Hydrophobic + UV shield",
                  "1-year manufacturer warranty",
                ],
              },
              {
                name: "Q² Pure EVO",
                protection: "3-Year",
                price: "$899",
                deposit: "~$270",
                popular: true,
                features: [
                  "Prep wash & decontamination",
                  "Light prep polish",
                  "GYEON Q² Pure EVO professional coating",
                  "Superior chemical & UV resistance",
                  "3-year warranty + annual inspection",
                ],
              },
              {
                name: "Q² Flash EVO",
                protection: "10-Year",
                price: "$1,599",
                deposit: "~$480",
                features: [
                  "Prep wash & decontamination",
                  "Light prep polish",
                  "GYEON Q² Flash EVO top-tier coating",
                  "Maximum hardness & scratch resistance",
                  "10-year warranty + annual inspection",
                ],
              },
            ].map((pkg) => (
              <div key={pkg.name} className={`rounded-2xl bg-card border p-5 relative ${pkg.popular ? "border-gold shadow-lg shadow-gold/10" : "border-border"}`}>
                {pkg.popular && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-gold text-gold-foreground text-[10px] font-bold rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="size-4 text-gold" />
                  <h3 className="font-bold text-base">{pkg.name}</h3>
                </div>
                <p className="text-xs font-semibold text-gold mb-2">{pkg.protection} Protection</p>
                <p className="text-2xl font-black mb-0.5">{pkg.price}<span className="text-sm font-normal text-muted-foreground">+</span></p>
                <p className="text-[10px] text-muted-foreground mb-4">30% deposit ({pkg.deposit}) to reserve</p>
                <ul className="space-y-1.5 mb-4">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="size-3.5 text-gold mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <BookBtn href={bookCeramic}>Reserve with 30% Down <ArrowRight className="size-4" /></BookBtn>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/60 mt-3">Pricing varies by vehicle size. Drop-off required. Financing available via Wisetack — prequalify with no impact to credit.</p>
        </Section>

        <div className="border-t border-border" />

        {/* ═══ MEMBERSHIPS ═══ */}
        <Section id="memberships">
          <SectionHeader
            label="Monthly Plans"
            title="Maintenance Memberships"
            subtitle="Keep your vehicle looking its best year-round. Cancel anytime — no contracts."
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "Exterior Only",
                price: "$59",
                tagline: "Exterior care on your schedule",
                href: subExterior,
                features: ["Exterior hand wash", "Tire & wheel cleaning", "Exterior windows", "Door jambs cleaned", "Tire shine & dressing"],
                billing: { biweekly: "$30", quarterly: "$177", annually: "$679" },
              },
              {
                name: "Interior Only",
                price: "$99",
                tagline: "Interior care on your schedule",
                href: subInterior,
                features: ["Full interior detail", "Full vacuum & wipe-down", "Dashboard & console detail", "Leather / vinyl conditioning", "Interior windows", "Air freshener"],
                billing: { biweekly: "$50", quarterly: "$297", annually: "$1,139" },
              },
              {
                name: "Full Inside & Out",
                price: "$159",
                tagline: "Complete detail + ceramic protection",
                href: subFull,
                popular: true,
                features: ["Full inside & out detail", "Everything in Exterior + Interior", "Ceramic wet-coat protection", "Tire shine & trim dressing", "10% off on add-on services"],
                billing: { biweekly: "$80", quarterly: "$477", annually: "$1,829" },
              },
              {
                name: "Ceramic Maintenance",
                price: "$199",
                tagline: "Premium ceramic care",
                href: subCeramic,
                features: ["Full inside & out detail", "Everything in Full I&O plan", "GYEON ceramic top-coat refresh", "Iron decontamination", "Ceramic trim & plastic refresh", "15% off on add-on services"],
                billing: { biweekly: "$100", quarterly: "$597", annually: "$2,289" },
              },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl bg-card border p-5 relative ${plan.popular ? "border-gold shadow-lg shadow-gold/10" : "border-border"}`}>
                {plan.popular && (
                  <div className="absolute -top-2.5 left-4 px-3 py-0.5 bg-gold text-gold-foreground text-[10px] font-bold rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="font-bold text-base mt-1">{plan.name}</h3>
                <p className="text-[10px] text-muted-foreground mb-2">{plan.tagline}</p>
                <p className="text-3xl font-black mb-0.5">{plan.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                <p className="text-[10px] text-muted-foreground mb-3">
                  Also: {plan.billing.biweekly}/biweekly · {plan.billing.quarterly}/qtr · {plan.billing.annually}/yr
                </p>
                <ul className="space-y-1.5 mb-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="size-3.5 text-gold mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                {plan.href ? (
                  <BookBtn href={plan.href}>Subscribe Now <ArrowRight className="size-4" /></BookBtn>
                ) : (
                  <BookBtn href={phoneLink} variant="outline"><Phone className="size-3.5" /> Call to Subscribe</BookBtn>
                )}
              </div>
            ))}
          </div>
        </Section>

        <div className="border-t border-border" />

        {/* ═══ CONTACT CTA ═══ */}
        <section className="py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3">
            Ready to <span className="text-gradient-gold">Get Started</span>?
          </h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
            Book online or call us for a free consultation. We'll recommend the perfect package for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <BookBtn href={bookMain}>Build Your Package <ArrowRight className="size-4" /></BookBtn>
            <BookBtn href={phoneLink} variant="outline"><Phone className="size-4" /> (980) 300-8093</BookBtn>
          </div>
          <div className="text-xs text-muted-foreground space-y-1">
            <p><strong className="text-foreground">Hours:</strong> Mon–Fri 9:30AM–6PM · Sat 9:30AM–3PM · Sun Closed</p>
            <p><strong className="text-foreground">Email:</strong> detailing@proworxdetailing.com</p>
            <p><strong className="text-foreground">Areas:</strong> Charlotte, Waxhaw, Matthews, Ballantyne, SouthPark, Indian Trail, Mint Hill, Pineville & more</p>
            <p className="pt-2 text-muted-foreground/50">Financing available via Wisetack — $50–$15K, no credit impact to prequalify</p>
          </div>
        </section>
      </div>
    </div>
  );
}

/* ── add-on group ────────────────────────────────────────────────────── */
function AddOnGroup({ title, items }: { title: string; items: { name: string; price: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-2 text-left"
      >
        <span className="text-xs font-bold text-gold uppercase tracking-[0.15em]">{title}</span>
        <ChevronDown className={`size-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pb-2">
          {items.map((item) => (
            <div key={item.name} className="flex items-center justify-between rounded-lg bg-card/50 border border-border px-3 py-2">
              <span className="text-xs font-medium">{item.name}</span>
              <span className="text-sm font-bold text-gold ml-2 shrink-0">{item.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
