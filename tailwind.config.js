/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 375px) { ... }

      md: "640px",
      // => @media (min-width: 640px) { ... }

      lg: "768px",
      // => @media (min-width: 768px) { ... }

      xl: "1024px",
      // => @media (min-width: 1024px) { ... }

      "2xl": "1280px",
      // => @media (min-width: 1280px) { ... }

      "3xl": "1440px",
      // => @media (min-width: 1440px) { ... }

      "4xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "5xl": "1650px",
      // => @media (min-width: 1650px) { ... }
    },
    extend: {},
    colors: {
      "nav-color": "#151515",
      white: "#FFF",
      grey: {
        50: "#F9FAFB",
        100: "#F2F4F7",
        150: "#EAECF0",
        200: "#F2F4F7",
        300: "#D0D5DD",
        500: "#667085",
        600: "#475467",
        700: "#6E767A",
      },
      blue: {
        50: "#F0F6FF",
        400: "#2A79EC",
        500: "#005EE8",
        600: "#0753c4",
        700: "#004EC1",
        900: "#001F4D",
      },
      navyBlue: {
        900: "#101828",
      },
      primary: "#005EE8",
      green: {
        500: "#12B76A",
        600: "#039855",
      },
      red: {
        500: "#F04438",
        600: "#D92D20",
      },
      warning: {
        600: "#DC6803",
      },
    },
  },
  plugins: [],
};
