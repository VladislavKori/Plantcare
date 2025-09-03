import { defineConfig } from 'vite'
import svgr from "vite-plugin-svgr";
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "127.0.0.1"
  },
  plugins: [react(), svgr()],
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
