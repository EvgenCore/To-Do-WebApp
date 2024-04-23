/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'verySoftOrange': '#edc7b7',
        'darkModeratePink': '#AC3B61',
        'lightGrayishOrange': '#eee2dc',
        'veryDarkBlue': '#123c69',
        'customGreen': '#607e2d',
      },
    },
  },
  plugins: [],
}

