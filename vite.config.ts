import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@pages",
        replacement: "/src/pages"
      },
      {
        find: "@assets",
        replacement: "/src/assets"
      },
      {
        find: "@shared",
        replacement: "/src/shared"
      },
      {
        find: "@widgets",
        replacement: "/src/widgets"
      },
      {
        find: "@features",
        replacement: "/src/features"
      }
    ]
  }
})
