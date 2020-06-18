<template>
  <div ref="menu" class="dhx-container--menu"></div>
</template>

<script>
import fromCDN from "from-cdn";
import { TreeCollection } from "dhx-suite";
export default {
  name: "MenuCdn",
  data: () => ({
    menu: null,
    data: new TreeCollection(),
  }),
  mounted() {
    fromCDN(["https://cdn.dhtmlx.com/suite/edge/suite.js", "https://cdn.dhtmlx.com/suite/edge/suite.css"]).then(() => {
      // eslint-disable-next-line no-undef
      this.menu = new dhx.Menu(this.$refs.menu, {
        css: "dhx_widget--bordered dhx_widget--bg_white",
        data: this.data,
      });
      this.menu.data.load("https://dhtmlx.github.io/react-widgets/static/menu.json");
    });
  },
  beforeDestroy() {
    if (this.menu) {
      this.menu.destructor();
    }
  },
};
</script>
