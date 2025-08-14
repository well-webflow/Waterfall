import { defineConfig } from 'vite';
import { resolve } from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Waterfall',
      formats: ['umd'],
      fileName: () => 'index.js'
    },
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      // Ensure external dependencies are not bundled
      external: [],
      output: {
        globals: {}
      }
    }
  },
  resolve: {
    alias: {
      'lib': resolve(__dirname, 'src/lib')
    }
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version)
  }
});