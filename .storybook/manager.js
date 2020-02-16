import { addons } from "@storybook/addons";
import darkTheme from "./customTheme";

addons.setConfig({
  theme: darkTheme,
  panelPosition: "right"
});
