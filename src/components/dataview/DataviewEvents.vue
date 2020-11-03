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
    this.dataview.events.on("focusChange", (index, id) => {
      const info = { index, id };
      const keyId = Math.random();
      this.events = [{ keyId, name: "focusChange", value: JSON.stringify(info) }].concat(this.events);
    });
    this.dataview.events.on("beforeDrag", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeDrag", value: id }].concat(this.events);
    });
    this.dataview.events.on("beforeDrop", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeDrop", value: id }].concat(this.events);
    });
    this.dataview.events.on("dragStart", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "dragStart", value: id }].concat(this.events);
    });
    this.dataview.events.on("dragEnd", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "dragEnd", value: id }].concat(this.events);
    });
    this.dataview.events.on("canDrop", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "canDrop", value: id }].concat(this.events);
    });
    this.dataview.events.on("cancelDrop", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "cancelDrop", value: id }].concat(this.events);
    });
    this.dataview.events.on("dropComplete", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "dropComplete", value: id }].concat(this.events);
    });
    this.dataview.events.on("dragOut", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "dragOut", value: id }].concat(this.events);
    });
    this.dataview.events.on("dragIn", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "dragIn", value: id }].concat(this.events);
    });
    this.dataview.events.on("beforeEditStart", (value, id) => {
      const info = { value, id };
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeEditStart", value: JSON.stringify(info) }].concat(this.events);
    });
    this.dataview.events.on("afterEditStart", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterEditStart", value: id }].concat(this.events);
    });
    this.dataview.events.on("beforeEditEnd", (value, id) => {
      const info = { value, id };
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeEditEnd", value: JSON.stringify(info) }].concat(this.events);
    });
    this.dataview.events.on("afterEditEnd", (value, id) => {
      const info = { value, id };
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterEditEnd", value: JSON.stringify(info) }].concat(this.events);
    });
    this.dataview.events.on("doubleClick", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "doubleClick", value: id }].concat(this.events);
    });
    this.dataview.events.on("itemRightClick", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "itemRightClick", value: id }].concat(this.events);
    });
    this.dataview.events.on("itemMouseOver", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "itemMouseOver", value: id }].concat(this.events);
    });
    this.dataview.events.on("beforeDrag", () => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeDrag" }].concat(this.events);
    });
    this.dataview.events.on("beforeDrop", () => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeDrop" }].concat(this.events);
    });
    this.dataview.events.on("beforeDrop", () => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeDrop" }].concat(this.events);
    });
    this.dataview.events.on("dragStart", () => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "dragStart" }].concat(this.events);
    });
    this.dataview.events.on("afterDrag", () => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterDrag" }].concat(this.events);
    });
    this.dataview.events.on("canDrop", () => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "canDrop" }].concat(this.events);
    });
    this.dataview.events.on("cancelDrop", () => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "cancelDrop" }].concat(this.events);
    });
    this.dataview.events.on("afterDrop", () => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterDrop" }].concat(this.events);
    });
    this.dataview.events.on("dragOut", () => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "dragOut" }].concat(this.events);
    });
      this.dataview.events.on("dragIn", () => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "dragIn" }].concat(this.events);
    });
    this.dataview.events.on("beforeSelect", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeSelect", value: id }].concat(this.events);
    });
    this.dataview.events.on("afterSelect", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterSelect", value: id }].concat(this.events);
    });
    this.dataview.events.on("beforeUnSelect", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeUnSelect", value: id }].concat(this.events);
    });
    this.dataview.events.on("afterUnSelect", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterUnSelect", value: id }].concat(this.events);
    });
  },
  beforeDestroy() {
    if (this.dataview) {
      this.dataview.destructor();
    }
  },
};
</script>
