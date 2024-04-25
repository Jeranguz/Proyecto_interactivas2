/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#3578E4',
        'secondary' : '#156064',
        'backgroundColor': '#F9FAFB',
        'elements' : '#FFFFFF',
        'textPrimary' : '#313030',
        'textoSecondary' : '#8F8F8F',
        'borderColor' : '#ECEDF0',
      },
      fontFamily: {
       'rubik': ['Rubik','sans-serif'],
      },
    },
  },
  plugins: [],
}

