module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Blinker: ['Blinker', 'sans-serif'],
      Bebas: ['Bebas Neue', 'cursive'],
      Alfa: ['Alfa Slab One', 'cursive'],
      ultra: ['Ultra', 'serif'],
    },
    extend: {
      colors: {
        pryClr: "#fffff",
        secClr: "#E7E9FF",
        selectClr: "#0d6efd",
      },
      backgroundColor: {

      },
      backgroundImage: {
        about: "url(/src/assets/backgroundText/about-arcader.png)",
        navbg: "url(/src/assets/backgroundText/navBckg.png)",
        steamer: "url(/src/assets/aboutSteamers.png)",
        banner: "url(/src/assets/banner.png)",
        economy: "url(src/assets/backgroundText/token-economy-bg.jpg)",
        spiral: "url(src/assets/spiral.png)",
      },
    },
  },
  plugins: [],
};
