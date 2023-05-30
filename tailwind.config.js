/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        indigo: '#629DD1',
        github: '#4078C0',
        twitter: '#1da1f2',
        linkedin: '#2867B2',
        gmail: '#D44638',
      },
    },
    fontFamily: {
      sans: ['Roboto', 'Helvetica', 'sans-serif'],
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled']
  },
  plugins: [],
}


