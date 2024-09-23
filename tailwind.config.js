/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      lato: ["LatoRegular", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      arcaMajoraBold: ["'Arca Majora 3 Bold'"],
      arcaMajoraHeavy: ["'Arca Majora 3 Heavy'"],
      sans: [
        "Montserrat-Regular",
        "Montserrat-bold",
        "Montserrat-SemiBold",
        "Montserrat-Medium",
        "sans-serif",
      ],
      Inter: ["Inter-Regular", "sans-serif"],
      barlowRegular: ["Barlow-regular", "sans-serif"],
      barlowBold: ["Barlow-bold", "sans-serif"], 
      barlowSemiBold: ["Barlow-SemiBold", "sans-serif"], 
    },
    extend: {
      colors: {
        Bluedark: "#15264C",
        primary: "#11B6E3",
        blue: {
          pb50: "#F0FAFF",
          pb100: "#E0F5FE",
          pb200: "#BAECFD",
          pb300: "#7EDEFB",
          pb400: "#3ACEF8",
          pb500: "#1BC0F0",
          pb600: "#0495C6",
          pb700: "#0777A0",
          pb800: "#076484",
          pb900: "#0D526D",
          pb950: "#093549",
        },
      },

      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },

      // max-width
      maxWidth: {
        "8xl": "1440px",
      },
      keyframes: {
        myanimation: {
          "0%": { transform: "translateY(-20%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-down": "myanimation 0.6s ease",
      },
    },
    screens: {
      "3xl": { max: "1536px" },
      // => @media (min-width: 1536px) { ... }
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      md: { max: "989px" },
      // => @media (max-width: 989px) { ... }
      sm: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      xs: { max: "639px" },
      // => @media (max-width: 640px) { ... }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
};
