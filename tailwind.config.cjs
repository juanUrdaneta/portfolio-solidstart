/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-bone": "#F9F6EE",
        "black-soft": "#141516",
      },
      fontFamily: {
        fragment: ["Fragment", "sans-serif"],
        chivo: ["Chivo", "sans-serif"],
        major: ["Major Mono Display", "sans-serif"],
        general: ["General", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        archivo: ["Archivo Black", "sans-serif"],
        inter: ["InterDisplay", "sans-serif"],
        interText: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
};
