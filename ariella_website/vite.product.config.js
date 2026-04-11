import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: 'product',
  css: {
    postcss: './postcss.config.js'
  },
  build: {
    outDir: '../dist-products',
    rollupOptions: {
      input: 'product/index.html'
    }
  },
  server: {
    port: 3001,
    host: '0.0.0.0'
  }
})
