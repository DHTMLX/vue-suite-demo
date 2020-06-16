<template>
  <div class="component-wrapper">
    <div ref="menu" class="dhx-container--menu" style="width: 600px"></div>
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
import { Menu as MenuDHX } from 'dhx-suite';
export default {
  name: "MenuEvents",
  data: () => ({
    events: [],
    menu: null
  }),
  mounted() {
    this.menu = new MenuDHX(this.$refs.menu, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
    });
    this.menu.data.load("https://dhtmlx.github.io/react-widgets/static/menu.json");

    this.menu.events.on("click", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "click", value: id } ].concat(this.events);
    });
    this.menu.events.on("openMenu", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "openMenu", value: id } ].concat(this.events);
    });
  },
  beforeDestroy() {
		if (this.menu) {
      this.menu.destructor();
    }
	}
}
</script>
