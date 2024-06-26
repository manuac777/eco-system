/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      smartphone: '400px',
      lg: '1024px',
      md: '768px',
      sm: '640px'
    },
    extend: {}
  },
  plugins: []
}
