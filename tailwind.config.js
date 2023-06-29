/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      darkest: "var(--darkest)",
      dark: "var(--dark)",
      light: "var(--light)",
      lightest: "var(--lightest)",
      accent: "var(--accent)",
      mid: "var(--mid)",
    },
    extend: {},
  },
  plugins: [],
};
