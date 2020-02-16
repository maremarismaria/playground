import { create } from "@storybook/theming/create";

export const darkTheme = create({
  base: "dark",

  // Storybook-specific color palette
  colorPrimary: "#FF4785", // coral
  colorSecondary: "#1EA7FD", // ocean

  // UI
  appBg: "#2f2f2f",
  appContentBg: "#333",
  appBorderColor: "rgba(255,255,255,.1)",
  appBorderRadius: 4,

  // Text colors
  textColor: "#FFFFFF",
  textInverseColor: "#333333",

  // Toolbar default and active colors
  barTextColor: "#999999",
  barSelectedColor: "#1EA7FD", // ocean
  barBg: "#333333",

  // Form colors
  inputBg: "#3f3f3f",
  inputBorder: "rgba(0,0,0,.3)",
  inputTextColor: "#FFFFFF",
  inputBorderRadius: 4,

  // Brand
  brandTitle: "Playground",
  brandUrl: null,
  brandImage: null
});

export default darkTheme;
