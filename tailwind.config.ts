import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "title-blue": "#06BFFD",
      },
      fontFamily: {
        jost: ["Reem Kufi", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
