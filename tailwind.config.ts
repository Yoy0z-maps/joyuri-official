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
      },
    },
  },
  plugins: [],
} satisfies Config;
