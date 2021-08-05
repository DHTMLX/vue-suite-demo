<template>
  <div class="component-wrapper">
    <div ref="slider" style="width: 400px;"></div>
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
import { Slider as SliderDHX } from "dhx-suite";
export default {
  name: "SliderEvents",
  data: () => ({
    events: [],
    slider: null,
  }),
  mounted() {
    this.slider = new SliderDHX(this.$refs.slider, {
      min: 0,
      max: 100,
      step: 1,
      tooltip: true,
      tick: 1,
      majorTick: 10,
      tickTemplate: v => v,
    });

    this.slider.events.on("change", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "change", value: id }].concat(this.events);
    });
    this.slider.events.on("mousedown", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "mousedown", value: id }].concat(this.events);
    });
    this.slider.events.on("mouseup", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "mouseup", value: id }].concat(this.events);
    });
    this.slider.events.on("blur", () => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "blur", value: null }].concat(this.events);
    });
    this.slider.events.on("focus", () => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "focus", value: null }].concat(this.events);
    });
    this.slider.events.on("keydown", (event) => {
      const value = JSON.stringify({ event });
      const keyId = Math.random();
      this.events = [{ keyId, name: "keydown", value }].concat(this.events);
    });
  },
  beforeDestroy() {
    if (this.slider) {
      this.slider.destructor();
    }
  },
};
</script>
