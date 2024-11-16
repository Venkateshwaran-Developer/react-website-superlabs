/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '400px',
      // => @media (min-width: 576px) { ... }

      'md': '650px',
      // => @media (min-width: 960px) { ... }

      'lg': '1000px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      height:{
        '128': '35rem',
        '100':'30rem',
      },
      padding:{
        '128': '30rem',
      }
    },
  },
  plugins: [],
  
}