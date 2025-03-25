<script>
import { Tree } from "@dhx/trial-suite";
import { getData } from "../../../data";

export default {
  data() {
    const { treeData } = getData();
    return { treeData };
  },

  mounted() {
    this.tree = new Tree(this.$refs.tree_container, {
      data: this.treeData,
      checkbox: true,
      editable: true,
      keyNavigation: true,
      dragMode: "both"
    });
  },

  unmounted() {
    this.tree?.destructor();
  }
};
</script>

<template>
  <div ref="tree_container" class="container" style="flex-grow: 1"></div>
</template>
