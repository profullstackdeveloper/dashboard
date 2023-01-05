/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: '#3683FC'
      },
      backgroundImage: {
        'bg-2': 'url("../public/images/bg-2.png")',
        'bg-footer': 'url("../public/images/footer.png")'
      },
      backgroundPosition: {
        'position-1': '0px 375px'
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
