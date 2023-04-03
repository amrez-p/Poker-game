/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["ui-sans-serif", "Lobster Two"],
        playball: ["ui-sans-serif", "Playball"],
      },
      scale: {
        10: "0.1",
        20: "0.2",
      },
    },
  },
  plugins: [],
};
