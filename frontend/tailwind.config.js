const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    colors: {
      'white': '#ffffff',
      'darkblue': '#002649',
      'greyblue': '#003147',
      'pinkblue': '#002445',
      'darkpurple': '#200049',
      'browngrey': '#2B2B2B',
    },

    fontFamily: {
      sand: ['Quicksand', "sans-serif"],
    },

    extend: {
      bgGradientDeg: {
        75: '75deg',
      }
    }
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
          {
              'bg-gradient': (angle) => ({
                  'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
              }),
          },
          {
              values: Object.assign(
                  theme('bgGradientDeg', {}),
                  {
                      135: '135deg',
                  }
              )
          }
      )
  })
  ],
}

