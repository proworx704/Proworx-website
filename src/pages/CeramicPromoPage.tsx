import { useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Droplets,
  Clock,
  Calendar,
  Car,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE, PHONE_LINK } from "@/lib/constants";
import { trackPhoneClick, trackBookNowConversion } from "@/lib/tracking";

/* ── Square checkout link — Annual Ceramic Inside & Out ── */
const CHECKOUT_URL = "https://square.link/u/wyQAUVPr";

/* ── What's included in the membership ── */
const MEMBERSHIP_FEATURES = [
  "Full inside & out detail every visit",
  "GYEON ceramic top-coat refresh",
  "Iron decontamination",
  "Ceramic trim & plastic refresh",
  "Tire shine & dressing",
  "15% off on all add-on services",
  "We come to you — home or office",
  "Priority scheduling",
];

/* ── What's included in the FREE coating ── */
const COATING_FEATURES = [
  { label: "Q² Pure EVO Ceramic Coating", detail: "Professional-grade 3-year protection" },
  { label: "Hydrophobic Shield", detail: "Water beads & rolls off instantly" },
  { label: "UV & Chemical Resistance", detail: "Protects against sun, bird droppings, tree sap" },
  { label: "Deep Gloss Finish", detail: "Showroom shine that lasts for years" },
];

/* ── Ceramic add-on upsells ── */
const ADDON_UPSELLS = [
  { name: "Windshield Glass Ceramic", price: "$120", save: "$102" },
  { name: "Wheel & Caliper Ceramic", price: "$80", save: "$68" },
  { name: "Trim & Plastic Ceramic", price: "$80", save: "$68" },
  { name: "Leather Shield", price: "$60", save: "$51" },
  { name: "Fabric Coat", price: "$40", save: "$34" },
];

/* ── Service areas ── */
const AREAS = [
  "South Charlotte", "Ballantyne", "Waxhaw", "Indian Trail",
  "Marvin", "Weddington", "Matthews", "Pineville",
  "Fort Mill", "Stallings", "Mint Hill", "Monroe",
];

