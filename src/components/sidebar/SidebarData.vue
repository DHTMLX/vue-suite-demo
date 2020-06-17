<template>
  <section class="dhx-container-widget">
    <div class="dhx-container--button">
      <button @click="handleAddClick()" class="custom-button">
        Add notification
      </button>
      <button @click="handleResetClick()" class="custom-button">Reset {{ count }} notifications</button>
    </div>
    <div ref="sidebar"></div>
  </section>
</template>

<script>
import { Sidebar as SidebarDHX, TreeCollection } from "dhx-suite";
export default {
  name: "SidebarData",
  data: () => ({
    data: new TreeCollection(),
    sidebar: null,
    count: 0,
  }),
  methods: {
    handleAddClick() {
      this.data.update("media", {
        count: this.data.getItem("media").count + 1,
      });
    },
    handleResetClick() {
      this.data.update("media", { count: 0 });
    },
  },
  mounted() {
    this.sidebar = new SidebarDHX(this.$refs.sidebar, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      data: this.data,
    });

    this.data.load("https://dhtmlx.github.io/react-widgets/static/sidebar.json").then(() => {
      this.data.events.on("change", () => {
        this.count = this.data.getItem("media").count;
      });
    });
  },
  beforeDestroy() {
    if (this.sidebar) {
      this.sidebar.destructor();
    }
  },
};
</script>
