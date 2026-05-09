import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    // Enable better minification
    target: "es2020",
    // Increase chunk size warning (but split strategically)
    chunkSizeWarningLimit: 200,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React runtime — cached across all pages
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          // Convex runtime — needed but can load in parallel
          "convex-vendor": ["convex", "convex/react", "@convex-dev/auth/react"],
          // UI primitives — shared across pages
          "radix-ui": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-popover",
            "@radix-ui/react-scroll-area",
            "@radix-ui/react-select",
            "@radix-ui/react-separator",
            "@radix-ui/react-tabs",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-slot",
          ],
          // Heavy libs only used on specific pages
          "framer": ["framer-motion"],
          "charts": ["recharts"],
        },
      },
    },
    // Reduce CSS size
    cssMinify: "lightningcss",
  },
});
