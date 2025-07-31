import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        accordion: 'accordion.html',
        alert: 'alert.html',
        carousel:  'carousel.html',
        offcanvas: 'offcanvas.html',
      },
    },
  },
})

