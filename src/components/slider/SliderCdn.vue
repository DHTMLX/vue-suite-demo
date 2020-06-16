<template>
	<div ref="slider" style="width:400px"></div>
</template>

<script>
import fromCDN from "from-cdn";
export default {
	name: "SliderCdn",
	data: () => ({
    slider: null
  }),
  mounted() {
    fromCDN([
      "https://cdn.dhtmlx.com/suite/edge/suite.js",
      "https://cdn.dhtmlx.com/suite/edge/suite.css",
    ]).then(() => {
      // eslint-disable-next-line no-undef
      this.slider = new dhx.Slider(this.$refs.slider, {});
    })
  },
  beforeDestroy() {
		if (this.slider) {
      this.slider.destructor();
    }
	}
}
</script>
