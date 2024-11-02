import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@screens",
        replacement: "/src/screens"
      },
      {
        find: "@assets",
        replacement: "/src/assets"
      },
      {
        find: "@shared",
        replacement: "/src/shared"
      }
    ]
  }
})
