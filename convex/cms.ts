import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// ─── SITE CONFIG ─────────────────────────────────────────────────────────────

export const getAllConfig = query({
  args: {},
  returns: v.array(v.object({ _id: v.id("siteConfig"), _creationTime: v.number(), key: v.string(), value: v.string() })),
  handler: async (ctx) => {
    return await ctx.db.query("siteConfig").collect();
  },
});

export const getConfig = query({
  args: { key: v.string() },
  returns: v.union(v.string(), v.null()),
  handler: async (ctx, { key }) => {
    const doc = await ctx.db.query("siteConfig").withIndex("by_key", (q) => q.eq("key", key)).unique();
    return doc?.value ?? null;
  },
});

export const setConfig = mutation({
  args: { key: v.string(), value: v.string() },
  returns: v.null(),
  handler: async (ctx, { key, value }) => {
    const existing = await ctx.db.query("siteConfig").withIndex("by_key", (q) => q.eq("key", key)).unique();
    if (existing) {
      await ctx.db.patch(existing._id, { value });
    } else {
      await ctx.db.insert("siteConfig", { key, value });
    }
    return null;
  },
});

export const setMultipleConfig = mutation({
  args: { items: v.array(v.object({ key: v.string(), value: v.string() })) },
  returns: v.null(),
  handler: async (ctx, { items }) => {
    for (const { key, value } of items) {
      const existing = await ctx.db.query("siteConfig").withIndex("by_key", (q) => q.eq("key", key)).unique();
      if (existing) {
        await ctx.db.patch(existing._id, { value });
      } else {
        await ctx.db.insert("siteConfig", { key, value });
      }
    }
    return null;
  },
});

// ─── SERVICES ────────────────────────────────────────────────────────────────

export const getServicesByCategory = query({
  args: { category: v.string() },
  returns: v.array(v.object({
    _id: v.id("services"),
    _creationTime: v.number(),
    category: v.string(),
    name: v.string(),
    description: v.string(),
    price: v.string(),
    duration: v.string(),
    order: v.number(),
  })),
  handler: async (ctx, { category }) => {
    return await ctx.db.query("services").withIndex("by_category", (q) => q.eq("category", category)).collect();
  },
});

export const getAllServices = query({
  args: {},
  returns: v.array(v.object({
    _id: v.id("services"),
    _creationTime: v.number(),
    category: v.string(),
    name: v.string(),
    description: v.string(),
    price: v.string(),
    duration: v.string(),
    order: v.number(),
  })),
  handler: async (ctx) => {
    return await ctx.db.query("services").collect();
  },
});

export const addService = mutation({
  args: {
    category: v.string(),
    name: v.string(),
    description: v.string(),
    price: v.string(),
    duration: v.string(),
  },
  returns: v.id("services"),
  handler: async (ctx, args) => {
    const existing = await ctx.db.query("services").withIndex("by_category", (q) => q.eq("category", args.category)).collect();
    const maxOrder = existing.length > 0 ? Math.max(...existing.map((s) => s.order)) : -1;
    return await ctx.db.insert("services", { ...args, order: maxOrder + 1 });
  },
});

export const updateService = mutation({
  args: {
    id: v.id("services"),
    name: v.optional(v.string()),
    description: v.optional(v.string()),
    price: v.optional(v.string()),
    duration: v.optional(v.string()),
  },
  returns: v.null(),
  handler: async (ctx, { id, ...updates }) => {
    const clean: Record<string, string> = {};
    for (const [k, val] of Object.entries(updates)) {
      if (val !== undefined) clean[k] = val;
    }
    if (Object.keys(clean).length > 0) {
      await ctx.db.patch(id, clean);
    }
    return null;
  },
});

export const deleteService = mutation({
  args: { id: v.id("services") },
  returns: v.null(),
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
    return null;
  },
});

export const reorderService = mutation({
  args: { id: v.id("services"), newOrder: v.number() },
  returns: v.null(),
  handler: async (ctx, { id, newOrder }) => {
    await ctx.db.patch(id, { order: newOrder });
    return null;
  },
});

// ─── STANDARD DETAIL ─────────────────────────────────────────────────────────

export const getStandardDetail = query({
  args: {},
  returns: v.union(v.object({
    _id: v.id("standardDetail"),
    _creationTime: v.number(),
    name: v.string(),
    description: v.string(),
    price: v.string(),
    duration: v.string(),
    features: v.array(v.string()),
  }), v.null()),
  handler: async (ctx) => {
    const all = await ctx.db.query("standardDetail").collect();
    return all[0] ?? null;
  },
});

