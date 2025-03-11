module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '25px',
      '3xl': '50px',
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['28px', '30px'],
      '3xl': ['40px', '40px'],
      '4xl': ['48px', '58px'],
      '8xl': ['55px', '65px'],
      'bigAss': ['79px', '79px'],
    },
    colors: {
      'darkBackground': '#0e0f11',
      'textColorDark': '#F5F5F5',
      'ctaColorDark' : '#BFFB00',
      'ctaColorLight' : '#4D0CFF',
      'lightGray' : '#D9D9D9'
    },
    extend: {
      aspectRatio: {
        '4/5': '4 / 6',
        '3/4': '3 / 4'
      },
      fontSize: {
        14: '14px',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1440: '1440px',
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
    },
  },
  plugins: [],
};