/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        colorBlueApp: "#29ABCA",
        ashColor: "#1E1E1E",
        appColor: "#1d676a",
        appColorLight: "#1d9895",
        blackColorLight: "#1a1a1a",
        blackColorLight2: "#404040",
        blackColorLight3: "#d9d9d9",
        navy: {
          800: '#1a1f37',
          900: '#0f1225',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 0.2 },
        },
      },
    },
  },
  plugins: [],
};