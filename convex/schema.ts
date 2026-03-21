import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,

  // Site-wide configuration (contact info, links, hours)
  siteConfig: defineTable({
    key: v.string(),
    value: v.string(),
  }).index("by_key", ["key"]),

  // All services organized by category
  services: defineTable({
    category: v.string(), // "interiorPackages", "interiorAddons", "exteriorPackages", "exteriorAddons", "ceramicAddons"
    name: v.string(),
    description: v.string(),
    price: v.string(),
    duration: v.string(),
    order: v.number(),
  }).index("by_category", ["category", "order"]),

  // Standard detail (special case — has features list)
  standardDetail: defineTable({
    name: v.string(),
    description: v.string(),
    price: v.string(),
    duration: v.string(),
    features: v.array(v.string()),
  }),

  // Standard Interior package (standalone section with pricing tiers)
  standardInterior: defineTable({
    name: v.string(),
    description: v.string(),
    features: v.array(v.string()),
    priceTiers: v.array(v.object({ label: v.string(), duration: v.string(), price: v.string() })),
    notes: v.array(v.string()),
  }),

  // Standard Exterior package (standalone section with pricing tiers)
  standardExterior: defineTable({
    name: v.string(),
    description: v.string(),
    features: v.array(v.string()),
    priceTiers: v.array(v.object({ label: v.string(), duration: v.string(), price: v.string() })),
    notes: v.array(v.string()),
  }),

  // Site photos — each slot maps to a location on the site
  sitePhotos: defineTable({
    slot: v.string(),         // unique key like "homepage-hero"
    label: v.string(),        // human label "Homepage Hero"
    page: v.string(),         // page name for grouping "Home"
    storageId: v.optional(v.id("_storage")),  // Convex file storage
    staticPath: v.string(),   // fallback static path "/images/escalade-front.jpg"
  }).index("by_slot", ["slot"]).index("by_page", ["page"]),

  // Membership plans
  memberships: defineTable({
    key: v.string(), // "clean", "shield", "armor"
    name: v.string(),
    price: v.number(),
    url: v.string(),
    features: v.array(v.string()),
    order: v.number(),
    popular: v.boolean(),
  }).index("by_order", ["order"]),
});

export default schema;
