import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const DEFAULT_OPTIONS = {
  test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
  exclude: undefined,
  include: undefined,
  includePublic: true,
  logStats: true,
  ansiColors: true,
  png: {
    quality: 90,
  },
  jpeg: {
    quality: 90,
  },
  jpg: {
    quality: 90,
  },
  gif: {},
  webp: {
    lossless: true,
  },
  avif: {
    lossless: true,
  },
  cache: false,
  cacheLocation: undefined,
};

export default defineConfig({
  root: "./src",
  base: "/landing-sookiable",
  publicDir: "../public",
  plugins: [injectHTML(), ViteImageOptimizer(DEFAULT_OPTIONS)],
  build: {
    outDir: "../dist",
  },
});
