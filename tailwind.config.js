/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      'utama': "#F1E6DB",
      'navutama': "#F4EDE4",
      'white': "#ffffff",
      'darks': "#202023",
    },
    extend: {
      fontFamily: {
        burtons: "burtons",
        montbold: "montbold",
        mplusmed: "mplusmed",
        mplusbold: "mplusbold",
      }
    },
  },
  plugins: [],
}