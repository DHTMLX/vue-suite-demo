<template>
  <div ref="menu" class="dhx-container--menu"></div>
</template>

<script>
import { Menu as MenuDHX, TreeCollection } from "dhx-suite";
export default {
  name: "MenuConfigurated",
  data: () => ({
    menu: null,
    data: new TreeCollection(),
  }),
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.menu = new MenuDHX(this.$refs.menu, {
      ...this.options,
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
