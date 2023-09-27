/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode : 'class',
  theme: {
    extend: {
      inset: {
        'toogle-left': '55%',
        'toogle-top': '4.3px'
      },

      /* tema dark/light */
      colors: {
        light: {
          bg: '#e5e5e5',
          // btn_bg: '#3f3f46',
          // btn_text: '#e5e5e5',
          btn_bg: '#e5e5e5',
          btn_text: '#18181b',
          text: '#18181b',
          // icon_bg: '#3f3f46',
          // icon_color: '#e5e5e5',
          icon_bg: '#e5e5e5',
          icon_color: '#000',
        },
        dark: {
          bg: '#18181b',
          // btn_bg: '#e5e5e5',
          // btn_text: '#18181b',
          btn_bg: '#3f3f46',
          btn_text: '#e5e5e5',
          text: '#e5e5e5',
          // icon_bg: '#e5e5e5',
          // icon_color: '#000',
          icon_bg: '#3f3f46',
          icon_color: '#e5e5e5',
        }
      },

      /* Animations */
      keyframes: {
        typing: {
          'from': { width: '0px', 'border-right': '3px solid'},
          'to': { 'border-right': '3px solid' }
        },
        typing_no_border: {
          'from': { width: '0px', 'border-right': 'none'},
          'to': { 'border-right': 'none' }
        },
        blinking: {
          '50%': { 'border-color': 'transparent' },
        },
        rotate: {
          'from' : { transform: 'rotate(-10deg)' },
          '25%' : { transform: 'rotate(0deg)' },
          '50%' : { transform: 'rotate(10deg)' },
          '100%' : { transform: 'rotate(0deg)' },
        },
        slideInUp: {
          '0%': {
            transform: 'translateY(100%)',
            transform: 'translateY(100%)',
            visibility: 'visible'
          },
          '100%': {
            transform: 'translateY(0)',
            transform: 'translateY(0)'
          }
        },
        slideInUpTransition: {
          '0%': {
            transform: 'translateY(100%)',
            transform: 'translateY(100%)',
            visibility: 'visible',
          },
          '100%': {
            transform: 'translateY(0)',
            transform: 'translateY(0)'
          }
        },
        flutuo: {
          '0%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          },
          '100%': {
            transform: 'translateY(0px)'
          }
        }
    },
      animation: {
        'typing' : 'typing 3s steps(22), blinking 0.5s',
        'typing-no-border' : 'typing_no_border 1s steps(4) infinite',
        'rotate' : 'rotate 0.3s',
        'blinking' : 'blinking 0.5s infinite',
        'slideUp': 'slideInUp 1s both, slideInUpTransition 1s both',
        'flutuo': 'flutuo 3s ease-in-out infinite'
      }
    },
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif'],
      'mono': ['Cutive Mono', 'monospace']
    },
  },
  plugins: []
}

