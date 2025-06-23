/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Facebook: '#0866FF',
        X: '#15202B',
        Instagram: '#C90071',
        Linkedin: '#0A66C2',
        Github: '#1F2328',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-50deg)' },
          '50%': { transform: 'rotate(50deg)' },
        },
        scaleUp: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.85)' },
        },
        moveDiagonal: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(200px, -50px)' },
        },
        moveDiagonal2: {
          '100%, 0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-50px, 140px)' },
        },
        animateCaret: {
          '0%': {opacity: '1'},
          '50%': {opacity: '0'},
          '100%': {opacity: '1'},
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideIn: 'slideIn 0.5s ease-in-out',
        float: 'float 5s ease-in-out infinite',
        wiggle: 'wiggle 3s ease-in-out infinite',
        scaleUp: 'scaleUp 5s ease-in-out infinite',
        moveDiagonal: 'moveDiagonal 7s ease-in-out infinite',
        moveDiagonal2: 'moveDiagonal2 7s ease-in-out infinite',
        animateCaret: 'animateCaret 1s step-end infinite'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}