// Generates Cloudflare Pages _redirects and _headers from vercel.json (Pages ignores vercel.json).
// Runs as part of `bun run build`; writes into dist/.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const v = JSON.parse(readFileSync("vercel.json", "utf8"));
const conv = (p) => p.replace(/:(\w+)\*/g, "*").replace(/\(\.\*\)/g, "*");
const lines = [];
for (const r of v.redirects || []) lines.push(`${conv(r.source)} ${conv(r.destination)} ${r.permanent ? 301 : 302}`);
// SPA-only routes (no prerendered file) must return index.html with 200.
for (const r of v.rewrites || []) {
  if (r.destination !== "/index.html" || r.source === "/" || r.source.includes(":")) continue;
  if (existsSync(`dist${r.source}.html`) || existsSync(`dist${r.source}/index.html`)) continue;
  lines.push(`${r.source} / 200`);
}
writeFileSync("dist/_redirects", lines.join("\n") + "\n");
const hdr = [];
const expand = (src) => {
  if (src === "/favicon(.*)") return ["/favicon.ico", "/favicon.png", "/favicon-192.png", "/favicon-512.png"];
  if (src === "/apple-touch-icon(.*)") return ["/apple-touch-icon.png"];
  return [conv(src)];
};
for (const h of v.headers || []) for (const path of expand(h.source)) {
  hdr.push(path);
  for (const x of h.headers) hdr.push(`  ${x.key}: ${x.value}`);
}
writeFileSync("dist/_headers", hdr.join("\n") + "\n");
console.log(`cf-pages-config: ${lines.length} redirects, ${hdr.filter((l) => !l.startsWith(" ")).length} header rules`);
