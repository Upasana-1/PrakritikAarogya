/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/templates/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customGreen: '#e1f7d5',
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        lg: '4px 4px 6px rgba(0, 0, 0, 0.9)',
      },
    },
  },
  plugins: [],
}

