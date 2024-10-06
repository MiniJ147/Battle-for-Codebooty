/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'soft-blue-start': '#181825',
        'soft-blue-middle': '#1e1e2e',
        'soft-blue-end': '#313244', 
        'crust': '#11111b',
        'wave-blue': '#464862',
        'water-blue-start': '#8bbcd5',
        'water-blue-middle': '#74a8cf',
        'water-blue-end': '#6592c8',
        'overlay-0': '#585b70',

        'wood1': '#4E403E',
        'wood2': '#564540',
        'wood3': '#5F4B43',
        'wood4': '#675045',
      },
      fontFamily: {
        PirataOne: ["Pirata One", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      rotate: {
        '360': '360deg',
      },
    },
  },
  plugins: [],
}
