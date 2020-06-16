<template>
	<div ref="timepicker"></div>
</template>

<script>
import { Timepicker as TimepickerDHX } from "dhx-suite";
export default {
	name: "TimepickerConfigurated",
	data: () => ({
    timepicker: null
	}),
	props: {
		options: {
			type: Object,
			required: true
		}
	},
  mounted() {
    this.timepicker = new TimepickerDHX(this.$refs.timepicker, {
      ...this.options
    });
  },
  beforeDestroy() {
		if (this.timepicker) {
      this.timepicker.destructor();
    }
	}
}
</script>
