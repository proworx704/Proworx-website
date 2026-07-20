import { X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AffirmLogo } from "./AffirmBadge";

/**
 * Single combined promo banner — financing + ceramic membership.
 * Replaces the old stacked AffirmFinancingBanner + SummerShieldBanner.
 * Dismissible per session. Shows above the header on all pages.
 */
export function CombinedPromoBanner() {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem("combined-promo-dismissed") === "1";
    } catch {
      return false;
    }
  });

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem("combined-promo-dismissed", "1");
    } catch {
      /* noop */
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Subtle shimmer overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.04)_50%,transparent_75%)] animate-[shimmer_3s_ease-in-out_infinite]" />

      <div className="container relative">
        <div className="flex items-center justify-center gap-2 sm:gap-5 py-2 px-8 text-center">
          {/* Financing side */}
          <Link
            to="/ceramic-coating#packages"
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium hover:opacity-80 transition-opacity group"
          >
            <span className="text-blue-300">💳</span>
            <span className="hidden sm:inline text-white/90">Finance with</span>
            <span className="sm:hidden text-white/90">Pay with</span>
            <AffirmLogo className="h-3.5 sm:h-4 text-white" />
          </Link>

          {/* Divider */}
          <span className="text-white/20 text-xs sm:text-sm select-none">|</span>

          {/* Ceramic promo side */}
          <Link
            to="/ceramic-promo"
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium hover:opacity-80 transition-opacity group"
          >
            <span className="text-amber-400">🛡️</span>
            <span className="hidden sm:inline text-white/90">
              FREE Ceramic Coating{" "}
              <span className="text-amber-400 font-semibold">($899 value)</span>{" "}
              w/ Membership
            </span>
            <span className="sm:hidden text-white/90">
              FREE Ceramic{" "}
              <span className="text-amber-400 font-semibold">$899</span>{" "}
              w/ Membership
            </span>
          </Link>
        </div>
      </div>

      {/* Dismiss button */}
      <button
        type="button"
        onClick={handleDismiss}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 min-w-[36px] min-h-[36px] flex items-center justify-center text-white/40 hover:text-white transition-colors rounded-full hover:bg-white/10"
        aria-label="Dismiss banner"
      >
        <X className="size-3.5" />
      </button>
    </div>
  );
}
