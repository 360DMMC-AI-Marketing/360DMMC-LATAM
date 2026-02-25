/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Associate Sans", "system-ui", "sans-serif"],
        heading: ["Kamerik 105", "Associate Sans", "sans-serif"],
      },
    },
  },
  // tailwind.config.js
  plugins: [require("@tailwindcss/forms")({ strategy: "class" })],
};
