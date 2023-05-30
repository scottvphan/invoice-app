/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  define: {
    'process.env': {}
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setup.js',
    coverage: {
      provider: 'c8',
      reporter: ['text', 'json', 'html'],
    },
}
})
