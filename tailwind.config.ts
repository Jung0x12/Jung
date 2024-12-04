import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        beige: {
          DEFAULT: "#E6D9CD",
          light: "#F4EBE6",
        },
        brown: {
          DEFAULT: "#795548",
          dark: "#493628",
          400: "#8D6E63",
          700: "#5D4037",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
