/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'paragraph': [' "Barlow Condensed" ', 'sans-serif'],
      'Heading': ['Bellefair', 'serif']
    },
    extend: {
      backgroundImage: {
        'home-desktop': "url(/src/assets/home/background-home-desktop.jpg)",
        'home-mobile': "url(/src/assets/home/background-home-mobile.jpg)",
        'home-tablet': "url(/src/assets/home/background-home-tablet.jpg)",
        'crew-desktop': "url(/src/assets/crew/background-crew-desktop.jpg)",
        'crew-mobile': "url(/src/assets/crew/background-crew-mobile.jpg)",
        'crew-tablet': "url(/src/assets/crew/background-crew-tablet.jpg)",
        'destination-desktop': "url(/src/assets/destination/background-destination-desktop.jpg)",
        'destination-mobile': "url(/src/assets/destination/background-destination-mobile.jpg)",
        'destination-tablet': "url(/src/assets/destination/background-destination-tablet.jpg)",
        'technology-desktop': "url(/src/assets/technology/background-technology-desktop.jpg)",
        'technology-mobile': "url(/src/assets/technology/background-technology-mobile.jpg)",
        'technology-tablet': "url(/src/assets/technology/background-technology-tablet.jpg)",
      },
      backgroundColor: {
        'custom-blur': "rgba(255, 255, 255, 0.04)"
      },
      colors: {
        'color-1': '#0B0D17',
        'color-2': '#D0D6F9',
        'color-3': '#FFFFFF'
      }
      
    },
  },
  plugins: [],
}
