/**
 * Post-build SEO prerender.
 *
 * The site is a client-rendered SPA: every URL used to serve the exact same
 * index.html with no <title>, no description and no canonical. Googlebot that
 * doesn't run the JS sees dozens of byte-identical pages, which is why Search
 * Console reported "Duplicate without user-selected canonical".
 *
 * This script runs after `vite build` and writes ONE static HTML file per route
 * with that route's real <title>, meta description, canonical, Open Graph and
 * Twitter tags baked into the head. React Helmet still sets the same tags at
 * runtime, so nothing changes for real users.
 *
 * Route metadata is parsed from the page components themselves (the PageSEO
 * props) and from src/data/blogPosts.ts, so it stays in sync automatically.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const BASE = "https://www.proworxdetailing.com";
const OG_IMAGE = `${BASE}/images/og-cover.jpg`;

/* ── 1. route -> page component file (parsed from App.tsx) ──────────────── */

function routeMap() {
  const app = fs.readFileSync(path.join(ROOT, "src/App.tsx"), "utf8");

  const componentFile = {};
  for (const m of app.matchAll(
    /const\s+(\w+)\s*=\s*lazyRetry\(\(\)\s*=>\s*import\("\.\/pages\/([\w-]+)"\)/g
  )) {
    componentFile[m[1]] = `src/pages/${m[2]}.tsx`;
  }
  for (const m of app.matchAll(/import\s*{\s*(\w+)\s*}\s*from\s*"\.\/pages\/([\w-]+)"/g)) {
    componentFile[m[1]] = `src/pages/${m[2]}.tsx`;
  }

  const routes = [];
  for (const m of app.matchAll(/<Route\s+path="([^"]+)"\s+element=\{([\s\S]*?)\}\s*\/>/g)) {
    const [, routePath, element] = m;
    const names = [...element.matchAll(/<(\w+Page)\s*\/>/g)].map((x) => x[1]);
    const component = names[names.length - 1];
    if (!component) continue;
    if (routePath.includes(":") || routePath === "*" || routePath === "/admin") continue;
    if (!componentFile[component]) continue;
    routes.push({ path: routePath, file: componentFile[component] });
  }
  return routes;
}

/* ── 2. pull title/description out of each page's <PageSEO ... /> ───────── */

function readString(block, prop) {
  const m = block.match(new RegExp(`${prop}=\\{?"((?:[^"\\\\]|\\\\.)*)"`, "s"));
  return m ? m[1].replace(/\\"/g, '"').replace(/\s+/g, " ").trim() : null;
}

function pageMeta(file) {
  const src = fs.readFileSync(path.join(ROOT, file), "utf8");
  const i = src.indexOf("<PageSEO");
  if (i === -1) return null;
  const block = src.slice(i, i + 4000);
  const title = readString(block, "title");
  const description = readString(block, "description");
  if (!title || !description) return null;
  return { title, description };
}

/* ── 3. blog posts ─────────────────────────────────────────────────────── */

function blogRoutes() {
  const src = fs.readFileSync(path.join(ROOT, "src/data/blogPosts.ts"), "utf8");
  const out = [];
  const slugRe = /slug:\s*"([^"]+)"/g;
  let m;
  while ((m = slugRe.exec(src))) {
    const chunk = src.slice(m.index, m.index + 2500);
    const title = chunk.match(/title:\s*"((?:[^"\\]|\\.)*)"/s);
    const excerpt = chunk.match(/excerpt:\s*\n?\s*"((?:[^"\\]|\\.)*)"/s);
    if (!title || !excerpt) continue;
    out.push({
      path: `/blog/${m[1]}`,
      meta: {
        title: title[1].replace(/\\"/g, '"'),
        description: excerpt[1].replace(/\\"/g, '"').replace(/\s+/g, " ").trim(),
      },
    });
  }
  return out;
}

/* ── 4. head injection ─────────────────────────────────────────────────── */

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function buildHtml(shell, routePath, meta) {
  const url = `${BASE}${routePath === "/" ? "/" : routePath}`;
  const fullTitle = routePath === "/" ? meta.title : `${meta.title} | ProWorx`;

  const tags = [
    `<title>${esc(fullTitle)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${esc(fullTitle)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:site_name" content="ProWorx Mobile Detailing" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(fullTitle)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  ].join("\n    ");

  // Drop any title the shell already carries so we never emit two.
  const cleaned = shell.replace(/<title>[\s\S]*?<\/title>\s*/i, "");
  return cleaned.replace(/<\/head>/i, `  ${tags}\n  </head>`);
}

/* ── 5. run ────────────────────────────────────────────────────────────── */

function main() {
  const shellPath = path.join(DIST, "index.html");
  if (!fs.existsSync(shellPath)) {
    console.error("[prerender-seo] dist/index.html missing — run vite build first");
    process.exit(1);
  }
  const shell = fs.readFileSync(shellPath, "utf8");

  const entries = [];
  for (const r of routeMap()) {
    const meta = pageMeta(r.file);
    if (!meta) {
      console.warn(`[prerender-seo] no PageSEO metadata found for ${r.path} (${r.file})`);
      continue;
    }
    entries.push({ path: r.path, meta });
  }
  entries.push(...blogRoutes());

  let written = 0;
  for (const e of entries) {
    const html = buildHtml(shell, e.path, e.meta);
    if (e.path === "/") {
      fs.writeFileSync(shellPath, html);
    } else {
      const slug = e.path.replace(/^\//, "");
      // Written twice so Vercel resolves the URL with or without cleanUrls.
      const flat = path.join(DIST, `${slug}.html`);
      fs.mkdirSync(path.dirname(flat), { recursive: true });
      fs.writeFileSync(flat, html);
      const dir = path.join(DIST, slug);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, "index.html"), html);
    }
    written++;
  }

  console.log(`[prerender-seo] wrote SEO head for ${written} routes`);
}

main();
