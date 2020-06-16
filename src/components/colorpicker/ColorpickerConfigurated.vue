<template>
	<div ref="colorpicker"></div>
</template>

<script>
import { Colorpicker as ColorpickerDHX } from "dhx-suite";
export default {
	name: "ColorpickerConfigurated",
	data: () => ({
    colorpicker: null
	}),
	props: {
		options: {
			type: Object,
			required: true
		}
	},
  mounted() {
    this.colorpicker = new ColorpickerDHX(this.$refs.colorpicker, {
      ...this.options
    });
  },
  beforeDestroy() {
		if (this.colorpicker) {
      this.colorpicker.destructor();
    }
	}
}
</script>
