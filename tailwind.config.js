/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0C0F13',
        graphite: '#151A20',
        slate2: '#222932',
        bone: '#F2EFE9',
        mist: '#9BA4AE',
        teal: { DEFAULT: '#3CC4D2', deep: '#1E8E9A', soft: '#BDEBF0' },
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'Didot', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
