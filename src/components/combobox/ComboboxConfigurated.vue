<template>
	<div ref="combobox" style="width: 400px"></div>
</template>

<script>
import { Combobox as ComboboxDHX } from "dhx-suite";
export default {
	name: "ComboboxConfigurated",
	data: () => ({
    combobox: null
	}),
	props: {
		options: {
			type: Object,
			required: true
		}
	},
  mounted() {
    this.combobox = new ComboboxDHX(this.$refs.combobox, {
      ...this.options
    });

    this.combobox.data.load("https://dhtmlx.github.io/react-widgets/static/combobox.json");
  },
  beforeDestroy() {
		if (this.combobox) {
      this.combobox.destructor();
    }
	}
}
</script>
