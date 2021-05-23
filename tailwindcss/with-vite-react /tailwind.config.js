module.exports = {
  purge: {
    enable: true,
    content: ['./src/**/*.jsx', './index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#3fbaeb',
          DEFAULT: '#0fa9e6',
          dark: '#0c87b8',
        },
      },
      fontFamily: {
        headline: 'Poppins, sans-serif', // font-headline
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
