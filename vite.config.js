import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        accordion: path.resolve(__dirname, 'accordion.html'),
        alert: path.resolve(__dirname, 'alert.html'),
        carousel: path.resolve(__dirname, 'carousel.html'),
        offcanvas: path.resolve(__dirname, 'offcanvas.html'),
      },
    },
  },
})
