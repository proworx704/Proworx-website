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
  giftCardsUrl: "https://app.squareup.com/gift/KAXAX104TMA6W/order",
  bookingUrl: "https://book.proworxdetailing.com/book",
  ceramicDepositUrl: "https://square.link/u/NwnNJRm7",
  ceramicDeposit1yr: "",
  ceramicDeposit3yr: "",
  ceramicDeposit10yr: "",
  wisetackUrl: "https://www.wisetack.com/",
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
  "widgetUrl:header-book-now": "https://book.squareup.com/appointments/3462dsfn0cvfuh/location/9VRKFJAZZM3HG/services",
  "widgetUrl:homepage-cta": "https://book.squareup.com/appointments/3462dsfn0cvfuh/location/9VRKFJAZZM3HG/services",
  "widgetUrl:paint-correction-cta": "https://book.squareup.com/appointments/14i1e4shwem0qb/location/9VRKFJAZZM3HG/services",
  "widgetUrl:boat-detail-cta": "https://book.squareup.com/appointments/taxsipsy7h9n8x/location/9VRKFJAZZM3HG/services",
  "widgetUrl:maintenance-booking": "https://book.squareup.com/appointments/k9hzdqnwzz6xit/location/9VRKFJAZZM3HG/services",
  // Boat widget URLs
  "widgetUrl:basic-boat-wash": "https://book.squareup.com/appointments/taxsipsy7h9n8x/location/9VRKFJAZZM3HG/services",
  "widgetUrl:interior-boat-detail": "https://book.squareup.com/appointments/0h1h4064nn0qpr/location/9VRKFJAZZM3HG/services",
  "widgetUrl:full-boat-detail": "https://book.squareup.com/appointments/jsboaz4gfhd8xt/location/9VRKFJAZZM3HG/services",
  "widgetUrl:exterior-boat-detail": "https://book.squareup.com/appointments/jtklllya08a78z/location/9VRKFJAZZM3HG",
  "widgetUrl:boat-oxidation": "https://book.squareup.com/appointments/jtklllya08a78z/location/9VRKFJAZZM3HG",
  "widgetUrl:boat-ceramic-2yr": "https://book.squareup.com/appointments/8n6fmuooxsb1j9/location/9VRKFJAZZM3HG/services",
  "widgetUrl:boat-ceramic-5yr": "https://book.squareup.com/appointments/pvjjsw3dcl7yjj/location/9VRKFJAZZM3HG/services",
  // Membership widget URLs
  "widgetUrl:membership-exterior": "https://book.squareup.com/appointments/k9hzdqnwzz6xit/location/9VRKFJAZZM3HG/services",
  "widgetUrl:membership-interior": "https://book.squareup.com/appointments/pfgwty61hdrtyg/location/9VRKFJAZZM3HG/services",
  "widgetUrl:membership-full": "https://book.squareup.com/appointments/a7at1x9xg9nqij/location/9VRKFJAZZM3HG/services",
  // Membership subscribe/checkout URLs (yearly subscription links)
  "subscribeUrl:membership-exterior": "https://square.link/u/CP1LxyXc",
  "subscribeUrl:membership-interior": "https://square.link/u/ZIRVEmaf",
  "subscribeUrl:membership-full": "https://square.link/u/kuw5LL99",
  "subscribeUrl:membership-ceramic-exterior": "https://square.link/u/VWcJFh5r",
  "subscribeUrl:membership-ceramic-io": "https://square.link/u/wyQAUVPr",
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
