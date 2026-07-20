/**
 * Stripe Payment Links — maps service + size to checkout URL
 * All links accept card + Affirm (0% APR) for amounts $50+
 * Card-only for amounts under $50
 */

/* ── Standard Detailing ────────────────────────────────────────────── */
export const INSIDE_OUT_LINKS: Record<string, string> = {
  "Sedan / Coupe":              "https://buy.stripe.com/cNi4gzg8V4JF5agdNtbMQ0M",
  "Small SUV / Truck":          "https://buy.stripe.com/eVq4gzcWJfoj7iofVBbMQ0I",
  "Large SUV / Off-Road Truck": "https://buy.stripe.com/28EeVd3m9b830U07p5bMQ0F",
  "Van":                        "https://buy.stripe.com/28E28rcWJcc70U06l1bMQ0B",
};

export const INTERIOR_LINKS: Record<string, string> = {
  "Sedan / Coupe":              "https://buy.stripe.com/6oU00jf4Rb83328cJpbMQ0S",
  "Small SUV / Truck":          "https://buy.stripe.com/cNi9ATaOBcc70U038PbMQ0P",
  "Large SUV / Off-Road Truck": "https://buy.stripe.com/eVq4gzcWJ1xt1Y4dNtbMQ0L",
  "Van":                        "https://buy.stripe.com/fZu9AT09X1xtauA4cTbMQ0G",
};

export const EXTERIOR_LINKS: Record<string, string> = {
  "Sedan / Coupe":              "https://buy.stripe.com/cNieVd8Gt8ZVgSYdNtbMQ0V",
  "Small SUV / Truck":          "https://buy.stripe.com/14AcN54qd3FBdGM10HbMQ0T",
  "Large SUV / Off-Road Truck": "https://buy.stripe.com/4gMcN5cWJa3Z6ekfVBbMQ0R",
  "Van":                        "https://buy.stripe.com/fZuaEXg8V7VRcCI4cTbMQ0O",
};

/* ── Boat Services ─────────────────────────────────────────────────── */
export const BOAT_WASH_LINKS: Record<string, string> = {
  "Up to 20 ft": "https://buy.stripe.com/cNieVdbSF1xt0U0dNtbMQ0Q",
  "21–25 ft":    "https://buy.stripe.com/fZu3cv09X3FBeKQgZFbMQ0N",
  "26–30 ft":    "https://buy.stripe.com/4gM14ncWJ4JFgSYaBhbMQ0K",
  "31–35 ft":    "https://buy.stripe.com/eVq3cv3m97VR1Y49xdbMQ0H",
};

export const BOAT_INTERIOR_LINKS: Record<string, string> = {
  "Up to 20 ft": "https://buy.stripe.com/cNiaEX6yl2BxfOUdNtbMQ0J",
  "21–25 ft":    "https://buy.stripe.com/4gM8wP6yla3ZgSY8t9bMQ0C",
  "26–30 ft":    "https://buy.stripe.com/3cI6oH8Gta3Z7ioaBhbMQ0z",
  "31–35 ft":    "https://buy.stripe.com/bJe7sL8Gt7VRfOU7p5bMQ0w",
};

export const BOAT_EXTERIOR_LINKS: Record<string, string> = {
  "Up to 20 ft": "https://buy.stripe.com/28EaEX6yla3Z1Y438PbMQ0D",
  "21–25 ft":    "https://buy.stripe.com/4gM3cv6ylgsn8msbFlbMQ0y",
  "26–30 ft":    "https://buy.stripe.com/eVqfZh4qdcc70U0bFlbMQ0v",
  "31–35 ft":    "https://buy.stripe.com/6oU7sL3m9gsnbyEdNtbMQ0s",
};

export const BOAT_FULL_LINKS: Record<string, string> = {
  "Up to 20 ft": "https://buy.stripe.com/4gMaEXe0N4JFeKQ10HbMQ0u",
  "21–25 ft":    "https://buy.stripe.com/bJedR91e1dgbfOU38PbMQ0r",
  "26–30 ft":    "https://buy.stripe.com/aFa14n7Cp8ZV1Y46l1bMQ0q",
  "31–35 ft":    "https://buy.stripe.com/4gM8wP4qdgsn46cdNtbMQ0n",
};

export const BOAT_OXIDATION_LINKS: Record<string, string> = {
  "Up to 20 ft": "https://buy.stripe.com/fZudR94qd8ZVfOU7p5bMQ0E",
  "21–25 ft":    "https://buy.stripe.com/5kQ14n09Xgsn9qwaBhbMQ0A",
  "26–30 ft":    "https://buy.stripe.com/7sY9AT3m92Bx3285gXbMQ0x",
  "31–35 ft":    "https://buy.stripe.com/14A00j1e1dgb0U0bFlbMQ0t",
};

export const MARINE_CERAMIC_2YR_LINKS: Record<string, string> = {
  "Up to 20 ft": "https://buy.stripe.com/00w14n4qd4JFcCIgZFbMQ0p",
  "21–25 ft":    "https://buy.stripe.com/28EbJ19Kx2Bx1Y4dNtbMQ0o",
  "26–30 ft":    "https://buy.stripe.com/7sY7sLe0N8ZV8msaBhbMQ0l",
  "31–35 ft":    "https://buy.stripe.com/00w4gz4qd4JF1Y4eRxbMQ0k",
};

export const MARINE_CERAMIC_5YR_LINKS: Record<string, string> = {
  "Up to 20 ft": "https://buy.stripe.com/4gM7sL3m9gsncCIdNtbMQ0m",
  "21–25 ft":    "https://buy.stripe.com/4gMbJ1g8Vdgb46c4cTbMQ0j",
  "26–30 ft":    "https://buy.stripe.com/6oU14n8Gt8ZVcCI8t9bMQ0i",
  "31–35 ft":    "https://buy.stripe.com/28EfZh8GtdgbbyE10HbMQ0h",
};

