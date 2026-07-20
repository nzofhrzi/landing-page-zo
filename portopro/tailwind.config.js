/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        board: {
          DEFAULT: '#16241F',
          surface: '#1E332B',
          line: '#2C4038',
        },
        chalk: '#EDE8DC',
        muted: '#93AA9E',
        amber: '#D8A94D',
        teal: '#6FA8A0',
        rust: '#C1533B',
      },
      fontFamily: {
        display: ['"Source Serif 4"', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(237,232,220,0.05) 1px, transparent 0)",
      },
      backgroundSize: {
        grain: '18px 18px',
      },
    },
  },
  plugins: [],
}
