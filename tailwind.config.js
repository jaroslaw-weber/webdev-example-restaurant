const colors = require('tailwindcss/colors')

let denim = {
  '50': '#f5fbfd',
  '100': '#e3f8fc',
  '200': '#bbebfa',
  '300': '#8cd8f8',
  '400': '#4db3f7',
  '500': '#1f93eb',
  '600': '#1765eb',
  '700': '#174fcd',
  '800': '#153c99',
  '900': '#123174',
};
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: denim,
        gray: colors.gray,
        black: colors.black,
        white: colors.white
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}