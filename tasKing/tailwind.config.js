/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#331832', //morado oscuro
        'secondary' : '#4E284C', //morado claro
        'backgroundColor': '#E7E3E3',
        'grayElements' : '#E8EEF2',
        'textWhite' : '#FFFFFF',
        'textSecondary' : '#8F8F8F',
        'borderColor' : '#ECEDF0',
        'red77' : '#E43535',
        'border': 'C9C9C9',
        'hourText': '#B4C1C7'
      },
      fontFamily: {
       'rubik': ['Rubik','sans-serif'],
       'bree': ['Bree Serif', 'serif'],
      },
      screens: {
        'laptop': '1230px',
      },
    },
  },
  plugins: [],
}

