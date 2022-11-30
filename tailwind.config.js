/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'nunitoSans': 'Nunito Sans,sans-serif',
      'robotoSans': 'Roboto,sans-serif',
    }
  },
  plugins: [],
};
