<template>
	<section style="width: 600px">
		<div ref="chart"></div>
	</section>
</template>

<script>
import fromCDN from "from-cdn";
export default {
	name: "ChartCdn",
	data: () => ({
    chart: null
  }),
  mounted() {
    fromCDN([
      "https://cdn.dhtmlx.com/suite/edge/suite.js",
      "https://cdn.dhtmlx.com/suite/edge/suite.css",
    ]).then(() => {
      // eslint-disable-next-line no-undef
      this.chart = new dhx.Chart(this.$refs.chart, {
        type: "line",
				scales: {
					"bottom": {
						text: "month"
					},
					"left": {
						maxTicks: 10,
						max: 100,
						min: 0
					}
				},
				series: [
					{
						id: "A",
						value: "company C",
						color: "#5E83BA",
						pointType: "circle",
						fill: "#5E83BA",
						barWidth: 35
					}
				]
      });
      this.chart.data.load("https://dhtmlx.github.io/react-widgets/static/chart.json");
    })
  },
  beforeDestroy() {
		if (this.chart) {
      this.chart.destructor();
    }
	}
}
</script>
