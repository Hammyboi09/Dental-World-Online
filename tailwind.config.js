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
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      minHeight: {
        'screen-75': '75vh',
        'screen-85': '85vh',
      },
    },
  },
  plugins: [],
};