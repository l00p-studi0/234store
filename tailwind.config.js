/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.js"],
  theme: {
    extend: {},
    colors:{
      red:"#7F599E",
      white:"#ffffff",
      black:"#000000",
      ash:"rgba(0,0,0,0.7)",
      ashh:"rgba(0,0,0,0.2)",
    },
    fontFamily:{
      y: ["Ysabeau","sans-serif"],
      r: ["Raleway","sans-serif"],
      n: ["Nunito Sans","sans-serif"],
    }
  },
  plugins: [],
}

