import { Link } from "react-router-dom";

/**
 * Smart booking link — if a custom URL is set, opens externally;
 * otherwise links to the internal /book page with the Square widget.
 */
export function BookNowLink({
  href,
  children,
  className,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
}) {
  // If a custom URL is provided, open it externally
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  // Default: link to internal /book page
  return (
    <Link to="/book" className={className}>
      {children}
    </Link>
  );
}
