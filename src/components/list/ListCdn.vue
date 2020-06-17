<template>
  <div ref="list"></div>
</template>

<script>
import fromCDN from "from-cdn";
export default {
  name: "ListCdn",
  data: () => ({
    list: null,
  }),
  mounted() {
    fromCDN(["https://cdn.dhtmlx.com/suite/edge/suite.js", "https://cdn.dhtmlx.com/suite/edge/suite.css"]).then(() => {
      // eslint-disable-next-line no-undef
      this.list = new dhx.List(this.$refs.list, {
        css: "dhx_widget--bordered dhx_widget--bg_white",
        template: item => `<span><strong>${item.title}</strong> ${item.short}</span>`,
        height: 400,
      });
      this.list.data.load("https://dhtmlx.github.io/react-widgets/static/dataview.json");
    });
  },
  beforeDestroy() {
    if (this.list) {
      this.list.destructor();
    }
  },
};
</script>
