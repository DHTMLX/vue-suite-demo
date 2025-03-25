<script>
import { Sidebar } from "@dhx/trial-suite";
import { getData } from "../../data";

export default {
  data() {
    const { sidebarData } = getData();
    return { sidebarData };
  },

  mounted() {
    this.sidebar = new Sidebar(this.$refs.sidebar_container, {
      data: this.sidebarData
    });

    this.sidebar.events.on("click", (id) => {
      if (id === "toggle") {
        const toggleItem = this.sidebar.data.getItem("toggle");
        this.sidebar.toggle();
        toggleItem.icon = this.sidebar.config.collapsed
          ? "mdi mdi-menu"
          : "mdi mdi-backburger";
      }
    });
  },

  unmounted() {
    this.sidebar?.destructor();
  }
};
</script>

<template>
  <div ref="sidebar_container" class="dhx_widget--border_right"></div>
</template>
