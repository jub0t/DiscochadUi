import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bunker": {
          DEFAULT: "#181D23",
          50: "#212831",
          100: "#20272F",
          200: "#1E252C",
          300: "#1C2229",
          400: "#1A2026",
          500: "#181D23",
          600: "#161A20",
          700: "#14181D",
          800: "#12151A",
          900: "#101317",
          950: "#0F1215",
        },
        "portage": {
          DEFAULT: "#9390F5",
          50: "#BCBAF9",
          100: "#B7B5F8",
          200: "#AEACF8",
          300: "#A5A3F7",
          400: "#9C99F6",
          500: "#9390F5",
          600: "#8A87F4",
          700: "#817DF3",
          800: "#7874F2",
          900: "#6F6BF2",
          950: "#6A66F1",
        },
        "sea": {
          DEFAULT: "#7AC8EF",
          50: "#A3D9F4",
          100: "#9ED7F3",
          200: "#95D3F2",
          300: "#8CD0F1",
          400: "#83CCF0",
          500: "#7AC8EF",
          600: "#71C4EE",
          700: "#68C0ED",
          800: "#5FBDEC",
          900: "#56B9EB",
          950: "#51B7EA",
        },
        "river": {
          DEFAULT: "#445060",
          50: "#57667B",
          100: "#556478",
          200: "#515F72",
          300: "#4C5A6C",
          400: "#485566",
          500: "#445060",
          600: "#404B5A",
          700: "#3C4654",
          800: "#37414E",
          900: "#333C48",
          950: "#313A45",
        },
        "ebony": {
          DEFAULT: "#272E37",
          50: "#3A4452",
          100: "#38424F",
          200: "#343D49",
          300: "#2F3843",
          400: "#2B333D",
          500: "#272E37",
          600: "#232931",
          700: "#1F242B",
          800: "#1A1F25",
          900: "#161A1F",
          950: "#14181C",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
