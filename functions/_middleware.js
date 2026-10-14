// Send the bare domain to www so Cloudflare Pages serves one canonical host.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === "proworxdetailing.com") {
    url.hostname = "www.proworxdetailing.com";
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
