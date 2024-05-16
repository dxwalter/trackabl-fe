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
        300: "#D0D5DD",
      },
      blue: {
        900: "#001F4D",
      },
      primary: "#005EE8",
    },
  },
  plugins: [],
};
