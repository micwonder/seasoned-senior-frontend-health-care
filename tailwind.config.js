/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CB5A6F',
        primaryBgColor: '#EBEBEB',
        secondaryBgColor: '#FFFFFF',
        sectionBgColor: '#F5F5F5',
        primaryButtonTextColor: '#F9F9F9',
        navItemTextColor: '#020202',
        bannerTextColor: '#5A5A5A',
        footerDescColor: '#8D8D8D',
        dashboardBgColor: '#F2F1F1',
        dashboardDecColor: '#D2D2D2',
      },
      fontSize: {
        bigPrimaryButtonTextSize: '32px',
        smallPrimaryButtonTextSize: '20px',
        bannerTextSize: '60px',
        footerTextSize: '17px',
        footerDescSize: '16px',
        adTitleBigSize: '45px',
        adTitleSmallSize: '25px',
        adDescBigSize: '32px',
        adDescSmallSize: '20px',
      },
      fontFamily: {
        'sans': ['Ubuntu', 'Helvetica', 'Arial', 'sans-serif'],
        'serif': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'arial': ['FrutigerLTStd', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'services-banner': 'url("/images/services_banner.png")',
      },
      screens: {
        'sm': { 'min': '0px', 'max': '639px' },
        'md': { 'min': '640px', 'max': '959px' },
        'lg': { 'min': '960px', 'max': '1169px' },
        'xl': { 'min': '1170px', 'max': '1375px' },
        '2xl': { 'min': '1376px', 'max': '1499px' },
        '3xl': { 'min': '1500px', 'max': '1750px' },
        '4xl': { 'min': '1750px' },
      }
    },
  },
  plugins: [],
}
