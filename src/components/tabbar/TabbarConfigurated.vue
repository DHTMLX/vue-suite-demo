<template>
  <div ref="tabbar" class="dhx-container--tabbar"></div>
</template>

<script>
import { Tabbar as TabbarDHX } from "dhx-suite";
export default {
  name: "TabbarConfigurated",
  data: () => ({
    tabbar: null,
  }),
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.tabbar = new TabbarDHX(this.$refs.tabbar, {
      ...this.options,
    });
  },
  beforeDestroy() {
    if (this.tabbar) {
      this.tabbar.destructor();
    }
  },
};
</script>
