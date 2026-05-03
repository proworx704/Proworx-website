import { Shield, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Summer Shield ceramic coating promo banner.
 * Sits below the Mother's Day PromoBanner.
 */
export function SummerShieldBanner() {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem("shield-banner-dismissed") === "1";
    } catch {
      return false;
    }
  });

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem("shield-banner-dismissed", "1");
    } catch {
      /* noop */
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700 text-white overflow-hidden">
      {/* Subtle shimmer overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] animate-[shimmer_3s_ease-in-out_infinite]" />

      <div className="container relative">
        <div className="flex items-center justify-center gap-3 py-2.5 px-8 text-center">
          <Shield className="size-4 shrink-0 hidden sm:block" />
          <p className="text-sm font-semibold tracking-wide">
            <span className="hidden sm:inline">🛡️ Summer Shield Special — </span>
            <span className="sm:hidden">🛡️ Summer Shield — </span>
            <span className="underline underline-offset-2 decoration-white/60">
              Save up to $300 on Ceramic Coating
            </span>
            {" "}
            <span className="hidden sm:inline">— Starting at</span>
            <span className="sm:hidden">| From</span>
            {" "}
            <span className="bg-white/20 px-1.5 py-0.5 rounded font-mono text-xs tracking-widest">$399</span>
            <span className="mx-1 hidden sm:inline">·</span>
            <span className="hidden sm:inline text-white/80 text-xs">Ends May 31</span>
            <span className="mx-2 hidden sm:inline">|</span>
            <Link
              to="/summer-shield"
              className="inline-flex items-center gap-1 ml-2 sm:ml-0 px-3 py-0.5 bg-white text-blue-700 font-bold text-xs rounded-full hover:bg-blue-50 transition-colors uppercase tracking-wider"
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
