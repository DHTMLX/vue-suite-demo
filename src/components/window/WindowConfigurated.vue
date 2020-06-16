<template>
	<div>
		<div ref="window"></div>
		<button className="button" @click="window.show()" class="custom-button">
				Show Window
		</button>
	</div>
</template>

<script>
import { Window } from "dhx-suite";
export default {
	name: "WindowConfigurated",
	data: () => ({
    window: null
	}),
	props: {
		options: {
			type: Object,
			required: true
		}
	},
  mounted() {
    this.window = new Window({
			...this.options
    });
  },
  beforeDestroy() {
		if (this.window) {
      this.window.destructor();
    }
	}
}
</script>
