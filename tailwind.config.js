/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald"],
        signature: ["Sacramento"],
      },
      keyframes: {
        blub: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        // hand wave
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
        blub: "blub 7s infinite",
      },
      colors: {
        steelGray: {
          50: "#f4f5fa",
          100: "#e6e8f3",
          200: "#d2d6eb",
          300: "#b3bbdd",
          400: "#8f99cb",
          500: "#737bbe",
          600: "#6163af",
          700: "#5655a0",
          800: "#4d4a83",
          900: "#403f69",
          950: "#252439", // <-
        },
        studio: {
          50: "#eff0fe",
          100: "#e1e3fe",
          200: "#caccfb",
          300: "#a9abf8",
          400: "#8d86f3",
          500: "#7a69eb",
          600: "#6c4dde",
          700: "#6244c5", // <-
          800: "#4d359e",
          900: "#41327d",
          950: "#271d49",
        },
        goldenTainoi: {
          50: "#fff9eb",
          100: "#ffefc6",
          200: "#ffdd88",
          300: "#ffc448", // <-
          400: "#ffad20",
          500: "#f98a07",
          600: "#dd6402",
          700: "#b74306",
          800: "#94330c",
          900: "#7a2b0d",
          950: "#461402",
        },
      },
    },
  },
  plugins: [],
};
