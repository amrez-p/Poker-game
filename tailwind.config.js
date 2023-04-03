/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["ui-sans-serif", "Lobster Two"],
      },
      scale: {
        10: "0.1",
        20: "0.2",
      },
    },
  },
  plugins: [],
};
