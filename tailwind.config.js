export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B3DFF",
        "primary-focus": "#7524E8",
        secondary: "#FFB020",
        "base-100": "#FFFFFF",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#8B3DFF",
          "primary-focus": "#7524E8",
          secondary: "#FFB020",
        },
      },
    ],
  },
}
