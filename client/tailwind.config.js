/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-text':'#e6edf3',
        'secondary-text':'#6d8d97',
        'primary-bg':"#0d1117",
        'secondary-bg':"#21262d",
        'primary-btn':"#f46f22",
        'primary-hover-btn':"#E99869",
        'secondary-btn':"#0d1117"
      }
    },
  },
  plugins: [],
}

