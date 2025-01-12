/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(224, 102, 20)',
          hover: 'rgb(204, 92, 18)',
        },
        secondary: {
          DEFAULT: 'rgb(20, 102, 224)',
          hover: 'rgb(18, 92, 204)',
        },
        tertiary: {
          DEFAULT: 'rgb(250, 250, 250)',
          hover: 'rgb(245, 245, 245)',
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};