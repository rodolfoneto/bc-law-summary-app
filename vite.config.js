import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    outDir: "../dist",
    assetsDir: "./",
    host: "0.0.0.0",
    hmr: {
      host: "localhost",
    },
  },
  plugins: [react()],
});
