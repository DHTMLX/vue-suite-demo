import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",
  brandTitle: "DHTMLX Widgets",
  brandUrl: "https://dhtmlx.github.io/vue-suite-demo/?path=/story",
  brandImage: "./logo.svg",
});

addons.setConfig({
  showPanel: false,
  enableShortcuts: false,
  theme
});
