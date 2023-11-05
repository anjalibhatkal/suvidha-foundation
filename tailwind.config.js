/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "base-50": "#F6F1E9",
        "base-100": "#FFE9C9",
        "base-200": "#F9C87C",
        "base-300": "#FFAC4A",
        "base-400": "#F97432",
        "base-500": "#FFC107CC",
        "primary-100": "#3f0d47",
        "primary-200": "#A62335",
        "primary-300": "#581414",
      },
      colors: {
        "base-50": "#F6F1E9",
        "primary-100": "#3f0d47",
        "primary-200": "#A62335",
        "base-100": "#FFE9C9",
        "base-200": "#F9C87C",
        "base-300": "#FFAC4A",
        "base-400": "#F97432",
        "base-500": "#FFC107CC",
        "primary-300": "#581414",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [
    require("daisyui"),
    "postcss-import",
    "tailwindcss/nesting",
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
