import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dusk: "#0b1020",
        shell: "#111936",
        ember: "#f97316",
        cyan: "#46e5d0",
        pearl: "#f8f5ef",
        signal: "#ffe4b5",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(249, 115, 22, 0.16)",
        tide: "0 18px 60px rgba(70, 229, 208, 0.14)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at top left, rgba(249,115,22,0.16), transparent 35%), radial-gradient(circle at bottom right, rgba(70,229,208,0.14), transparent 32%)",
      },
    },
  },
  plugins: [],
};

export default config;
