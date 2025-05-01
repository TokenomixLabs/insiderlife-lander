
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    historyApiFallback: true
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
    // Force clean output directory
    emptyOutDir: true,
    // Generate sourcemaps only in development
    sourcemap: mode === 'development',
    // Disable code splitting for SPA
    cssCodeSplit: false,
    rollupOptions: {
      external: ['@vimeo/player'],
      output: {
        // Use simple names without hashing to avoid cache issues
        entryFileNames: 'assets/main.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        // Combine all chunks into a single file for easier loading
        manualChunks: () => 'app'
      }
    }
  }
}));
