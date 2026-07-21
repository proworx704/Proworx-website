/**
 * Stripe Payment Links — maps service + size to checkout URL
 * All links accept card + Affirm (0% APR) for amounts $50+
 * Card-only for amounts under $50
 * Prices include 8% Affirm markup so Tyler nets original price
 * After payment, customers are redirected to Square booking
 */

/* ── Standard Detailing ────────────────────────────────────────────── */
export const INSIDE_OUT_LINKS: Record<string, string> = {
  "Sedan / Coupe":              "https://buy.stripe.com/4gM4gzcWJcc75ag24LbMQ2i",
  "Small SUV / Truck":          "https://buy.stripe.com/4gM00jbSF6RNcCIdNtbMQ2g",
  "Large SUV / Off-Road Truck": "https://buy.stripe.com/8x2aEX9Kxb836ekgZFbMQ2h",
  "Van":                        "https://buy.stripe.com/dRm28r6yldgbfOUaBhbMQ2f",
};

export const INTERIOR_LINKS: Record<string, string> = {
  "Sedan / Coupe":              "https://buy.stripe.com/6oU3cv1e13FB32838PbMQ2b",
  "Small SUV / Truck":          "https://buy.stripe.com/fZu00j6yl0tpgSYeRxbMQ28",
  "Large SUV / Off-Road Truck": "https://buy.stripe.com/dRm9ATf4R7VR0U0gZFbMQ2a",
  "Van":                        "https://buy.stripe.com/00w00jcWJdgbeKQ9xdbMQ27",
};

export const EXTERIOR_LINKS: Record<string, string> = {
  "Sedan / Coupe":              "https://buy.stripe.com/cNi3cv6yl8ZV328gZFbMQ21",
  "Small SUV / Truck":          "https://buy.stripe.com/6oUaEX6yl0tpbyEcJpbMQ22",
  "Large SUV / Off-Road Truck": "https://buy.stripe.com/bJe00j09X6RN7io4cTbMQ1Z",
  "Van":                        "https://buy.stripe.com/00w7sLbSF5NJ8ms5gXbMQ20",
};

/* ── Boat Services ─────────────────────────────────────────────────── */
export const BOAT_WASH_LINKS: Record<string, string> = {
  "Up to 20 ft": "https://buy.stripe.com/14A3cv9Kx7VRauA5gXbMQ1N",
  "21–25 ft":    "https://buy.stripe.com/dRmcN51e15NJ5agdNtbMQ1K",
  "26–30 ft":    "https://buy.stripe.com/14A28rf4R5NJ0U08t9bMQ1O",
  "31–35 ft":    "https://buy.stripe.com/fZu4gzf4Ra3ZgSY7p5bMQ1H",
};

export const BOAT_INTERIOR_LINKS: Record<string, string> = {
  "Up to 20 ft": "https://buy.stripe.com/3cI3cv9Kx3FB0U09xdbMQ1J",
  "21–25 ft":    "https://buy.stripe.com/6oU7sL4qdcc78ms38PbMQ1I",
  "26–30 ft":    "https://buy.stripe.com/dRm3cvaOB1xt6ek7p5bMQ1C",
  "31–35 ft":    "https://buy.stripe.com/14A5kD3m91xteKQ10HbMQ1G",
};

export const BOAT_EXTERIOR_LINKS: Record<string, string> = {
  "Up to 20 ft": "https://buy.stripe.com/bJedR9aOB1xtdGMaBhbMQ1F",
  "21–25 ft":    "https://buy.stripe.com/3cI9AT6yl8ZV1Y4bFlbMQ1D",
  "26–30 ft":    "https://buy.stripe.com/aFaaEX9Kx1xtcCIcJpbMQ1E",
  "31–35 ft":    "https://buy.stripe.com/28E28r7Cpcc7fOU10HbMQ1A",
};

export const BOAT_FULL_LINKS: Record<string, string> = {
  "Up to 20 ft": "https://buy.stripe.com/aFa5kD2i51xtbyEgZFbMQ1B",
  "21–25 ft":    "https://buy.stripe.com/fZu00j1e1fojfOUeRxbMQ1y",
  "26–30 ft":    "https://buy.stripe.com/4gMaEX3m9ekfgSYbFlbMQ1z",
  "31–35 ft":    "https://buy.stripe.com/dRmcN509X3FB9qwgZFbMQ1x",
};

export const BOAT_OXIDATION_LINKS: Record<string, string> = {
  "Up to 20 ft": "https://buy.stripe.com/8x25kDbSF5NJ1Y438PbMQ1u",
  "21–25 ft":    "https://buy.stripe.com/bJe6oH4qda3ZeKQ10HbMQ1w",
  "26–30 ft":    "https://buy.stripe.com/6oUeVd8Gt4JFfOU9xdbMQ1v",
  "31–35 ft":    "https://buy.stripe.com/3cI4gz4qd0tp1Y48t9bMQ1s",
};

