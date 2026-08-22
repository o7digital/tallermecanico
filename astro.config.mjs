import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
export default defineConfig({site:"https://tallermecanico-tawny.vercel.app",integrations:[sitemap()],compressHTML:true,security:{checkOrigin:true}});
