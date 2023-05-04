/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.js"],
  theme: {
    extend: {},
    colors:{
      red:"#dc2626",
      white:"#ffffff",
      black:"#000000",
      ash:"rgba(0,0,0,0.7)",
      ashh:"rgba(0,0,0,0.3)",
    },
    fontFamily:{
      y: ["Ysabeau","sans-serif"]
    }
  },
  plugins: [],
}

