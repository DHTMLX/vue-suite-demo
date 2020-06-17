<template>
  <div ref="ribbon"></div>
</template>

<script>
import { Ribbon as RibbonDHX } from "dhx-suite";
import "@mdi/font/css/materialdesignicons.min.css";
export default {
  name: "RibbonBase",
  data: () => ({
    ribbon: null,
  }),
  mounted() {
    this.ribbon = new RibbonDHX(this.$refs.ribbon, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
    });

    this.ribbon.data.load("https://dhtmlx.github.io/react-widgets/static/ribbon.json");
  },
  beforeDestroy() {
    if (this.ribbon) {
      this.ribbon.destructor();
    }
  },
};
</script>
