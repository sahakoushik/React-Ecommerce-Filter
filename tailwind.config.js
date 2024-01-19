/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '590px',
      'tab': '890px',
      'desktop':'1200px',
      'monitor':'1500px'
    },
    extend: {},
  },
  plugins: [],
}