export function CeramicPromoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCTA = () => {
    trackBookNowConversion(CHECKOUT_URL);
    window.open(CHECKOUT_URL, "_blank", "noopener,noreferrer");
  };

  const handlePhone = () => {
    trackPhoneClick();
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* ══════ HERO ══════ */}
      <section className="relative overflow-hidden">
        {/* Gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-zinc-950 to-zinc-950" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-600/8 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 py-16 sm:py-24 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Sparkles className="size-4" />
            Limited-Time Offer — $899+ Value FREE
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
            Get a <span className="text-amber-400">FREE 3-Year</span>
            <br />Ceramic Coating
          </h1>

          <p className="text-xl sm:text-2xl text-zinc-300 max-w-2xl mx-auto mb-4">
            When you join the <strong className="text-white">Annual Ceramic Inside & Out</strong> Maintenance Membership
          </p>

          <p className="text-lg text-amber-400 font-semibold mb-10">
            Plus 15% OFF all ceramic add-ons
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              onClick={handleCTA}
              className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-lg px-10 py-7 rounded-xl shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-400/40 hover:scale-105"
            >
              Subscribe Now — Get Your Free Coating <ArrowRight className="size-5 ml-2" />
            </Button>
          </div>

          <p className="text-zinc-500 text-sm">
            Annual plan • Professional mobile service • Cancel anytime
          </p>
        </div>
      </section>

      {/* ══════ THE DEAL BREAKDOWN ══════ */}
      <section className="py-16 sm:py-20 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Here's What You Get</h2>
            <p className="text-zinc-400 text-lg">One membership. Total protection. Incredible value.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: FREE Coating */}
            <div className="relative bg-gradient-to-br from-amber-500/10 to-zinc-900 border border-amber-500/20 rounded-2xl p-8">
              <div className="absolute -top-3 left-6 bg-amber-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full">
                FREE WITH MEMBERSHIP
              </div>
              <div className="flex items-center gap-3 mb-6 mt-2">
                <div className="bg-amber-500/20 p-3 rounded-xl">
                  <ShieldCheck className="size-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">3-Year Ceramic Coating</h3>
                  <p className="text-amber-400 font-semibold">$899+ Value — Yours FREE</p>
                </div>
              </div>
              <ul className="space-y-3">
                {COATING_FEATURES.map((f) => (
                  <li key={f.label} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-medium">{f.label}</span>
                      <span className="text-zinc-400 block text-sm">{f.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Membership */}
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-500/20 p-3 rounded-xl">
                  <Shield className="size-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Ceramic Inside & Out Membership</h3>
                  <p className="text-zinc-400">The ultimate ceramic care plan</p>
                </div>
              </div>
              <ul className="space-y-3">
                {MEMBERSHIP_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-200">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-zinc-700/50">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white">$2,169.90</span>
                  <span className="text-zinc-400">/year</span>
                </div>
                <p className="text-zinc-500 text-sm mt-1">
                  That's just $180.83/mo for professional ceramic care + a FREE coating
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ VALUE MATH ══════ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">The Math Speaks for Itself</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 sm:p-10">
            <div className="space-y-4 text-left">
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-zinc-300">Annual Ceramic Inside & Out Membership</span>
                <span className="text-white font-semibold">$2,169.90</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-zinc-300">Q² Pure EVO 3-Year Ceramic Coating</span>
                <span className="text-amber-400 font-semibold line-through">$899</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-zinc-300">15% Off Ceramic Add-Ons (avg savings)</span>
                <span className="text-amber-400 font-semibold">~$50–$100+</span>
              </div>
              <div className="flex justify-between items-center py-4 bg-amber-500/10 rounded-xl px-4 -mx-4">
                <span className="text-amber-400 font-bold text-lg">Total Value You Receive</span>
                <span className="text-amber-400 font-black text-2xl">$3,000+</span>
              </div>
            </div>
          </div>

          <Button
            onClick={handleCTA}
            className="mt-10 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-lg px-10 py-7 rounded-xl shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-400/40 hover:scale-105"
          >
            Claim This Deal <ArrowRight className="size-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* ══════ 15% OFF ADD-ONS ══════ */}
      <section className="py-16 sm:py-20 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Plus <span className="text-amber-400">15% OFF</span> Ceramic Add-Ons
            </h2>
            <p className="text-zinc-400 text-lg">Upgrade every surface of your vehicle for less</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADDON_UPSELLS.map((addon) => (
              <div
                key={addon.name}
                className="bg-zinc-800/50 border border-zinc-700/30 rounded-xl p-5 flex items-center gap-4"
              >
                <Droplets className="size-8 text-amber-400 shrink-0" />
                <div>
                  <p className="text-white font-semibold">{addon.name}</p>
                  <p className="text-zinc-400 text-sm">
                    {addon.price} → <span className="text-amber-400 font-semibold">Save {addon.save}</span>
                  </p>
                </div>
              </div>
            ))}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 flex items-center gap-4">
              <Star className="size-8 text-amber-400 shrink-0" />
              <div>
                <p className="text-amber-400 font-semibold">Stack the savings</p>
                <p className="text-zinc-400 text-sm">Add multiple ceramic upgrades & save big</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ HOW IT WORKS ══════ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">How It Works</h2>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="size-7" />,
                step: "1",
                title: "Subscribe",
                desc: "Click below to join the Annual Ceramic Inside & Out plan through our secure checkout.",
              },
              {
                icon: <ShieldCheck className="size-7" />,
                step: "2",
                title: "Get Your Free Coating",
                desc: "We'll schedule your complimentary Q² Pure EVO ceramic coating application at your location.",
              },
              {
                icon: <Car className="size-7" />,
                step: "3",
                title: "Enjoy Year-Round Care",
                desc: "Regular professional maintenance keeps your coating performing and your vehicle looking its best.",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="relative inline-flex items-center justify-center bg-amber-500/15 border border-amber-500/30 w-16 h-16 rounded-2xl mb-4">
                  <span className="text-amber-400">{s.icon}</span>
                  <span className="absolute -top-2 -right-2 bg-amber-500 text-zinc-950 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    {s.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-zinc-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ WHY PROWORX ══════ */}
      <section className="py-16 sm:py-20 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Why ProWorx?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: <ShieldCheck className="size-6" />, title: "GYEON Certified Installer", desc: "Factory-trained and certified to apply GYEON's full ceramic lineup." },
              { icon: <MapPin className="size-6" />, title: "We Come to You", desc: "Professional mobile detailing at your home, office, or wherever you are." },
              { icon: <Star className="size-6" />, title: "5-Star Rated", desc: "60+ five-star reviews on Google. Charlotte's trusted detailing team." },
              { icon: <Clock className="size-6" />, title: "Flexible Scheduling", desc: "Priority booking for members. We work around your schedule." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 bg-zinc-800/50 border border-zinc-700/30 rounded-xl p-5">
                <div className="bg-amber-500/15 p-2.5 rounded-lg h-fit">
                  <span className="text-amber-400">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-zinc-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SERVICE AREAS ══════ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Serving South Charlotte & Surrounding Areas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {AREAS.map((area) => (
              <span key={area} className="bg-zinc-800 border border-zinc-700/50 px-4 py-2 rounded-full text-sm text-zinc-300">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FINAL CTA ══════ */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-amber-500/15 to-zinc-900 border border-amber-500/20 rounded-3xl p-10 sm:p-14">
            <Sparkles className="size-10 text-amber-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Don't Miss Out
            </h2>
            <p className="text-zinc-300 text-lg mb-8 max-w-xl mx-auto">
              Join the Annual Ceramic Inside & Out membership today and get a
              <strong className="text-amber-400"> FREE 3-Year Ceramic Coating</strong> —
              a $899+ value, on us.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={handleCTA}
                className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-lg px-10 py-7 rounded-xl shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-400/40 hover:scale-105"
              >
                Subscribe & Get Your Free Coating <ArrowRight className="size-5 ml-2" />
              </Button>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-zinc-400">
              <a href={PHONE_LINK} onClick={handlePhone} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="size-4" /> {PHONE}
              </a>
              <span className="hidden sm:inline text-zinc-700">|</span>
              <span>GYEON Certified • Charlotte, NC</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CeramicPromoPage;
