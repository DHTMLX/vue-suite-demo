<template>
  <div ref="sidebar" class="widget-box-wide"></div>
</template>

<script>
import fromCDN from "from-cdn";
import { TreeCollection } from "dhx-suite";
export default {
  name: "SidebarCdn",
  data: () => ({
    sidebar: null,
    data: new TreeCollection(),
  }),
  mounted() {
    fromCDN(["https://cdn.dhtmlx.com/suite/edge/suite.js", "https://cdn.dhtmlx.com/suite/edge/suite.css"]).then(() => {
      // eslint-disable-next-line no-undef
      this.sidebar = new dhx.Sidebar(this.$refs.sidebar, {
        css: "dhx_widget--bordered dhx_widget--bg_white",
        data: this.data,
      });
      this.sidebar.data.load("https://dhtmlx.github.io/react-widgets/static/sidebar.json");
    });
  },
  beforeDestroy() {
    if (this.sidebar) {
      this.sidebar.destructor();
    }
  },
};
</script>
