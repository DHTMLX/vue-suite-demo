<template>
	<div ref="form"></div>
</template>

<script>
import { Form as FormDHX } from "dhx-suite";
export default {
	name: "FormConfigurated",
	data: () => ({
    form: null
	}),
	props: {
		options: {
			type: Object,
			required: true
		}
	},
  mounted() {
    this.form = new FormDHX(this.$refs.form, {
      ...this.options
    });
  },
  beforeDestroy() {
		if (this.form) {
      this.form.destructor();
    }
	}
}
</script>
