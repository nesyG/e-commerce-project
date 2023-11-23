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
       'cart-btn':'#008421',
       'shipping': '#F5F5F5',
      }),
      textColor: theme => theme('colors'),
      textColor: {
        'top-bar-text': '#F5F5F5',
        'hover-orange': '#E0872C',
        'cart-quant': '#008421',
      },
      fontFamily: {
     'main':['Bebas Neue'],
     'top-bar-1':['Titillium Web']
       },
       fontSize: {
        'main-heading': ['72px', '64px'],
        'summary':['40px', '40px'],
        'product-nav':['24px', '24px'],
        'extra-small':['13px', '16px']
      },
      width: {
        '5/12': '47%',
        '18.375':'18.375rem',
      },
      height: {
        'footer-nav': '21px',
      }
    }
  },
  plugins: [],
}

