import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#C3B6D8",
        black: "#111111",
        "deep-gray": "#767676",
        "light-gray": "#C2C2C2",
        "album-red": "#EB2D41",
        "album-yellow": "#EFB904",
        "album-green": "#2BAB5E",
        "album-purple": "#B2B1D9",
        "window-red": "#FE5F57",
        "window-yellow": "#FEBB2E",
        "window-green": "#27CA42",
        "nightview-top": "#111425",
        "nightview-bottom": "#3751e0",
        road: "#355463",
        light_beam: "#0002",
        taxi_red_light: "#fc3c25",
        taxi_yellow: "#fdd206",
        taxi_white: "#ebebeb",
        taxi_black: "#475b66",
        "music-sheet": "#D6D0C2",
      },
      borderColor: {
        "album-red": "#EB2D41",
        "album-yellow": "#EFB904",
        "album-green": "#2BAB5E",
        "album-purple": "#B2B1D9",
      },
      keyframes: {
        animate: {
          "0%": { opacity: "0", transform: "translateY(0)" },
          "10%, 90%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(-100%)" },
        },
      },
      animation: {
        animate: "animate 1s linear infinite",
        animate_road: "animate_road 0.125s linear infinite",
        animate_taxi: "animate_taxi 5s linear infinite",
      },
      boxShadow: {
        taxi: "-10px 10px rgba(0,0,0,0.1)",
        taxi_red_light: "0 42px #fc3c25",
        taxi_white_light: "0 44px #fff",
        taxi_logo: "0 0 0 1px #0005",
        taxi_i_before: "100px 34px #fdd206",
        taxi_i_after: "100px -34px #fdd206",
      },
    },
  },
  plugins: [],
} satisfies Config;
