/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'soft-blue-start': '#8CBDD6',
        'soft-blue-middle': '#9BC5DA',
        'soft-blue-end': '#AACDDD', 
      },
      fontFamily: {
        PirataOne: ["Pirata One", "sans-serif"]
      }
      
    },
  },
  plugins: [],
}

