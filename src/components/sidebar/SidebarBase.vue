<template>
	<div ref="sidebar" class="widget-box-wide"></div>
</template>

<script>
import { Sidebar as SidebarDHX } from "dhx-suite";
export default {
  name: "SidebarBase",
  data: () => ({
    sidebar: null
  }),
  mounted() {
    this.sidebar = new SidebarDHX(this.$refs.sidebar, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
    });

    this.sidebar.data.load("https://dhtmlx.github.io/react-widgets/static/sidebar.json");
  },
  beforeDestroy() {
		if (this.sidebar) {
      this.sidebar.destructor();
    }
	}
}
</script>
