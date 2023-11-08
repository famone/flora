/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif']
      },
      //   // width: {
      //   //   'offset': 'calc(100% - 32px)',
      //   // },
      colors: {
        primary: 'var(--primary)',
        primary_2: 'var(--primary_2)',
        primary_light: 'var(--primary_light)',
        dim_dark: 'var(--dim_dark)'
      },
      fontSize: {
        '7xl': '42px'
      }
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1400px',
      xl: '1400px'
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
