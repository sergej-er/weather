module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ecf0f1',
          dark: '#1C1D22',
        },
        secondary: {
          DEFAULT: '#bdc3c7',
          dark: '#303038',
        },
      },
      fontFamily: {
        body: ['Poppins', 'Arial', 'sans-serif'],
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
        size: 'width, height',
      },
      spacing: {
        'full-no-header': 'calc(100vh - 64px)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
