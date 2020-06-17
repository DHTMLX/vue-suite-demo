<template>
  <section>
    <div class="dhx-container--button">
      <button @click="handleAddClick()" class="custom-button">
        Add notification
      </button>
      <button @click="handleResetClick()" class="custom-button">Reset {{ count }} notifications</button>
    </div>
    <div ref="toolbar" class="dhx-container--menu"></div>
  </section>
</template>

<script>
import { Toolbar as ToolbarDHX, TreeCollection } from "dhx-suite";
export default {
  name: "ToolbarData",
  data: () => ({
    data: new TreeCollection(),
    toolbar: null,
    count: 0,
  }),
  methods: {
    handleAddClick() {
      this.data.update("add", { count: this.data.getItem("add").count + 1 });
    },
    handleResetClick() {
      this.data.update("add", { count: 0 });
    },
  },
  mounted() {
    this.toolbar = new ToolbarDHX(this.$refs.toolbar, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      navigationType: "pointer",
      data: this.data,
    });

    this.data.load("https://dhtmlx.github.io/react-widgets/static/toolbar.json").then(() => {
      this.data.events.on("change", () => {
        this.count = this.data.getItem("add").count;
      });
    });
  },
  beforeDestroy() {
    if (this.toolbar) {
      this.toolbar.destructor();
    }
  },
};
</script>
