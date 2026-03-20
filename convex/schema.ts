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
