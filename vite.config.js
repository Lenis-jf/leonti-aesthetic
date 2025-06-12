import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/leonti-aesthetic/",
  plugins: [react()],
    build: {
    outDir: 'docs',    // ← Vite dejará los archivos estáticos aquí
  },
})
