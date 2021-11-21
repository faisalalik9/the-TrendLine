module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       colors: {
        col1: '#131722',
        col2: '#2a2e39',
        col3: '#18214d',
        col4: '#00c4ff',
        col5: '#26de81'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
