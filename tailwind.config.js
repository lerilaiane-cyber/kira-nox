/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kira-bg': '#1C223A',
        'kira-gold': '#CDA47B',
        'kira-terra': '#9F4125',
        'kira-cream': '#E5D4B6',
        'kira-dark': '#382020',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}