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
        glassShine: {
          '0%': {
            background: 'linear-gradient(to bottom right, rgba(192, 192, 192, 0.10) 0.62%, rgba(192, 192, 192, 0.40) 47.82%, rgba(192, 192, 192, 0.10) 100%)',
            backgroundColor: 'transparent'
          }
        },
        glassShine2: {
          '25%': {
            background: 'linear-gradient(to bottom right, rgba(192, 192, 192, 0.20) 0.62%, rgba(192, 192, 192, 0.30) 47.82%, rgba(192, 192, 192, 0.20) 100%)',
            backgroundColor: 'transparent'
          }
        },
        glassShine3: {
          '50%': {
            background: 'linear-gradient(to bottom right, rgba(192, 192, 192, 0.30) 0.62%, rgba(192, 192, 192, 0.20) 47.82%, rgba(192, 192, 192, 0.30) 100%)',
            backgroundColor: 'transparent'
          }
        },
        glassShine4: {
          '75%': {
            background: 'linear-gradient(to bottom right, rgba(192, 192, 192, 0.35) 0.62%, rgba(192, 192, 192, 0.15) 47.82%, rgba(192, 192, 192, 0.35) 100%)',
            backgroundColor: 'transparent'
          }
        },
        glassShine5: {
          '100%': {
            background: 'linear-gradient(to bottom right, rgba(192, 192, 192, 0.40) 0.62%, rgba(192, 192, 192, 0.10) 47.82%, rgba(192, 192, 192, 0.40) 100%);'
          }
        },
        glassShineRevert: {
          '0%': {
            background: 'linear-gradient(to bottom right, rgba(192, 192, 192, 0.40) 0.62%, rgba(192, 192, 192, 0.10) 47.82%, rgba(192, 192, 192, 0.40) 100%);',
            backgroundColor: 'transparent'
          }
        },
        glassShineRevert2: {
          '25%': {
            background: 'linear-gradient(to bottom right, rgba(192, 192, 192, 0.35) 0.62%, rgba(192, 192, 192, 0.15) 47.82%, rgba(192, 192, 192, 0.35) 100%)',
            backgroundColor: 'transparent'
          }
        },
        glassShineRevert3: {
          '50%': {
            background: 'linear-gradient(to bottom right, rgba(192, 192, 192, 0.30) 0.62%, rgba(192, 192, 192, 0.20) 47.82%, rgba(192, 192, 192, 0.30) 100%)',
            backgroundColor: 'transparent'
          }
        },
        glassShineRevert4: {
          '75%': {
            background: 'linear-gradient(to bottom right, rgba(192, 192, 192, 0.20) 0.62%, rgba(192, 192, 192, 0.30) 47.82%, rgba(192, 192, 192, 0.20) 100%)',
            backgroundColor: 'transparent'
          }
        },
        glassShineRevert5: {
          '100%': {
            background: 'linear-gradient(to bottom right, rgba(192, 192, 192, 0.10) 0.62%, rgba(192, 192, 192, 0.40) 47.82%, rgba(192, 192, 192, 0.10) 100%);'
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
        'glass_shine': 'glassShine 0.5s ease-in both, glassShine2 0.5s ease-in both, glassShine3 0.5s ease-in both, glassShine4 0.5s ease-in both, glassShine5 0.5s ease-in both',
        'glass_shine_revert': 'glassShineRevert 0.5s ease-in both, glassShineRevert2 0.5s ease-in both, glassShineRevert3 0.5s ease-in both, glassShineRevert4 0.5s ease-in both, glassShineRevert5 0.5s ease-in both',
        'flutuo': 'flutuo 3s ease-in-out infinite'
      }
    },
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif'],
    },
  },
  plugins: []
}

