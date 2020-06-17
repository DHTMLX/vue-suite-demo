<template>
  <div>
    <div class="dhx-container--button">
      <button @click="handleClick('reset')" class="custom-button">Reset</button>
      <button @click="handleClick('remove')" class="custom-button">
        Remove first item
      </button>
    </div>
    <div ref="dataview" style="height: 400px; padding: 0 24px;"></div>
  </div>
</template>

<script>
import { DataView as DataviewDHX, DataCollection } from "dhx-suite";
export default {
  name: "DataviewData",
  data: () => ({
    data: new DataCollection(),
    dataview: null,
    renderTemplate: item => `
      <div class="template template__container">
        <img
          class="template__image"
          src="https://dhtmlx.github.io/react-widgets/static/${item.img}"
        />
        <h2 class="template__title">${item.title}</h2>
        <p class="template__description">${item.short}</з>
      </div>
    `,
  }),
  methods: {
    handleClick(action) {
      if (action === "reset") {
        this.data.removeAll();
        this.data.load("https://dhtmlx.github.io/react-widgets/static/dataview.json");
      } else if (action === "remove") {
        this.data.remove(this.data.getId(0));
      }
    },
  },
  mounted() {
    this.dataview = new DataviewDHX(this.$refs.dataview, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      template: this.renderTemplate,
      itemsInRow: 4,
      gap: 10,
      data: this.data,
    });

    this.data.load("https://dhtmlx.github.io/react-widgets/static/dataview.json");
  },
  beforeDestroy() {
    if (this.dataview) {
      this.dataview.destructor();
    }
  },
};
</script>
