<template>
  <div ref="node" class="container ribbon-container"></div>
</template>

<script>
import { Ribbon } from "@dhx/trial-suite";
import store from "../../../store.js";

export default {
  data() {
    return {
      node: null,
      ribbon: null
    };
  },
  mounted() {
    this.ribbon = new Ribbon(this.$refs.node, {
      css: "dhx_widget--bordered",
    });
    this.ribbon.data.parse(store.ribbonData);
  },
  beforeDestroy() {
    this.ribbon?.destructor();
  }
};
</script>

<style>
.ribbon-container {
  padding: 50px;
  background: var(--dhx-background-primary);
}
</style>