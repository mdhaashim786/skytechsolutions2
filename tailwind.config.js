/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dde9ff',
          200: '#bcd2ff',
          300: '#8db1ff',
          400: '#5786ff',
          500: '#305dff',
          600: '#1f3ff5',
          700: '#1a30dc',
          800: '#1c2cae',
          900: '#1d2c89',
          950: '#131a52',
        },
      },
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(to right, rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.08) 1px, transparent 1px)",
        'hero-radial':
          'radial-gradient(60% 60% at 50% 0%, rgba(99,102,241,0.25) 0%, rgba(15,23,42,0) 70%)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out both',
        'fade-in': 'fade-in 0.8s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
      boxShadow: {
        glow: '0 0 40px rgba(99, 102, 241, 0.35)',
        'glow-lg': '0 0 60px rgba(99, 102, 241, 0.45)',
        soft: '0 10px 40px -10px rgba(15, 23, 42, 0.15)',
      },
    },
  },
  plugins: [],
}