/* ── Marine Ceramic ────────────────────────────────────────────────── */
export const MARINE_CERAMIC_2YR_LINKS: Record<string, string> = {
  "Up to 20 ft": "https://buy.stripe.com/dRm4gz4qd1xt0U0eRxbMQ1r",
  "21–25 ft":    "https://buy.stripe.com/bJebJ15uhdgbauA8t9bMQ1t",
  "26–30 ft":    "https://buy.stripe.com/dRmbJ15uh2BxauAgZFbMQ1q",
  "31–35 ft":    "https://buy.stripe.com/cNieVd4qdfoj46c4cTbMQ1p",
};

export const MARINE_CERAMIC_5YR_LINKS: Record<string, string> = {
  "Up to 20 ft": "https://buy.stripe.com/bJe28rf4R0tp0U07p5bMQ1n",
  "21–25 ft":    "https://buy.stripe.com/6oUcN52i5cc7cCI7p5bMQ1o",
  "26–30 ft":    "https://buy.stripe.com/aFa9AT6ylfojauA24LbMQ1m",
  "31–35 ft":    "https://buy.stripe.com/28EbJ1f4R4JF6ek10HbMQ1l",
};

/* ── Add-Ons ───────────────────────────────────────────────────────── */
export const ADDON_LINKS: Record<string, string> = {
  /* Interior */
  "Premium Fragrance":                   "https://buy.stripe.com/3cIeVd09X8ZV8msgZFbMQ2A",
  "Leather Deep Clean & Condition":      "https://buy.stripe.com/3cI8wP9KxfojauA10HbMQ2D",
  "UV Protection (Dash & Trim)":         "https://buy.stripe.com/8x25kDcWJekf7ioaBhbMQ2C",
  "Odor / Ozone Treatment":             "https://buy.stripe.com/7sYfZh6ylb83gSYgZFbMQ2E",
  "Stain Removal (Targeted)":           "https://buy.stripe.com/00w4gzaOB1xtcCI4cTbMQ2G",
  "Steam Cleaning":                      "https://buy.stripe.com/5kQbJ18Gtdgb9qwcJpbMQ2F",
  "Pet Hair Removal":                    "https://buy.stripe.com/28E28re0Na3ZauA9xdbMQ2L",
  "Hot Water Extraction / Shampoo":      "https://buy.stripe.com/eVq14n7Cp0tpfOUeRxbMQ2O",
  /* Exterior */
  "Iron Decontamination (Wheels)":       "https://buy.stripe.com/aFaeVd09XgsncCI7p5bMQ2t",
  "Basic Engine Bay":                    "https://buy.stripe.com/5kQ14naOBgsn1Y4gZFbMQ2u",
  "Full Engine Bay Detail":              "https://buy.stripe.com/9B614n8GtekfeKQ38PbMQ2x",
  "Wheel Polishing & Protection":        "https://buy.stripe.com/9B614ne0Nekf46cfVBbMQ2w",
  "Glass Polishing":                     "https://buy.stripe.com/5kQ9ATcWJdgbbyE10HbMQ2y",
  "Trim Restoration":                    "https://buy.stripe.com/7sYdR9f4RdgbdGMaBhbMQ2z",
  "Headlight Restoration + UV Sealant":  "https://buy.stripe.com/3cI14nf4RgsnfOU8t9bMQ2B",
};

/* ── Paint Protection ──────────────────────────────────────────────── */
export const PROTECTION_LINKS: Record<string, string> = {
  "Carnauba Wax (~3 months)":       "https://buy.stripe.com/5kQcN5g8V2Bx0U0aBhbMQ2j",
  "Paint Sealant (~6 months)":      "https://buy.stripe.com/4gM9AT8Gt4JFcCIaBhbMQ2l",
  "Ceramic Wax (~12 months)":       "https://buy.stripe.com/14A14nf4Ra3Z8ms4cTbMQ2k",
};

/* ── Paint Correction ──────────────────────────────────────────────── */
export const PAINT_CORRECTION_LINKS: Record<string, string> = {
  "1-Step — Compact":  "https://buy.stripe.com/cNi3cv5uh7VRgSYdNtbMQ2J",
  "1-Step — Sedan":    "https://buy.stripe.com/6oU6oH9Kxb8346cfVBbMQ2N",
  "1-Step — SUV":      "https://buy.stripe.com/eVqeVd8Gt1xt5agdNtbMQ2Q",
  "2-Step — Compact":  "https://buy.stripe.com/7sY5kDf4Rgsn46c38PbMQ2P",
  "2-Step — Sedan":    "https://buy.stripe.com/cNieVd3m9fojbyE10HbMQ2R",
  "2-Step — SUV":      "https://buy.stripe.com/9B64gze0N1xt3286l1bMQ2M",
  "Multi — Compact":   "https://buy.stripe.com/aFacN53m93FBfOUbFlbMQ2I",
  "Multi — Sedan":     "https://buy.stripe.com/9B614n8Gta3ZfOUfVBbMQ2K",
  "Multi — SUV":       "https://buy.stripe.com/eVq5kD3m94JF0U0dNtbMQ2H",
};

