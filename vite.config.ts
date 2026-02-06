import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(() => ({
  plugins: [
    react(),
    tailwindcss()
  ],
  // base: mode === 'production' ? '/ParserLab/' : '/',
  base: '/ParserLab',
  optimizeDeps: {
    exclude: ['antlr4']
  }
}))
