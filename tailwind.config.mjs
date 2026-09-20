/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Acento unico del portafolio; el valor vive en global.css (--accent)
        // para poder cambiarlo de golpe en claro/oscuro.
        accent: 'rgb(var(--accent) / <alpha-value>)',
        // Azul marino apagado: el color que acompana al blanco y negro.
        navy: {
          50: '#f3f6fa',
          100: '#e5ebf3',
          200: '#c8d5e5',
          300: '#a1b5cf',
          400: '#7191b3',
          500: '#4f6f96',
          600: '#3c5679',
          700: '#2f425e',
          800: '#223044',
          900: '#16202f',
          950: '#0b1220',
        },
        Facebook: '#0866FF',
        X: '#15202B',
        Instagram: '#C90071',
        Linkedin: '#0A66C2',
        Github: '#1F2328',
      },
      fontFamily: {
        // Solo para el logotipo del navbar.
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
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
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
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
