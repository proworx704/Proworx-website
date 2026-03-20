export const APP_NAME = "ProWorx Detailing";
export const PHONE = "(980) 272-1903";
export const PHONE_LINK = "tel:+19802721903";
export const EMAIL = "detailing@proworxdetailing.com";
export const ADDRESS = "4321 Overbecks Ln, Waxhaw, NC 28173";
export const INSTAGRAM_URL = "https://www.instagram.com/proworxdetailing/";
export const FACEBOOK_URL = "https://www.facebook.com/proworxdetailing";
export const GOOGLE_BUSINESS_URL = "https://g.page/proworxdetailing";
export const GIFT_CARDS_URL = "https://app.squareup.com/gift/KAXAX104TMA6W/order";

// Square Online Booking Widget
export const SQUARE_BOOKING_URL = "https://book.squareup.com/appointments/wa9b2qyqjdx71w/location/9VRKFJAZZM3HG";
export const BOOKING_URL = SQUARE_BOOKING_URL;

// Square Payment Links
export const MEMBERSHIP_LINKS = {
  clean: { url: "https://square.link/u/TT4AvMOz", price: 59, name: "Clean" },
  shield: { url: "https://square.link/u/YDKzho6U", price: 99, name: "Shield" },
  armor: { url: "https://square.link/u/Ih4zVYZE", price: 149, name: "Armor" },
};

export const CERAMIC_DEPOSIT_URL = "https://square.link/u/NwnNJRm7";

// Wisetack financing
export const WISETACK_URL = "https://www.wisetack.com/";

