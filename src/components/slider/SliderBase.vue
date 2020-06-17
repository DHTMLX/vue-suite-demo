<template>
  <div ref="slider" style="width: 400px;"></div>
</template>

<script>
import { Slider as SliderDHX } from "dhx-suite";
export default {
  name: "SliderBase",
  data: () => ({
    slider: null,
  }),
  mounted() {
    this.slider = new SliderDHX(this.$refs.slider, {});
  },
  beforeDestroy() {
    if (this.slider) {
      this.slider.destructor();
    }
  },
};
</script>
