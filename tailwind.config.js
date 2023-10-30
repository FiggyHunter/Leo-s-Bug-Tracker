const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} **/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.45rem",
      "2xl": "1.75rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      width: {
        "70p": "70%",
        "75p": "75%",
      },
      colors: {
        accent: {
          1: "var(--color-accent1)",
          2: "var(--color-accent2)",
        },
        bkg: "var(--color-bkg)",
        content: "var(--color-content)",
        transparentFill: "var(--input-fill)",
      },
      fontFamily: {
        onest: ["Onest", "sans-serif"],
      },
    },
  },
  plugins: [],
};
