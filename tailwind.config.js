const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

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
        red: "#ff0000",
      },
      fontFamily: {
        onest: ["Onest", "sans-serif"],
      },
      height: {
        screen: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
        fill: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addUtilities({
        ".h-my-screen": {
          height: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
        },
        ".min-h-half": {
          minHeight: ["50%"],
        },
        ".max-h-half": {
          maxHeight: ["50%"],
        },
      });
    }),
  ],
};
