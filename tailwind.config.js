/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_white: "#F9F9F9",
        bg_black: "#1F1F1F",
        text_white: "#d9d9d9",
        text_black: "#444",
        text_important_white: "#f5f5f5",
        text_important_black: "#111",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
