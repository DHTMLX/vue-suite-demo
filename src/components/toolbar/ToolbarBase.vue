<template>
  <div ref="toolbar" class="dhx-container--menu"></div>
</template>

<script>
import { Toolbar as ToolbarDHX, TreeCollection } from "dhx-suite";
export default {
  name: "ToolbarBase",
  data: () => ({
    toolbar: null,
    data: new TreeCollection(),
  }),
  mounted() {
    this.toolbar = new ToolbarDHX(this.$refs.toolbar, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      navigationType: "pointer",
      data: this.data,
    });

    this.toolbar.data.load("https://dhtmlx.github.io/react-widgets/static/toolbar.json");
  },
  beforeDestroy() {
    if (this.toolbar) {
      this.toolbar.destructor();
    }
  },
};
</script>
