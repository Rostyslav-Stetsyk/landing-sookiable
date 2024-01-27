import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const DEFAULT_OPTIONS = {
  test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
  exclude: undefined,
  include: undefined,
  includePublic: true,
  logStats: true,
  ansiColors: true,
  png: {
    // https://sharp.pixelplumbing.com/api-output#png
    quality: 90,
  },
  jpeg: {
    // https://sharp.pixelplumbing.com/api-output#jpeg
    quality: 90,
  },
  jpg: {
    // https://sharp.pixelplumbing.com/api-output#jpeg
    quality: 90,
  },
  tiff: {
    // https://sharp.pixelplumbing.com/api-output#tiff
    quality: 100,
  },
  // gif does not support lossless compression
  // https://sharp.pixelplumbing.com/api-output#gif
  gif: {},
  webp: {
    // https://sharp.pixelplumbing.com/api-output#webp
    lossless: true,
  },
  avif: {
    // https://sharp.pixelplumbing.com/api-output#avif
    lossless: true,
  },
  cache: false,
  cacheLocation: undefined,
};

export default defineConfig({
  root: "./src",
  plugins: [ViteImageOptimizer(DEFAULT_OPTIONS)],
  build: {
    outDir: "../dist",
  },
});
