/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
      },
      backgroundImage: {
        banner: "url('..src/image/banner.jpeg')",
      },
    },
  },
  plugins: [],
};
