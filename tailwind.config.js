/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      lato: ['LatoRegular', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      arcaMajoraBold: ["'Arca Majora 3 Bold'"],
      arcaMajoraHeavy: ["'Arca Majora 3 Heavy'"],
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        Bluedark: '#15264C',
        primary: '#11B6E3',
        card: {
          primary: '#e6f2f5',
        }
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      // max-width
      maxWidth: {
        '8xl': '1440px',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '17': 'repeat(17, minmax(0, 1fr))',
      }
    },
    screens: {
      '3xl': { min: '1536px' },
      // => @media (min-width: 1536px) { ... }
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }
      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }
      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }
      md: { max: '989px' },
      // => @media (max-width: 989px) { ... }
      sm: { max: '767px' },
      // => @media (max-width: 767px) { ... }
      xs: { max: '639px' },
      // => @media (max-width: 640px) { ... }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
};
