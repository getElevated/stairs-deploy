/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
       "Primary":"#5BBE82",
       "black":"#2B333A"
      },
      animation: {
        shimmer: "shimmer 2s linear infinite"
    },
    keyframes: {
      shimmer: {
        from: {
          "backgroundPosition": "0 0"
        },
        to: {
          "backgroundPosition": "-200% 0"
        }
      }
    },
      bg: {
        top: 'url("/assets/top.webp")',
        bottom: 'url("/img/checkmark.png")'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["inter", "sans"],
        Nunito:["Nunito" , "sans-serif"],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};













