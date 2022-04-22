module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        'desat-red': 'hsl(0, 36%, 70%)',
        'soft-red': 'hsl(0, 93%, 68%)',
        'dark-grey-red': 'hsl(0, 6%, 24%)',
        // LINEAR GRADIENT COLORS
        'pure-white': 'hsl(0,0%,100%)',
        'light-pink': 'hsl(0,100%, 98%)',
        'desat-pink': 'hsl(0,80%,86%)',
        'soft-pink': 'hsl(0, 74%, 74%)',
      },
    },
  },
  plugins: [],
};
