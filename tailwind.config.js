/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ffdd',
        "primary-dark": "#000000"
      },
      fontSize: {
        xxxxxxl: '100px'
      }
    },
  },
  plugins: [],
}