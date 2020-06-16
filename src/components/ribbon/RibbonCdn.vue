<template>
	<div ref="ribbon"></div>
</template>

<script>
import fromCDN from "from-cdn";
import "@mdi/font/css/materialdesignicons.min.css";
export default {
	name: "RibbonCdn",
	data: () => ({
    ribbon: null
  }),
  mounted() {
    fromCDN([
      "https://cdn.dhtmlx.com/suite/edge/suite.js",
      "https://cdn.dhtmlx.com/suite/edge/suite.css",
    ]).then(() => {
      // eslint-disable-next-line no-undef
      this.ribbon = new dhx.Ribbon(this.$refs.ribbon, {
				css: "dhx_widget--bordered dhx_widget--bg_white",
      });
      this.ribbon.data.load("https://dhtmlx.github.io/react-widgets/static/ribbon.json");
    })
  },
  beforeDestroy() {
		if (this.ribbon) {
      this.ribbon.destructor();
    }
	}
}
</script>
