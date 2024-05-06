module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      serif: ["Rubik", "ui-sans-serif"],
      sans: ["Fira Code", "monospace"],
    },
    extend: {
      colors: {
        primary_green: {
          0: "#45B649",
        },
        primary_grey:"#595858"
        ,
        facebook:{
          0: "#1877F2",
        },
        linkedin:{
          0: "#00A0DC",
        },
        twitter:{
          0: "#1DA1F2",
        },
        youtube:{
          0: "#FF0000",
        },

      },
      screens: {
        "3xl": "1600px",
      },
      maxWidth: {
        '1': '29rem',
      }
    },
  },
  plugins: [],
};
