import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgoConfig: {
          floatPrecision: 2,
        },
      },
    }),
  ],
  resolve: { alias: { src: resolve('src/') } },
  test: {
    environment: 'jsdom',
    setupFiles: ['src/setupTests.ts'],
    coverage: {
      exclude: ['*.config.*', '*.d.ts'],
    },
  },
});
