/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A961',
          light: '#E5C477',
          dark: '#A88B45',
          muted: '#8B7355',
        },
        brand: {
          bg: '#0D0D0D',
          surface: '#161616',
          surface2: '#1E1E1E',
          surface3: '#252525',
          border: 'rgba(201,169,97,0.15)',
          text: '#E0E0E0',
          muted: '#888888',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
