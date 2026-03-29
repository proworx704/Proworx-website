import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { useSiteConfig } from "@/hooks/useCms";

export function ContactPage() {
  const { config } = useSiteConfig();
  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Contact Us"
        description="Contact ProWorx Mobile Detailing in Charlotte, NC. Call (980) 272-1903 or email detailing@proworxdetailing.com. Mon-Fri 9:30AM-6PM, Sat 9:30AM-3PM."
        keywords="contact ProWorx detailing, auto detailing phone Charlotte, mobile detailing appointment, car detailing contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" },
            { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.proworxdetailing.com/contact" }
          ]
        }}
      />
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              <span className="text-gradient-gold">Contact</span> ProWorx Detailing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ready to get your vehicle detailed? Reach out to us — we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <a href={config.phoneLink} className="rounded-2xl bg-card border border-border p-7 text-center hover:border-gold/30 transition-colors group">
              <div className="size-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <Phone className="size-6" />
              </div>
              <h2 className="font-bold text-lg mb-1">Phone</h2>
              <p className="text-gold font-medium">{config.phone}</p>
            </a>
            <a href={`mailto:${config.email}`} className="rounded-2xl bg-card border border-border p-7 text-center hover:border-gold/30 transition-colors group">
              <div className="size-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <Mail className="size-6" />
              </div>
              <h2 className="font-bold text-lg mb-1">Email</h2>
              <p className="text-gold font-medium text-sm">{config.email}</p>
            </a>
            <div className="rounded-2xl bg-card border border-border p-7 text-center">
              <div className="size-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mx-auto mb-4">
                <MapPin className="size-6" />
              </div>
              <h2 className="font-bold text-lg mb-1">Location</h2>
              <p className="text-muted-foreground text-sm">{config.address}</p>
              <p className="text-xs text-muted-foreground mt-1">(Mobile — We come to you!)</p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-7 text-center">
              <div className="size-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mx-auto mb-4">
                <Clock className="size-6" />
              </div>
              <h2 className="font-bold text-lg mb-1">Hours</h2>
              <div className="text-muted-foreground text-sm space-y-0.5">
                <p>Mon - Fri: 9:30 AM - 6:00 PM</p>
                <p>Sat: 9:30 AM - 3:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-center">Our Service Area</h2>
            <div className="rounded-2xl overflow-hidden border border-border aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208877.13968937186!2d-80.97559233671875!3d35.10396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a01ed6a14da3%3A0x8b68ac51e10fbf87!2sProWorx%20Mobile%20Detailing%20L.L.C.!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ProWorx Detailing service area map"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
