import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSiteConfig } from "@/hooks/useCms";
import { Button } from "./ui/button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Ceramic Coating", href: "/ceramic-coating" },
  { label: "Paint Correction", href: "/paint-correction" },
  { label: "Boat Detailing", href: "/boat-detailing" },
  { label: "Fleet Detailing", href: "/fleet" },
  { label: "Maintenance", href: "/maintenance" },
  { label: "Areas We Serve", href: "/areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { config } = useSiteConfig();

  return (
    <>
      {/* Skip navigation link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-gold-foreground focus:rounded-md focus:font-semibold focus:text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
      >
        Skip to main content
      </a>

      {/* Top bar with phone */}
      <div className="bg-gold/10 border-b border-gold/20">
        <div className="container">
          <div className="flex h-10 items-center justify-between text-sm">
            <span className="text-muted-foreground hidden sm:inline">
              Serving Charlotte, NC &amp; Surrounding Areas
            </span>
            <a
              href={config.phoneLink}
              className="flex items-center gap-1.5 text-gold font-medium hover:text-gold/80 transition-colors ml-auto sm:ml-0"
            >
              <Phone className="size-3.5" />
              {config.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 font-bold text-xl hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/logo-horizontal.png"
                alt={`${config.appName} — premium mobile auto detailing in Charlotte, NC`}
                width={121}
                height={36}
                className="h-9 w-auto hidden sm:block"
              />
              <img
                src="/images/logo-icon.png"
                alt={`${config.appName} logo`}
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg sm:hidden"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.href
                      ? "text-gold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                className="bg-gold text-gold-foreground hover:bg-gold/90 font-semibold"
                asChild
              >
                <a href="https://book.proworxdetailing.com/book" target="_blank" rel="noopener noreferrer">
                  Book Now<span className="sr-only"> (opens in new tab)</span>
                </a>
              </Button>
              <button
                type="button"
                className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="container py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.href
                      ? "text-gold bg-gold/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 px-3">
                <a
                  href={config.phoneLink}
                  className="flex items-center gap-2 text-gold font-medium"
                >
                  <Phone className="size-4" />
                  {config.phone}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
