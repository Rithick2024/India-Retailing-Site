/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e30613",
        dark: "#111111",
        muted: "#666666",
        border: "#ececec",
        lightbg: "#f8f9fa"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xxs': '0.65rem',
      }
    }
  },
  plugins: []
}
