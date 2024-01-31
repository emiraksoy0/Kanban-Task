/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        custom: {
          teal: '#1AB5BC',
        },
        primary: '#01adb5',
        secondary: '#0f141e',
        contrast: '#ffffff',
        success: '#127F5F',
        warning: '#EC8603',
        info: '#1265D0',
        error: '#CC2529',
        background_high: '#FB6E6E',
        background_low: '#DFA874',
        text_high: '#FB6E6E',
        text_low: '#FFC895',
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        'opacity-18': 'rgba(251, 110, 110, 0.18)',
        'opacity-25': 'rgba(223, 168, 116, 0.25)',
      }),
      screens: {
        onlysm: { raw: '(max-width: 767px)' },
      },
    },
  },
  plugins: [],
}
