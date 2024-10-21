/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        primaryTextColor: "var(--primary-text-color)",
        secondaryTextColor: "var(--secondary-text-color)",
        skillsDarkAccent: "var(--skills-dark-accent)",
        skillsLightAccent: "var(--skills-light-accent)",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"], // Overrides the default sans-serif
      },
      backgroundImage: (theme) => ({
        lightThemeGradient: "var(--light-theme-gradient)",
        darkThemeGradient: "var(--dark-theme-gradient)",

        themeBg: "var(--theme-bg)",
      }),
    },
  },
  plugins: [],
};
