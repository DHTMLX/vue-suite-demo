<template>
  <section class="component-wrapper">
    <div ref="combobox" style="width: 400px;"></div>
    <div class="events-list events-list-wrapper">
      <div class="events-list--element" v-if="events.length === 0">
        No events yet
      </div>
      <div class="events-list--element" v-else v-for="event in events" :key="event.keyId">
        <p>{{ event.name }}</p>
        <p>{{ event.value }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { Combobox as ComboboxDHX } from "dhx-suite";
export default {
  name: "ComboboxEvents",
  data: () => ({
    events: [],
    combobox: null,
  }),
  mounted() {
    this.combobox = new ComboboxDHX(this.$refs.combobox, {
      placeholder: "Click to choose",
    });
    this.combobox.data.load("https://dhtmlx.github.io/react-widgets/static/combobox.json");

    this.combobox.events.on("change", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "change", value: id }].concat(this.events);
    });
    this.combobox.events.on("beforeClose", () => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeClose", value: null }].concat(this.events);
    });
    this.combobox.events.on("afterClose", () => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterClose", value: null }].concat(this.events);
    });
    this.combobox.events.on("input", value => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "input", value }].concat(this.events);
    });
    this.combobox.events.on("blur", () => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "blur", value: null }].concat(this.events);
    });
    this.combobox.events.on("focus", () => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "focus", value: null }].concat(this.events);
    });
    this.combobox.events.on("keydown", (event, id) => {
      const value = JSON.stringify({event, id});
      const keyId = Math.random();
      this.events = [{ keyId, name: "keydown", value }].concat(this.events);
    });
    this.combobox.events.on("beforeOpen", () => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeOpen", value: null }].concat(this.events);
      return true;
    });
    this.combobox.events.on("afterOpen", () => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterOpen", value: null }].concat(this.events);
    });
  },
  beforeDestroy() {
    if (this.combobox) {
      this.combobox.destructor();
    }
  },
};
</script>
