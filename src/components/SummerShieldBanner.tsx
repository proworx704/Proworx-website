import { Sparkles, X } from "lucide-react";
import { useState } from "react";

/**
 * 4th of July promo banner — replaces Summer Shield banner.
 * Links to the promo landing page on the booking app.
 */
export function SummerShieldBanner() {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem("july4th-banner-dismissed") === "1";
    } catch {
      return false;
    }
  });

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem("july4th-banner-dismissed", "1");
    } catch {
      /* noop */
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-red-600 via-blue-700 to-red-600 text-white overflow-hidden">
      {/* Subtle shimmer overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] animate-[shimmer_3s_ease-in-out_infinite]" />

      <div className="container relative">
        <div className="flex items-center justify-center gap-3 py-2.5 px-8 text-center">
          <Sparkles className="size-4 shrink-0 hidden sm:block" />
          <p className="text-sm font-semibold tracking-wide">
            <span className="hidden sm:inline">🇺🇸 Red, White, &amp; SHINE — </span>
            <span className="sm:hidden">🇺🇸 4th of July — </span>
            <span className="underline underline-offset-2 decoration-white/60">
              4th of July Specials
            </span>
            {" "}
            <span className="hidden sm:inline">— Save up to</span>
            <span className="sm:hidden">| Up to</span>
            {" "}
            <span className="bg-white/20 px-1.5 py-0.5 rounded font-mono text-xs tracking-widest">$300 OFF</span>
            <span className="mx-1 hidden sm:inline">·</span>
            <span className="hidden sm:inline text-white/80 text-xs">Through July 31</span>
            <span className="mx-2 hidden sm:inline">|</span>
            <a
              href="https://book.proworxdetailing.com/july4th"
              className="inline-flex items-center gap-1 ml-2 sm:ml-0 px-3 py-0.5 bg-white text-red-700 font-bold text-xs rounded-full hover:bg-red-50 transition-colors uppercase tracking-wider"
            >
              View Offers
            </a>
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
