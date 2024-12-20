/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'serif': ['Cormorant Infant'],
      'roboto': ['Roboto'],
      'oswald':['Oswald'],
      'psans':['Public Sans'],
      
    }
  },
  plugins: [],
}

