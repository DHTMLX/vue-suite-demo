<template>
  <div ref="tree" class="dhx-container--tree"></div>
</template>

<script>
import fromCDN from "from-cdn";
export default {
  name: "TreeCdn",
  data: () => ({
    tree: null,
  }),
  mounted() {
    fromCDN(["https://cdn.dhtmlx.com/suite/edge/suite.js", "https://cdn.dhtmlx.com/suite/edge/suite.css"]).then(() => {
      // eslint-disable-next-line no-undef
      this.tree = new dhx.Tree(this.$refs.tree);
      this.tree.data.load("https://dhtmlx.github.io/react-widgets/static/tree.json");
    });
  },
  beforeDestroy() {
    if (this.tree) {
      this.tree.destructor();
    }
  },
};
</script>
