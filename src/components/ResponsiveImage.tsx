/**
 * ResponsiveImage — serves WebP at responsive widths with JPG/PNG fallback.
 *
 * For any image at `/images/foo.jpg`, it expects these files to exist:
 *   /images/foo-640w.webp
 *   /images/foo-960w.webp
 *   /images/foo-1200w.webp
 *
 * Usage:
 *   <ResponsiveImage src="/images/porsche-van.jpg" alt="ProWorx van" className="w-full rounded-xl" />
 */
interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
}

export function ResponsiveImage({ src, alt, sizes, priority, width = 1200, height = 800, ...rest }: ResponsiveImageProps) {
  // Derive the base name and extension
  const lastDot = src.lastIndexOf(".");
  if (lastDot === -1) return <img src={src} alt={alt} width={width} height={height} {...rest} />;

  const base = src.slice(0, lastDot);
  const ext = src.slice(lastDot + 1);

  // Only generate srcSet for jpg/png images that have WebP variants
  const hasWebP = ext === "jpg" || ext === "jpeg" || ext === "png";
  if (!hasWebP) return <img src={src} alt={alt} width={width} height={height} loading={priority ? "eager" : "lazy"} decoding="async" {...rest} />;

  const webpSrcSet = `${base}-640w.webp 640w, ${base}-960w.webp 960w, ${base}-1200w.webp 1200w`;
  const defaultSizes = sizes || "(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw";

  return (
    <picture>
      <source type="image/webp" srcSet={webpSrcSet} sizes={defaultSizes} />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : undefined}
        {...rest}
      />
    </picture>
  );
}
