/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],


  
  theme: {
    extend: {
      
      fontFamily: {
        pblack: ["Poppins-Black", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        lobold: ["LobsterTwo-Bold", "serif"],
        loregular: ["LobsterTwo-Regular", "serif"],

      }
    },
  },
  plugins: [],
}
