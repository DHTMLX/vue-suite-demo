<template>
  <div ref="tree" class="dhx-container--tree"></div>
</template>

<script>
import { Tree as TreeDHX } from "dhx-suite";
export default {
  name: "TreeBase",
  data: () => ({
    tree: null,
  }),
  mounted() {
    this.tree = new TreeDHX(this.$refs.tree);
    this.tree.data.load("https://dhtmlx.github.io/react-widgets/static/tree.json");
  },
  beforeDestroy() {
    if (this.tree) {
      this.tree.destructor();
    }
  },
};
</script>
