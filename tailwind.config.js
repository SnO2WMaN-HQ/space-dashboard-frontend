module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,jsx}'],
  theme: {
    extend: {
      colors: {
        twitter: {1: '#1da1f2'},
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
};
