import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#173F22',
        moss: '#496B4B',
        ivory: '#F7F4EE',
        cream: '#EFE5D6',
        clay: '#B76D45',
        ink: '#152019',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'Arial', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(23, 63, 34, 0.12)',
      },
    },
  },
  plugins: [],
} satisfies Config;
