import type { Config } from "tailwindcss";

// Brand palette from the MO'ED brand board (V1).
// Contrast rule: gold (#BF8E4A) never carries text on cream — decoration only.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: "#F4ECDF", deep: "#EADFCC", line: "#DCCDB4" },
        burgundy: { DEFAULT: "#591D1F", deep: "#47161A" },
        gold: { DEFAULT: "#BF8E4A", light: "#F1C488" },
        ink: { DEFAULT: "#2A2118", soft: "#3A2E22", muted: "#6B5A47" },
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: { content: "72rem" },
    },
  },
  plugins: [],
};
export default config;
