/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#ff4500',
        'support': '#008080',
        'light': '#fffcfa',
        'dark': '#111',
        'grey-dark': '#333',
        'grey-medium': '#898989',
        'grey-light': '#ccc',
        'grey-light-dark': '#eee',
      },
    },
  },
  plugins: [],
}

