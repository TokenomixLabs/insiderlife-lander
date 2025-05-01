
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Clean output directory before building
    emptyOutDir: true,
    // Disable minification for debugging
    minify: false,
    sourcemap: true,
    // Use simple file naming for debugging
    rollupOptions: {
      external: ['@vimeo/player'],
      output: {
        manualChunks: undefined
      }
    }
  }
}));
