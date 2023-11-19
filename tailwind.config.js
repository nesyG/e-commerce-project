/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {  
      backgroundColor: theme => ({
       ...theme('colors'),
       'top-bar': '#2F2F2F',
       'cart-btn':'#008421'  
      }),
      textColor: theme => theme('colors'),
      textColor: {
        'top-bar-text': '#F5F5F5',
      },
      fontFamily: {
     'main':['Bebas Neue']
       },
       fontSize: {
        'main-heading': ['72px', '64px'],
      }
    }
  },
  plugins: [],
}

