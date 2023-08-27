/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkolivegreen: "#425333",
      },
      fontFamily: {
        "sans-serif-collection": "'Sans Serif Collection'",
      },
    },
    fontSize: {
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