/* ── Add-Ons & Protection ──────────────────────────────────────────── */
export const ADDON_LINKS: Record<string, string> = {
  "Hot Water Extraction / Shampoo":      "https://buy.stripe.com/00w3cv1e10tpeKQdNtbMQ0Z",
  "Pet Hair Removal":                    "https://buy.stripe.com/bJe14n9Kxcc7gSY8t9bMQ15",
  "Steam Cleaning":                      "https://buy.stripe.com/eVq28rg8V6RN46c38PbMQ19",
  "Stain Removal (Targeted)":            "https://buy.stripe.com/cNi4gzbSFdgbfOUaBhbMQ1h",
  "Odor / Ozone Treatment":              "https://buy.stripe.com/8x2dR95uh3FB7iogZFbMQ1a",
  "UV Protection (Dash & Trim)":         "https://buy.stripe.com/aFaaEX5uh8ZV32838PbMQ1g",
  "Leather Deep Clean & Condition":      "https://buy.stripe.com/cNi00j09Xb838ms38PbMQ1i",
  "Premium Fragrance":                   "https://buy.stripe.com/cNibJ109Xb833285gXbMQ1k",
  "Headlight Restoration + UV Sealant":  "https://buy.stripe.com/cNi8wPaOB2Bx328bFlbMQ13",
  "Full Engine Bay Detail":              "https://buy.stripe.com/3cIfZh09X3FB0U04cTbMQ1b",
  "Basic Engine Bay":                    "https://buy.stripe.com/8x200j9Kxa3Z7io38PbMQ1f",
  "Glass Polishing":                     "https://buy.stripe.com/4gM14n4qddgbdGMeRxbMQ12",
  "Trim Restoration":                    "https://buy.stripe.com/6oU8wPaOB0tp9qwbFlbMQ14",
  "Wheel Polishing & Protection":        "https://buy.stripe.com/4gMdR9e0N0tpcCI8t9bMQ16",
  "Iron Decontamination (Wheels)":       "https://buy.stripe.com/aFa3cvbSFa3ZgSY9xdbMQ1d",
  "Convertible Top Protection":          "https://buy.stripe.com/28EdR9g8VgsnauAgZFbMQ0Y",
  "Fabric Protection / Weather Guard":   "https://buy.stripe.com/aFa8wP5uh0tpcCI38PbMQ11",
  "Rain Repellent Glass Treatment":      "https://buy.stripe.com/14A7sL5uh6RNdGM24LbMQ1c",
  "Ceramic Tire Dressing":               "https://buy.stripe.com/aFa6oH09X6RNfOU8t9bMQ1j",
};

/* ── Protection / Wax ──────────────────────────────────────────────── */
export const PROTECTION_LINKS: Record<string, string> = {
  "Carnauba Wax (~3 months)":        "https://buy.stripe.com/aFadR99Kx0tp5ag4cTbMQ17",
  "Paint Sealant (~6 months)":       "https://buy.stripe.com/eVq3cv9Kxfoj8mscJpbMQ10",
  "Ceramic Wax (~12 months)":        "https://buy.stripe.com/9B6eVde0NfojauAcJpbMQ0W",
  "GYEON Can Coat Pro EVO":          "https://buy.stripe.com/00w7sL5uha3Z0U06l1bMQ0U",
  "GYEON View — Windshield Ceramic": "https://buy.stripe.com/6oU4gz4qda3ZdGM10HbMQ0X",
  "GYEON Leather Shield":            "https://buy.stripe.com/cNibJ12i57VR8mseRxbMQ18",
  "GYEON Fabric Coat":               "https://buy.stripe.com/eVqbJ1f4Rdgb328cJpbMQ1e",
};

/* ── Paint Correction ──────────────────────────────────────────────── */
export const PAINT_CORRECTION_LINKS: Record<string, string> = {
  "1-Step Compact":     "https://buy.stripe.com/14A00j4qd1xt0U0eRxbMQ05",
  "1-Step Sedan":       "https://buy.stripe.com/bJe14nf4R2Bx5ag8t9bMQ04",
  "1-Step SUV":         "https://buy.stripe.com/fZu00j6yl6RN3284cTbMQ0a",
  "2-Step Compact":     "https://buy.stripe.com/aFa14ne0Ngsn9qweRxbMQ0b",
  "2-Step Sedan":       "https://buy.stripe.com/3cI3cv5uh7VR8msfVBbMQ07",
  "2-Step SUV":         "https://buy.stripe.com/28E28r4qd8ZV5agcJpbMQ08",
  "Multi-Stage Compact":"https://buy.stripe.com/9B25kD7Cp6RNgSY9xdbMQ06",
  "Multi-Stage Sedan":  "https://buy.stripe.com/7sY9AT3m9cc75ag38PbMQ09",
  "Multi-Stage SUV":    "https://buy.stripe.com/5kQeVd6yl3FBdGMcJpbMQ0c",
};

/* ── Ceramic Coating (full price) ──────────────────────────────────── */
export const CERAMIC_LINKS: Record<string, string> = {
  "Q² One EVO $499":       "https://buy.stripe.com/5kQeVd4qd6RN7iogZFbMQ0d",
  "Q² Pure EVO $899":      "https://buy.stripe.com/fZu8wPaOB5NJgSY6l1bMQ0e",
  "Infinite Type 1 $1799": "https://buy.stripe.com/14A4gz2i5b839qw38PbMQ0f",
  "Infinite Type 1+2 $2199":"https://buy.stripe.com/aFabJ16yl0tp8ms8t9bMQ0g",
};
