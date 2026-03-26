import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // This is crucial!
  theme: {
    screens: {
      xs: '480px', // Extra small devices
      sm: '640px', // Small devices
      md: '768px', // Medium devices
      lg: '1024px', // Large devices
      xl: '1280px', // Extra large devices
    },
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;