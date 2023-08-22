import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      lato: ["var(--font-lato)", ...fontFamily.sans],
      averia: ["var(--font-averia)", ...fontFamily.sans],
      actor: ["var(--font-actor)", ...fontFamily.sans],
    },
    colors: {
      black: "#202225",
      white: "#ffffff",
      gray: {
        light: "#f5f5f5",
        dark: "#d9d9d9",
      },
      blue: {
        dark: "#00a8cb",
      },
    },
  },
  plugins: [],
};
export default config;
