/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  build: {
    rollupOptions: {
      output: {
        format: 'es'
      }
    }
  },
  server: {
    mimeTypes: {
      js: 'application/javascript'
    }
  },
  plugins: [],
}
