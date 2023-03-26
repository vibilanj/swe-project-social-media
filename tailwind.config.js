/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,j~sx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        socialGreen: 'rgb(5 150 105)',
      },
    },
  },
  plugins: [],
}
