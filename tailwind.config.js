/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF6838',
          amber: '#F59E0B',
          emerald: '#10B981',
          sky: '#38BDF8',
          purple: '#A855F7',
        },
        dark: {
          900: '#080A0F',
          800: '#0F121A',
          700: '#161B26',
          600: '#242B38',
          500: '#333D4F',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

