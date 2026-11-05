import { useQuery, useMutation } from "convex/react";
import { useEffect, useRef, useMemo } from "react";
import { api } from "../../convex/_generated/api";

// Default values (fallback when Convex hasn't loaded yet)
const DEFAULTS: Record<string, string> = {
  appName: "ProWorx Detailing",
  phone: "(980) 272-1903",
  phoneLink: "tel:+19802721903",
  email: "detailing@proworxdetailing.com",
  address: "3008 Collaroy Rd, Waxhaw, NC 28173",
  instagramUrl: "https://www.instagram.com/proworxdetailing/",
  facebookUrl: "https://www.facebook.com/proworxdetailing",
  googleBusinessUrl: "https://g.page/proworxdetailing",
  giftCardsUrl: "https://ops.proworxdetailing.com/gift",
  bookingUrl: "https://ops.proworxdetailing.com/schedule",
  ceramicDepositUrl: "https://ops.proworxdetailing.com/schedule",
  ceramicDeposit1yr: "",
  ceramicDeposit3yr: "",
  ceramicDepositInfinite1: "",
  ceramicDepositInfinite2: "",
  // wisetackUrl removed — Affirm financing is now used instead
  // Per-section booking links (empty = use /book page)
  bookingUrlFullDetail: "",
  bookingUrlInterior: "",
  bookingUrlExterior: "",
  bookingUrlAddOns: "",
  bookingUrlPaintCorrection: "",
  bookingUrlHomeCta: "",
  hoursWeekday: "9:30 AM – 6:00 PM",
  hoursSaturday: "9:30 AM – 3:00 PM",
  hoursSunday: "Closed",
  // CTA widget URLs (hardcoded fallbacks for Convex reactive query limits)
  "widgetUrl:header-book-now": "https://ops.proworxdetailing.com/schedule",
  "widgetUrl:homepage-cta": "https://ops.proworxdetailing.com/schedule",
  "widgetUrl:paint-correction-cta": "https://ops.proworxdetailing.com/schedule",
  "widgetUrl:boat-detail-cta": "https://ops.proworxdetailing.com/schedule",
  "widgetUrl:maintenance-booking": "https://ops.proworxdetailing.com/schedule",
  // Boat widget URLs
  "widgetUrl:basic-boat-wash": "https://ops.proworxdetailing.com/schedule",
  "widgetUrl:interior-boat-detail": "https://ops.proworxdetailing.com/schedule",
  "widgetUrl:full-boat-detail": "https://ops.proworxdetailing.com/schedule",
  "widgetUrl:exterior-boat-detail": "https://ops.proworxdetailing.com/schedule",
  // Boat correction tiers (update these once new Square catalog items are live)
  "widgetUrl:boat-1step-polish": "https://ops.proworxdetailing.com/schedule",
  "widgetUrl:boat-2step-correction": "https://ops.proworxdetailing.com/schedule",
  "widgetUrl:boat-multistage-correction": "https://ops.proworxdetailing.com/schedule",
  // Boat ceramic — GYEON Q²R GelCoat (single option, replaces 2yr/5yr)
  "widgetUrl:boat-ceramic-gelcoat": "https://ops.proworxdetailing.com/schedule",
  // Detailing package widget URLs (used by ServicesPage slug-based lookup)
  "widgetUrl:standard-inside-out": "https://ops.proworxdetailing.com/schedule",
  "widgetUrl:elite-inside-out": "https://ops.proworxdetailing.com/schedule",
  "widgetUrl:standard-interior": "https://ops.proworxdetailing.com/schedule",
  "widgetUrl:ceramic-interior": "https://ops.proworxdetailing.com/schedule",
  "widgetUrl:standard-exterior": "https://ops.proworxdetailing.com/schedule",
  "widgetUrl:ceramic-exterior": "https://ops.proworxdetailing.com/schedule",
  // Membership widget URLs
  "widgetUrl:membership-exterior": "https://ops.proworxdetailing.com/schedule",
  "widgetUrl:membership-interior": "https://ops.proworxdetailing.com/schedule",
  "widgetUrl:membership-full": "https://ops.proworxdetailing.com/schedule",
  // Membership subscribe/checkout URLs (yearly subscription links)
  "subscribeUrl:membership-exterior": "https://ops.proworxdetailing.com/schedule/membership",
  "subscribeUrl:membership-interior": "https://ops.proworxdetailing.com/schedule/membership",
  "subscribeUrl:membership-full": "https://ops.proworxdetailing.com/schedule/membership",
  "subscribeUrl:membership-ceramic-exterior": "https://ops.proworxdetailing.com/schedule/membership",
  "subscribeUrl:membership-ceramic-io": "https://ops.proworxdetailing.com/schedule/membership",
};

