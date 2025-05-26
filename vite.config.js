import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Replace 'your-repo-name' with your actual GitHub repo name
export default defineConfig({
  base: "/portfolio/",
  plugins: [react(), tailwindcss()],
});
