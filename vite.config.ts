import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";

// const debugInsertHTML = {
//       debug: {
//         logPath: true,
//       },
//     }

export default defineConfig({
  root: "./src",
  base: "/landing-sookiable",
  publicDir: "../public",
  plugins: [injectHTML()],
  build: {
    outDir: "../dist",
  },
});
