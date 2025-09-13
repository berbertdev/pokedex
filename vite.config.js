import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/pokedex/' // 👈 isso garante que os assets carreguem certo no GitHub Pages
})
