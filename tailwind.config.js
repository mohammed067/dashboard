/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yel': '#dbfe01',
        customGray: '#efefef',
        smokyWhite: '#f5f5f5',
        bla:"#171717",
        newblack:"#3c3c3c",
        blacknew:"#2c2c2c"
        
        // Add more custom colors if needed#2c2c2c
      },
    },
  },
  plugins: [],
}

