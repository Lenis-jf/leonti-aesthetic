import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://leonti.eu',
      outDir: 'docs'
    })
  ],
  build: {
    outDir: 'docs',
  },
})
