<template>
	<div ref="slider" style="width:400px"></div>
</template>

<script>
import { Slider as SliderDHX } from "dhx-suite";
export default {
	name: "SliderConfigurated",
	data: () => ({
    slider: null
	}),
	props: {
		options: {
			type: Object,
			required: true
		}
	},
  mounted() {
    this.slider = new SliderDHX(this.$refs.slider, {
      ...this.options
    });
  },
  beforeDestroy() {
		if (this.slider) {
      this.slider.destructor();
    }
	}
}
</script>
