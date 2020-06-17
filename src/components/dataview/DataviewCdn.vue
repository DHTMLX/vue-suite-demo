<template>
  <div ref="dataview" style="height: 400px; padding: 0 24px;"></div>
</template>

<script>
import { DataView as DataviewDHX } from "dhx-suite";
import fromCDN from "from-cdn";
export default {
  name: "DataviewCdn",
  data: () => ({
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
  mounted() {
    fromCDN(["https://cdn.dhtmlx.com/suite/edge/suite.js", "https://cdn.dhtmlx.com/suite/edge/suite.css"]).then(() => {
      // eslint-disable-next-line no-undef
      this.dataview = new DataviewDHX(this.$refs.dataview, {
        css: "dhx_widget--bordered dhx_widget--bg_white",
        template: this.renderTemplate,
        itemsInRow: 4,
        gap: 10,
      });
      this.dataview.data.load("https://dhtmlx.github.io/react-widgets/static/dataview.json");
    });
  },
  beforeDestroy() {
    if (this.dataview) {
      this.dataview.destructor();
    }
  },
};
</script>
