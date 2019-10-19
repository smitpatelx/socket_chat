// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'regal-blue' : '#243c5a',
        'primary'    : '#2366ce',
        'primary-100': '#739DDF',
        'primary-200': '#5F8FDB',
        'primary-300': '#4B81D6',
        'primary-400': '#3773D2',
        'primary-500': '#2366CE',
        'primary-600': '#205DBC',
        'primary-700': '#1D54A9',
        'primary-800': '#1A4B96',
      },
      spacing: {
        '72': '27rem',
        '84': '29rem',
        '96': '31rem',
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#2366ce',
      'primary-100': '#739DDF',
      'primary-200': '#5F8FDB',
      'primary-300': '#4B81D6',
      'primary-400': '#3773D2',
      'primary-500': '#2366CE',
      'primary-600': '#205DBC',
      'primary-700': '#1D54A9',
      'primary-800': '#1A4B96',
    }),
    // textColor: theme => ({
    //   ...theme('colors'),
      
    // }),
    boxShadow: {
      'default': '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
      'md': ' 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
      'lg': ' 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
      'xl': ' 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
      'md-e': ' 0 0px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
      'lg-e': ' 0 0px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
      'xl-e': ' 0 0px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, .25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, .3)',
      'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      'outline': '0 0 0 3px rgba(66,153,225,0.5)',
      'outline-primary': '0 0 0 3px rgba(35, 102, 206, 0.5)',
      'outline-error': '0 0 0 3px rgba(229, 62, 62, 0.5)',
      'focus': '0 0 0 3px rgba(66,153,225,0.5)',
      'none': 'none'
    }
  },
  variants: {
    cursor: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.translatey--1': {
          transform: 'translateY(-8rem)',
        },
        '.translatey--2': {
          transform: 'translateY(-10rem)',
        },
        '.translatey--3': {
          transform: 'translateY(-12rem)',
        },
        '.translatey--4': {
          transform: 'translateY(-14rem)',
        },
        '.translatey--5': {
          transform: 'translateY(-16rem)',
        },
      }

      addUtilities(newUtilities, {
        variants: ['responsive', 'hover'],
      })
    },

    function({ addUtilities }) {
      const newUtilities = {
        '.transition-1': {
          transition: 'all .04s ease',
        },
        '.transition-2': {
          transition: 'all 0.5s ease',
        },
        '.transition-3': {
          transition: 'all 0.6s ease',
        },
        '.transition-4': {
          transition: 'all 0.7s ease',
        },
        '.transition-5': {
          transition: 'all 0.8s ease',
        },
      }

      addUtilities(newUtilities, {
        variants: [],
      })
    }
  ]
};
