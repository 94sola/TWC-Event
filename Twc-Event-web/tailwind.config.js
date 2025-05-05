/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 4s infinite',
        'bounce-slower': 'bounce 6s infinite',
        'float': 'float 8s ease-in-out infinite',
        'float2': 'float2 10s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-slower': 'float2 14s ease-in-out infinite',
        'birthdayConfetti': 'birthdayConfetti 6s ease-in-out infinite',
        'weddingSparkle': 'weddingSparkle 5s linear infinite',
        'softGlow': 'softGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        birthdayConfetti: {
          '0%, 100%': { transform: 'translateY(0)', opacity: 0.8 },
          '50%': { transform: 'translateY(100%)', opacity: 0.2 },
        },
        weddingSparkle: {
          '0%, 100%': { background: 'radial-gradient(circle, #fff5, transparent)' },
          '50%': { background: 'radial-gradient(circle, #fffa, transparent)' },
        },
        softGlow: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 0.9 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
