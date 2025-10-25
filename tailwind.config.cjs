/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        surface: "#1e293b",
        accent: "#6366f1",
      },
    },
  },
  plugins: [],
};

