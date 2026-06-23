/**
 * Google Ads, GA4, and Meta Pixel conversion tracking utilities.
 *
 * Fires GA4 + Google Ads + Meta Pixel events for key user actions —
 * booking clicks, phone calls, membership subscribes, and page views.
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

/**
 * Track a membership "Subscribe Now" button click.
 * Fires Meta Pixel `Lead` event — the primary conversion signal for membership campaigns.
 */
export function trackSubscribeClick(planName: string, url: string) {
  fireGtag("subscribe_click", {
    event_category: "conversion",
    event_label: planName,
    link_url: url,
  });
  fireGtag("ads_conversion_Form_1", {
    event_category: "conversion",
    event_label: `subscribe_${planName}`,
  });
  fireFbq("Lead", {
    content_name: planName,
    content_category: "Membership",
    value: 0,
    currency: "USD",
  });
}

/**
 * Track a ceramic coating deposit / booking click.
 * Fires Meta Pixel `InitiateCheckout` — signals high-intent conversion.
 */
export function trackCeramicDepositClick(tier: string, url: string) {
  fireGtag("ceramic_deposit_click", {
    event_category: "conversion",
    event_label: tier,
    link_url: url,
  });
  fireFbq("InitiateCheckout", {
    content_name: tier,
    content_category: "Ceramic Coating",
    value: 0,
    currency: "USD",
  });
}

/**
 * Track a key service page view.
 * Fires Meta Pixel `ViewContent` — gives Meta a softer signal about interested visitors.
 */
export function trackViewContent(contentName: string, contentCategory: string) {
  fireGtag("view_content", {
    event_category: "engagement",
    event_label: contentName,
  });
  fireFbq("ViewContent", {
    content_name: contentName,
    content_category: contentCategory,
  });
}
