/** @type {import('tailwindcss').Config} */
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
      Poppins: ['Poppins', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
      Roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      textColor: {
        Bluedark: '#15264C',
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      sm: { max: '767px' },
      // => @media (max-width: 767px) { ... }
    },
  },
  plugins: [],
};
