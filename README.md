# ProWorx Detailing — Website + CMS

Professional website for **ProWorx Mobile Detailing** (Charlotte, NC) with a built-in admin panel for managing all content without touching code.

**Live Site:** [proworx-site-b59ee049.viktor.space](https://proworx-site-b59ee049.viktor.space)  
**Admin Panel:** [proworx-site-b59ee049.viktor.space/admin](https://proworx-site-b59ee049.viktor.space/admin)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + TypeScript + Tailwind CSS v4 |
| UI Components | shadcn/ui (53 components) |
| Backend / Database | [Convex](https://convex.dev) (real-time, serverless) |
| Build Tool | Vite 7 |
| Package Manager | Bun |
| Hosting | Vercel |

## Features

### Public Website (7 Pages)
- **Home** — Hero, about, services grid, fleet section, gallery, reviews, areas, CTA
- **Services** — Full detail packages, interior/exterior services, add-ons, memberships
- **Ceramic Coating** — Packages (Ceramic Wax → GYEON MOHS+), deposit booking, financing
- **Paint Correction** — 1-step, 2-step, 3-step correction packages
- **Book Now** — Embedded Square booking widget
- **Areas We Serve** — Charlotte metro service areas with map
- **Contact** — Phone, email, address, hours, social links

### CMS Admin Panel (`/admin`)
Password-protected dashboard to edit all website content live:

- **Overview** — Quick stats, contact info, hours, memberships, pages
- **Contact & Links** — Phone, email, address, hours, booking URL, Square links, social media
- **Services** — Add/edit/delete services across 5 categories with prices & durations
- **Memberships** — Edit plan names, prices, features, Square payment links

All changes are instant — no deploy needed.

---

## Project Structure

```
proworx-site/
├── convex/                  # Backend (Convex functions)
│   ├── schema.ts            # Database schema (4 CMS tables)
│   ├── cms.ts               # CMS CRUD operations + seed data
│   ├── auth.ts              # Authentication setup
│   ├── users.ts             # User management
│   └── viktorTools.ts       # AI tool gateway
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # shadcn/ui components (53)
│   │   ├── SiteHeader.tsx   # Top nav + mobile menu
│   │   └── SiteFooter.tsx   # Footer with links, contact, hours
│   ├── hooks/
│   │   └── useCms.ts        # React hooks for CMS data
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── CeramicCoatingPage.tsx
│   │   ├── PaintCorrectionPage.tsx
│   │   ├── BookingPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── AreasPage.tsx
│   │   └── AdminPage.tsx    # CMS admin dashboard
│   └── App.tsx              # Router
├── public/images/           # Vehicle photos, logos
└── package.json
```

## Database Schema (Convex)

| Table | Purpose | Key Fields |
|-------|---------|------------|
| `siteConfig` | Key-value settings | `key`, `value` |
| `services` | Detailing services | `category`, `name`, `price`, `duration`, `order` |
| `standardDetail` | "Inside & Out" package | `name`, `features[]`, `price` |
| `memberships` | Monthly plans | `name`, `price`, `url`, `features[]`, `popular` |

---

## Getting Started

### Prerequisites
- [Bun](https://bun.sh/) (v1.3+)
- [Convex account](https://convex.dev) (free tier works)

### 1. Install Dependencies

```bash
bun install
```

### 2. Set Up Convex

```bash
# Log in to Convex
bunx convex login

# Create a new Convex project (or link to existing)
bunx convex init

# Push schema and functions
bunx convex dev --once
```

This creates a `.env.local` file with your Convex URL.

### 3. Run Development Server

```bash
# Start Convex dev server + Vite in parallel
bunx convex dev &
bun run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 4. Seed the Database

Visit `/admin`, enter the password, and the database auto-seeds with all current service data, contact info, and membership plans.

### 5. Build for Production

```bash
bun run sync:build
```

### 6. Deploy

**Option A: Vercel (recommended)**
```bash
# Install Vercel CLI
bun add -g vercel

# Deploy
vercel --prod
```

Set the environment variable `VITE_CONVEX_URL` to your Convex production deployment URL in Vercel.

**Option B: Any static host**
The `dist/` folder is a static site. Deploy to Netlify, Cloudflare Pages, or any static host. Set `VITE_CONVEX_URL` as an environment variable.

---

## Admin Panel

**URL:** `/admin`  
**Password:** `proworx2026`

The admin panel lets you edit:
- Contact info (phone, email, address)
- Business hours
- Booking & payment links (Square, gift cards, Wisetack)
- Social media URLs
- Services (add, edit, delete across all categories)
- Membership plans (name, price, features, Square payment link)

Changes are saved to the Convex database and appear on the live site instantly.

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_CONVEX_URL` | Convex deployment URL (auto-set by `convex dev`) |
| `CONVEX_DEPLOY_KEY` | For CI/CD deployment (optional) |

---

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start Vite dev server |
| `bun run build` | Build for production |
| `bun run sync` | Push Convex functions |
| `bun run sync:build` | Push functions + build |
| `bun run preview` | Preview production build |
| `bun run check` | TypeScript type check |

---

## License

Private — ProWorx Mobile Detailing L.L.C. All rights reserved.
