/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-green': '#E1F6FF',
        'custom-bg-gray': '#2A3F58',
        'primary-1': '#0C213C',
        'bg-light': '#F4F4F4',
        'page-bg': '#F5F6FA',
        'optional-1': '#5C7E8E',
        'yellow-1': '#FBBC05',
        'grey-1': '#959595',
        'green-1': '#00B69B',
        'reviewbar-bg': '#F7EAE2',
        'secondary-1': '#2A3F58',
        color1: '#6C8194',
        color2: '#F5F5F5',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '3xl': ['1.88rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
    },
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
