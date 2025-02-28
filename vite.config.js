import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Portfolio/", // Must match the GitHub repo name
  plugins: [react()],
});
