<template>
  <div class="component-wrapper">
    <div ref="toolbar" class="dhx-container--menu" style="width: 600px"></div>
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
import { Toolbar as ToolbarDHX } from 'dhx-suite';
export default {
  name: "ToolbarBase",
  data: () => ({
    events: [],
    toolbar: null
  }),
  mounted() {
    this.toolbar = new ToolbarDHX(this.$refs.toolbar, {
      css: "dhx_widget--bordered",
      controls: true,
    });
    this.toolbar.data.load("https://dhtmlx.github.io/react-widgets/static/toolbar.json");

    this.toolbar.events.on("click", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "click", value: id } ].concat(this.events);
    });
    this.toolbar.events.on("inputCreated", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "inputCreated", value: id } ].concat(this.events);
    });
    this.toolbar.events.on("openMenu", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "openMenu", value: id } ].concat(this.events);
    });
    this.toolbar.events.on("inputFocus", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "inputFocus", value: id } ].concat(this.events);
    });
    this.toolbar.events.on("inputBlur", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "inputBlur", value: id } ].concat(this.events);
    });
    this.toolbar.events.on("afterHide", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "afterHide", value: id } ].concat(this.events);
    });
    this.toolbar.events.on("beforeHide", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "beforeHide", value: id } ].concat(this.events);
    });
  },
  beforeDestroy() {
		if (this.toolbar) {
      this.toolbar.destructor();
    }
	}
}
</script>
