/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'button-colors-text':"#007bff",
        'link-colors':"#343a40",
        'card-colors':"#6c757d",
        'second-card-bg-color':"#0069d9",
        'second-card-border':"#0062cc"
      },
      screens: {
        'xs': '320px',
      },
            
    },
    
  },
  plugins: [],
}

