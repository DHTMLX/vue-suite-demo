<template>
  <div class="component-wrapper">
    <div style="width: 600px">
      <div ref="colorpicker"></div>
    </div>
    <div class="events-list events-list-wrapper">
      <div class="events-list--element" v-if="events.length === 0">No events yet</div>
      <div class="events-list--element" v-else v-for="event in events" :key="event.keyId">
        <p>{{event.name}}</p>
        <p>{{event.value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Colorpicker as ColorpickerDHX } from 'dhx-suite';
export default {
  name: "ColorpickerEvents",
  data: () => ({
    events: [],
    colorpicker: null
  }),
  mounted() {
    this.colorpicker = new ColorpickerDHX(this.$refs.colorpicker);

    this.colorpicker.events.on('change', (color) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "change", value: color } ].concat(this.events);
    });
    this.colorpicker.events.on('modeChange', (mode) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "modeChange", value: mode } ].concat(this.events);
    });
    this.colorpicker.events.on('cancelClick', () => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "cancelClick", value: null } ].concat(this.events);
    });
    this.colorpicker.events.on('apply', () => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "apply", value: null } ].concat(this.events);
    });
  },
  beforeDestroy() {
		if (this.colorpicker && this.colorpicker.destroy) {
      this.colorpicker.destroy();
    }
	}
}
</script>
