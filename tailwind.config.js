/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'whale-blue': '#012d3f',
        'purple': '#520a26',
        'egyptian-blue': '#27359c',
        'dark-blue': '#010110',
        'card-blue': '#16152e', //#0F0E21
        'white': '#ffffff'
      },
      backgroundImage: {
        'hero': "url('./assets/images/bg.png')",
      }
    },
  },
  plugins: [],
};
