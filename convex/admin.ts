import { getAuthUserId } from "@convex-dev/auth/server";
import type { MutationCtx } from "./_generated/server";

// Only these emails may edit the website. Everyone else is refused.
export const ADMIN_EMAILS = ["detailing@proworxdetailing.com"];

export async function requireAdmin(ctx: MutationCtx) {
  const userId = await getAuthUserId(ctx);
  if (!userId) throw new Error("Sign in required");
  const user = await ctx.db.get(userId);
  const email = typeof user?.email === "string" ? user.email.toLowerCase() : "";
  if (!ADMIN_EMAILS.includes(email)) throw new Error("Not allowed");
}
