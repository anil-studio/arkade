import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  server: {
    cors: true,
  },
  resolve: {
    alias: {
      '/app.js': resolve(__dirname, 'src/app.js'),
    },
  },
  build: {
    outDir: 'dist/src',
    rollupOptions: {
      input: resolve(__dirname, 'src/app.js'),
      output: {
        entryFileNames: 'app.js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
})
