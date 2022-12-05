module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
    mode:'jit',
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '3xl': '1400',

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    maxWidth: {
      min: '375px',
    },
    minWidth: {
      min: '400px',
    },
    minHeight: {
      3.5: '60px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
