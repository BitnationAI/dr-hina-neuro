/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#0F2747',
          700: '#0A1C30',
          800: '#071220',
          100: '#E6EBF5',
          50: '#F3F5FA',
        },
        secondary: {
          500: '#2C6FB7',
          600: '#255E90',
        },
        accent: {
          500: '#46B6B2',
          600: '#3C9A96',
        },
        background: {
          DEFAULT: '#FAFBFC',
        },
        card: {
          DEFAULT: '#FFFFFF',
        },
        text: {
          DEFAULT: '#1E293B', // dark slate
          600: '#334155',
          500: '#475569',
          400: '#64748B',
        },
        border: {
          DEFAULT: '#E2E8F0', // very light grey
          200: '#CBD5E1',
        },
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        cal: ['Cal Sans', 'system-ui', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}