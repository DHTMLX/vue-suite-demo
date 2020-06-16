<template>
	<div ref="tree" class="dhx-container--tree"></div>
</template>

<script>
import { Tree as TreeDHX } from "dhx-suite";
export default {
	name: "TreeConfigurated",
	data: () => ({
    tree: null
	}),
	props: {
		options: {
			type: Object,
			required: true
		}
	},
  mounted() {
    this.tree = new TreeDHX(this.$refs.tree, {
      ...this.options
    });

    this.tree.data.load("https://dhtmlx.github.io/react-widgets/static/tree.json");
  },
  beforeDestroy() {
		if (this.tree) {
      this.tree.destructor();
    }
	}
}
</script>
