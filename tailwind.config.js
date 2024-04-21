/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],

  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  theme: {
    extend: {
      colors: {
        warning: "#e62c46",
        primary: "#2B2E63",
        transparent: "none",
        error: "#fe6052",
        blue: "#2B2E63",
        border: "#DEDEDE",
        ghost: "#FAFAFA",
      },
      width: {
        14: "14px",
        147: "147px",
        fit: "fit-content",
      },
      height: {
        14: "14px",
      },
    },
  },
};
