import { X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AffirmLogo } from "./AffirmBadge";

/**
 * Top-of-site banner announcing Affirm financing availability.
 * Dismissible per session. Shows above the header on all pages.
 */
export function AffirmFinancingBanner() {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem("affirm-banner-dismissed") === "1";
    } catch {
      return false;
    }
  });

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem("affirm-banner-dismissed", "1");
    } catch {
      /* noop */
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white overflow-hidden">
      {/* Subtle shimmer overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] animate-[shimmer_3s_ease-in-out_infinite]" />

      <div className="container relative">
        <div className="flex items-center justify-center gap-3 py-2.5 px-8 text-center">
          <p className="text-sm font-semibold tracking-wide flex items-center gap-2 flex-wrap justify-center">
            <span className="hidden sm:inline">💳 We Now Offer Financing with</span>
            <span className="sm:hidden">💳 Financing with</span>
            <AffirmLogo className="h-4 text-white inline-block" />
            <span className="hidden sm:inline">— Pay Over Time with Easy Monthly Payments</span>
            <span className="sm:hidden">— Pay Over Time</span>
            <Link
              to="/ceramic-coating#packages"
              className="inline-flex items-center gap-1 ml-2 px-4 py-1.5 min-h-[44px] bg-white text-blue-700 font-bold text-xs rounded-full hover:bg-blue-50 transition-colors uppercase tracking-wider"
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
        aria-label="Dismiss financing banner"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}
