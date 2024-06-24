/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        flyingBird: ["f Flying Bird Regular", "sans-serif"],
        Balonku: ["Balonku", "cursive"],
        VaguelyRetro: ["Vaguely Retro", "sans-serif"],
      },
      backgroundImage: {
        'bg1': "url('/src/assets/images/bg1.png')",
        'bg2': "url('/src/assets/images/bg2.png')",
        'bg3': "url('/src/assets/images/bg3.png')",
        'bg4': "url('/src/assets/images/bg4.png')",
        'bg5': "url('/src/assets/images/bg5.png')",
      }
    },
  },
  plugins: [],
}