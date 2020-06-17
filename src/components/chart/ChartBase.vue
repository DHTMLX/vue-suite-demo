<template>
  <section style="width: 600px">
		<div ref="chart"></div>
	</section>
</template>

<script>
import { Chart as ChartDHX } from "dhx-suite";
export default {
  name: "ChartBase",
  data: () => ({
    chart: null
  }),
  mounted() {
    this.chart = new ChartDHX(this.$refs.chart, {
      type: "bar",
      scales: {
        bottom: {
          text: "month",
        },
        left: {
          maxTicks: 10,
          max: 100,
          min: 0,
        },
      },
      series: [
        {
          id: "A",
          value: "company C",
          color: "#5E83BA",
          pointType: "circle",
          fill: "#5E83BA",
          barWidth: 35,
        },
      ],
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
