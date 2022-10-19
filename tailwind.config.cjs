/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      },
      spacing: {
        lg: '55rem',
        textbox: '36.3rem',
        sectwo: '21rem',
        18: '4.5rem'
      }
    },
  },
  plugins: [require("daisyui")],
};