export const updateStandardDetail = mutation({
  args: {
    name: v.optional(v.string()),
    description: v.optional(v.string()),
    price: v.optional(v.string()),
    duration: v.optional(v.string()),
    features: v.optional(v.array(v.string())),
  },
  returns: v.null(),
  handler: async (ctx, updates) => {
    const all = await ctx.db.query("standardDetail").collect();
    const existing = all[0];
    const clean: Record<string, unknown> = {};
    for (const [k, val] of Object.entries(updates)) {
      if (val !== undefined) clean[k] = val;
    }
    if (existing) {
      await ctx.db.patch(existing._id, clean);
    }
    return null;
  },
});

// ─── MEMBERSHIPS ─────────────────────────────────────────────────────────────

export const getMemberships = query({
  args: {},
  returns: v.array(v.object({
    _id: v.id("memberships"),
    _creationTime: v.number(),
    key: v.string(),
    name: v.string(),
    price: v.number(),
    url: v.string(),
    features: v.array(v.string()),
    order: v.number(),
    popular: v.boolean(),
  })),
  handler: async (ctx) => {
    return await ctx.db.query("memberships").withIndex("by_order").collect();
  },
});

export const updateMembership = mutation({
  args: {
    id: v.id("memberships"),
    name: v.optional(v.string()),
    price: v.optional(v.number()),
    url: v.optional(v.string()),
    features: v.optional(v.array(v.string())),
    popular: v.optional(v.boolean()),
  },
  returns: v.null(),
  handler: async (ctx, { id, ...updates }) => {
    const clean: Record<string, unknown> = {};
    for (const [k, val] of Object.entries(updates)) {
      if (val !== undefined) clean[k] = val;
    }
    if (Object.keys(clean).length > 0) {
      await ctx.db.patch(id, clean);
    }
    return null;
  },
});

export const addMembership = mutation({
  args: {
    key: v.string(),
    name: v.string(),
    price: v.number(),
    url: v.string(),
    features: v.array(v.string()),
    popular: v.boolean(),
  },
  returns: v.id("memberships"),
  handler: async (ctx, args) => {
    const existing = await ctx.db.query("memberships").withIndex("by_order").collect();
    const maxOrder = existing.length > 0 ? Math.max(...existing.map((m) => m.order)) : -1;
    return await ctx.db.insert("memberships", { ...args, order: maxOrder + 1 });
  },
});

export const deleteMembership = mutation({
  args: { id: v.id("memberships") },
  returns: v.null(),
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
    return null;
  },
});

// ─── SEED (populate from constants.ts defaults on first load) ────────────────

