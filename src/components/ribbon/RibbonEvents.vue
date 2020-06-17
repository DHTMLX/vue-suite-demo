<template>
  <div class="component-wrapper">
    <div ref="ribbon"></div>
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
import { Ribbon as RibbonDHX } from "dhx-suite";
//import "@mdi/font/css/materialdesignicons.min.css";
export default {
  name: "RibbonEvents",
  data: () => ({
    events: [],
    ribbon: null,
  }),
  mounted() {
    this.ribbon = new RibbonDHX(this.$refs.ribbon, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
    });
    this.ribbon.data.load("https://dhtmlx.github.io/react-widgets/static/ribbon.json");

    this.ribbon.events.on("click", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "click", value: id }].concat(this.events);
    });
    this.ribbon.events.on("inputCreated", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "inputCreated", value: id }].concat(this.events);
    });
    this.ribbon.events.on("openMenu", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "openMenu", value: id }].concat(this.events);
    });
    this.ribbon.events.on("inputFocus", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "inputFocus", value: id }].concat(this.events);
    });
    this.ribbon.events.on("inputBlur", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "inputBlur", value: id }].concat(this.events);
    });
    this.ribbon.events.on("beforeHide", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeHide", value: id }].concat(this.events);
    });
    this.ribbon.events.on("beforeExpand", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeExpand", value: id }].concat(this.events);
    });
    this.ribbon.events.on("beforeCollapse", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeCollapse", value: id }].concat(this.events);
    });
    this.ribbon.events.on("afterCollapse", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterCollapse", value: id }].concat(this.events);
    });
    this.ribbon.events.on("afterExpand", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterExpand", value: id }].concat(this.events);
    });
    this.ribbon.events.on("afterHide", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterHide", value: id }].concat(this.events);
    });
  },
  beforeDestroy() {
    if (this.ribbon) {
      this.ribbon.destructor();
    }
  },
};
</script>
