const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: ["production", "staging"].includes(process.env.NODE_ENV),
    content: [
      './app/views/**/*.html.erb',
      './app/helpers/**/*.rb',
      './app/javascript/**/*.js',
    ],
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
