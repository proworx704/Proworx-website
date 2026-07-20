import { useEffect, useRef } from "react";

declare global {
  interface Window {
    affirm?: {
      ui: {
        refresh: () => void;
        ready: (cb: () => void) => void;
      };
    };
  }
}

interface AffirmMonthlyEstimateProps {
  /** Price in dollars (e.g. 499 for $499) */
  amount: number;
  /** Optional extra CSS classes */
  className?: string;
  /** Page type hint for Affirm (default: "product") */
  pageType?: "product" | "category" | "cart" | "payment" | "banner";
}

/**
 * Renders Affirm's promotional "as low as $X/mo" messaging.
 * Requires affirm.js to be loaded in index.html.
 */
export function AffirmMonthlyEstimate({
  amount,
  className = "",
  pageType = "product",
}: AffirmMonthlyEstimateProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Affirm expects amount in cents
    if (ref.current) {
      ref.current.setAttribute("data-amount", String(amount * 100));
      ref.current.setAttribute("data-page-type", pageType);
    }
    // Refresh Affirm UI to render the promo messaging
    try {
      if (window.affirm?.ui?.refresh) {
        window.affirm.ui.refresh();
      }
    } catch {
      /* affirm not loaded yet — will render on next refresh */
    }
  }, [amount, pageType]);

  return (
    <p
      ref={ref}
      className={`affirm-as-low-as ${className}`}
      data-amount={amount * 100}
      data-page-type={pageType}
    />
  );
}
