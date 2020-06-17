<template>
  <div ref="grid" class="dhx-container--grid"></div>
</template>

<script>
import { Grid as GridDHX } from "dhx-suite";
export default {
  name: "GridConfigurated",
  data: () => ({
    grid: null,
  }),
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.grid = new GridDHX(this.$refs.grid, {
      ...this.options,
    });

    this.grid.data.load("https://dhtmlx.github.io/react-widgets/static/grid.json");
  },
  beforeDestroy() {
    if (this.grid) {
      this.grid.destructor();
    }
  },
};
</script>
