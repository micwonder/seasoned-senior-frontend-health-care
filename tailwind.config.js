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
        primaryButtonTextColor: '#F9F9F9',
        navItemTextColor: '#020202',
        bannerTextColor: '#5A5A5A',
        footerDescColor: '#8D8D8D',
      },
      fontSize: {
        primaryButtonTextSize: '32px',
        bannerTextSize: '60px',
        footerTextSize: '17px',
        footerDescSize: '16px',
      },
      fontFamily: {
        'sans': ['Ubuntu', 'Helvetica', 'Arial', 'sans-serif'],
        'serif': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'navItem': ['FrutigerLTStd', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'services-banner': 'url("/images/services_banner.png")',
      },
    },
  },
  plugins: [],
}
