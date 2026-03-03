/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4B0082',
          hover: '#5B109E',
          light: '#6B21A8',
        },
        accent: {
          DEFAULT: '#FF8C00',
          red: '#FF4500',
        },
        heading: '#1A1A1A',
        paragraph: '#666666',
        muted: '#999999',
        surface: '#F8F9FA',
        'surface-alt': '#F1F3F5',
        dark: '#0D0D1A',
        'dark-card': '#1A1A2E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(90deg, #4B0082 0%, #FF4500 100%)',
        'hero-gradient': 'radial-gradient(circle at top, rgba(75, 0, 130, 0.1) 0%, transparent 70%)',
      },
      borderRadius: {
        'DEFAULT': '8px',
      },
    },
  },
  plugins: [],
}
