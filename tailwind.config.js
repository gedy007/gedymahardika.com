/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {},
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};