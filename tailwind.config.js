/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        'primary' : '#B4C1C7',
        'secondary' : '#156064',
        'backgroundColor': '#F9FAFB',
        'elements' : '#FFFFFF',
        'textPrimary' : '#313030',
        'textoSecondary' : '#8F8F8F',
        'borderColor' : '#ECEDF0',
      },
    },
  },
  plugins: [],
}

