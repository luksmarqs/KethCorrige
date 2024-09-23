const { Montserrat, Roboto, Pangolin } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage: {
      'imgconfete': "url('src/assets/confeteDourado.png')"
    },
    extend: {
      rotate: {
        '10': '10deg',
        '5': '5deg',
        '7': '7deg',
      },
      colors: {
        'darkBlack': '#000000',  
        'lightBlack': '#1e1e1e',
        'darkBlue': '#0e9c8d',
        'lightBlue': '#1ce5d2',
        'gold': '#ffd700',
        'white': '#ffffff',
        }
      },
    },
  plugins: [],
}
