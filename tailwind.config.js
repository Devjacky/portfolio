module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // "jack-peach": "#ef9273",
        "jack-coral": "#f67b50",
        "jack-start": "#12232E",
        "jack-end": "#007CC7",
        "jack-scarlett": "#A82810",
        "jack-peach": "#ffe5b4",
        "jack-cream": "#fef9f8",
        "jack-charcoal": "#0d0d0d",
        "jack-text": "#3C403D",
        "jack-green": "#39603D",
        "jack-olive": "#465e63",
        "jack-highlight": "#a3bcb6",
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
