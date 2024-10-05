/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'soft-blue-start': '#9BC5DA',
        'soft-blue-middle': '#AACDDD',
        'soft-blue-end': '#BAD5E1', 
        'wave-blue': '#8CBDD6',
        'wood1': '#4E403E',
        'wood2': '#564540',
        'wood3': '#5F4B43',
        'wood4': '#675045',
        'wood1': '#4E403E',
      },
      fontFamily: {
        PirataOne: ["Pirata One", "sans-serif"]
      }
      
    },
  },
  plugins: [],
}

