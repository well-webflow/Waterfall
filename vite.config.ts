import { defineConfig } from "vite";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin(),
    dts({
      insertTypesEntry: true,
      exclude: ["**/*.test.ts", "**/*.spec.ts"],
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts", // your current entry
      name: "Waterfall",
      formats: ["es", "umd"],
      fileName: (format) => (format === "umd" ? "well-waterfall.umd.js" : "well-waterfall.es.js"),
    },
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      // Ensure external dependencies are not bundled
      external: [],
      output: {
        globals: {},
      },
    },
  },
  resolve: {
    alias: {
      lib: resolve(__dirname, "src/lib"),
    },
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
});
