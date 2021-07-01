module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "jack-peach": "#ef9273",
        "jack-cream": "#fef9f8",
        "jack-charcoal": "#0d0d0d",
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
