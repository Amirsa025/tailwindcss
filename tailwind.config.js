const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      padding : {
        "md":"56%",
        "lg":"65"
      },
      backgroundPosition : {
        'left-center' : 'left 0.5rem center'
      },
      fontFamily: {
        IRANSans: ['IRANSans']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        dark : {
          800 : '#232326',
          700:'#323236',
          600:'#3b3b41'
        }
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {transform: 'rotate(-8deg)'},
          '50%': {transform: 'rotate(8deg)'},
        }
      },
    },
  },

  plugins:[
    require('flowbite/plugin'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    plugin(function({ addVariant }) {
      addVariant('label-checked', '&:checked ~ label')
    })

  ]
}
