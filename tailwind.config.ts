// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // This is your new primary background
        'main-bg': '#001208', 
        'surface': '#001A0B', // A slightly lighter version for cards
        'brand-green': '#00FF85', // The neon green from the Figma
      },
    },
  },
  plugins: [],
};
export default config;