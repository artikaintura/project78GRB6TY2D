/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        skybluepurple:{
          DEFAULT:'#7B68EE'
        },
      },
        },
      },
  variants:{
    extends:{
      boxShadow: {
        'right-bottom': '2px 2px 0px rgba(0, 0, 0, 0.1)', // Right shadow: 4px, Bottom shadow: 2px
      },

    },
  },
  plugins: [
   
  ],
}

