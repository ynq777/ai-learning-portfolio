/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-orange-start': '#FFE4B5',
        'warm-orange-end': '#FFB347',
        'warm-orange': {
          100: '#FFF8E7',
          200: '#FFE4B5',
          300: '#FFD699',
          400: '#FFC266',
          500: '#FFB347',
          600: '#FF9A2E',
          700: '#FF8C00',
        }
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #FFE4B5 0%, #FFB347 100%)',
        'warm-gradient-reverse': 'linear-gradient(135deg, #FFB347 0%, #FFE4B5 100%)',
      },
      fontFamily: {
        'rounded': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}