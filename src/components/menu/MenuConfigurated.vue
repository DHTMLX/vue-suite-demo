<template>
  <div ref="menu" class="dhx-container--menu"></div>
</template>

<script>
import { Menu as MenuDHX } from "dhx-suite";
export default {
  name: "MenuConfigurated",
  data: () => ({
    menu: null,
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
