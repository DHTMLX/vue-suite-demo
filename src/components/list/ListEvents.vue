<template>
  <div class="component-wrapper">
    <div ref="list"></div>
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
import { List as ListDHX } from "dhx-suite";
export default {
  name: "ListEvents",
  data: () => ({
    events: [],
    list: null
  }),
  mounted() {
    this.list = new ListDHX(this.$refs.list, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      template: (item) => `<span><strong>${item.title}</strong> ${item.short}</span>`,
      height: 400,
      dragMode: 'both',
      editable: true,
    });

    this.list.data.load("https://dhtmlx.github.io/react-widgets/static/dataview.json");

    this.list.events.on("click", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "click", value: id } ].concat(this.events);
    });
    this.list.events.on("focusChange", (index, id) => {
      const info = {index, id};
      const keyId = Math.random();
      this.events = [ { keyId, name: "focusChange", value: JSON.stringify(info) } ].concat(this.events);
    });
    this.list.events.on("beforeDrag", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "beforeDrag", value: id } ].concat(this.events);
    });
    this.list.events.on("beforeDrop", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "beforeDrop", value: id } ].concat(this.events);
    });
    this.list.events.on("dragStart", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "dragStart", value: id } ].concat(this.events);
    });
    this.list.events.on("dragEnd", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "dragEnd", value: id } ].concat(this.events);
    });
    this.list.events.on("canDrop", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "canDrop", value: id } ].concat(this.events);
    });
    this.list.events.on("cancelDrop", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "cancelDrop", value: id } ].concat(this.events);
    });
    this.list.events.on("dropComplete", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "dropComplete", value: id } ].concat(this.events);
    });
    this.list.events.on("dragOut", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "dragOut", value: id } ].concat(this.events);
    });
    this.list.events.on("dragIn", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "dragIn", value: id } ].concat(this.events);
    });
    this.list.events.on("beforeEditStart", (value, id) => {
      const info = {value, id};
      const keyId = Math.random();
      this.events = [ { keyId, name: "beforeEditStart", value: JSON.stringify(info) } ].concat(this.events);
    });
    this.list.events.on("afterEditStart", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "afterEditStart", value: id } ].concat(this.events);
    });
    this.list.events.on("beforeEditEnd", (value, id) => {
      const info = {value, id};
      const keyId = Math.random();
      this.events = [ { keyId, name: "beforeEditEnd", value: JSON.stringify(info) } ].concat(this.events);
    });
    this.list.events.on("afterEditEnd", (value, id) => {
      const info = {value, id};
      const keyId = Math.random();
      this.events = [ { keyId, name: "afterEditEnd", value: JSON.stringify(info) } ].concat(this.events);
    });
    this.list.events.on('doubleClick', (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "doubleClick", value: id } ].concat(this.events);
    });
    this.list.events.on("itemRightClick", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "itemRightClick", value: id } ].concat(this.events);
    });
    this.list.events.on("itemMouseOver", (id) => {
      const keyId = Math.random();
      this.events = [ { keyId, name: "itemMouseOver", value: id } ].concat(this.events);
    });
  },
  beforeDestroy() {
		if (this.list) {
      this.list.destructor();
    }
	}
}
</script>
