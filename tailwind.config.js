/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003CA3',
        primaryBlur: '#548def9d',
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem"
        }
      },
      backgroundImage: {
        'hero': "url('../src/assets/heroBg.png')",
        'measure': "url('../src/assets/Categories.png')",
        'med': "url('../src/assets/Categories2.png')",
        'fourToFour': "url('../src/assets/FourNullFour.png')",
      },
      fontFamily: {
        'body': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

