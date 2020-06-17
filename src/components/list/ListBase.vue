<template>
  <div ref="list"></div>
</template>

<script>
import { List as ListDHX } from "dhx-suite";
export default {
  name: "ListBase",
  data: () => ({
    list: null,
  }),
  mounted() {
    this.list = new ListDHX(this.$refs.list, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      template: item => `<span><strong>${item.title}</strong> ${item.short}</span>`,
      height: 400,
    });

    this.list.data.load("https://dhtmlx.github.io/react-widgets/static/dataview.json");
  },
  beforeDestroy() {
    if (this.list) {
      this.list.destructor();
    }
  },
};
</script>