// Services from Square Booking — exact pricing
export const SERVICES = {
  // Standard Detail (Inside/out)
  standardDetail: {
    name: "Standard Inside & Out",
    description: "A full-vehicle refresh combining interior and exterior services into one streamlined appointment.",
    price: "Price varies",
    duration: "2 hr 30 min+",
    features: ["All Standard Exterior services", "All Standard Interior services", "Unified final quality inspection"],
  },
  // Interior — Packages (core standalone services)
  interiorPackages: [
    { name: "Pet Hair Removal", description: "Thorough removal of pet hair from carpets and seats.", price: "$80", duration: "1 hr" },
    { name: "Steam Cleaning (Vents, Plastics, Crevices)", description: "High-temp steam sanitizes hard-to-reach areas and freshens vents.", price: "$60", duration: "30 min" },
    { name: "Stain Removal (Targeted)", description: "Specialized treatment for stubborn stains on fabric, carpet, or seats.", price: "$45", duration: "30 min" },
    { name: "Odor/Ozone Treatment", description: "Ozone generator neutralizes odors (smoke, pets, mildew).", price: "$45", duration: "30 min" },
  ],
  // Interior — Add-ons
  interiorAddons: [
    { name: "Plastic & Vinyl UV Protection", description: "Protects dashboards, door panels, and trim with UV-blocking treatment.", price: "$40", duration: "30 min" },
    { name: "Leather Deep Clean & Condition", description: "Cleans and nourishes leather seats/trim to restore suppleness and prevent cracking.", price: "$25", duration: "20 min" },
    { name: "Premium Fragrance", description: "Choose a premium, long-lasting scent.", price: "$20", duration: "5 min" },
  ],
  // For backward compat
  interior: [
    { name: "Pet Hair Removal", description: "Thorough removal of pet hair from carpets and seats.", price: "$80", duration: "1 hr" },
    { name: "Steam Cleaning (Vents, Plastics, Crevices)", description: "High-temp steam sanitizes hard-to-reach areas and freshens vents.", price: "$60", duration: "30 min" },
    { name: "Stain Removal (Targeted)", description: "Specialized treatment for stubborn stains on fabric, carpet, or seats.", price: "$45", duration: "30 min" },
    { name: "Odor/Ozone Treatment", description: "Ozone generator neutralizes odors (smoke, pets, mildew).", price: "$45", duration: "30 min" },
    { name: "Plastic & Vinyl UV Protection", description: "Protects dashboards, door panels, and trim with UV-blocking treatment.", price: "$40", duration: "30 min" },
    { name: "Leather Deep Clean & Condition", description: "Cleans and nourishes leather seats/trim to restore suppleness and prevent cracking.", price: "$25", duration: "20 min" },
    { name: "Premium Fragrance", description: "Choose a premium, long-lasting scent.", price: "$20", duration: "5 min" },
  ],
  // Exterior — Packages (core standalone services)
  exteriorPackages: [
    { name: "Paint Protection", description: "Paint Protection (Short → Long Term)", price: "Price varies", duration: "45 min+" },
    { name: "Engine Bay", description: "Basic degrease & rinse (0.5 hr) or full engine bay detail with dressing (1 hr).", price: "Price varies", duration: "30 min+" },
    { name: "Headlight Restoration + UV Sealant", description: "Removes oxidation, restores clarity.", price: "$80", duration: "1 hr" },
    { name: "Wheel Polishing & Protection", description: "Polishes away oxidation and applies a sealant/ceramic layer for longer-lasting shine.", price: "$80", duration: "1 hr" },
    { name: "Trim Restoration", description: "Revives faded plastics with UV protection.", price: "$80", duration: "30 min" },
  ],
  // Exterior — Add-ons
  exteriorAddons: [
    { name: "Glass Polishing (Spots/Rain/Haze Removal)", description: "Polishes glass to remove water spots, rain marks, and haze.", price: "$80", duration: "30 min" },
    { name: "Iron Decontamination (Wheels)", description: "Chemical treatment to dissolve embedded brake dust and fallout from wheels.", price: "$40", duration: "5 min" },
  ],
  // For backward compat
  exterior: [
    { name: "Paint Protection", description: "Paint Protection (Short → Long Term)", price: "Price varies", duration: "45 min+" },
    { name: "Engine Bay", description: "Basic degrease & rinse (0.5 hr) or full engine bay detail with dressing (1 hr).", price: "Price varies", duration: "30 min+" },
    { name: "Headlight Restoration + UV Sealant", description: "Removes oxidation, restores clarity.", price: "$80", duration: "1 hr" },
    { name: "Wheel Polishing & Protection", description: "Polishes away oxidation and applies a sealant/ceramic layer for longer-lasting shine.", price: "$80", duration: "1 hr" },
    { name: "Trim Restoration", description: "Revives faded plastics with UV protection.", price: "$80", duration: "30 min" },
    { name: "Glass Polishing (Spots/Rain/Haze Removal)", description: "Polishes glass to remove water spots, rain marks, and haze.", price: "$80", duration: "30 min" },
    { name: "Iron Decontamination (Wheels)", description: "Chemical treatment to dissolve embedded brake dust and fallout from wheels.", price: "$40", duration: "5 min" },
  ],
  // Ceramic Add-ons
  ceramicAddons: [
    { name: "Ceramic Tire Dressing", description: "Long-lasting, deep black finish for tires with UV protection.", price: "$20", duration: "30 min" },
    { name: "Convertible Top Fabric Protection", description: "Hydrophobic treatment for convertible tops.", price: "$100", duration: "30 min" },
    { name: "GYEON Leather Shield", description: "Ceramic coating for leather to resist dye transfer, staining, and UV fading.", price: "$60", duration: "20 min" },
    { name: "GYEON View (Windshield Ceramic – 12+ mo)", description: "Long-lasting hydrophobic coating for superior rain visibility.", price: "$120", duration: "1 hr 30 min" },
    { name: "GYEON Fabric Coat", description: "Hydrophobic fabric protection for seats and carpets.", price: "$40", duration: "30 min" },
    { name: "Rain Repellent Glass Treatment", description: "Water-beading layer for safer wet driving.", price: "$40", duration: "5 min" },
    { name: "Fabric Protection / Weather Guard", description: "Hydrophobic barrier for seats, carpets, and mats to resist spills and stains.", price: "$80", duration: "10 min" },
  ],
};

// Existing site pages (Square Online — still active until DNS switch)
export const LEGACY_PAGES = {
  paintCorrection: "https://www.proworxdetailing.com/paint-correction",
  ceramicCoating: "https://www.proworxdetailing.com/ceramic-coating",
  membership: "https://www.proworxdetailing.com/proworx-membership",
  q2FlashEvo: "https://www.proworxdetailing.com/q2-flash-evo-maintenance-plan",
  fleet: "https://www.proworxdetailing.com/fleet-detailing-services",
  contact: "https://www.proworxdetailing.com/contact-us",
  blogs: "https://www.proworxdetailing.com/blogs",
};
