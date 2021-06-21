module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "35px": "35px",
        "25px": "25px",
        "60px": "60px",
        "4/9":"44%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
