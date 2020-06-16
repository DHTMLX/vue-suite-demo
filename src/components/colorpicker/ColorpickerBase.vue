<template>
	<div ref="colorpicker"></div>
</template>

<script>
import { Colorpicker as ColorpickerDHX } from "dhx-suite";
export default {
  name: "ColorpickerBase",
  data: () => ({
    colorpicker: null
  }),
  mounted() {
    this.colorpicker = new ColorpickerDHX(this.$refs.colorpicker);
  },
  beforeDestroy() {
		if (this.colorpicker) {
      this.colorpicker.destructor();
    }
	}
}
</script>
