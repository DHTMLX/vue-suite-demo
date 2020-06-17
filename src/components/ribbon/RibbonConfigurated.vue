<template>
  <div ref="ribbon"></div>
</template>

<script>
import { Ribbon as RibbonDHX } from "dhx-suite";
import "@mdi/font/css/materialdesignicons.min.css";
export default {
  name: "RibbonConfigurated",
  data: () => ({
    ribbon: null,
  }),
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.ribbon = new RibbonDHX(this.$refs.ribbon, {
      ...this.options,
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