export const checkAndSeed = mutation({
  args: {},
  returns: v.boolean(), // true if seeded, false if already had data
  handler: async (ctx) => {
    const existingConfig = await ctx.db.query("siteConfig").first();
    if (existingConfig) return false;

    // Seed siteConfig
    const configItems = [
      { key: "appName", value: "ProWorx Detailing" },
      { key: "phone", value: "(980) 272-1903" },
      { key: "phoneLink", value: "tel:+19802721903" },
      { key: "email", value: "detailing@proworxdetailing.com" },
      { key: "address", value: "4321 Overbecks Ln, Waxhaw, NC 28173" },
      { key: "instagramUrl", value: "https://www.instagram.com/proworxdetailing/" },
      { key: "facebookUrl", value: "https://www.facebook.com/proworxdetailing" },
      { key: "googleBusinessUrl", value: "https://g.page/proworxdetailing" },
      { key: "giftCardsUrl", value: "https://app.squareup.com/gift/KAXAX104TMA6W/order" },
      { key: "bookingUrl", value: "https://book.squareup.com/appointments/wa9b2qyqjdx71w/location/9VRKFJAZZM3HG" },
      { key: "ceramicDepositUrl", value: "https://square.link/u/NwnNJRm7" },
      { key: "wisetackUrl", value: "https://www.wisetack.com/" },
      { key: "hoursWeekday", value: "9:30 AM – 6:00 PM" },
      { key: "hoursSaturday", value: "9:30 AM – 3:00 PM" },
      { key: "hoursSunday", value: "Closed" },
    ];
    for (const item of configItems) {
      await ctx.db.insert("siteConfig", item);
    }

    // Seed standardDetail
    await ctx.db.insert("standardDetail", {
      name: "Standard Inside & Out",
      description: "A full-vehicle refresh combining interior and exterior services into one streamlined appointment.",
      price: "Price varies",
      duration: "2 hr 30 min+",
      features: ["All Standard Exterior services", "All Standard Interior services", "Unified final quality inspection"],
    });

    // Seed services
    const serviceData: Array<{ category: string; items: Array<{ name: string; description: string; price: string; duration: string }> }> = [
      {
        category: "interiorPackages",
        items: [
          { name: "Pet Hair Removal", description: "Thorough removal of pet hair from carpets and seats.", price: "$80", duration: "1 hr" },
          { name: "Steam Cleaning (Vents, Plastics, Crevices)", description: "High-temp steam sanitizes hard-to-reach areas and freshens vents.", price: "$60", duration: "30 min" },
          { name: "Stain Removal (Targeted)", description: "Specialized treatment for stubborn stains on fabric, carpet, or seats.", price: "$45", duration: "30 min" },
          { name: "Odor/Ozone Treatment", description: "Ozone generator neutralizes odors (smoke, pets, mildew).", price: "$45", duration: "30 min" },
        ],
      },
      {
        category: "interiorAddons",
        items: [
          { name: "Plastic & Vinyl UV Protection", description: "Protects dashboards, door panels, and trim with UV-blocking treatment.", price: "$40", duration: "30 min" },
          { name: "Leather Deep Clean & Condition", description: "Cleans and nourishes leather seats/trim to restore suppleness and prevent cracking.", price: "$25", duration: "20 min" },
          { name: "Premium Fragrance", description: "Choose a premium, long-lasting scent.", price: "$20", duration: "5 min" },
        ],
      },
      {
        category: "exteriorPackages",
        items: [
          { name: "Paint Protection", description: "Paint Protection (Short → Long Term)", price: "Price varies", duration: "45 min+" },
          { name: "Engine Bay", description: "Basic degrease & rinse (0.5 hr) or full engine bay detail with dressing (1 hr).", price: "Price varies", duration: "30 min+" },
          { name: "Headlight Restoration + UV Sealant", description: "Removes oxidation, restores clarity.", price: "$80", duration: "1 hr" },
          { name: "Wheel Polishing & Protection", description: "Polishes away oxidation and applies a sealant/ceramic layer for longer-lasting shine.", price: "$80", duration: "1 hr" },
          { name: "Trim Restoration", description: "Revives faded plastics with UV protection.", price: "$80", duration: "30 min" },
        ],
      },
      {
        category: "exteriorAddons",
        items: [
          { name: "Glass Polishing (Spots/Rain/Haze Removal)", description: "Polishes glass to remove water spots, rain marks, and haze.", price: "$80", duration: "30 min" },
          { name: "Iron Decontamination (Wheels)", description: "Chemical treatment to dissolve embedded brake dust and fallout from wheels.", price: "$40", duration: "5 min" },
        ],
      },
      {
        category: "ceramicAddons",
        items: [
          { name: "Ceramic Tire Dressing", description: "Long-lasting, deep black finish for tires with UV protection.", price: "$20", duration: "30 min" },
          { name: "Convertible Top Fabric Protection", description: "Hydrophobic treatment for convertible tops.", price: "$100", duration: "30 min" },
          { name: "GYEON Leather Shield", description: "Ceramic coating for leather to resist dye transfer, staining, and UV fading.", price: "$60", duration: "20 min" },
          { name: "GYEON View (Windshield Ceramic – 12+ mo)", description: "Long-lasting hydrophobic coating for superior rain visibility.", price: "$120", duration: "1 hr 30 min" },
          { name: "GYEON Fabric Coat", description: "Hydrophobic fabric protection for seats and carpets.", price: "$40", duration: "30 min" },
          { name: "Rain Repellent Glass Treatment", description: "Water-beading layer for safer wet driving.", price: "$40", duration: "5 min" },
          { name: "Fabric Protection / Weather Guard", description: "Hydrophobic barrier for seats, carpets, and mats to resist spills and stains.", price: "$80", duration: "10 min" },
        ],
      },
    ];
    for (const { category, items } of serviceData) {
      for (let i = 0; i < items.length; i++) {
        await ctx.db.insert("services", { ...items[i], category, order: i });
      }
    }

    // Seed memberships
    const membershipData = [
      {
        key: "clean", name: "Clean", price: 59, url: "https://square.link/u/TT4AvMOz", order: 0, popular: false,
        features: ["Exterior hand wash & dry", "Tire & wheel cleaning", "Exterior window cleaning", "Quick interior vacuum & wipe", "Priority scheduling"],
      },
      {
        key: "shield", name: "Shield", price: 99, url: "https://square.link/u/YDKzho6U", order: 1, popular: true,
        features: ["Everything in Clean", "Full interior detail", "Quarterly ceramic wax", "Leather clean & condition", "Interior glass & surfaces", "Same-week priority"],
      },
      {
        key: "armor", name: "Armor", price: 149, url: "https://square.link/u/Ih4zVYZE", order: 2, popular: false,
        features: ["Everything in Shield", "Annual 1-step paint correction", "Annual ceramic coating refresh", "Bi-annual engine bay detail", "UV protection", "Same-day priority", "10% off add-ons"],
      },
    ];
    for (const m of membershipData) {
      await ctx.db.insert("memberships", m);
    }

    return true;
  },
});
