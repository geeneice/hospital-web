/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px',  // Extra small devices (phones, <576px)
        'sm': '576px',  // Small devices (phones, ≥576px)
        'md': '768px',  // Medium devices (tablets, ≥768px)
        'lg': '992px',  // Large devices (desktops, ≥992px)
        'xl': '1200px', // Extra large devices (large desktops, ≥1200px)
        '2xl': '1400px' // Extra extra large devices (larger desktops, ≥1400px)
      }
    },
  },
  plugins: [],
}

