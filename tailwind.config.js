/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      dropShadow: {
        dark: [
          "0 0px 4px rgba(255, 255, 255)",
          "0 0px 15px rgba(0, 0, 0, 0.5)",
        ],
        light: [
          "0 0px 4px rgba(0, 0, 0)",
          "0 0px 15px rgba(255, 255, 255, 0.5)",
        ],
      },
    },
  },
  plugins: [],
};
