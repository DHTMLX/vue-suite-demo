<template>
  <div ref="dataview" style="height: 400px; padding: 0 24px;"></div>
</template>

<script>
import { DataView as DataviewDHX } from "dhx-suite";
export default {
  name: "DataviewConfigurated",
  data: () => ({
    dataview: null,
  }),
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.dataview = new DataviewDHX(this.$refs.dataview, {
      ...this.options,
    });

    this.dataview.data.load("https://dhtmlx.github.io/react-widgets/static/dataview.json");
  },
  beforeDestroy() {
    if (this.dataview) {
      this.dataview.destructor();
    }
  },
};
</script>
