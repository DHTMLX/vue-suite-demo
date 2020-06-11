<template>
	<div ref="colorpicker"></div>
</template>

<script>
import fromCDN from "from-cdn";
export default {
	name: "ColorpickerCdn",
	data: () => ({
    colorpicker: null
  }),
  async mounted() {
    await fromCDN([
      "https://cdn.dhtmlx.com/suite/edge/suite.js",
      "https://cdn.dhtmlx.com/suite/edge/suite.css",
    ]).then(() => {
      // eslint-disable-next-line no-undef
      this.colorPicker = new dhx.Colorpicker(this.$$refs.colorpicker, { grayShades: true });
    })
  },
  beforeDestroy() {
		if (this.colorpicker && this.colorpicker.destroy) {
      this.colorpicker.destroy();
    }
	}
}
</script>
