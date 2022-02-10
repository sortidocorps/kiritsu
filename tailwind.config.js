module.exports = {
  content: ["./dist/*.html", "./src/style.css", "./dist/main.js"],
  darkMode: "class", // or 'media' or 'class'
  plugins: [],
  theme: {
    fontFamily: {
      "nunito-bold": ["nunito-bold"],
      "nunito-regular": ["nunito-regular"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "kiritsu-back": "url('images/kiritsu-back.jpg')",
        slanted: "url('images/slanted-gradient.svg')",
        liquid: "url('images/liquid-cheese.svg')",
        spectrum: "url('images/spectrum-gradient.svg')",
        dragon: "url('images/dragon-scales.svg')",
        quantum: "url('images/quantum-gradient.svg')",
        rose: "url('images/rose-petals.svg')",
        tristan: "url('images/tristan.jpg')",
      }),
      colors: {
        primary: "#2A6998",
        secondary: "#103449",
        tertiary: "#7FB3D1",
        formBackground: "#73D48C",
        formFieldBorder: "#26547C",
        formButtonBackground: "#EF476F",
      },
      width: {
        495: "495px",
      },
      height: {
        285: "285px",
      },
    },
  },
};
