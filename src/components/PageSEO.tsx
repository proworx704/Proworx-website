import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  schema?: Record<string, unknown>;
}

const BASE_URL = "https://proworxdetailing.com";

export function PageSEO({ title, description, keywords, ogImage, schema }: PageSEOProps) {
  const { pathname } = useLocation();
  const url = `${BASE_URL}${pathname === "/" ? "/" : pathname}`;
  const image = ogImage || `${BASE_URL}/images/og-cover.jpg`;
  const fullTitle = pathname === "/" ? title : `${title} | ProWorx Detailing`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Page-specific structured data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