/* ── Ceramic Coating ───────────────────────────────────────────────── */
export const CERAMIC_LINKS: Record<string, string> = {
  /* Full price */
  "Q² One EVO 1-Year":                   "https://buy.stripe.com/cNibJ1bSF3FB46c10HbMQ1P",
  "Q² Pure EVO 3-Year":                  "https://buy.stripe.com/4gMfZhcWJa3ZbyE4cTbMQ1T",
  "Infinite Type 1 Lifetime":            "https://buy.stripe.com/cNiaEX9Kx5NJgSY24LbMQ1W",
  "Infinite Type 1+2 Ultimate Lifetime": "https://buy.stripe.com/00w14ne0N0tpeKQgZFbMQ1M",
  /* 30% deposits */
  "Q² One EVO — Deposit":               "https://buy.stripe.com/9B614nbSFfojcCIdNtbMQ1L",
  "Q² Pure EVO — Deposit":              "https://buy.stripe.com/cNifZh7Cp2BxeKQ10HbMQ1U",
  "Infinite Type 1 — Deposit":          "https://buy.stripe.com/8x23cve0NgsngSY10HbMQ1Q",
  "Infinite Type 1+2 — Deposit":        "https://buy.stripe.com/00w00jcWJfoj9qw24LbMQ1S",
};

/* ── Ceramic Add-Ons ───────────────────────────────────────────────── */
export const CERAMIC_ADDON_LINKS: Record<string, string> = {
  "Ceramic Tire Dressing":                     "https://buy.stripe.com/bJe5kDaOB6RN8ms7p5bMQ2m",
  "GYEON Fabric Coat":                         "https://buy.stripe.com/eVq14nf4Rcc75aggZFbMQ2n",
  "Rain Repellent Glass Treatment":            "https://buy.stripe.com/3cI5kD7Cp2BxgSYeRxbMQ2p",
  "GYEON Leather Shield":                      "https://buy.stripe.com/4gM3cvf4R3FBeKQ6l1bMQ2o",
  "Fabric Protection / Weather Guard":         "https://buy.stripe.com/7sY3cvg8Vekf7iogZFbMQ2q",
  "Convertible Top Protection":                "https://buy.stripe.com/aFa9AT2i5ekf46c24LbMQ2s",
  "GYEON View — Windshield Ceramic":           "https://buy.stripe.com/00wdR9aOBb83gSY4cTbMQ2r",
  "GYEON Can Coat Pro EVO — Spray Ceramic":    "https://buy.stripe.com/aFa14n1e17VR1Y4gZFbMQ2v",
};

/* ── Ceramic Interior/Exterior (on Services page) ──────────────────── */
export const CERAMIC_INTERIOR_LINKS: Record<string, string> = {
  "Sedan / Coupe":              "https://buy.stripe.com/00weVdaOB5NJ3286l1bMQ26",
  "Small SUV / Truck":          "https://buy.stripe.com/7sYfZh8Gta3Z7io4cTbMQ24",
  "Large SUV / Off-Road Truck": "https://buy.stripe.com/4gMdR92i54JF8msaBhbMQ25",
  "Van":                        "https://buy.stripe.com/6oU3cv2i5a3ZeKQdNtbMQ23",
};

export const CERAMIC_EXTERIOR_LINKS: Record<string, string> = {
  "Sedan / Coupe":              "https://buy.stripe.com/7sY3cvaOB1xt46caBhbMQ1Y",
  "Small SUV / Truck":          "https://buy.stripe.com/aFa28r9Kxcc70U024LbMQ1V",
  "Large SUV / Off-Road Truck": "https://buy.stripe.com/dRmcN509Xa3ZeKQ8t9bMQ1R",
  "Van":                        "https://buy.stripe.com/3cIeVd1e1gsnbyEfVBbMQ1X",
};

export const ELITE_CERAMIC_INSIDE_OUT_LINKS: Record<string, string> = {
  "Sedan / Coupe":              "https://buy.stripe.com/8x200j7Cp4JF0U08t9bMQ2e",
  "Small SUV / Truck":          "https://buy.stripe.com/fZuaEXe0Nfoj5ag10HbMQ2d",
  "Large SUV / Off-Road Truck": "https://buy.stripe.com/14A5kD2i5b83auA4cTbMQ2c",
  "Van":                        "https://buy.stripe.com/14A9AT09Xdgb7iogZFbMQ29",
};
