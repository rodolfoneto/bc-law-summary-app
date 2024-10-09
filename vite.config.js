import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  outDir: "../dist",
  assetsDir: "./",
  server: {
    host: "0.0.0.0",
    hmr: {
      host: "localhost",
    },
  },
  plugins: [react()],
});
