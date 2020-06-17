<template>
  <div ref="sidebar" class="widget-box-wide"></div>
</template>

<script>
import { Sidebar as SidebarDHX } from "dhx-suite";
export default {
  name: "SidebarConfigurated",
  data: () => ({
    sidebar: null,
  }),
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.sidebar = new SidebarDHX(this.$refs.sidebar, {
      ...this.options,
    });

    this.sidebar.data.load("https://dhtmlx.github.io/react-widgets/static/sidebar.json");
  },
  beforeDestroy() {
    if (this.sidebar) {
      this.sidebar.destructor();
    }
  },
};
</script>
