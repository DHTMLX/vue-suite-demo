<template>
  <div class="component-wrapper">
    <div ref="sidebar"></div>
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
import { Sidebar as SidebarDHX } from 'dhx-suite';
export default {
  name: "SidebarEvents",
  data: () => ({
    events: [],
    sidebar: null
  }),
  mounted() {
    this.sidebar = new SidebarDHX(this.$refs.sidebar, {
      css: "dhx_widget--bordered",
      controls: true,
    });
    this.sidebar.data.load("https://dhtmlx.github.io/react-widgets/static/sidebar.json");

    this.sidebar.events.on("click", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "click", value: id } ].concat(this.events);
    });
    this.sidebar.events.on("inputCreated", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "inputCreated", value: id } ].concat(this.events);
    });
    this.sidebar.events.on("openMenu", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "openMenu", value: id } ].concat(this.events);
    });
    this.sidebar.events.on("inputFocus", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "inputFocus", value: id } ].concat(this.events);
    });
    this.sidebar.events.on("inputBlur", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "inputBlur", value: id } ].concat(this.events);
    });
    this.sidebar.events.on("beforeHide", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "beforeHide", value: id } ].concat(this.events);
    });
    this.sidebar.events.on("beforeExpand", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "beforeExpand", value: id } ].concat(this.events);
    });
    this.sidebar.events.on("beforeCollapse", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "beforeCollapse", value: id } ].concat(this.events);
    });
    this.sidebar.events.on("afterCollapse", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "afterCollapse", value: id } ].concat(this.events);
    });
    this.sidebar.events.on("afterExpand", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "afterExpand", value: id } ].concat(this.events);
    });
    this.sidebar.events.on("afterHide", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "afterHide", value: id } ].concat(this.events);
    });
  },
  beforeDestroy() {
		if (this.sidebar) {
      this.sidebar.destructor();
    }
	}
}
</script>
