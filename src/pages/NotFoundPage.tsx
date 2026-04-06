import { ArrowRight, Home, Phone, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Browse our auto detailing services or contact ProWorx Detailing in Charlotte, NC."
      />
      <section className="flex-1 flex items-center justify-center py-20 md:py-32">
        <div className="container text-center max-w-2xl mx-auto">
          <p className="text-8xl md:text-9xl font-black text-gold/20 mb-2 select-none">404</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Page Not Found</h1>
          <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold" asChild>
              <Link to="/"><Home className="size-4" /> Back to Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/services"><Search className="size-4" /> Browse Services</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:+19802721903"><Phone className="size-4" /> Call Us</a>
            </Button>
          </div>
          <div className="mt-14 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {[
                { label: "Services & Pricing", to: "/services" },
                { label: "Ceramic Coating", to: "/ceramic-coating" },
                { label: "Paint Correction", to: "/paint-correction" },
                { label: "Maintenance Plans", to: "/maintenance" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-gold hover:underline flex items-center gap-1">
                  {link.label} <ArrowRight className="size-3" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
