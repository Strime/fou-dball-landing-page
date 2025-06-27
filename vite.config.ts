import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'assets',
  base: process.env.NODE_ENV === 'production' ? '/fou-dball-landing-page/' : '/',
  build: {
    outDir: 'dist'
  }
})