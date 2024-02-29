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
        '5_5': '5.5rem',
        '30': '7.5rem',
        '465px': '465px',
        'asd': "800px",
        'imgCardW': "700px",
        'imgCardH': "600px",
        '1024': '1024px',
      },
      colors: {
        dark1: '#000000',
        dark2: '#09090A',
        dark3: '#101012',
        dark4: '#1F1F22',
        imgButton: '#1D1D22',
        primary500: '#877EFF',
        primary500_h: '#a19afc',
        light2: '#EFEFEF',
        light3: '#7878A3',
        light4: '#5C5C7B',
        yello1: '#FFB620'
      },
      fill: {
        primary500: '#877EFF',
        light2: '#EFEFEF',
      }
    },
  },
  plugins: [],
}