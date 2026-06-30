/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fff5f5',
          100: '#ffe3e3',
          200: '#ffc9c9',
          300: '#ffa8a8',
          400: '#ff8787',
          500: '#d32f2f', // Brand red from Balaji logo
          600: '#c92a2a',
          700: '#b02a2a',
          800: '#962020',
          900: '#5c0d0d',
        },
        slate: {
          50: '#f3faf5', // Light mint bg
          100: '#e2f3e8',
          200: '#c7e8d3',
          300: '#9fd4b3',
          400: '#6ebb8b',
          500: '#47a269',
          600: '#31824f', // Paragraph text green
          700: '#25663d',
          800: '#1c4f2e',
          900: '#11321d', // Deep forest green titles
        },
        charcoal: {
          50: '#f3faf5',
          900: '#11321d',
          DEFAULT: '#25663d'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-outfit)', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(211, 47, 47, 0.18)',
        'gold-glow-lg': '0 0 35px rgba(211, 47, 47, 0.25)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};
