<template>
  <div ref="list"></div>
</template>

<script>
import { List as ListDHX } from "dhx-suite";
export default {
  name: "ListConfigurated",
  data: () => ({
    list: null,
  }),
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.list = new ListDHX(this.$refs.list, {
      ...this.options,
    });

    this.list.data.load("https://dhtmlx.github.io/react-widgets/static/dataview.json");
  },
  beforeDestroy() {
    if (this.list) {
      this.list.destructor();
    }
  },
};
</script>
