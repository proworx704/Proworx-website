import { useEffect, useState, useRef, FormEvent } from "react";
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
  AlertTriangle,
  FileText,
  ChevronDown,
  Send,
  User,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageSEO } from "@/components/PageSEO";
import { PHONE, PHONE_LINK } from "@/lib/constants";
import { trackPhoneClick, trackSubscribeClick, trackViewContent } from "@/lib/tracking";

/* ── Vehicle-size pricing ── */
const VEHICLE_PRICING = [
  { size: "Sedan", monthly: "$165.09", annual: "$1,822.59" },
  { size: "Small SUV / Truck", monthly: "$185.68", annual: "$2,050.22" },
  { size: "Large SUV / Off-Road", monthly: "$206.28", annual: "$2,277.85" },
  { size: "Van", monthly: "$226.88", annual: "$2,505.48" },
];

/* ── Contract terms ── */
const COATING_VALUE = "$899";
const MONTHLY_CREDIT = "$74.92";
const CONTRACT_MONTHS = 12;

/* ── What happens EVERY monthly visit ── */
const MONTHLY_VISIT_STEPS = [
  { label: "Full Exterior Hand Wash & Dry", detail: "Thorough two-bucket wash, no automated brushes" },
  { label: "Complete Interior Detail", detail: "Vacuum, wipe-down, dashboard, console & door panels" },
  { label: "Leather / Vinyl Conditioning", detail: "Keeps your seats soft, protected & crack-free" },
  { label: "GYEON Ceramic Top-Coat Refresh", detail: "Restores hydrophobic beading & gloss every visit" },
  { label: "Iron Decontamination", detail: "Removes embedded brake dust & industrial fallout" },
  { label: "Ceramic Trim & Plastic Refresh", detail: "Keeps exterior trim looking factory-new" },
  { label: "Interior + Exterior Windows", detail: "Streak-free glass inside and out" },
  { label: "Tire Shine & Dressing", detail: "Deep black finish on tires & wheel wells" },
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
  { name: "Windshield Glass Ceramic", price: "$120", save: "$18" },
  { name: "Wheel Faces Ceramic", price: "$200", save: "$30" },
  { name: "Wheel Off — Faces, Barrel & Calipers", price: "$400", save: "$60" },
  { name: "Trim & Plastic Ceramic", price: "$80", save: "$12" },
  { name: "Leather Shield", price: "$60", save: "$9" },
  { name: "Fabric Coat", price: "$40", save: "$6" },
];

/* ── Service areas ── */
const AREAS = [
  "South Charlotte", "Ballantyne", "Waxhaw", "Indian Trail",
  "Marvin", "Weddington", "Matthews", "Pineville",
  "Fort Mill", "Stallings", "Mint Hill", "Monroe",
];

