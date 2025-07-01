<script>
import { Ribbon } from "@dhx/trial-suite";
import { getData } from "../../../data";

export default {
  data() {
    const { ribbonData } = getData();
    return { ribbonData };
  },

  mounted() {
    this.ribbon = new Ribbon(this.$refs.ribbon_container, {
      data: this.ribbonData,
      css: "dhx_widget--bordered"
    });
  },

  beforeDestroy() {
    this.ribbon?.destructor();
  }
};
</script>

<template>
  <div ref="ribbon_container" class="container ribbon-container"></div>
</template>
