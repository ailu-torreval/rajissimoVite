/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        header: ["Titan One", "cursive"],
      },
      colors: {
        cyan: "#08B7B3",
        blue: "#104057",
        yellow: "#FCAF3E",
        darkyellow: "#A6680A",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};
