/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        lg: '1440px',
      },
      backgroundImage: {
        'small': "url('../../assets/bg-mobile.svg')",
        'large': "url('../../assets/bg-desktop.svg')",
      },
      colors: {
        violet: 'hsl(257, 40%, 49%)',
        'soft-magenta': 'hsl(300, 69%, 71%)',
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
        pink: 'hsl(322, 100%, 66%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'base': '1rem',
        'xl': '1.5rem',
        '2xl': '2.5rem'
      },
      borderRadius: {
        '3xl': '1.75rem',
      },
      boxShadow: {
        'DEFAULT': '1px 3px 5px hsla(0, 0%, 0%, 0.269022)',
      }
    },
  },
  plugins: [],
}