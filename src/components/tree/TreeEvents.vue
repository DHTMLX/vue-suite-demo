<template>
  <div class="component-wrapper">
    <div ref="tree" class="dhx-container--tree"></div>
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
import { Tree as TreeDHX } from "dhx-suite";
export default {
  name: "TreeEvents",
  data: () => ({
    events: [],
    tree: null,
  }),
  mounted() {
    this.tree = new TreeDHX(this.$refs.tree);
    this.tree.data.load("https://dhtmlx.github.io/react-widgets/static/tree.json");

    this.tree.events.on("itemRightClick", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "itemRightClick", value: id }].concat(this.events);
    });
    this.tree.events.on("itemDblClick", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "itemDblClick", value: id }].concat(this.events);
    });
    this.tree.events.on("itemClick", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "itemClick", value: id }].concat(this.events);
    });
    this.tree.events.on("beforeCollapse", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeCollapse", value: id }].concat(this.events);
    });
    this.tree.events.on("afterCollapse", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterCollapse", value: id }].concat(this.events);
    });
    this.tree.events.on("beforeExpand", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeExpand", value: id }].concat(this.events);
    });
    this.tree.events.on("afterExpand", id => {
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterExpand", value: id }].concat(this.events);
    });
    this.tree.events.on("beforeCheck", (index, id) => {
      const value = JSON.stringify({index, id});
      const keyId = Math.random();
      this.events = [{ keyId, name: "beforeCheck", value }].concat(this.events);
    });
    this.tree.events.on("afterCheck", (index, id) => {
      const value = JSON.stringify({index, id});
      const keyId = Math.random();
      this.events = [{ keyId, name: "afterCheck", value }].concat(this.events);
    });
  },
  beforeDestroy() {
    if (this.tree) {
      this.tree.destructor();
    }
  },
};
</script>
