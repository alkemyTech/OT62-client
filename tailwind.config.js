/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#7E9AFD',
        'dark-blue': '#0038FF',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
