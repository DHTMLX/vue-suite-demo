<template>
	<div ref="toolbar" class="dhx-container--menu"></div>
</template>

<script>
import fromCDN from "from-cdn";
export default {
	name: "ToolbarCdn",
	data: () => ({
    toolbar: null
  }),
  mounted() {
    fromCDN([
      "https://cdn.dhtmlx.com/suite/edge/suite.js",
      "https://cdn.dhtmlx.com/suite/edge/suite.css",
    ]).then(() => {
      // eslint-disable-next-line no-undef
      this.toolbar = new dhx.Toolbar(this.$refs.toolbar, {
				css: "dhx_widget--bordered dhx_widget--bg_white",
        navigationType: "pointer",
      });
      this.toolbar.data.load("https://dhtmlx.github.io/react-widgets/static/toolbar.json");
    })
  },
  beforeDestroy() {
		if (this.toolbar) {
      this.toolbar.destructor();
    }
	}
}
</script>
