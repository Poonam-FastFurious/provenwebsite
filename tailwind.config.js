/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        AFPPrimary: "#237DA2",
        AFPPrimaryDark: "#267FA3",
        AFPPrimaryLight: "#E6F4FA",
        AAFGOLDEN: "#926E58",
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
