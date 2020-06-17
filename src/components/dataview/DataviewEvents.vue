<template>
  <div class="component-wrapper">
    <div ref="dataview" style="height: 450px; width: 650px; padding: 0 24px;"></div>
    <div class="events-list events-list-wrapper">
      <div class="events-list--element" v-if="events.length === 0">
        No events yet
      </div>
      <div class="events-list--element" v-else v-for="event in events" :key="event.keyId">
        <p>{{ event.name }}</p>
        <p>{{ event.value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { DataView as DataviewDHX } from "dhx-suite";
export default {
  name: "DataviewEvents",
  data: () => ({
    events: [],
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
    this.dataview = new DataviewDHX(this.$refs.dataview, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      template: this.renderTemplate,
      itemsInRow: 2,
      gap: 10,
    });
    this.dataview.data.load("https://dhtmlx.github.io/react-widgets/static/dataview.json");

    this.dataview.events.on("click", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "click", value: id }].concat(this.events);
    });
    this.dataview.events.on("doubleclick", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "doubleclick", value: id }].concat(this.events);
    });
  },
  beforeDestroy() {
    if (this.dataview) {
      this.dataview.destructor();
    }
  },
};
</script>
