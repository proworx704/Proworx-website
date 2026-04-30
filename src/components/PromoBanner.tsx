import { Gift, X } from "lucide-react";
import { useState } from "react";
import { GIFT_CARDS_URL } from "@/lib/constants";

/**
 * Sitewide promotional banner — sits above the top bar.
 * Set `hidden` in localStorage so it stays dismissed for the session.
 */
export function PromoBanner() {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem("promo-banner-dismissed") === "1";
    } catch {
      return false;
    }
  });

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem("promo-banner-dismissed", "1");
    } catch {
      /* noop */
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 text-white overflow-hidden">
      {/* Subtle shimmer overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] animate-[shimmer_3s_ease-in-out_infinite]" />

      <div className="container relative">
        <div className="flex items-center justify-center gap-3 py-2.5 px-8 text-center">
          <Gift className="size-4 shrink-0 hidden sm:block" />
          <p className="text-sm font-semibold tracking-wide">
            <span className="hidden sm:inline">🌸 Mother&rsquo;s Day Special — </span>
            <span className="sm:hidden">🌸 Mother&rsquo;s Day — </span>
            <span className="underline underline-offset-2 decoration-white/60">
              15% OFF Gift Cards
            </span>
            {" "}
            <span className="hidden sm:inline">— Use code</span>
            <span className="sm:hidden">| Code</span>
            {" "}
            <span className="bg-white/20 px-1.5 py-0.5 rounded font-mono text-xs tracking-widest">MOTHER15</span>
            <span className="mx-2 hidden sm:inline">|</span>
            <a
              href={GIFT_CARDS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 ml-2 sm:ml-0 px-3 py-0.5 bg-white text-pink-700 font-bold text-xs rounded-full hover:bg-pink-50 transition-colors uppercase tracking-wider"
            >
              Shop Now
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
