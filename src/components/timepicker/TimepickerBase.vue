<template>
	<div ref="timepicker"></div>
</template>

<script>
import { Timepicker as TimepickerDHX } from "dhx-suite";
export default {
  name: "TimepickerBase",
  data: () => ({
    timepicker: null
  }),
  mounted() {
    this.timepicker = new TimepickerDHX(this.$refs.timepicker, {
      css: "dhx_widget--bordered",
    });
  },
  beforeDestroy() {
		if (this.timepicker) {
      this.timepicker.destructor();
    }
	}
}
</script>
