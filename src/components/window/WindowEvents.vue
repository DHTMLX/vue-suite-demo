<template>
  <div class="component-wrapper">
    <div class="container">
        <div ref="window" class='widget-box-wide'></div>
        <button className="button" @click="window.show(20, 20)" class="custom-button">
          Show Window
        </button>
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
import { Window } from 'dhx-suite';
export default {
  name: "WindowEvents",
  data: () => ({
    events: [],
    window: null,
    windowHtml: `<p>Here is a neat and flexible JavaScript window system with a fast and simple initialization.</p><p>Inspect all the DHTMLX window samples to discover each and every feature.</p><img style='display: block; width: 200px; height: 200px; margin-top: 20px; margin-left: auto; margin-right: auto' src='https://dhtmlx.github.io/react-widgets/static/developer.svg'>`
  }),
  mounted() {
    this.window = new Window({
      width: 340,
      height: 420,
      title: "Window",
      html: this.windowHtml,
      closable: true,
      movable: true,
      resizable: true
    });

    this.window.show(20, 20);

    this.window.events.on("resize", (size, oldsize, resizeSide) => {
      const info = {size, oldsize, resizeSide};
      const keyId = Math.random();
      this.events = [ { keyId, name: "toggleSeries", value: JSON.stringify(info) } ].concat(this.events);
    });
    this.window.events.on("headerDoubleClick", () => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "headerDoubleClick", value: null } ].concat(this.events);
    });
    this.window.events.on("move", (values) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "move", value: JSON.stringify(values) } ].concat(this.events);
    });
    this.window.events.on("afterShow", () => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "toggleSeries", value: null } ].concat(this.events);
    });
    this.window.events.on("afterHide", () => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "afterHide", value: null } ].concat(this.events);
    });
    this.window.events.on("beforeShow", (x, y) => {
      const position = {x, y};
      const keyId = Math.random();
      this.events = [ { keyId, name: "beforeShow", value: JSON.stringify(position) } ].concat(this.events);
    });
    this.window.events.on("beforeHide", () => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "beforeHide", value: null } ].concat(this.events);
    });
  },
  beforeDestroy() {
    if (this.window) {
      this.window.destructor();
    }
	}
}
</script>
