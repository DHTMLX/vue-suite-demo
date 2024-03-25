<template>
  <div ref="node" class="container" style="flex-grow: 1;"></div>
</template>

<script>
import { Tree } from "@dhx/trial-suite";
import store from "../../../store.js";

export default {
  data() {
    return {
      node: null,
      tree: null
    };
  },

  mounted() {
    this.tree = new Tree(this.$refs.node, {
      checkbox: true,
      editable: true,
      keyNavigation: true,
      dragMode: "both",
    });
    this.tree.data.parse(store.treeData);
  },
  beforeDestroy() {
    this.tree?.destructor();
  }
};
</script>