export function CeramicPromoPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    vehicleSize: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    window.scrollTo(0, 0);
    trackViewContent("Ceramic Membership Promo", "Promo");
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handlePhone = () => {
    trackPhoneClick();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    // Fire Lead pixel event
    trackSubscribeClick("Ceramic Coating Lead Form", window.location.href);

    try {
      const response = await fetch("https://formsubmit.co/ajax/detailing@proworxdetailing.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `🛡️ New Ceramic Coating Lead — ${formData.name} (${formData.vehicleSize})`,
          _template: "table",
          _captcha: "false",
          Name: formData.name,
          Phone: formData.phone,
          Email: formData.email || "Not provided",
          Vehicle: formData.vehicle,
          "Vehicle Size": formData.vehicleSize,
          "Monthly Rate": VEHICLE_PRICING.find((v) => v.size === formData.vehicleSize)?.monthly || "TBD",
          Notes: formData.message || "None",
          Source: "Ceramic Promo Landing Page",
        }),
      });

      if (response.ok) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <PageSEO
        title="Free 3-Year Ceramic Coating — $0 Down | ProWorx Charlotte"
        description="Get a FREE $899 ceramic coating with your Inside & Out membership. $0 down, $0 extra — just stay 12 months. Charlotte's GYEON-certified detailer comes to you."
        keywords="ceramic coating Charlotte NC, free ceramic coating, car detailing membership, GYEON certified, monthly detailing subscription, mobile detailing"
      />

      {/* ══════ HERO ══════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-zinc-950 to-zinc-950" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-600/8 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Sparkles className="size-4" />
            $899 Ceramic Coating — Yours FREE
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
            $0 Down. $0 Extra.
            <br /><span className="text-amber-400">FREE Ceramic Coating.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-zinc-300 max-w-2xl mx-auto mb-4">
            Sign up for your monthly Inside & Out membership. We apply a <strong className="text-white">$899 GYEON Q² Pure EVO coating</strong> at no charge. Stay 12 months — it's completely free.
          </p>

          <p className="text-lg text-amber-400 font-semibold mb-10">
            Starting at $165.09/mo · We come to you · GYEON Certified
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Button
              onClick={scrollToForm}
              className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-lg px-10 py-7 rounded-xl shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-400/40 hover:scale-105"
            >
              Book Your Free Inspection <ArrowRight className="size-5 ml-2" />
            </Button>
            <a
              href={PHONE_LINK}
              onClick={handlePhone}
              className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors text-lg"
            >
              <Phone className="size-5" /> Or call {PHONE}
            </a>
          </div>

          <div className="inline-flex items-center gap-2 bg-zinc-800/80 border border-zinc-700/50 px-5 py-2.5 rounded-full text-sm text-zinc-300">
            <Shield className="size-4 text-amber-400" />
            12-month coating agreement · After that, cancel anytime
          </div>
        </div>
      </section>

      {/* ══════ HOW THE FREE COATING WORKS ══════ */}
      <section className="py-16 sm:py-20 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold mb-3">
              <FileText className="size-4" />
              HOW IT WORKS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Think of It Like a Free Phone
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Just like carriers give you a free phone when you stay on your plan — we give you a free ceramic coating when you keep your detailing membership.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Car className="size-7" />,
                step: "1",
                title: "Sign Up",
                desc: "Choose your Inside & Out plan based on your vehicle size. Monthly billing, no upfront cost.",
              },
              {
                icon: <ShieldCheck className="size-7" />,
                step: "2",
                title: "Free Coating",
                desc: "We inspect your paint, discuss any correction needed, then apply your $899 ceramic coating — FREE.",
              },
              {
                icon: <Calendar className="size-7" />,
                step: "3",
                title: "Monthly Credits",
                desc: `${MONTHLY_CREDIT}/mo is credited toward your coating. After 12 months the $899 balance is fully paid off.`,
              },
              {
                icon: <Sparkles className="size-7" />,
                step: "4",
                title: "It's Yours Free",
                desc: "Stay 12 months and the coating costs you nothing. Your membership continues month-to-month — cancel anytime.",
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

      {/* ══════ VEHICLE PRICING ══════ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Your Rate — Based on <span className="text-amber-400">Vehicle Size</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              One simple monthly payment. Ceramic coating included free.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left px-6 py-4 text-zinc-400 font-semibold text-sm">Vehicle Size</th>
                  <th className="text-right px-6 py-4 text-zinc-400 font-semibold text-sm">Monthly</th>
                  <th className="text-right px-6 py-4 text-zinc-400 font-semibold text-sm hidden sm:table-cell">Annual Pre-Pay</th>
                </tr>
              </thead>
              <tbody>
                {VEHICLE_PRICING.map((v, i) => (
                  <tr key={v.size} className={i < VEHICLE_PRICING.length - 1 ? "border-b border-zinc-800/50" : ""}>
                    <td className="px-6 py-4 text-white font-medium">{v.size}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-amber-400 font-bold text-lg">{v.monthly}</span>
                      <span className="text-zinc-500 text-sm">/mo</span>
                    </td>
                    <td className="px-6 py-4 text-right text-zinc-400 hidden sm:table-cell">{v.annual}/yr</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-6 py-4 bg-amber-500/10 border-t border-amber-500/20">
              <p className="text-amber-400 text-sm font-medium text-center">
                🛡️ Every plan includes a FREE $899 3-Year Ceramic Coating with 12-month agreement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ WHAT YOU GET EVERY MONTH ══════ */}
      <section className="py-16 sm:py-20 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold mb-3">
              <Calendar className="size-4" />
              EVERY SINGLE MONTH
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Here's What Happens Each Visit
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              A GYEON-certified detailer arrives at your home or office and performs a complete ceramic-grade detail — inside and out.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {MONTHLY_VISIT_STEPS.map((step) => (
              <div key={step.label} className="flex items-start gap-4 bg-zinc-800/50 border border-zinc-700/30 rounded-xl p-5">
                <CheckCircle2 className="size-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold">{step.label}</span>
                  <span className="text-zinc-400 block text-sm mt-0.5">{step.detail}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-zinc-400 text-sm mb-1">Plus as a member you get:</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <span className="flex items-center gap-1.5 text-amber-400 font-medium"><Star className="size-4" /> 15% off all add-on services</span>
              <span className="text-zinc-600">•</span>
              <span className="flex items-center gap-1.5 text-amber-400 font-medium"><Clock className="size-4" /> Priority scheduling</span>
              <span className="text-zinc-600">•</span>
              <span className="flex items-center gap-1.5 text-amber-400 font-medium"><MapPin className="size-4" /> Mobile — we come to you</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ FREE COATING BONUS ══════ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold mb-3">
              <ShieldCheck className="size-4" />
              INCLUDED FREE WITH YOUR MEMBERSHIP
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Your FREE 3-Year Ceramic Coating
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Applied at your first visit — a {COATING_VALUE} professional ceramic coating at zero extra cost.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-gradient-to-br from-amber-500/10 to-zinc-900 border border-amber-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-amber-500/20 p-3 rounded-xl">
                <ShieldCheck className="size-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Q² Pure EVO Ceramic Coating</h3>
                <p className="text-amber-400 font-semibold">{COATING_VALUE} Value — FREE with 12-month membership</p>
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
            <p className="text-zinc-500 text-sm mt-6 pt-4 border-t border-zinc-700/50">
              Applied at your first visit after a professional paint inspection. Your monthly ceramic maintenance refreshes and extends the coating's life indefinitely.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ THE AGREEMENT ══════ */}
      <section className="py-16 sm:py-20 bg-zinc-900/50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Agreement — Simple & Fair</h2>
            <p className="text-zinc-400 text-lg">Here's exactly how the coating credit works.</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 sm:p-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500/15 p-2.5 rounded-lg shrink-0">
                <ShieldCheck className="size-5 text-amber-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">FREE Ceramic Coating</h3>
                <p className="text-zinc-400">We apply a professional GYEON Q² Pure EVO 3-year ceramic coating ({COATING_VALUE} value) at your first visit — no charge.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-500/15 p-2.5 rounded-lg shrink-0">
                <Calendar className="size-5 text-amber-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">12-Month Commitment</h3>
                <p className="text-zinc-400">Keep your Inside & Out membership active for 12 months. {MONTHLY_CREDIT}/mo is credited toward the coating — after 12 months the {COATING_VALUE} is fully paid off and it's yours free.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-500/15 p-2.5 rounded-lg shrink-0">
                <AlertTriangle className="size-5 text-red-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Early Cancellation</h3>
                <p className="text-zinc-400">Cancel your membership at any point within the first 12 months and the <strong className="text-white">full {COATING_VALUE} ceramic coating fee becomes due immediately</strong>. No partial credits apply.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-500/15 p-2.5 rounded-lg shrink-0">
                <CheckCircle2 className="size-5 text-green-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">After 12 Months</h3>
                <p className="text-zinc-400">The coating obligation is complete — it's 100% free. Your membership continues month-to-month. Cancel anytime with no penalty.</p>
              </div>
            </div>
          </div>

          <p className="text-zinc-500 text-sm text-center mt-4">
            A simple Ceramic Coating Protection Agreement will be signed before coating application.
          </p>
        </div>
      </section>

      {/* ══════ VALUE MATH ══════ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Math Speaks for Itself</h2>
          <p className="text-zinc-400 text-lg mb-10">Example: Sedan at $165.09/mo</p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 sm:p-10">
            <div className="space-y-4 text-left">
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-zinc-300">12 monthly ceramic-grade details</span>
                <span className="text-zinc-400 font-semibold">$1,981.08</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-zinc-300">Q² Pure EVO 3-Year Ceramic Coating</span>
                <span className="text-zinc-400 font-semibold">$899.00</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-zinc-300">Priority scheduling & 15% add-on savings</span>
                <span className="text-zinc-400 font-semibold">~$50–100+</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-white font-medium">Total value</span>
                <span className="text-zinc-400 font-bold text-lg line-through">$2,930+</span>
              </div>
              <div className="flex justify-between items-center py-4 bg-amber-500/10 rounded-xl px-4 -mx-4">
                <div>
                  <span className="text-amber-400 font-bold text-lg">You pay</span>
                  <span className="text-zinc-500 block text-sm">$165.09/mo × 12 months</span>
                </div>
                <span className="text-amber-400 font-black text-2xl">$1,981.08</span>
              </div>
            </div>
            <p className="text-center text-amber-400/80 text-sm font-medium mt-6">
              The ceramic coating is completely free — you only pay for the detailing.
            </p>
          </div>

          <Button
            onClick={scrollToForm}
            className="mt-10 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-lg px-10 py-7 rounded-xl shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-400/40 hover:scale-105"
          >
            Book Your Free Inspection <ArrowRight className="size-5 ml-2" />
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

      {/* ══════ WHY PROWORX ══════ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Why ProWorx?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: <ShieldCheck className="size-6" />, title: "GYEON Certified Installer", desc: "Factory-trained and certified to apply GYEON's full ceramic lineup." },
              { icon: <MapPin className="size-6" />, title: "We Come to You", desc: "Professional mobile detailing at your home, office, or wherever you are." },
              { icon: <Star className="size-6" />, title: "5.0 Stars — 63 Reviews", desc: "Perfect five-star rating on Google. Charlotte's most trusted detailer." },
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
      <section className="py-12 sm:py-16 bg-zinc-900/50">
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

      {/* ══════ LEAD FORM ══════ */}
      <section ref={formRef} className="py-16 sm:py-24" id="book">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-gradient-to-br from-amber-500/15 to-zinc-900 border border-amber-500/20 rounded-3xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <Sparkles className="size-10 text-amber-400 mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-black mb-3">
                Book Your Free Paint Inspection
              </h2>
              <p className="text-zinc-300 text-lg max-w-md mx-auto">
                We'll inspect your vehicle, discuss paint correction options, and get your FREE ceramic coating scheduled.
              </p>
            </div>

            {formStatus === "success" ? (
              <div className="text-center py-8">
                <CheckCircle2 className="size-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">We Got Your Info!</h3>
                <p className="text-zinc-300 text-lg mb-2">Charles will reach out within 24 hours to schedule your free paint inspection.</p>
                <p className="text-zinc-400 text-sm">Can't wait? Call us now:</p>
                <a
                  href={PHONE_LINK}
                  onClick={handlePhone}
                  className="inline-flex items-center gap-2 text-amber-400 font-bold text-lg mt-2 hover:text-amber-300 transition-colors"
                >
                  <Phone className="size-5" /> {PHONE}
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1.5">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-zinc-500" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                      className="w-full pl-11 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1.5">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-zinc-500" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                      className="w-full pl-11 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1.5">Email <span className="text-zinc-500">(optional)</span></label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-zinc-500" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      className="w-full pl-11 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Vehicle */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1.5">Vehicle (Year / Make / Model) *</label>
                  <div className="relative">
                    <Car className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-zinc-500" />
                    <input
                      type="text"
                      required
                      value={formData.vehicle}
                      onChange={(e) => setFormData((p) => ({ ...p, vehicle: e.target.value }))}
                      className="w-full pl-11 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50"
                      placeholder="e.g. 2024 BMW X5"
                    />
                  </div>
                </div>

                {/* Vehicle Size */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1.5">Vehicle Size *</label>
                  <div className="relative">
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-5 text-zinc-500 pointer-events-none" />
                    <select
                      required
                      value={formData.vehicleSize}
                      onChange={(e) => setFormData((p) => ({ ...p, vehicleSize: e.target.value }))}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white appearance-none focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50"
                    >
                      <option value="" disabled>Select your vehicle size</option>
                      {VEHICLE_PRICING.map((v) => (
                        <option key={v.size} value={v.size}>
                          {v.size} — {v.monthly}/mo
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1.5">Anything else we should know? <span className="text-zinc-500">(optional)</span></label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 resize-none"
                    placeholder="Paint concerns, preferred schedule, questions..."
                  />
                </div>

                {formStatus === "error" && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
                    <p className="text-red-400 text-sm">Something went wrong. Please call us at {PHONE} or try again.</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-lg py-7 rounded-xl shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-400/40 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                >
                  {formStatus === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="size-5 mr-2" /> Get My Free Ceramic Coating
                    </>
                  )}
                </Button>

                <p className="text-zinc-500 text-xs text-center pt-2">
                  We'll contact you within 24 hours to schedule your free paint inspection. No obligation until you sign the agreement.
                </p>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-zinc-700/50 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-zinc-400">
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
