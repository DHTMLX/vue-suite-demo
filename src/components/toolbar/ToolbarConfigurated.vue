<template>
	<div ref="toolbar" class="dhx-container--menu"></div>
</template>

<script>
import { Toolbar as ToolbarDHX } from "dhx-suite";
export default {
	name: "toolbarConfigurated",
	data: () => ({
    toolbar: null
	}),
	props: {
		options: {
			type: Object,
			required: true
		}
	},
  mounted() {
    this.toolbar = new ToolbarDHX(this.$refs.toolbar, {
      ...this.options
    });

    this.toolbar.data.load("https://dhtmlx.github.io/react-widgets/static/toolbar.json");
  },
  beforeDestroy() {
		if (this.toolbar) {
      this.toolbar.destructor();
    }
	}
}
</script>