/**
 * Hook: returns all siteConfig values as a Record<string, string>
 * Auto-seeds on first load if tables are empty.
 */
export function useSiteConfig() {
  const allConfig = useQuery(api.cms.getAllConfig);
  const seed = useMutation(api.cms.checkAndSeed);
  const seeded = useRef(false);

  useEffect(() => {
    if (allConfig !== undefined && allConfig.length === 0 && !seeded.current) {
      seeded.current = true;
      seed().catch(console.error);
    }
  }, [allConfig, seed]);

  // Build config: DEFAULTS first, then CMS values override.
  // Widget URLs that the Convex reactive subscription might miss
  // are in DEFAULTS as hardcoded fallbacks, so CTA buttons always work.
  const config = useMemo(() => {
    const cfg: Record<string, string> = { ...DEFAULTS };
    if (allConfig) {
      for (const item of allConfig) {
        cfg[item.key] = item.value;
      }
    }
    return cfg;
  }, [allConfig]);

  if (allConfig === undefined) {
    return { config: DEFAULTS, isLoading: true };
  }

  return { config, isLoading: false };
}

/**
 * Hook: returns services grouped by category
 */
export function useServices() {
  const allServices = useQuery(api.cms.getAllServices);
  const standardDetail = useQuery(api.cms.getStandardDetail);

  if (allServices === undefined) {
    return { services: null, standardDetail: null, isLoading: true };
  }

  const grouped: Record<string, typeof allServices> = {};
  for (const s of allServices) {
    if (!grouped[s.category]) grouped[s.category] = [];
    grouped[s.category].push(s);
  }
  // Sort each category by order
  for (const cat of Object.keys(grouped)) {
    grouped[cat].sort((a, b) => a.order - b.order);
  }

  return { services: grouped, standardDetail: standardDetail ?? null, isLoading: false };
}

/**
 * Hook: returns the Standard Interior package
 */
export function useStandardInterior() {
  const data = useQuery(api.cms.getStandardInterior);
  return { standardInterior: data ?? null, isLoading: data === undefined };
}

/**
 * Hook: returns the Standard Exterior package
 */
export function useStandardExterior() {
  const data = useQuery(api.cms.getStandardExterior);
  return { standardExterior: data ?? null, isLoading: data === undefined };
}

/**
 * Hook: returns membership plans
 */
export function useMemberships() {
  const memberships = useQuery(api.cms.getMemberships);
  if (memberships === undefined) {
    return { memberships: null, isLoading: true };
  }
  return { memberships, isLoading: false };
}

/**
 * Hook: returns the URL for a photo slot.
 * If a custom photo was uploaded, returns the Convex storage URL.
 * Otherwise falls back to the static path.
 */
export function usePhoto(slot: string, fallbackPath?: string): string {
  const photo = useQuery(api.cms.getPhoto, { slot });
  if (photo?.storageUrl) return photo.storageUrl;
  if (photo?.staticPath) return photo.staticPath;
  return fallbackPath ?? "";
}

/**
 * Hook: returns all photo slots (for admin panel)
 */
export function useAllPhotos() {
  const photos = useQuery(api.cms.getAllPhotos);
  return { photos: photos ?? null, isLoading: photos === undefined };
}
