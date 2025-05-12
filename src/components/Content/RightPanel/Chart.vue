<script>
import { Chart } from "@dhx/trial-suite";
import { getData } from "../../../data";

export default {
  data() {
    const { chartData } = getData();
    return { chartData };
  },

  mounted() {
    this.chart = new Chart(this.$refs.chart_container, {
      data: this.chartData,
      type: "pie",
      series: [
        {
          value: "value",
          // monochrome: "#0288D1",
          color: "color",
          opacity: "opacity",
          text: "month",
          stroke: "var(--dhx-background-primary)",
          strokeWidth: 0
        }
      ],
      legend: {
        values: {
          id: "value",
          text: "id",
          color: "color"
        },
        // monochrome: "#0288D1",
        align: "right",
        valign: "middle",
        width: 30
      }
    });
  },

  unmounted() {
    this.chart?.destructor();
  }
};
</script>

<template>
  <div ref="chart_container" class="container"></div>
</template>
