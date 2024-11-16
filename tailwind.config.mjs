/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        back: "##F5F4F0",
        borderPrimary: "#D9D9D9",
        textPrimary: "#1B1B1B",
        textSecondary: "#333",
        textTertiary: "#696969",
        textHeadline: "#E1624F",
        acentBlue: "#0C51A7",
        acentOrange: "#E95E10",
        acentPink: "#E5245E",
        acentPurlple: "#591B98",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
