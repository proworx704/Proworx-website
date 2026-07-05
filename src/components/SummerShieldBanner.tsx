import { ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Ceramic coating membership promo banner — sits above the top bar.
 * Links to the ceramic promo landing page.
 */
export function SummerShieldBanner() {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem("ceramic-promo-banner-dismissed") === "1";
    } catch {
      return false;
    }
  });

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem("ceramic-promo-banner-dismissed", "1");
    } catch {
      /* noop */
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 text-white overflow-hidden">
      {/* Subtle shimmer overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.12)_50%,transparent_75%)] animate-[shimmer_3s_ease-in-out_infinite]" />

      <div className="container relative">
        <div className="flex items-center justify-center gap-3 py-2.5 px-8 text-center">
          <ShieldCheck className="size-4 shrink-0 hidden sm:block" />
          <p className="text-sm font-semibold tracking-wide">
            <span className="hidden sm:inline">🛡️ FREE Ceramic Coating — </span>
            <span className="sm:hidden">🛡️ FREE Ceramic — </span>
            <span className="underline underline-offset-2 decoration-white/60">
              $899 Value Included
            </span>
            {" "}
            <span className="hidden sm:inline">with any Maintenance Membership</span>
            <span className="sm:hidden">w/ Membership</span>
            <span className="mx-2 hidden sm:inline">|</span>
            <Link
              to="/ceramic-promo"
              className="inline-flex items-center gap-1 ml-2 sm:ml-0 px-4 py-1.5 min-h-[44px] bg-white text-amber-800 font-bold text-xs rounded-full hover:bg-amber-50 transition-colors uppercase tracking-wider"
            >
              Learn More
            </Link>
          </p>
        </div>
      </div>

      {/* Dismiss button */}
      <button
        type="button"
        onClick={handleDismiss}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 min-w-[36px] min-h-[36px] flex items-center justify-center text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
        aria-label="Dismiss promotion"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}
