import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// BASE_PATH lets the same build run at "/" (Netlify, Vercel) or "/alliatus/" (GitHub Pages).
export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  plugins: [react({ babel: { plugins: ["babel-plugin-react-compiler"] } }), tailwindcss()],
  resolve: { alias: { "@": path.resolve(import.meta.dirname, "src") } },
});
