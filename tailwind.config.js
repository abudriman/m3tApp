/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require('@tailwindcss/line-clamp'),],
}
