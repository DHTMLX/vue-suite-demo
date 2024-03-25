<template>
  <div ref="node" class="dhx_widget--border_right"></div>
</template>

<script>
  import { Sidebar } from "@dhx/trial-suite";
  import store from "../store.js";

  export default {
    data() {
      return {
        sidebar: null,
        node: null
      };
    },
    mounted() {
      this.sidebar = new Sidebar(this.$refs.node, {});
      this.sidebar.events.on("click", (id) => {
        if (id === "toggle") {
          const toggleItem = this.sidebar.data.getItem("toggle");
          this.sidebar.toggle();
          toggleItem.icon = this.sidebar.config.collapsed
            ? "mdi mdi-menu"
            : "mdi mdi-backburger";
        }
      });

      this.sidebar.data.parse(store.sidebarData);
    },
    beforeDestroy() {
      this.sidebar.destructor();
    }
  }
</script>