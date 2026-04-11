import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html'
    }
  }
})

// Product build configuration
export const productConfig = defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist-products',
    rollupOptions: {
      input: 'index-products.html'
    }
  }
})
