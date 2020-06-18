<template>
  <div ref="menu" class="dhx-container--menu"></div>
</template>

<script>
import { Menu as MenuDHX, TreeCollection } from "dhx-suite";
export default {
  name: "MenuBase",
  data: () => ({
    menu: null,
    data: new TreeCollection(),
  }),
  mounted() {
    this.menu = new MenuDHX(this.$refs.menu, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      data: this.data,
    });

    this.menu.data.load("https://dhtmlx.github.io/react-widgets/static/menu.json");
  },
  beforeDestroy() {
    if (this.menu) {
      this.menu.destructor();
    }
  },
};
</script>
