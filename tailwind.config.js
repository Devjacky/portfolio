module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        mobile: { raw: "(max-height:768px)" },
      },
      animation: {
        scroll: "scroll 2s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { top: "29%" },
          "15%": { top: "50%" },
          "50%": { top: "50%" },
          "100%": { top: "29%" },
        },
      },
      colors: {
        "jack-peach": "#ef9273",
        "jack-cream": "#fef9f8",
        "jack-charcoal": "#0d0d0d",
        "jack-text": "#3C403D",

        "jack-highlight": "#a8d0e6",
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
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
