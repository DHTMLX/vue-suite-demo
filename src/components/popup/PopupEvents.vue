<template>
  <section class="component-wrapper">
    <div>
      <div ref="popup"></div>
      <button @click="popupShow()" class="custom-button">Show Popup</button>
    </div>
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
import { Popup as PopupDHX } from "dhx-suite";
export default {
  name: "PopupEvents",
  data: () => ({
    events: [],
    popup: null,
  }),
  mounted() {
    this.popup = new PopupDHX({
      css: "dhx_widget--bordered",
    });
    this.popup.attachHTML("<div style='padding: 16px; text-align: center'>Hi there, <br/> welcome to DHTMLX-react popup sample</div>");

    this.popup.events.on("beforeHide", fromOuterClick => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeHide", value: fromOuterClick }].concat(this.events);
    });
    this.popup.events.on("beforeShow", element => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeHide", value: element.outerHTML }].concat(this.events);
    });
    this.popup.events.on("afterHide", () => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterHide", value: null }].concat(this.events);
    });
    this.popup.events.on("afterShow", () => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterShow", value: null }].concat(this.events);
    });
    this.popup.events.on("click", e => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "click", value: JSON.stringify(e) }].concat(this.events);
    });
  },
  methods: {
    popupShow() {
      this.popup.show(this.$refs.popup, {
        mode: "left",
        indent: 20,
      });
    },
  },
  beforeDestroy() {
    if (this.popup) {
      this.popup.destructor();
    }
  },
};
</script>
