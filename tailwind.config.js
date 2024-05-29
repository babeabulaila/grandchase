/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gray': '#919191',
      'lightGray': '#d9d9d9',
      'mediumGray': '#9f9f9f',
      'darkGray': '#545454',
      'green': '#0b8037',
    },
    extend: {},
  },
  plugins: [],
}
