/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "480px",
      table: "768px",
      lg: "991px",
      1024: "1024px",
      desktop: "1440px",
      desktop: "1440px",
    },

    container: {
      center: true,
    },
    extend: {
      colors: {
        black: "#010101",
        grayPrimary: "#16161a",
        graySecondary: "#72757e",
        orange: "#f25f4c",
        white: "#fffffe",
        purple: "#7f5af0"
      },
    },
  },
  plugins: [],
};
