<template>
	<section style="width: 600px">
		<div ref="chart"></div>
	</section>
</template>

<script>
import { Chart as ChartDHX } from "dhx-suite";
export default {
	name: "ChartConfigurated",
	data: () => ({
    chart: null
	}),
	props: {
		options: {
			type: Object,
			required: true
		}
	},
  mounted() {
    this.chart = new ChartDHX(this.$refs.chart, {
      ...this.options
    });

    this.chart.data.load("https://dhtmlx.github.io/react-widgets/static/chart.json");
  },
  beforeDestroy() {
		if (this.chart && this.chart.destroy) {
      this.chart.destroy();
    }
	}
}
</script>


