/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      darkMode: 'class',
      dark: 'class',
      colors: {
        'primary': '#0D6EFD',
        'primaryLight': '#EBF3FF',
        'secondary': '#5D9DFD',
        'headingColor': '#252525',
        'textColor': '#333333',
      }
    },
  },
  plugins: [],
});