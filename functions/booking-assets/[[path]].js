// Cloudflare Pages: proxy /booking-assets/* to the booking app (mirrors the vercel.json rewrite).
export async function onRequest({ request, params }) {
  const path = Array.isArray(params.path) ? params.path.join("/") : params.path || "";
  const url = new URL(request.url);
  const res = await fetch(`https://book.proworxdetailing.com/booking-assets/${path}${url.search}`, { method: request.method, headers: request.headers });
  const out = new Response(res.body, res);
  out.headers.set("Cache-Control", "public, max-age=31536000, immutable");
  return out;
}
