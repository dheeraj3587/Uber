/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'uber-move-text': ['Uber-Move-Text', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


