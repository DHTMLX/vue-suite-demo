<template>
  <section>
    <div class="dhx-container--button">
      <button @click="handleClick('reset')" class="custom-button">Reset</button>
      <button @click="handleClick('remove')" class="custom-button">Remove first item</button>
    </div>
    <div ref="list" style="height: 400px"></div>
  </section>
</template>

<script>
import { List as ListDHX, DataCollection } from "dhx-suite";
export default {
  name: "ListData",
  data: () => ({
    data: new DataCollection(),
    list: null
  }),
  methods: {
    handleClick(action) {
      if (action === "remove") {
        this.data.remove(this.data.getId(0));
      } else if (action === "reset") {
        this.data.removeAll();
        this.data.load("https://dhtmlx.github.io/react-widgets/static/dataview.json");
      }
    }
  },
  mounted() {
    this.list = new ListDHX(this.$refs.list, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      template: (item) => `<span><strong>${item.title}</strong> ${item.short}</span>`,
      height: 400,
      data: this.data
    });

    this.list.data.load("https://dhtmlx.github.io/react-widgets/static/dataview.json");
  },
  beforeDestroy() {
		if (this.list) {
      this.list.destructor();
    }
	}
}
</script>
