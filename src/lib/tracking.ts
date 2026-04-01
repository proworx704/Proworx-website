/**
 * Google Ads, GA4, and Meta Pixel conversion tracking utilities.
 *
 * Fires GA4 + Google Ads + Meta Pixel events for key user actions —
 * booking clicks and phone calls.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function fireGtag(eventName: string, params: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

function fireFbq(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", eventName, params);
  }
}

/** Track a phone-number tap / click */
export function trackPhoneClick() {
  fireGtag("phone_call_click", { event_category: "engagement" });
  fireGtag("ads_conversion_Form_1", { event_category: "conversion", event_label: "phone_click" });
  fireFbq("Contact", { content_name: "Phone Call" });
}

/** Track a "Book Now" button click */
export function trackBookNowConversion(destination: string) {
  fireGtag("book_now_click", {
    event_category: "engagement",
    event_label: destination,
    link_url: destination,
  });
  fireGtag("ads_conversion_Form_1", {
    event_category: "conversion",
    event_label: destination,
  });
  fireFbq("Schedule", { content_name: "Book Now", content_category: "Booking" });
}
