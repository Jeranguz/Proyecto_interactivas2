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
        'textPrimary' : '#333333',
        'textSecondary' : '#8F8F8F',
        'borderColor' : '#ECEDF0',
        'red77' : '#E43535'
      },
      fontFamily: {
       'rubik': ['Rubik','sans-serif'],
      },
    },
  },
  plugins: [],
}

