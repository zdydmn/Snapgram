/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '270': '270px',
      },
      colors: {
        dark1: '#000000',
        dark2: '#09090A',
        dark3: '#101012',
        dark4: '#1F1F22',
        primary500: '#877EFF',
        light2: '#EFEFEF',
        light3: '#7878A3'
      },
      fill: {
        primary500: '#877EFF',
        light2: '#EFEFEF',
      }
    },
  },
  plugins: [],
}