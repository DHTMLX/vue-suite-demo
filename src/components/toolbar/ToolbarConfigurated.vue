<template>
  <div ref="toolbar" class="dhx-container--menu"></div>
</template>

<script>
import { Toolbar as ToolbarDHX, TreeCollection } from "dhx-suite";
export default {
  name: "toolbarConfigurated",
  data: () => ({
    toolbar: null,
    data: new TreeCollection(),
  }),
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.toolbar = new ToolbarDHX(this.$refs.toolbar, {
      ...this.options,
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
