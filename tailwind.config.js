/** @type {import('tailwindcss').Config} */
const { primaryColors, neutralColors, textColors, borderColor } = require('./src/utils/colors');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ...primaryColors.reduce((acc, cur) => {
          acc[cur.name] = cur.value;
          return acc;
        }, {}),
        ...neutralColors.reduce((acc, cur) => {
          acc[cur.name] = cur.value;
          return acc;
        }, {}),
        ...textColors.reduce((acc, cur) => {
          acc[cur.name] = cur.value;
          return acc;
        }, {}),
        border: borderColor,
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
}

