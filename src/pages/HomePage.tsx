import {
  Anchor,
  ArrowRight,
  Award,
  Car,
  CheckCircle2,
  Clock,
  Droplets,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookNowLink } from "@/components/BookNowLink";
import { CmsImg } from "@/components/CmsImg";
import { useSiteConfig } from "@/hooks/useCms";
import { PageSEO } from "@/components/PageSEO";

const SERVICES = [
  {
    icon: <Car className="size-6" />,
    title: "Full Detail Packages",
    description: "Interior and exterior detailing tailored to your vehicle. From basic maintenance washes to comprehensive full details.",
    href: "/services",
    image: "/images/ferrari-van.jpg",
    slot: "card-full-detail",
    imageAlt: "ProWorx van on-site with Ferrari during full detail service",
  },
  {
    icon: <Sparkles className="size-6" />,
    title: "Paint Correction",
    description: "Remove swirl marks, scratches, and oxidation. Restore your vehicle's paint to a flawless, showroom finish.",
    href: "/paint-correction",
    image: "/images/corvette-rear.jpg",
    slot: "card-paint",
    imageAlt: "Corvette rear showing mirror finish after paint correction by ProWorx",
  },
  {
    icon: <Shield className="size-6" />,
    title: "Ceramic Coating",
    description: "Gyeon & IGL certified ceramic coating installation. Years of protection with a brilliant, hydrophobic finish.",
    href: "/ceramic-coating",
    image: "/images/escalade-rear.jpg",
    slot: "card-ceramic",
    imageAlt: "Cadillac Escalade with ceramic coating showing deep gloss and reflections",
  },
  {
    icon: <Droplets className="size-6" />,
    title: "Maintenance Plans",
    description: "Keep your vehicle looking its best year-round with our monthly detailing membership program.",
    href: "/services#memberships",
    image: "/images/rangerover-front.jpg",
    slot: "card-exterior",
    imageAlt: "Range Rover freshly detailed by ProWorx maintenance plan",
  },
  {
    icon: <Truck className="size-6" />,
    title: "Fleet Detailing",
    description: "Professional fleet detailing services with volume pricing. Keep your business vehicles looking sharp.",
    href: "/fleet",
    image: "/images/fleet-real.jpg",
    slot: "card-fleet",
    imageAlt: "ProWorx detailing a fleet vehicle on-site at a business location",
  },
  {
    icon: <Anchor className="size-6" />,
    title: "Boat Detailing",
    description: "Expert marine detailing for boats of all sizes. Hull cleaning, oxidation removal, and ceramic protection for the water.",
    href: "/boat-detailing",
    image: "/images/boat-exterior.webp",
    slot: "card-boat",
    imageAlt: "Freshly detailed boat exterior by ProWorx marine detailing",
  },
  {
    icon: <Award className="size-6" />,
    title: "Gift Cards",
    description: "Give the gift of a professional detail. Perfect for birthdays, holidays, or any occasion.",
    href: "__giftcards__",
    external: true,
    image: "/images/aston-front.jpg",
    slot: "card-ceramic-why",
    imageAlt: "Aston Martin detailed by ProWorx — perfect gift card option",
  },
];

const REVIEWS = [
  {
    name: "Jordin Thompson",
    text: "Karen was absolutely amazing! The interior of my car was in rough shape and it now looks immaculate! There were several deep stains from my toddler's various milk spills and fruit pouch mishaps and those are all gone now! Would absolutely recommend ProWorx!",
  },
  {
    name: "Corey Wilde",
    text: "Tyler and his team are best in class. They service all our vehicles (including an old classic) with such care and professionalism. He's always punctual for appointments and very up front on pricing and service options.",
  },
  {
    name: "Misti McGaha",
    text: "On time, great attention to detail and excellent customer service! I feel like I have a new car! Highly recommend!",
  },
  {
    name: "Frank Tatum",
    text: "Great job on 2019 Volvo. Looks like new inside and outside. Great experience.",
  },
  {
    name: "John",
    text: "Been using Tyler's detail membership service for a few years now. Tyler details both of my cars each month. Excellent attention to detail as you would expect. Highly recommend!",
  },
  {
    name: "Satisfied Customer",
    text: "Tyler was great! Very professional and did excellent work for a very fair price. Couldn't be happier.",
  },
];

const AREAS = [
  "Charlotte", "Waxhaw", "Matthews", "Indian Trail", "Mint Hill",
  "Pineville", "Ballantyne", "Monroe", "Fort Mill, SC", "Huntersville",
];

