/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: '#3683FC'
      },
      backgroundImage: {
        'bg-2': 'url("../public/images/bg-2.png")'
      },
      keyframes: {
        carousel: {
          'from': {width: '100px'},
          'to': {width: '200px'}
        }
      },
      animation: {
        carousel: 'carousel 1s ease 1'
      }
    },
  },
  plugins: [],
}
