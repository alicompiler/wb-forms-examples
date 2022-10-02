/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'safelist.txt',
    './node_modules/wb-forms-tailwindcss/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  important: '.tailwind',
  theme: {
    colors: {
      ...colors,
      primary: colors.indigo,
      secondary: colors.green,
      error: colors.red,
      warning: colors.amber,
      transparent: '#0000',
    },
    extend: {
      width: {
        '200': '200px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};
