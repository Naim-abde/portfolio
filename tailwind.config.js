 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#fbbf24',
        danger: '#ef4444',
        dark: '#0f172a',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
