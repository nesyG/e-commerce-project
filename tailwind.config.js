/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js"
  ],
  theme: {
    extend: {  
      backgroundColor: {
       'top-bar': '#2F2F2F',
       'cart-btn':'#008421',
       'shipping': '#F5F5F5',
      },
      textColor: {
        'top-bar-text': '#F5F5F5',
        'hover-orange': '#E0872C',
        'cart-quant': '#008421',
        'hover-a': '#919191'
      },
      fontFamily: {
     'main':['Bebas Neue'],
     'top-bar-1':['Titillium Web']
       },
       fontSize: {
        'main-heading': ['72px', '64px'],
        'summary':['40px', '40px'],
        'product-nav':['24px', '24px'],
        'extra-small':['13px', '16px'],
        'mobile':['10px', '16px'],
        '1.375': ['1.375rem', '1.5rem'],
        '11px':['11px', '16px'],
        '1rem': ['16px', '16px'],
        '0.875':['14px', '24px']
      },
      width: {
        '5/12': '47%',
        '18.375':'18.375rem',
      },
      height: {
        'footer-nav': '21px',
        'header-mob': '4.5rem'
      },
      borderColor: {
        'custom': '#2F2F2F'
       },
      spacing: {
        '12': '3rem'
       }
    }
  },
  plugins: [],
}

