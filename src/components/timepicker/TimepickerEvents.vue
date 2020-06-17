<template>
  <div class="component-wrapper">
    <div ref="timepicker" style="height: 310px;"></div>
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
import { Timepicker as TimepickerDHX } from "dhx-suite";
export default {
  name: "TimepickerEvents",
  data: () => ({
    events: [],
    timepicker: null,
  }),
  mounted() {
    this.timepicker = new TimepickerDHX(this.$refs.timepicker, {
      css: "dhx_widget--bordered",
      controls: true,
    });

    this.timepicker.events.on("change", value => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "change", value }].concat(this.events);
    });
    this.timepicker.events.on("afterClose", value => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterClose", value: value }].concat(this.events);
    });
    this.timepicker.events.on("beforeClose", value => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeClose", value }].concat(this.events);
    });
    this.timepicker.events.on("apply", value => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "apply", value: JSON.stringify(value, null, 2) }].concat(this.events);
    });
  },
  beforeDestroy() {
    if (this.timepicker) {
      this.timepicker.destructor();
    }
  },
};
</script>
