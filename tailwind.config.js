/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'button-colors-text':"#007bff",
        'link-colors':"#343a40",
      }
    },
  },
  plugins: [],
}

