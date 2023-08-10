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
          btn_bg: '#3f3f46',
          btn_text: '#e5e5e5',
          text: '#18181b',
          icon_bg: '#3f3f46',
          icon_color: '#e5e5e5'
        },
        dark: {
          bg: '#18181b',
          btn_bg: '#e5e5e5',
          btn_text: '#18181b',
          text: '#e5e5e5',
          icon_bg: '#e5e5e5',
          icon_color: '#000'
        }
      },

      /* Animations */
      keyframes: {
        typing: {
          'from': { width: '0px', 'border-right': '3px solid'},
          'to': { 'border-right': '3px solid' }
        },
        blinking: {
          '50%': { 'border-color': 'transparent' },
        },
        rotate: {
          'from' : { transform: 'rotate(-10deg)' },
          '25%' : { transform: 'rotate(0deg)' },
          '50%' : { transform: 'rotate(10deg)' },
          '100%' : { transform: 'rotate(0deg)' },
        }
      },
      animation: {
        'typing' : 'typing 3s steps(22), blinking 0.5s',
        'rotate' : 'rotate 0.3s',
      }
    },
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif'],
    },
  },
  plugins: [],
}