export function HomePage() {
  const { config } = useSiteConfig();

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="ProWorx Detailing | Mobile Auto Detailing Charlotte NC"
        description="Premium mobile auto detailing, paint correction & ceramic coating in Charlotte, NC. 5-star rated. Gyeon & IGL certified. We come to you! (980) 272-1903"
        keywords="mobile detailing Charlotte NC, paint correction Charlotte, ceramic coating Charlotte NC, auto detailing Waxhaw NC, car detailing near me, mobile car wash Charlotte"
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.proworxdetailing.com/" }
          ]
        }}
      />
      {/* ─── HERO with background image ─── */}
      <section className="relative flex items-center min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg
            slot="homepage-hero"
            fallback="/images/escalade-front.jpg"
            alt="Cadillac Escalade under hex lights after ceramic coating by ProWorx Detailing"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6 backdrop-blur-sm">
              <Star className="size-3.5 fill-gold" />
              5.0 Stars — 52 Google Reviews
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
              Premium Mobile{" "}
              <span className="text-gradient-gold">Auto Detailing</span>{" "}
              <span className="text-muted-foreground">&amp;</span>{" "}
              <span className="text-gradient-gold">Ceramic Coating</span>{" "}
              <br className="hidden md:block" />
              in Charlotte, NC
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
              Charlotte's trusted mobile detailing experts. Gyeon &amp; IGL certified.
              We bring the detail shop to you — 12+ years of experience
              and over 50 five-star reviews.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <BookNowLink href={config["widgetUrl:homepage-cta"] || config.bookingUrlHomeCta || undefined}>
                  Build Your Detail Package <ArrowRight className="size-5" />
                </BookNowLink>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> Call {config.phone}</a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {["We Come to You", "Gyeon & IGL Certified", "Eco-Friendly Products", "12+ Years Experience"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-gold" /><span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT SECTION with image ─── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <CmsImg
                slot="homepage-about"
                fallback="/images/porsche-van.jpg"
                alt="ProWorx Detailing van on-site with Porsche Cayenne Turbo GT"
                className="rounded-2xl w-full aspect-[4/3] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gold text-gold-foreground px-6 py-3 rounded-xl font-bold text-lg shadow-lg">
                12+ Years Experience
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">About ProWorx</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Unparalleled Excellence in Auto Detailing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Welcome to ProWorx Detailing — your premier choice for auto detailing excellence in Charlotte, NC! We take pride in providing top-notch automotive care, specializing in a range of services tailored to meet your vehicle's unique needs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide meticulous mobile detailing, advanced paint correction, and flawless installation of premium ceramic coatings such as Gyeon and IGL. As certified installers, we ensure your vehicle receives the best protection and lasting shine.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "World Class Service", desc: "Friendly & convenient from start to finish" },
                  { label: "Quality & Experience", desc: "Years of passion delivering superior results" },
                  { label: "Superior Products", desc: "Top-rated, handpicked product arsenal" },
                  { label: "Anchored on Trust", desc: "Above and beyond your desired service" },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-xl bg-card border border-border">
                    <h3 className="font-bold text-sm mb-1">{item.label}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES with images ─── */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Our Services</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Professional Detailing Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From maintenance washes to full ceramic coating installations — we offer a complete range of detailing services for every vehicle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {SERVICES.map((service) => {
              const href = service.href === "__giftcards__" ? config.giftCardsUrl : service.href;
              const inner = (
                <div className="group relative overflow-hidden rounded-2xl bg-card border border-border transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <CmsImg
                      slot={service.slot}
                      fallback={service.image}
                      alt={service.imageAlt || service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 size-10 rounded-lg bg-gold/20 backdrop-blur-sm flex items-center justify-center text-gold">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{service.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More <ArrowRight className="size-3.5" />
                    </div>
                  </div>
                </div>
              );
              return service.external ? (
                <a key={service.title} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${service.title} (opens in new tab)`}>{inner}</a>
              ) : (
                <Link key={service.title} to={href}>{inner}</Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FLEET DETAILING ─── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Fleet Services</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Professional <span className="text-gradient-gold">Fleet Detailing</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Keep your company vehicles looking professional and representing your brand well. We offer volume pricing for businesses with fleets of any size — from a handful of sales cars to full delivery fleets.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our mobile setup means zero downtime for your business. We come to your lot and detail vehicles on-site, including full interior cleaning, exterior washing, and protective coatings.
              </p>
              <ul className="space-y-2 mb-8">
                {["On-site mobile service — no fleet downtime", "Volume pricing for recurring schedules", "Interior & exterior detail packages", "Custom plans tailored to your business"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold" asChild>
                  <Link to="/fleet">
                    Learn About Fleet Pricing <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10" asChild>
                  <a href={config.phoneLink}><Phone className="size-4" /> {config.phone}</a>
                </Button>
              </div>
            </div>
            <div className="space-y-5">
              <CmsImg
                slot="homepage-fleet"
                fallback="/images/fleet-real.jpg"
                alt="Fleet vehicle detailed on-site by ProWorx with van in background"
                className="rounded-2xl w-full aspect-[3/2] object-cover shadow-xl"
              />
              <CmsImg
                slot="homepage-interior"
                fallback="/images/vanquish-interior.jpg"
                alt="Aston Martin Vanquish interior detailed by ProWorx — quilted blue leather"
                className="rounded-2xl w-full aspect-[3/2] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── RECENT WORK GALLERY ─── */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Our Work</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Recent Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From exotics to everyday drivers — every vehicle gets the ProWorx treatment.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
            {[
              { slot: "gallery-1", fallback: "/images/corvette-front.jpg", alt: "Black Corvette ZR1 front view showing flawless paint after multi-stage correction by ProWorx", label: "Corvette ZR1" },
              { slot: "gallery-2", fallback: "/images/ferrari-van.jpg", alt: "Red Ferrari Roma parked next to the ProWorx mobile detailing van during on-site service", label: "Ferrari Roma" },
              { slot: "gallery-3", fallback: "/images/vanquish-interior.jpg", alt: "Aston Martin Vanquish quilted leather interior after deep cleaning and conditioning by ProWorx", label: "Aston Martin Interior" },
              { slot: "gallery-4", fallback: "/images/escalade-rear.jpg", alt: "Cadillac Escalade rear showing mirror-like ceramic coating reflections under studio lighting", label: "Escalade Ceramic Coating" },
              { slot: "gallery-5", fallback: "/images/aston-rear.jpg", alt: "Blue Aston Martin rear quarter panel gleaming after full exterior detail by ProWorx", label: "Aston Martin" },
              { slot: "gallery-6", fallback: "/images/rangerover-front.jpg", alt: "White Range Rover Sport front view with showroom-quality finish after ProWorx full detail", label: "Range Rover Sport" },
              { slot: "gallery-7", fallback: "/images/tesla-bay.jpg", alt: "Tesla Model S in the ProWorx detailing bay prepped for paint correction under bright work lights", label: "Tesla Model S" },
              { slot: "gallery-8", fallback: "/images/rangerover-interior.jpg", alt: "Range Rover pristine white leather interior after thorough cleaning and protection by ProWorx", label: "Range Rover Interior" },
              { slot: "gallery-9", fallback: "/images/mobile-tent.jpg", alt: "ProWorx inflatable detailing tent set up at a customer location for professional mobile service", label: "Mobile Setup" },
            ].map((photo, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl aspect-[4/3]">
                <CmsImg slot={photo.slot} fallback={photo.fallback} alt={photo.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-semibold">{photo.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Why ProWorx</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Charlotte's Trusted Detailing Experts</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {[
              { icon: <Truck className="size-8" />, label: "Mobile Service", sub: "We Come to You" },
              { icon: <Award className="size-8" />, label: "Certified", sub: "Gyeon & IGL" },
              { icon: <Clock className="size-8" />, label: "12+ Years", sub: "Experience" },
              { icon: <Star className="size-8" />, label: "5.0 Stars", sub: "52 Google Reviews" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="size-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg">{item.label}</h3>
                <p className="text-muted-foreground text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-5 fill-gold text-gold" />)}
            </div>
            <p className="text-muted-foreground text-lg">5.0 Stars — 52 Reviews on Google</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {REVIEWS.map((review, i) => (
              <div key={i} className="rounded-2xl bg-card border border-border p-6 flex flex-col">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="size-4 fill-gold text-gold" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">Google Review</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AREAS WE SERVE ─── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Service Areas</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Serving Charlotte &amp; Surrounding Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our fully equipped mobile setup comes to your home or office — anywhere in the Charlotte metro area.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-10">
            {AREAS.map((area) => (
              <div key={area} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border text-sm font-medium">
                <MapPin className="size-3.5 text-gold" />{area}
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" className="border-gold/30 text-gold hover:bg-gold/10" asChild>
              <Link to="/areas">View All Service Areas <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CmsImg slot="homepage-cta" fallback="/images/ferrari-profile.jpg" alt="Ferrari Roma side profile with flawless paint finish after professional detailing by ProWorx" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
              Ready for a <span className="text-gradient-gold">Showroom Finish</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Book your mobile detail today and experience the ProWorx difference. We come to you, wherever you are in the Charlotte area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 h-13 px-8 text-base font-bold" asChild>
                <BookNowLink href={config["widgetUrl:homepage-cta"] || config.bookingUrlHomeCta || undefined}>Book Your Detail <ArrowRight className="size-5" /></BookNowLink>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-gold/30 text-gold hover:bg-gold/10" asChild>
                <a href={config.phoneLink}><Phone className="size-5" /> {config.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
