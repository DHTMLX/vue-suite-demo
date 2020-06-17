<template>
  <section>
    <div class="dhx-container--button">
      <button @click="handleClick(false)" class="custom-button">
        Collapse All
      </button>
      <button @click="handleClick(true)" class="custom-button">
        Expand All
      </button>
    </div>
    <div ref="tree" class="dhx-container--tree"></div>
  </section>
</template>

<script>
import { Tree as TreeDHX, TreeCollection } from "dhx-suite";
export default {
  name: "ChartData",
  data: () => ({
    data: new TreeCollection(),
    tree: null,
  }),
  methods: {
    handleClick(value) {
      this.data.map(item => {
        this.data.update(item.id, { opened: value });
      });
    },
  },
  mounted() {
    this.tree = new TreeDHX(this.$refs.tree, {
      data: this.data,
    });

    this.data.load("https://dhtmlx.github.io/react-widgets/static/tree.json");
  },
  beforeDestroy() {
    if (this.tree) {
      this.tree.destructor();
    }
  },
};
</script>
