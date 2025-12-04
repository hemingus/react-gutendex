/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",            // Vite root HTML
    "./src/**/*.{js,ts,jsx,tsx}" // All your React/TSX components
  ],
  theme: {
    extend: {
      keyframes: {
        // custom spin animation
        spin360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        blink: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' }
        },
        spin3d: {
          "0%":   { transform: "rotate3d(1, 1, 1, 0deg)" },
          "100%": { transform: "rotate3d(1, 1, 1, 360deg)" }
        },
        // example: vertical bounce
        bounceY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'spin-slow': 'spin360 10s linear infinite',
        'blink-slow': 'blink 2s linear var(--delay, 0s) infinite',
        'spin-blink': 'spin360 10s linear infinite, blink 3s linear infinite',
        'bounce-slow': 'bounceY 1s ease-in-out infinite',
        'spin3d': "spin3d 2.5s linear infinite"
      }
    }
  },
  plugins: [],
}

