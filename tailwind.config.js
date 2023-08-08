/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
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

