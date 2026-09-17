/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Cormorant Garamond"', "sans-serif"],
      serif: ['"Cormorant Garamond"', "serif"],
      heading: ['"Beth Ellen"', "serif"],
    },
    extend: {
      colors: {
        accent: "#85BDCC",
        background: "#FFFFF",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
