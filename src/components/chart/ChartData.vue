<template>
  <section style="width: 600px; height: 400px">
    <div class="dhx-container--button">
      <button @click="handleClick('reset')" class="custom-button">Reset</button>
      <button @click="handleClick('remove')" class="custom-button">Remove first item</button>
    </div>
    <div ref="chart"></div>
  </section>
</template>

<script>
import { Chart as ChartDHX, DataCollection} from "dhx-suite";
export default {
  name: "ChartData",
  data: () => ({
    data: new DataCollection(),
    chart: null
  }),
  methods: {
    handleClick(action) {
      if (action === "reset") {
        this.data.removeAll();
        this.data.load("https://dhtmlx.github.io/react-widgets/static/chart.json");
      }
      else if (action === "remove") {
        this.data.remove(this.data.getId(0));
      }
    }
  },
  mounted() {
    this.chart = new ChartDHX(this.$refs.chart, {
      type: "bar",
      data: this.data,
      scales: {
        bottom: {
          text: 'month',
        },
        left: {
          maxTicks: 10,
          max: 100,
          min: 0,
        },
      },
      series: [
        {
          id: 'A',
          value: 'company C',
          color: '#5E83BA',
          pointType: 'circle',
          fill: '#5E83BA',
          barWidth: 35,
        },
      ],
    });

    this.data.load("https://dhtmlx.github.io/react-widgets/static/chart.json");
  },
  beforeDestroy() {
		if (this.chart) {
      this.chart.destructor();
    }
	}
}
</script>
