import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // The production site uses the custom domain as its root.
  base: process.env.SITE_BASE || "/",
  optimizeDeps: {
    include: ["react", "react-dom/client"],
  },
  server: {
    warmup: {
      clientFiles: ["./src/main.jsx"],
    },
  },
  plugins: [react()],
});
