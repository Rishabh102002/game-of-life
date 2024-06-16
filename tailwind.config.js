/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotic: ["Orbitron", "sans-serif"],
      },
      colors: {
        mygreen: "#66ff33",
      },
    },
  },
  plugins: [],
};
