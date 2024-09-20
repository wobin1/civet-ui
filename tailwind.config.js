/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#101928',
        secondary: '#FFECE5',
        secondarytext: '#F56630',
        bggrey: '#F0F0F0',
        bgwhite: '#FFFFFF',
        dangerbg: '#FBEAE9',
        dangertext: '#CB1A14'
      }
    },
  },
  plugins: [],
}