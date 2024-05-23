/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        violet: '#8A33FD',
        lightViolet: '#af74fc',
        black: '#333333',
        gray: '#3C4242',
        lightGray: '#F6F6F6',
        red: '#FF0000',
        grey: '#807D7E',
        yellow: '#EDD146'
      }
    },
  },
  plugins: [],
}