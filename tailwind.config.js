/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Keeps your dark mode toggle working perfectly
  content: [
    "./*.html",
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./recipes/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      }
    }
  },
  plugins: [],
}