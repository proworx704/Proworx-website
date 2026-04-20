import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { createContext, useContext, useMemo } from "react";

type PhotoEntry = { url: string; focalY?: number };
type PhotoMap = Record<string, PhotoEntry>;

const PhotoContext = createContext<PhotoMap>({});

/**
 * Wrap your app in this to load all CMS photos once.
 * Child components can use <CmsImg> or usePhotoUrl().
 */
export function PhotoProvider({ children }: { children: React.ReactNode }) {
  const allPhotos = useQuery(api.cms.getAllPhotos);
  
  const photoMap = useMemo(() => {
    const map: PhotoMap = {};
    if (allPhotos) {
      for (const p of allPhotos) {
        map[p.slot] = {
          url: p.storageUrl || p.staticPath,
          focalY: (p as Record<string, unknown>).focalY as number | undefined,
        };
      }
    }
    return map;
  }, [allPhotos]);

  return (
    <PhotoContext.Provider value={photoMap}>
      {children}
    </PhotoContext.Provider>
  );
}

/**
 * Get the URL for a photo slot. Returns custom upload URL if available, else static path.
 */
export function usePhotoUrl(slot: string, fallback: string): string {
  const map = useContext(PhotoContext);
  return map[slot]?.url || fallback;
}

/**
 * Get the focal-Y percentage for a photo slot.
 * Returns the DB value if set, otherwise undefined.
 */
export function usePhotoFocalY(slot: string): number | undefined {
  const map = useContext(PhotoContext);
  return map[slot]?.focalY;
}

/**
 * Build a WebP srcSet string for responsive images.
 * Given "/images/foo.jpg" returns "/images/foo-640w.webp 640w, /images/foo-960w.webp 960w, /images/foo-1200w.webp 1200w"
 * Returns null if the src is a CMS upload URL or non-JPG/PNG.
 */
function buildWebPSrcSet(src: string): string | null {
  // Only local static JPG/PNG images have pre-generated WebP variants
  if (!src.startsWith("/images/")) return null;
  const lastDot = src.lastIndexOf(".");
  if (lastDot === -1) return null;
  const ext = src.slice(lastDot + 1).toLowerCase();
  if (ext !== "jpg" && ext !== "jpeg" && ext !== "png") return null;
  // Skip logos and og-cover — these don't have responsive variants
  if (src.includes("logo-") || src.includes("og-cover")) return null;
  const base = src.slice(0, lastDot);
  return `${base}-640w.webp 640w, ${base}-960w.webp 960w, ${base}-1200w.webp 1200w`;
}

/**
 * Drop-in replacement for <img> that reads from CMS photo slots.
 * Serves responsive WebP with JPG fallback for local images.
 * Applies focal-point cropping via object-position when the image uses object-cover.
 * Includes default width/height (1200×800) to prevent CLS layout shift.
 *
 * Priority: DB focalY > prop focalY > 50% (center)
 *
 * Usage: <CmsImg slot="homepage-hero" fallback="/images/escalade-front.jpg" alt="..." focalY={25} />
 */
export function CmsImg({
  slot,
  fallback,
  loading = "lazy",
  fetchPriority,
  focalY: focalYProp,
  sizes,
  style,
  width = 1200,
  height = 800,
  ...props
}: {
  slot: string;
  fallback: string;
  focalY?: number;
  fetchPriority?: "high" | "low" | "auto";
  sizes?: string;
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "sizes">) {
  const url = usePhotoUrl(slot, fallback);
  const dbFocalY = usePhotoFocalY(slot);
  const focalY = dbFocalY ?? focalYProp ?? 50;
  const webpSrcSet = buildWebPSrcSet(url);
  const imgStyle = { objectPosition: `center ${focalY}%`, ...style };
  const imgSizes = sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

  if (webpSrcSet) {
    return (
      <picture>
        <source type="image/webp" srcSet={webpSrcSet} sizes={imgSizes} />
        <img
          src={url}
          width={width}
          height={height}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding={loading === "eager" ? "sync" : "async"}
          style={imgStyle}
          {...props}
        />
      </picture>
    );
  }

  return (
    <img
      src={url}
      width={width}
      height={height}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding={loading === "eager" ? "sync" : "async"}
      style={imgStyle}
      {...props}
    />
  );
}
